var itsp = itsp ? itsp : {};
if (!itsp.popup) itsp.popup = {};

itsp.popup.popupTempId = 0;

itsp.popup.newTempId = function() {
	return ++itsp.popup.popupTempId;
};

itsp.popup.getMaskId = function(obj) {
	var obj = $(obj);
	return 'winPopupMask_'+obj.attr('data-itsp-popup-temp-Id');
};


itsp.popup.makeMask = function(maskId, popupClass) {
	var maskObj = $('<div>');
	maskObj.addClass('popupMask');
	if (!itsp.com.isEmptyString(popupClass)) {
		maskObj.addClass(popupClass);
	}
	maskObj.attr('id', maskId);
	maskObj.hide();
	$('body').append(maskObj);
	return maskObj;
};

itsp.popup.makePopup = function(obj, popupClass) {
	var isNew = false;
	obj = $(obj);
	var tempId = obj.attr('data-itsp-popup-temp-Id');
	if (itsp.com.isEmptyString(tempId)) {
		tempId = itsp.popup.newTempId();
		obj.attr('data-itsp-popup-temp-Id', tempId);
	}

	var maskId = itsp.popup.getMaskId(obj);
	var maskObj = $('#'+maskId);

	if (maskObj.length == 0) {
		maskObj = itsp.popup.makeMask(maskId, popupClass);
		isNew = true;
	}

	return isNew;
};


itsp.popup.center = function(obj) {
	var obj = $(obj);

	var objWidth = obj.width();
	var objHeight = obj.height();

	var winWidth = $(window).width();
	var winHeight = $(window).height();

	/*
	var top = (winHeight - objHeight) / 2 + $('body').scrollTop() ;
	var left = (winWidth - objWidth) / 2 + $('body').scrollLeft() ;
	obj.css({ top : top+'px', left : left+'px'});
	*/
	obj.css({ top : '50%', left : '50%', position: 'fixed'});


};


itsp.popup.resize = function(obj) {
	var obj = $(obj);
	var maskObj = $('#'+itsp.popup.getMaskId(obj));

	obj.height('auto');
	var winHeight = $(window).height();
	var objHeight = obj.height();
	var objMaxHeight = winHeight * 0.9;
	var objHeadHeight = 0;
	var objHead = obj.find('.boxes_head');
	if (objHead.length > 0) {
		objHeadHeight = objHead.height();
	}

	var maskHeight = Math.max(winHeight, $('html').outerHeight());
	maskObj.height(maskHeight+'px');
	maskObj.show();
	if (objHeight > objMaxHeight - objHeadHeight) {
		objHeight = objMaxHeight - objHeadHeight;
	}

	obj.css('max-height', objMaxHeight+'px');
	obj.css('height', objHeight+'px');
	obj.css({ 'z-index' : parseInt(maskObj.css('z-index'))+1 });
	itsp.popup.center(obj);
	obj.show();
};


itsp.popup.show = function(obj) {
	var obj = $(obj);
	obj.attr('data-itsp-is-hiding', 'N');
	var isNew = itsp.popup.makePopup(obj);

	itsp.com.changeDummyHref(obj);

	var show = function() {
		if (obj.attr('data-itsp-is-hiding') == 'Y') {
		}
		else {
			itsp.popup.resize(obj);
		}
	};

	if (isNew) { // 화면에 표시할 준비 시간이 필요하다.(특히 모바일)
		setTimeout(show, 200);
	}
	else {
		show();
	}

	itsp.com.addWindowResizeEvent(itsp.popup.resize, obj);
};


itsp.popup.hide = function(obj) {
	var obj = $(obj);
	var maskId = itsp.popup.getMaskId(obj);
	itsp.com.removeWindowResizeEvent(obj);
	obj.attr('data-itsp-is-hiding', 'Y');
	obj.hide();
	$('#'+maskId).hide();
};