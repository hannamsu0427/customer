var itsp = itsp ? itsp : {};
itsp.com = itsp.com ? itsp.com : {};

/** IE8 호환 시작 ****/
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (elt /*, from*/) {
		var len = this.length >>> 0;
		var from = Number(arguments[1]) || 0;
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if (from < 0) from += len;
		
		for (; from < len; from++) {
			if (from in this && this[from] === elt) return from;
		}
		return -1;
	};
}

if(typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	};
}
/** IE8 호환 끝 ****/

itsp.com.htmlEditors = [];

itsp.com.message = {
	NO_LOGIN : '세션이 종료되었습니다. 다시 로그인해주세요',
	NO_AUTH : '권한이 없습니다.',
	DUP_USER_ID : '아이디가 중복되었습니다.',
	DUP_USER_NAME : '이름이 중복되었습니다.'
};

itsp.com.urlPrefix = '';
itsp.isItsp = false;

itsp.com.isPcUser = function() {
	return !itsp.com.isMobileUser();
};

itsp.com.isMoileUser = function() {
	var check = false;
	(function(a,b){
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
			check = true;
	})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};


itsp.com.isAppUser = function() {
	return (window.navigator.userAgent.indexOf('iWORK') >= 0);
};

itsp.com.isEmptyString = function(str) {
	if ((str == null || typeof str == undefined || str == "undefined" || str == "" ) && str != '0')
		return true;
	return false;
};

itsp.com.isEmptyObject = function(obj) {
	return (obj == null || typeof obj == undefined || obj == "undefined");
};

itsp.com.getStringDefault = function(str, defaultValue) {
	return itsp.com.isEmptyString(str) ? defaultValue : str; 
};

itsp.com.getIntDefault = function(str, defaultValue) {
	try {
		return itsp.com.isEmptyString(str) ? parseInt(defaultValue, 10) : parseInt(str, 10);
	} catch (e) {
		return parseInt(defaultValue, 10);
	}
};

// string과 숫자, boolean이  혼재되어 return되므로 
// 호출하는 쪽에서는 반드시 === false로 비교할 것
itsp.com.getNumericStr = function(str) {
	str = String(str);
	
	var retVal = '';
	if (!itsp.com.isEmptyString(str)) {
		if ($.isNumeric(str)) {
			retVal = parseInt(str, 10);
		}
		else {
			return false;
		}
	}
	
	return retVal;
};


//jquery에서 class 객체의 method로 callback을 받기 위한 함수
//반드시 class 내부에서 makeJQCallback = com.makeJQCallback 
//또는 makeJQCallback : com.makeJQCallback으로 사용할 것
itsp.com.makeJQCallback = function(fnName) {
	console.log('makeJQCallback fnName=['+fnName+']');
	return $.proxy(function(event) {
		console.log('makeJQCallback proxy fnName=['+fnName+']');
		this[fnName](event);
	}, this);
};


itsp.com.windowOpen = function(url, params, options) {
	var defaultParams = {
			fromURL : location.href
	};
		
	var defaultOptions = {
		isFinish : false,
		isBackBtn : false,
		isCloseBtn : true,
		icon : '',
		title : "ITSP",
		exitConfirm : {}
	};

	if (itsp.com.isAppUser()) {
		itspAppPlugin.goNormal(
				url, 
				$.extend(true, {}, defaultParams, params),
				$.extend(true, {}, defaultOptions, options),
				function(result) { /*alert('success='+JSON.stringify(result));*/},  
				function(error) {alert('error='+error); }  
			);
	}
	else {
		window.open(url);
	}
};


