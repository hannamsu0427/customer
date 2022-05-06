var itsp = itsp ? itsp : {};
if (!itsp.formValidator) itsp.formValidator = {};


itsp.formValidator.isFormElement = function(el) {
	el = $(el);
	
	var returnFlag = false;
	// 입력항목 스캔(input:text, input:hidden, input:password, input:checkbox, input:radio, input:submit, input:button, input:image, input:file, select, textarea)
	if (itsp.com.getElementType(el) == 'input') {
		returnFlag = true;
		// type 별 검사항목
		if (itsp.com.getInputType(el) == 'text') {
		}
		else if (itsp.com.getInputType(el) == 'hidden') {
		}
		else if (itsp.com.getInputType(el) == 'password') {
		}
		else if (itsp.com.getInputType(el) == 'checkbox') {
		}
		else if (itsp.com.getInputType(el) == 'radio') {
		}
		else if (itsp.com.getInputType(el) == 'submit') {
		}
		else if (itsp.com.getInputType(el) == 'button') {
		}
		else if (itsp.com.getInputType(el) == 'image') {
		}
		else if (itsp.com.getInputType(el) == 'file') {
		}
		else if (itsp.com.getInputType(el) == 'date') {
		}
		else if (itsp.com.getInputType(el) == 'tel') {
		}
		else if (itsp.com.getInputType(el) == 'number') {
		}

	}
	else if (itsp.com.getElementType(el) == 'select') {
		returnFlag = true;
	}
	else if (itsp.com.getElementType(el) == 'textarea') {
		returnFlag = true;
	}
	return returnFlag;
};


itsp.formValidator.checkElement = function(el) {
	el = $(el);
	
	// 필수항목 검사
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-required'))) {
		if (!itsp.validator.validateRequired(el)) {
			return false;
		}
	}

	// email항목 검사
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-type-email'))) {
		if (!itsp.validator.validateEmail(el)) {
			return false;
		}
	}

	if (!itsp.com.isEmptyObject(el.attr('data-itsp-type-id'))) {
		if (!itsp.validator.validateId(el)) {
			return false;
		}
	}
	
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-type-number'))) {
		if (!itsp.validator.validateNumber(el)) {
			return false;
		}
	}
