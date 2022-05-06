var itsp = itsp ? itsp : {};
if (!itsp.validator) itsp.validator = {};


itsp.validator.getTitle = function(el) {
	el = $(el);
	return el.attr('data-itsp-title');
};

itsp.validator.validateRequired = function(el) {
	el = $(el);
	
	var tagName = itsp.com.getElementType(el);
	var inputType = itsp.com.getInputType(el);
	var isHtmlEditor = false;
	var flag = true;
	var focusId = '';

	if (tagName == 'textarea') {
		if (el.is('[data-itsp-html-editor]')) {
			var id = el.attr('id');
			if (itsp.com.isEmptyString(itsp.com.getHtmlEditorData(id).trim())) {
				isHtmlEditor = true;
				focusId = id;
				flag = false;
			}
		}
		else if (itsp.com.isEmptyString(el.val().trim())) {
			flag = false;
		}
	}
	else { // if (tagName == 'input') 
		if (inputType == 'radio') {
			var name = el.attr('name');
			var form = $('input[name='+name+']').closest("form");
			if (form.find('input:radio[name='+name+']:checked').length == 0) {
				flag = false;
			}
		}
		else if (inputType == 'checkbox') {
			var name = el.attr('name');
			var form = $('input[name='+name+']').closest("form");
			if (form.find('input:checkbox[name='+name+']:checked').length == 0) {
				flag = false;
			}
		}
		else {
			if (itsp.com.isEmptyString(el.val().trim())) {
				flag = false;
			}
		}
	}
	
	if (flag == false) {
		var msg = el.attr('data-itsp-required');
		if (itsp.com.isEmptyString(msg)) {
			alert(itsp.validator.getTitle(el) + '은(는) 필수항목입니다.');
		}
		else {
			alert(msg);
		}
		
		if (itsp.com.isEmptyString(focusId)) {
			focusId = el.attr('data-itsp-focus-id');
		}

		if (!itsp.com.isEmptyString(focusId)) {
			if (isHtmlEditor) {
				itsp.com.focusHtmlEditor(focusId);
			}
			else {
				$('#'+focusId).focus();
			}
		}
		else {
			el.focus();
		}
	}
	return flag;
};

itsp.validator.validateEmail = function(el) {
	el = $(el);
	var email = el.val().trim();
	if(!itsp.com.isEmptyString(email)){
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(emailReg.test(email)){
			return true;
		}

		alert(itsp.validator.getTitle(el) + '의 형식이 맞지 않습니다.');
		var focusId = el.attr('data-itsp-focus-id');
		if (!itsp.com.isEmptyString(focusId)) {
			$('#'+focusId).focus();
		}
		else {
			el.focus();
		}
		return false;
	}

	return true;
};


itsp.validator.validateDupChecked = function(el) {
	el = $(el);
	if(el.attr('data-itsp-dup-checked') != el.val().trim()) {
		alert(itsp.validator.getTitle(el)+' 중복확인을 해주세요.');
		el.focus();
		return false;
	}
	return true;
};


itsp.validator.validateId = function(el) {
	el = $(el);
	var elTitle = itsp.validator.getTitle(el);
	var id = el.val().trim();

	var idRegExp = new RegExp("^[a-z0-9]+$");  
	if (!idRegExp.test(id)) {
		alert(elTitle+'은(는)는 a~z, 0~9만 사용할 수 있습니다.');
		el.focus();
		return false;
	}

	return true;
};

itsp.validator.validateNumber = function(el) {
	el = $(el);
	var elTitle = itsp.validator.getTitle(el);
	var id = el.val().trim();
	if (itsp.com.isEmptyString(id)) {
		return true;
	}
	
	var idRegExp = new RegExp("^[0-9]+$");

	if (!idRegExp.test(id)) {
		alert(elTitle+'은(는)는 숫자만 사용할 수 있습니다.');
		el.focus();
		return false;
	}
	return true;
};