//feature는 PC용으로만 사용
itsp.com.windowPopup = function(url, params, options, successCallback, winName, feature) {
	var defaultParams = {
		fromURL : location.href
	};
	
	var defaultOptions = {
		isBackBtn : false,
		isCloseBtn : true,
		icon : '',
		title : "팝업",
		exitConfirm : {}
	};
	
	if (itsp.com.isAppUser()) {
		itspAppPlugin.openPopup(
				url, // 팝업으로 호출할 URL
				$.extend(true, {}, defaultParams, params),
				$.extend(true, {}, defaultOptions, options),
				function(result) {  // 팝업이 닫히면서 전달되는 반환값 
					/* alert('success='+JSON.stringify(result)); */
					if (successCallback) {
						successCallback(result);
					}
				},
				function(error) {alert('error='+error);}  // 에러, 아직 값 전달 없음(미작업)
			);
	}
	else {
		var newUrl = url;
		if (successCallback) {
			itsp.com.popupCallbackId++;
			var popupCallbackId = itsp.com.popupCallbackId; 
			window['popupCallback_'+popupCallbackId] = function(resultObj) {
				successCallback(resultObj);
				// 사용되었으므로 임시 변수를 지운다.
				setTimeout(function() {
					delete window['popupCallback_'+popupCallbackId];
				}, 1000);
			};
			
			if (newUrl.indexOf('?') > 0) {
				newUrl += '&';
			}
			else {
				newUrl += '?';
			}
			
			newUrl += 'popupCallbackId='+popupCallbackId;
		}
		var win = window.open(newUrl, win, feature);
		if (win) {
			win.focus();
		}
	}
};


itsp.com.windowPopupClose = function(resultObj) {
	if (itsp.com.isAppUser()) {
		itspAppPlugin.closePopup(resultObj);
	}
	else {
		try {
			if (opener != null && opener != 'undefined') {
				var popupCallbackId = itsp.com.getStringDefault($('#popupCallbackId').val(), '');
				if (popupCallbackId != '') {
					opener['popupCallback_'+popupCallbackId](resultObj);
				}
			}
			window.close();
		} catch (e) {
			alert(e);
		}
	}
};

itsp.com.callFunction = function(funcObj, param) {
	if (!funcObj) {
		return;
	} 
	
	var target = null;
	var func = null;
	if (typeof funcObj == 'object') {
		target = funcObj.target;
		func = funcObj.func;
		if (typeof target == 'string')
			target = window[target];
	}
	else {
		func = funcObj;
	}

	if (typeof func == 'string') {
		if (target == null) {
			var tempArray = func.split('.');
			var obj = null;
			for (var inx=0; inx<tempArray.length-1;inx++) {
				if (obj) {
					obj = obj[tempArray[inx]];
				}
				else {
					obj = window[tempArray[inx]];
				}
			}
			
			obj[tempArray[tempArray.length-1]].call(obj, param);
		}
		else {
			func.call(target, param);
		}
	}
	else if (typeof func == 'function') {
		func.call(target, param);
	} else if (typeof window[func] == 'function') {
		window[func].call(target, param);
	}
};


itsp.com.round = function(value, point) {
	value = parseFloat(String(value), 10);
	return value.toFixed(point);
};


itsp.com.sortUnique = function sortUnique(arr) {
	arr.sort();
	var lastIndex;
	for (var i=0;i<arr.length;i++) {
		if ((lastIndex = arr.lastIndexOf(arr[i])) !== i) {
			arr.splice(i+1, lastIndex-i);
		}
	}
	return arr;
};