/*
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-type-date'))) {
		if (!itsp.validator.validateDate(el)) {
			return false;
		}
	}
*/	
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-type-mobile-phone-no'))) {
		if (!itsp.validator.validateMobilePhoneNo(el)) {
			return false;
		}
	}
	
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-len-range'))) {
		if (!itsp.validator.validateLenRange(el)) {
			return;
		}
	}
	
	// 중복확인검사여부
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-dup-checked'))) {
		if (!itsp.validator.validateDupChecked(el)) {
			return false;
		}
	}

	if (!itsp.com.isEmptyObject(el.attr('data-itsp-type-password'))) {
		if (el.val().length > 0) {
			if (!itsp.validator.validatePassword(el, $('[data-itsp-type-password-confirm='+el.attr('id')+']'))) {
				return false;
			}
		}
	}
	
	// 동일한 그룹 중에서 반드시 하나의 값은 입력 또는 선택되어야 한다.
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-required-group-single'))) {
		if (!itsp.validator.validateGroupSingle(el)) {
			return false;
		}
	}


	// 비교 =< 다른 요소값
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-compare-string-lt-eq'))) {
		if (!itsp.validator.validateCompareStringLtEq(el)) {
			return false;
		}
	}

	// 비교 < 다른 요소값
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-compare-string-lt'))) {
		if (!itsp.validator.validateCompareStringLt(el)) {
			return false;
		}
	}

	// 비교 =< 다른 요소값
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-compare-int-lt-eq'))) {
		if (!itsp.validator.validateCompareIntLtEq(el)) {
			return false;
		}
	}

	// 비교 < 다른 요소값
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-compare-int-lt'))) {
		if (!itsp.validator.validateCompareIntLt(el)) {
			return false;
		}
	}

	if (itsp.com.getInputType(el) == 'file' && !itsp.com.isEmptyObject(el[0]) && !itsp.com.isEmptyObject(el[0].files) && el[0].files.length > 0) {
		var domFile = el[0].files[0];
		var type = domFile.type;
		alert(type);
		var typeErrorNo = 0;
		var size = domFile.size;

		var fileConfirm ="N";
		
		// TODO : html 속성이나 global로 defined해야 함
		var fileSize =$('#attachFileSize').val();
		if("" == fileSize){
			fileSize = "600";
		}
		if (size > Math.round((1024 * 1024) * fileSize)){
			alert(fileSize+'Mb이상은 업로드 할 수 없습니다.');
			return false;
		}
		
		var fileMineType = $('#attachFileType').val();
		if (itsp.com.isEmptyString(type)) {
			var acceptExtArray =  ["pdf" /*"doc", "docx", "ppt", "pptx", "xls", "xlsx", "hwp", "pdf", "bmp", "jpeg", "jpg", "png", "gif", "mp4", "zip"*/];
			for (var extInx=0;extInx<acceptExtArray.length;extInx++) {
				if (ext == acceptExtArray[extInx]) {
					fileConfirm="Y";
					break;
				}
			}
			if (fileConfirm == "N") {
				typeErrorNo = 1;
			}
		}
		else {
			var type1 = type.splitValue("/", 0);
			//alert("type1 :::: " + type1);
			var type2 = type.splitValue("/", 1);
			if ( type1 == "application" || type1 == "image" || type1 == "video") {
				var mimeType = ["excel","vnd.ms-excel","x-excel","x-msexcel","vnd.openxmlformats-officedocument.spreadsheetml.sheet","haansoftxls"
					/*var doc	=*/	,"msword","vnd.openxmlformats-officedocument.wordprocessingml.document"
					/*var ppt	=*/	,"mspowerpoint","powerpoint","vnd.ms-powerpoint","x-mspowerpoint","vnd.openxmlformats-officedocument.presentationml.presentation"
					/*var pdf	=*/	,"pdf","application/pdf"					
					/*var hwp	=*/	,"haansofthwp", "x-hwp","hangul"
					/*var img	=*/	,"bmp","jpeg","jpg","x-png","png","gif"
					/*var video =*/	,"mp4"
					/*var zip =*/		,"application/zip","multipart/x-gzip","multipart/x-zip"
					];
				
				for(var i=0; i<mimeType.length;i++){
					if (mimeType[i] == type2){
						fileConfirm="Y";
						break;
					}
				}
				
				if (fileConfirm == "N") {
					typeErrorNo = 2;
				}
			}
			else {
				typeErrorNo = 3;
			}
		}
		
		if (fileConfirm == "N") {
			//alert('이미지 및 문서, MP4 파일만 업로드 할수 있습니다.('+typeErrorNo+')');
			alert('허용되지 않는 파일 양식입니다.');
			return false;
		}
	}
	
	// 해당 내용 Byte 및 글자수 제어하는 부분
	// TODO : euc-kr, utf-8을 고려한 MBCS 처리해야 함
	if (!itsp.com.isEmptyObject(el.attr('data-itsp-max-text-length'))) {
		var maxTextLength = el.attr('data-itsp-max-text-length');
		var textVal = el.val();
		var textByte =0;
		var textLength = textVal.length;
		if (textLength !=0){
			for(var i=0;i<textLength;i++){
				var textVal2 = textVal.charAt(i);
				textByte++;
			}
		}
		if (textByte > maxTextLength){
			alert("내용은 '+maxTextLength+'자를 넘길수 없습니다.");
			return false;
		}
	}
	return true;
};

itsp.formValidator.validate = function(form) {
	form = $(form);
	var elements = form.find("*");
	for(var i = 0; i < elements.size(); i++){
		if (! itsp.formValidator.isFormElement(elements[i])) continue;
		if (! itsp.formValidator.checkElement(elements[i])) return false;
	}

	return true;
};