itsp.validator.validatePassword = function(el, confirmEl) {
	el = $(el);
	var val1 = el.val().trim();
	var val2 = '';
	var isConfirmCheck = false;
	var title = itsp.validator.getTitle(el);
	if (!itsp.com.isEmptyString(title)) {
		title = '비밀번호';
	}
	if (!itsp.com.isEmptyObject(confirmEl)) {
		//var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
		var reg = /^(?=.*[a-z])(?=.*[0-9]).*$/;
		if (!reg.test(val1)) {
			//alert(title+'은(는) 숫자, 영소문자, 영대문자 각각 1자 이상 포함되어야 합니다.');
			alert(title+'은(는) 숫자, 영소문자 각각 1자 이상 포함되어야 합니다.');
			return false;
		}
		
		confirmEl = $(confirmEl);
		val2 = confirmEl.val().trim();
		isConfirmCheck = true;
	}

	/**
	if (val1.length < 8){
		alert('비밀번호는 8자이상 입니다.' );
		e1.focus();
		return false;
	}
	***/

	if (isConfirmCheck) {
		if(val1 != val2){
			var confirmTitle = itsp.validator.getTitle(confirmEl);
			if (itsp.com.isEmptyString(confirmTitle)) {
				confirmTitle = '비밀번호 확인';
			}
			alert(confirmTitle+'이(가) 일치하지않습니다.');
			el.focus();
			return false;
		}
	}
	return true;
};


itsp.validator.validateMobilePhoneNo = function(el) {
	el = $(el);
	
	var elTitle = itsp.validator.getTitle(el);
	var mobilePhoneNo = el.val().trim().replace(/-/, '');
	alert(mobilePhoneNo);
	
	var mobilePhoneNoRegExp = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
	if (!mobilePhoneNoRegExp.test(mobilePhoneNo)) {
		alert(elTitle+'이(가) 잘못 되었습니다.');
		el.focus();
		return false;
	}
       
	return true;
};


itsp.validator.validateDate = function(el) {
	el = $(el);
	var elTitle = itsp.validator.getTitle(el);
	var elVal = el.val().trim();
	var dateArray = elVal.split('-');
	if (dateArray.length == 3) {
		try {
			var tempDate = new Date(parseInt(dateArray[0],10), parseInt(dateArray[1],10)-1, parseInt(dateArray[2],10));
			var tempDateStr = itsp.com.lpadMBCS(tempDate.getFullYear(), 4, '0')+'-'+itsp.com.lpadMBCS(tempDate.getMonth()+1, 2, '0')+'-'+itsp.com.lpadMBCS(tempDate.getDate(), 2, '0');
			if (tempDateStr == elVal) {
				return true;
			}
		} catch (e) {
			alert(e);
		}
	}
	
	alert(elTitle+'이(가) 잘못 되었습니다.');
	el.focus();
	return false;
};


itsp.validator.validateLenRange = function(el, afterAlertFunc) {
	el = $(el);
	var elTitle = itsp.validator.getTitle(el);
	var val = el.val().trim();
	var lenArray = el.attr('data-itsp-len-range').split(',');
	var minLen = 0;
	try {
		minLen = parseInt(lenArray[0], 10);
		if (minLen < 0) {
			minLen = 0;
		}
	} catch (e) { }
	
	var maxLen = 0;
	try {
		maxLen = parseInt(lenArray[1], 10);
		if (maxLen < 0) {
			maxLen = 0;
		}
	} catch (e) { }
	
	if (val.length == 0) {
		return true; // data-itsp-required에서 처리할 것
	}

	var ret = true;
	if (minLen > 0 && maxLen > 0 && minLen == maxLen && val.length != minLen) {
		alert(elTitle+'은(는) '+minLen+'자이어야 합니다.');
	}
	else if (minLen > 0 && maxLen > 0 && (val.length < minLen || val.length > maxLen)) {
		alert(elTitle+'은(는) '+minLen+'자 ~ '+maxLen+'자 사이이어야 합니다.');
		ret = false;
	}
	else if (minLen > 0 && val.length < minLen) {
		alert(elTitle+'은(는) '+minLen+'자 이상이어야 합니다.');
		ret = false;
	}
	else if (maxLen > 0 && val.length > maxLen) {
		alert(elTitle+'은(는) '+maxLen+'자 이하이어야 합니다.');
		ret = false;
	}

	if (!ret) {
		if (afterAlertFunc) {
			afterAlertFunc();
		}
		else {
				var focusId = el.attr('data-itsp-focus-id');
				if (!itsp.com.isEmptyString(focusId)) {
					$('#'+focusId).focus();
				}
				else {
					el.focus();
				}
			}
	}
	return ret;
};