itsp.com.toSpecialChars = function(html) {
	return html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

itsp.com.removeScript = function(html) {
	return html.replace(/<script/g, '&lt;script').replace(/<\/script>/g, '&lt;/script>');
};

itsp.com.getHtmlEditorData = function(id) {
	$('#'+id).val(itsp.com.htmlEditors[id].getData());
	return $('#'+id).val(); 
};

itsp.com.setHtmlEditorData = function(id, data) {
	itsp.com.htmlEditors[id].setData(data);
};

itsp.com.dynamicString = function(str, paramObj) {
	var retStr = str;
	for (var key in paramObj) {
		var regex = new RegExp('{' + key + '}', 'g');
		var value = paramObj[key];
		if (value == null || value == 'null' || value == undefined || value == 'undefined') {
			value = '';
		}
		retStr = retStr.replace(regex, value);
	}
	return retStr;
};


itsp.com.dynamicStringFromTemplateHtml = function(template, paramObj) {
	var templateObj = null;
	if (typeof template == 'string') {
		templateObj = $('#'+template); 
	}
	else {
		templateObj = $(template);
	}
	
	return itsp.com.dynamicString(templateObj.html(), paramObj);
};


itsp.com.dynamicStringFromTemplateText = function(template, paramObj) {
	var templateObj = null;
	if (typeof template == 'string') {
		templateObj = $('#'+template); 
	}
	else {
		templateObj = $(template);
	}
	
	return itsp.com.dynamicString(templateObj.text(), paramObj);
};


itsp.com.getMBCSOnlyLength = function(str) {
    return (escape(str)+'%u').match(/%u/g).length-1;
};

/**
 * 문자열과 바이트 공백의 길이를 구한다.
 * <br />Print Formatter에서 사용한다.
 * @param str 문자열
 * @returns {Number} length
 */
itsp.com.getMBCSLength = function(str) {
    return (str.length + itsp.com.getMBCSOnlyLength(str));
};

/**
 * 문자열의 좌측을 공백으로 Padding 처리한다.
 * @param str 문자열 
 * @param len length
 * @param char 공백을 채울 문자
 * @returns {String} 변경한 문자열
 */
itsp.com.lpadMBCS = function(str, len, char) {
	str = ''+str;
	var mbcsCount = itsp.com.getMBCSOnlyLength(str);
	var strLen = str.length + mbcsCount;
	var retStr = '';
	if (!char) {
		char = ' ';
	}
	
	if (strLen < len) {
		for (var inx=0;inx<len-strLen;inx++) {
			retStr += char;
		}
	}
	retStr += str;
	
	return retStr;
};

/**
 * 문자열의 우측을 공백으로 Padding 처리한다.
 * @param str 문자열 
 * @param len length
 * @param char 공백을 채울 문자
 * @returns {String} 변경한 문자열
 */
itsp.com.rpadMBCS = function(str, len, char) {
	str = ''+str;
	var mbcsCount = itsp.com.getMBCSOnlyLength(str);
	var strLen = str.length + mbcsCount;
	var retStr = '';
	if (!char) {
		char = ' ';
	}

	retStr += str;

	if (strLen < len) {
		for (var inx=0;inx<len-strLen;inx++) {
			retStr += char;
		}
	}
	
	return retStr;
};

itsp.com.getElementType = function(el){
	el = $(el);
	return el[0].tagName.toLowerCase();
};

itsp.com.getInputType = function(el){
	el = $(el);
	if(el[0].tagName.toLowerCase() == 'input'){
		return el.attr('type');
	}
	return null;
};


itsp.com.setURLPrefix = function(urlPrefix) {
	itsp.com.urlPrefix = urlPrefix;
};

itsp.com.getURLPrefix = function() {
	return itsp.com.urlPrefix;
};



itsp.com.blockFormEnterKey = function(form, callback) {
	form = $(form);
	var inputText = form.find('input[type=text], input[type=password]');
	if (inputText.length == 1) {
		inputText.keypress(function(event) {
			if (event.keyCode == 13) {
				if (callback) {
					callback.call(arguments);
				}
				return false;
			}
		});
	}
};


itsp.com.setValue = function(el, value) {
	el = $(el);
	for (var inx=0;inx<el.length;inx++) {
		var obj = $(el);
		var tagName = obj.prop("tagName").toLowerCase();
		
		if (tagName == "input" || tagName == "textarea") {
			var inputType = obj.attr("type").toLowerCase();
			if (inputType == "text" || inputType == "password" || inputType == "hidden" || inputType == "email" || inputType == "number" || inputType == "tel" || inputType == "url" || inputType == "select" || tagName == "textarea")
				obj.val(value);
			else if (inputType == "checkbox" || inputType == "radio") {
 				obj.attr("checked", obj.val() == value);
			}
			else if (inputType == "button") { // button, image ....
				obj.val(value);
			}
			else { // image ...
			}
		} else {
			obj.text(value);
		}
	}
};

itsp.com.goLogin = function() {
	top.location.replace('/logIn.do');
};


/**
 * href="#"을 클릭할 때 화면 스크롤이나 url에 #이 붙는 현상을 없애기 위해 href="javascript:;"으로 변경
 */
itsp.com.changeDummyHref = function(obj) {
	obj = $(obj);
	obj.find('[href=#]').attr('href', 'javascript:;');
};


itsp.com.windowResizeEventInfo = {};
itsp.com.windowResizeEventId = 0;

itsp.com.getWindowResizeEventId = function() {
	return 'wreId_'+(++itsp.com.windowResizeEventId);
};


itsp.com.addWindowResizeEvent = function(callback, paramObj) {
	var eventId = paramObj.attr('data-itsp-window-resize-event-id');
	if (itsp.com.isEmptyObject(itsp.com.windowResizeEventInfo[eventId])) {
		eventId = itsp.com.getWindowResizeEventId(); 
		itsp.com.windowResizeEventInfo[eventId] = { callback : callback, paramObj : paramObj };
		paramObj.attr('data-itsp-window-resize-event-id', eventId);
	}
	
	return eventId;
};


itsp.com.removeWindowResizeEvent = function(paramObj) {
	var eventId = paramObj.attr('data-itsp-window-resize-event-id');
	if (!itsp.com.isEmptyObject(itsp.com.windowResizeEventInfo[eventId])) {
		itsp.com.windowResizeEventInfo[eventId] = null;
		delete itsp.com.windowResizeEventInfo[eventId]; // 변수를 지운다.
	}
};


itsp.com.startWindowResizeEvent = function() {
	$(window).resize(function() {
		for (var eventId in itsp.com.windowResizeEventInfo) {
			itsp.com.windowResizeEventInfo[eventId].callback(
				$('[data-itsp-window-resize-event-id='+itsp.com.windowResizeEventInfo[eventId].paramObj.attr('data-itsp-window-resize-event-id')+']'));
		}
	});
};


itsp.com.textCounter = function(srcObj, counterObj, maxLen) {
	var val = $(srcObj).val();
	var srcLen = val.length;
	
    if (srcLen > maxLen) {
    	srcObj.val(val.substring(0, maxLen));
    }
    else { 
    	counterObj.text(maxLen - srcLen);
    }
};


itsp.com.htmlEditorDispLength = function(objId, event) {
	try {
		// event는 없을 수 있음
		var obj = $('#'+objId);
		var maxlength = obj.attr('maxlength');
		if (itsp.com.isEmptyString(maxlength)) {
			return;
		}

		var editor = itsp.com.htmlEditors[objId]; 
		var dispEl = $('#'+objId+'_dispLen');
		var text = editor.getData();
		var textLen = text.length;
		dispEl.text(textLen +' / '+maxlength);
		if (textLen > maxlength) {
			alert(maxlength+' 자까지 입력할 수 있습니다.');
			/**
			var oldText = itsp.com.getStringDefault(obj.attr('oldText'), '');
			editor.setData(oldText);
			dispEl.text(oldText.length +' / '+maxlength);
			***/
			return;
		}
		
		// obj.attr('oldText', text);
	} catch (e) {
		// console.log(e);
	}
};


itsp.com.bindHtmlEditor = function(root) {
	try {
		if (itsp.com.isEmptyObject(CKEDITOR)) {
			return;
		}
	} catch (e) { return; }

	var editorObjArray = [];
	var theme;
	var color;
	root = $(root);
	if (root.length > 0) {
		editorObjArray = root.find('[data-itsp-html-editor]');
	}
	else {
		editorObjArray = $('[data-itsp-html-editor]');
	}

	if (editorObjArray.length == 0) {
		return;
	}
	
	var ckeditor_config = {
		enterMode : CKEDITOR.ENTER_BR , // 엔터키를 <br> 로 적용함.
		shiftEnterMode : CKEDITOR.ENTER_P ,  // 쉬프트 +  엔터를 <p> 로 적용함.
		toolbarCanCollapse : true , 
		allowedContent : true, // html tag의 attribute들이 유지되게 함. html tag 일부만 허용하게 할 수도 있음, false이면 ul, li의 bullet도 표시되지 않을 뿐만 아니라 li를 없애 버림
		removePlugins : "elementspath", // DOM 출력하지 않음
		filebrowserUploadUrl: '/file/ckFileUpload.do', // 파일 업로드를 처리 할 경로 설정.
		contentsCss : ['/css/style.css'],
		// 에디터에 사용할 기능들 정의
		toolbar : [
			[ 'Source', '-' , 'NewPage', 'Preview' ],
			[ 'Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo' ],
			[ 'Bold', 'Italic', 'Underline', 'Strike'/*, 'Subscript', 'Superscript'*/],
			[ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ],
			[ 'Styles', 'Format', 'Font', 'FontSize' ],
			[ 'TextColor', 'BGColor' ],
			[ 'Image'/*, 'Flash'*/, 'Table' , 'SpecialChar' , 'Link', 'Unlink']
		]};
	
	for (var editorIdx=0;editorIdx<editorObjArray.length;editorIdx++) {
		var obj = $(editorObjArray[editorIdx]);
		var objId = obj.attr('id');
		var width = obj.attr('data-itsp-html-editor-width');
		var height = obj.attr('data-itsp-html-editor-height');
		if (!itsp.com.htmlEditors[objId]) {
			if (!itsp.com.isEmptyString(height)) {
				ckeditor_config.height = height;
			}
			else {
				delete ckeditor_config.height;
			}
			
			if (!itsp.com.isEmptyString(width)) {
				ckeditor_config.width = width;
			}
			else {
				delete ckeditor_config.width;
			}
			
			itsp.com.htmlEditors[objId] = CKEDITOR.replace( objId , ckeditor_config );
			itsp.com.htmlEditorDispLength(objId);
			itsp.com.htmlEditors[objId].on('key', function(event) { itsp.com.htmlEditorDispLength(objId, event); } );
		}
	}
};


itsp.com.removeHtmlEditor = function(objId) {
	itsp.com.htmlEditors[objId].destroy();
	itsp.com.htmlEditors[objId] = null;
	delete itsp.com.htmlEditors[objId]; 
};

itsp.com.removeHtmlEditorAll = function(root) {
	var editorArray = [];
	if (root) {
		editorArray = root.find('[data-itsp-html-editor]');
	}
	else {
		editorArray = $('[data-itsp-html-editor]');
	}
	
	for (var inx=0;inx<editorArray.length;inx++) {
		var obj = $(editorArray[inx]);
		itsp.com.removeHtmlEditor(obj.attr('id'));
	}
};

itsp.com.bindFileDeleteLink = function() {
	$('[data-itsp-file-delete-link]').click(function(event) {
		if (!confirm("첨부파일을 삭제 하시겠습니까?\n삭제 된 첨부파일은 복구할 수 없습니다.")) {
			return;
		}
		
		var me = $(this);
		var FILE_IDX = me.attr('data-itsp-file-delete-link');
		itsp.ajax.doPostJSON('/AttachFile/deleteFileProc', { seq : FILE_IDX }, function(data) {
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				alert("삭제 완료 했습니다.");
				location.reload();
			} else {
				alert(data.header.message);
				// 화면 이동 없음
			}
		});
	});
};



