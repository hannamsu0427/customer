var itsp = itsp ? itsp : {};
if (!itsp.ajax) itsp.ajax = {};

itsp.ajax.CODE_SUCCESS = '00';
itsp.ajax.CODE_NO_LOGIN = '90';
itsp.ajax.CODE_NO_AUTH = '91';
itsp.ajax.CODE_DUP_USER_ID = '92';
itsp.ajax.CODE_FAIL = '99';

itsp.ajax.isLoading = false;
itsp.ajax.showLoading = function() {
	if (itsp.ajax.isLoading == true) {
		return;
	}
	
	itsp.ajax.isLoading = true;
	
	var loadingObj = $('#loading');
	
	var show = function() {
		if (itsp.ajax.isLoading == true) {
			itsp.popup.show(loadingObj);
		}
	};

	if (loadingObj.length == 0) {
		// 팝업에서 마스킹하면서 지연되는 부분이 있어서 여기서는 지연하지 않음
		if (itsp.ajax.isLoading == true) {
			itsp.popup.show(loadingObj);
		}

		itsp.popup.show(loadingObj);
	}
	else {
		itsp.popup.show(loadingObj);
	}
};


itsp.ajax.hideLoading = function() {
	itsp.ajax.isLoading = false;
	itsp.popup.hide($('#loading'));
};


itsp.ajax.jsonSuccessHandler = function(data, successCallback) {
	if (data.header.code == itsp.ajax.CODE_NO_LOGIN) {
		itsp.ajax.hideLoading();
		alert(itsp.com.message.NO_LOGIN);
		itsp.com.goLogin();
		return;
	}
	else if (data.header.code == itsp.ajax.NO_AUTH) {
		itsp.ajax.hideLoading();
		alert(itsp.com.message.NO_AUTH);
		return;
	}
	else if (data.header.code == itsp.ajax.CODE_FAIL) {
		itsp.ajax.hideLoading();
		alert(data.header.message);
		return;
	}

	if (successCallback) {
		successCallback(data);
	}
};


itsp.ajax.jsonFailHandler = function(data, failCallback) {
	if (failCallback) {
		failCallback(data);
	}
};


itsp.ajax.jsonErrorHandler = function(jqXHR, textStatus, errorThrown) {
	itsp.ajax.hideLoading();
	var contentType = jqXHR.getResponseHeader("Content-Type");
	alert(contentType);
    if (jqXHR.status == 200 && contentType.toLowerCase().indexOf("text/html") >= 0) {
    	window.location.reload();
    }else{
    	alert('에러=['+textStatus+']['+errorThrown+']');
    }
};


itsp.ajax.formToJSON = function(form) {
	var o = {};
	var a = form.serializeArray();
	for (var inx=0;inx<a.length;inx++) {
		var elm = a[inx];
		if (o[elm.name]) {
			if (!o[elm.name].push) {
				o[elm.name] = [o[elm.name]];
			}
			o[elm.name].push(elm.value || '');
		} else {
			o[elm.name] = elm.value || '';
		}
	}
	return o;
};


itsp.ajax.doJSON = function(url, method, requestParam, successCallback, failCallback) {
	if (!requestParam) {
		requestParam = {};
	}
	
	var options = {};
	options.type = method;
	options.url = url+'.json';
	options.data = JSON.stringify(requestParam);
	options.dataType = 'json';
	if (method == 'POST') {
		options.contentType = 'application/json';
	}
	
	
	options.success = function(data, textStatus, jqXHR) {
		itsp.ajax.jsonSuccessHandler(data, successCallback);
	};
	
	options.error = function(jqXHR, textStatus, errorThrown) {
		/*alert(jqXHR);
		alert(textStatus);
		alert(errorThrown);*/
		itsp.ajax.jsonErrorHandler(jqXHR, textStatus, errorThrown);
	};
	
	$.ajax(options);
};

itsp.ajax.doPostJSON = function(url, requestParam, successCallback, failCallback) {
	itsp.ajax.doJSON(url, 'POST', requestParam, successCallback, failCallback);
};


itsp.ajax.doGetJSON = function(url, requestParam, successCallback, failCallback) {
	itsp.ajax.doJSON(url, 'GET', requestParam, successCallback, failCallback);
};


// post로 보내고 html로 받기
itsp.ajax.doPostJSONHtml = function(url, requestParam, successCallback, failCallback) {
	if (!requestParam) {
		requestParam = {};
	}
	
	var options = {};
	options.type = 'POST';
	options.url = url+'.json';
	options.data = JSON.stringify(requestParam);
	options.dataType = 'html';
	options.contentType = 'application/json';

	options.success = function(data, textStatus, jqXHR) {
		successCallback(data);
	};
	
	options.error = function(jqXHR, textStatus, errorThrown) {
		alert(textStatus);
	};
	
	$.ajax(options);
};


itsp.ajax.doPostFormJSON = function(form, successCallback, failCallback) {
	if (!itsp.formValidator.validate(form)) {
		return;
	}

	try {
		form.ajaxSubmit({
			dataType : "json",
		    beforeSend: function() {
		    	//alert('beforeSend');
		    	/**
		        status.empty();
		        var percentVal = '0%';
		        bar.width(percentVal);
		        percent.html(percentVal);
		        ***/
		    },
		    uploadProgress: function(event, position, total, percentComplete) {
		    	//alert('uploadProgress');
		    	/**
		        var percentVal = percentComplete + '%';
		        bar.width(percentVal);
		        percent.html(percentVal);
		        ***/
		    },
		    success : function(data, textStatus, jqXHR) {
		    	itsp.ajax.jsonSuccessHandler(data, successCallback);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				itsp.ajax.jsonErrorHandler(jqXHR, textStatus, errorThrown);
			}
		}); 
	} catch (e) {
		alert(e);
	}
};

itsp.ajax.checkDupId = function(obj) {
	obj = $(obj);
	var checkId = obj.val().trim();
	if (itsp.com.isEmptyString(checkId)) {
		alert('아이디를 입력하여 주십시오.');
		return;
	}

	itsp.ajax.showLoading();
	itsp.ajax.doPostJSON('/checkDupId', { checkId : checkId },
		function(data) {
			itsp.ajax.hideLoading();
			if (data.header.code == itsp.ajax.CODE_DUP_USER_ID) {
				alert(checkId + '은(는) 이미 등록되어 있어 사용할 수 없습니다.');
			}
			else {
				alert(checkId + '은(는) 사용할 수 있습니다.');
				obj.attr('data-itsp-dup-checked', checkId);
			}
		}
	);
};

itsp.ajax.init = function() {
	// 로딩 이미지 생성 지연 현상을 없애기 위해 미리 만들어 놓는다.
	// 로딩과 로딩 마스크
	var loadingObj = $('<div id="loading" ><img src="/images/common/loading.gif" /></div>');
	loadingObj.hide();
	$('body').append(loadingObj);
	itsp.popup.makePopup(loadingObj, 'loadingMask');
	
};