itsp.validator.validateGroupSingle = function(el) {
	var el = $(el);

	var groupId = el.attr('data-itsp-required-group-single');
	if (!itsp.com.isEmptyString(groupId)) {
		var groupEls = $('[data-itsp-required-group-single='+groupId+']');
		var isAllEmpty = true;
		var titleArray = [];
		var firstEl = null;
		var checkedTypeArray = ['radio', 'checkbox' ];
		var type = '';
		for (var groupInx=0;groupInx<groupEls.length;groupInx++) {
			var groupEl = $(groupEls[groupInx]);
			if (!firstEl) {
				firstEl = groupEl;
			}
			if (itsp.com.isEmptyString(type)) {
				type = groupEl.attr('type');
			}
			if (checkedTypeArray.indexOf(type) >= 0) {
				if (groupEl.prop('checked')) {
					isAllEmpty = false;
					break;
				}
			}
			else {
				if (!itsp.com.isEmptyString(groupEl.val().trim())) {
					isAllEmpty = false;
					break;
				}
			}
			titleArray.push(itsp.validator.getTitle(groupEl));
		}
		
		if (isAllEmpty == true) {
			if (checkedTypeArray.indexOf(type) >= 0) {
				alert(titleArray.join(', ')+'중에서 하나는 선택되어야 합니다.');
			}
			else {
				alert(titleArray.join(', ')+'중에서 하나는 입력되어야 합니다.');
			}
			firstEl.focus();
			return false;
		}
	}
	
	return true;
};


itsp.validator.validateCompareString = function(el, attrName) {
	var el = $(el);
	var compareEl = $('#'+$(el).attr(attrName));
	if (compareEl.length == 0) {
		return true;
	}
	
	var elVal = el.val();
	var compareElVal = compareEl.val();
	if (itsp.com.isEmptyString(elVal) || itsp.com.isEmptyString(compareElVal)) {
		return true;
	}
	
	elVal = String(elVal);
	compareElVal = String(compareElVal);
	
	var msg = '';
	var result = true; 
	if (attrName == 'data-itsp-compare-string-lt-eq') {
		result = (elVal <= compareElVal);
		msg = '{elTitle}은(는) {compareElTitle}보다 같거나 작아야 합니다.';
		
	}
	else if (attrName == 'data-itsp-compare-string-lt') {
		result = (elVal < compareElVal);
		msg = '{elTitle}은(는) {compareElTitle}보다 작아야 합니다.';
	}

	if (result == false) {
		var elTitle = itsp.validator.getTitle(el);
		var compareElTitle = itsp.validator.getTitle(compareEl);
		alert(itsp.com.dynamicString(msg, { elTitle : elTitle, compareElTitle : compareElTitle }));
		el.focus();
		return false;
	}
	return true;
};

itsp.validator.validateCompareStringLtEq = function(el) {
	return itsp.validator.validateCompareString(el, 'data-itsp-compare-string-lt-eq');
};


itsp.validator.validateCompareStringLt = function(el) {
	return itsp.validator.validateCompareString(el, 'data-itsp-compare-string-lt');
};




itsp.validator.validateCompareInt = function(el, attrName) {
	var el = $(el);
	var compareEl = $('#'+$(el).attr(attrName));
	if (compareEl.length == 0) {
		return true;
	}
	
	var elVal = el.val();
	var compareElVal = compareEl.val();
	if (itsp.com.isEmptyString(elVal) || itsp.com.isEmptyString(compareElVal)) {
		return true;
	}
	
	elVal = parseInt(elVal, 10);
	compareElVal = parseInt(compareElVal,10);
	
	var msg = '';
	var result = true; 
	if (attrName == 'data-itsp-compare-int-lt-eq') {
		result = (elVal <= compareElVal);
		msg = '{elTitle}은(는) {compareElTitle}보다 같거나 작아야 합니다.';
		
	}
	else if (attrName == 'data-itsp-compare-int-lt') {
		result = (elVal < compareElVal);
		msg = '{elTitle}은(는) {compareElTitle}보다 작아야 합니다.';
	}

	if (result == false) {
		var elTitle = itsp.validator.getTitle(el);
		var compareElTitle = itsp.validator.getTitle(compareEl);
		alert(itsp.com.dynamicString(msg, { elTitle : elTitle, compareElTitle : compareElTitle }));
		el.focus();
		return false;
	}
	return true;
};

itsp.validator.validateCompareIntLtEq = function(el) {
	return itsp.validator.validateCompareInt(el, 'data-itsp-compare-int-lt-eq');
};


itsp.validator.validateCompareIntLt = function(el) {
	return itsp.validator.validateCompareInt(el, 'data-itsp-compare-int-lt');
};