itsp.com.bindDupMemberIdCheckLink = function() {
	$('[data-itsp-dup-memberId-check-link]').click(function(event) {
		var me = $(this);
		itsp.ajax.checkDupId($('#ID'));
	});
	
	$('[data-itsp-dup-email-check-link]').click(function(event) {
		var me = $(this);
		itsp.ajax.checkDupEmail($('#EMAIL'));
	});
	
	$('[data-itsp-dup-stap-email-check-link]').click(function(event) {
		var me = $(this);
		itsp.ajax.checkDupEmailStep($('#EMAIL'));
	});
};

itsp.com.bindIdKeyup = function() {
	$('[data-itsp-type-id]').keyup(function() {
		var me = $(this);
		var strReg = /^[A-Za-z0-9]+$/; 
		
		if (!strReg.test(me.val()) ) {
			me.val("");
		}
	});
};

itsp.com.bindLogoutLink = function() {
	$('[data-itsp-myInfo-logout-link]').click(function(event) {
		if (!confirm("로그아웃하시겠습니까?")) {
			return;
		}
		location.href = '/logOutProc.do';
	});
	
	$('[data-itsp-admin-logout-link]').click(function(event) {
		if (!confirm("로그아웃하시겠습니까?")) {
			return;
		}
		location.href = '/admin/logOutProc.do';
	});
};

itsp.com.bindMyInfoEditLink = function() {
	$('[data-itsp-myInfo-edit-link]').click(function(event) {
		var me = $(this);
		var seq = me.attr('data-itsp-myInfo-edit-link');
		location.href = '/myPage/edit.do';
	});
};

itsp.com.bindWinCloseLink = function() {
	$(document).on('click', '[data-itsp-win-close-link]', function(event) {
		var me = $(this);
		var confirmMsg = me.attr('data-itsp-win-close-link');
		if (!itsp.com.isEmptyString(confirmMsg) && !confirm(confirmMsg)) {
			return;
		}
		
		window.close();
	});
};



itsp.com.setAnchorLinkStyle = function() {
	$('a').css("cursor", "pointer");
	$('a.noPointer').css("cursor", "default");
};

itsp.com.setDocTypeStyle = function() {
	 $('.excel,.vnd.ms-excel,.x-excel,.x-msexcel,.vnd.openxmlformats-officedocument.spreadsheetml.sheet').attr("class", "file-file-excel-o");
	 $('.mspowerpoint,.powerpoint,.vnd.ms-powerpoint,.x-mspowerpoint,.vnd.openxmlformats-officedocument.presentationml.presentation').attr("class", "file-file-powerpoint-o");
	 $('.pdf').attr("class", "file-file-pdf-o");
	 $('.haansofthwp,.x-hwp,.hangul').attr("class", "file-file-hwp");
	 $('.bmp,.jpeg,.x-png,.png,.gif').attr("class", "file-file-image-o");
	 $('.msword,.vnd.openxmlformats-officedocument.wordprocessingml.document').attr("class", "file-file-word-o");
	 $('.quicktime, .x-msvideo, .x-ms-wmv, .vnd.mpegurl, .vnd.objectvideo, .vnd.sealed.mpeg1, .vnd.sealed.mpeg4, .vnd.sealed.swf, .vnd.sealedmedia.softseal.mov, .vnd.vivo, .x-sgi-movie, .x-msvideo, .mpeg, .mp4').attr("class", "file-file-movie-o");
};

itsp.com.emailInit = function() {
	var setEmailForm = function() {
		var emailDomailList = [ "naver.com", "nate.com", "gmail.com", "daum.net"];
		$('.email').children().remove();
		$('.email').append("<option value=''>직접입력</option>");
		for (var i = 0; i < emailDomailList.length; i++) {
			var domain = emailDomailList[i];
			var op = "<option value='" + domain + "' ";
			if ($('.email').attr('selected_item') == domain) {
				op += " selected='selected' ";
			}
			op += " >" + domain + "</option>";
			$('.email').append(op);
		}
	};
	
	var setEmail = function() {
		$('input[name="EMAIL"]').val($('input[name="email1"]').val() + "@" + $('input[name="domain1"]').val());
	};
	/*setEmailForm();*/
	$('.email').change(function() {
		var domainEl = $('input[name=domain1]');
		$('.set_email').each(function(i) {
			if (i == 1) {
				domainEl = $(this);
			}
		});

		if ($(this).val() == "") {
			$(domainEl).val("");
			$(domainEl).attr("type", "text");
			$(domainEl).focus();
		} else {
			$(domainEl).attr("type", "hidden");
			$(domainEl).val($(this).val());
		}
		setEmail();
	});

	$('.set_email').change(function() {
		setEmail();
	});
	
	$('input[name="email1"]').change(function() {
		setEmail();
	});
	
	$('input[name="domain1"]').change(function() {
		setEmail();
	});
};

itsp.com.mTelInit = function() {
	var setMtel = function() {
		$('input[name="mTel"]').val($('#mtel1').val() + "-" + $('#mtel2').val() + "-" + $('#mtel3').val());
	};

	$('select[name="mtel1"]').change(function() {
		setMtel();
	});
	$('input[name="mtel2"]').change(function() {
		setMtel();
	});
	$('input[name="mtel3"]').change(function() {
		setMtel();
	});
};

itsp.com.telInit = function() {
	var setTel = function() {
		$('input[name="tel"]').val($('#tel1').val() + "-" + $('#tel2').val() + "-" + $('#tel3').val());
	};

	$('select[name="tel1"]').change(function() {
		setTel();
	});
	$('input[name="tel2"]').change(function() {
		setTel();
	});
	$('input[name="tel3"]').change(function() {
		setTel();
	});
};

itsp.com.dateInit = function() {
	var d = new Date();
	year = d.getFullYear();
	year = year - 1;
	$('select[name="theYear"]').children().remove();
	$('select[name="theYearList"]').children().remove();
	for (var i = 0; i < 2; i++) {
		var op = "<option value='" + (year + i) + "' ";
		if (i == 1)
			op += " selected='selected' ";

		op += " >" + (year + i) + "</option>";

		$('select[name="theYear"]').append(op);
		$('select[name="theYearList"]').append(op);
	}

	month = d.getMonth();
	$('select[name="theMonth"]').children().remove();
	$('select[name="theMonthList"]').children().remove();
	for (var i = 1; i < 13; i++) {
		
		var prefix = "0";
		
		if(i > 9)prefix = "";
		
		var op = "<option value='" + prefix+i + "' ";
		if (i == (month + 1))
			op += " selected='selected' ";
		op += " >" + prefix+i + "월 </option>";
	
		$('select[name="theMonth"]').append(op);
		$('select[name="theMonthList"]').append(op);
	}
};

itsp.com.imeInit = function() {
	$("input .ko").css("ime-mode:active"); // 입력시 default로 한글 입력
	$("input .en").css("ime-mode:inactive"); // 입력시 default로 영문 입력
	$("input .en_only").css("ime-mode:disabled"); // 입력시 영문만 입력 한글입력 안됨
};

itsp.com.allCheckBoxInit = function() {
	$("#allChkBox").click(function(){ 
		if($("#allChkBox").prop("checked")) {
			$("input[type=checkbox]").prop("checked",true);
		} else {
			$("input[type=checkbox]").prop("checked",false); 
		}
	});
};


itsp.com.init = function(isItsp, callback, callbackParam) {
	if (isItsp) {
		itsp.com.setURLPrefix('/itsp');
		itsp.com.isItsp = isItsp;
	}

	itsp.ajax.init();
	itsp.calendar.init();
	
	itsp.com.changeDummyHref('body');
	itsp.com.setAnchorLinkStyle();
	itsp.com.bindDupMemberIdCheckLink();
	itsp.com.bindWinCloseLink();
	itsp.com.bindIdKeyup();
	itsp.com.setDocTypeStyle();
	itsp.com.emailInit();
	itsp.com.mTelInit();
	itsp.com.telInit();
	itsp.com.dateInit();
	itsp.com.imeInit();
	
	$(window).resize(itsp.com.startWindowResizeEvent);
	window.scrollTo(0, 1);
	
	itsp.com.bindHtmlEditor();
	itsp.com.bindFileDeleteLink();
	
	itsp.com.bindLogoutLink();
	itsp.com.bindMyInfoEditLink();
	itsp.com.allCheckBoxInit();
	
	if (callback && typeof callback == "function") {
		callback(callbackParam);
	}
};
