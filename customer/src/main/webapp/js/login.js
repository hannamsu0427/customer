var ITSP = ITSP ? ITSP : {};
ITSP.login = ITSP.login ? ITSP.login : {};

/*ITSP.student.goList = function() {
	var curSearchForm = $('#curSearchForm');
	var curPageForm = $('#curPageForm');
	location.href = '/student/list.do?'+curSearchForm.serialize()+'&'+curPageForm.serialize();
};

ITSP.student.goView = function() {
	var IDX = $('#save').attr('data-itsp-save-link');
	var curSearchForm = $('#curSearchForm');
	var curPageForm = $('#curPageForm');
	location.href = '/student/view.do?'+curSearchForm.serialize()+'&'+curPageForm.serialize()+'&IDX='+IDX;
};

ITSP.student.bindListLink = function() {
	$('[data-itsp-list-link]').click(function(event) {
		ITSP.student.goList();
	});
};

ITSP.student.bindEditLink = function() {
	$('[data-itsp-edit-link]').click(function(event) {
		var me = $(this);
		var IDX = me.attr('data-itsp-edit-link');
		var curSearchForm = $('#curSearchForm');
		var curPageForm = $('#curPageForm');
		location.href = '/student/edit.do?'+curSearchForm.serialize()+'&'+curPageForm.serialize()+'&IDX='+IDX;
	});
};*/

ITSP.login.bindLoginLink = function() {
	var form = $('#fm');
	var doLogin = function() {
		
		if (!itsp.formValidator.validate(form)) {
			return;
		}
				
		itsp.ajax.showLoading();
		
		itsp.ajax.doPostFormJSON(form, function(data) {
			
			itsp.ajax.hideLoading();
			
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {							
				alert(data.header.message);				
			} else {				
				alert(data.header.message);
			}
		});
	};
	
	itsp.com.blockFormEnterKey(form, function() {
		// doSave();
	});
	
	
	
	$('[data-itsp-login-link]').click(function(event) {		
		/*doLogin();*/
		$('#fm').submit();
	});
	
	$('[data-itsp-start-link]').click(function(event) {		
		window.location="/agreement.do";	
		return false;
	});
};

/*ITSP.student.bindDeleteLink = function() {
	$('[data-itsp-delete-link]').click(function(event) {
		var me = $(this);
		var IDX = me.attr('data-itsp-delete-link');
		
		if(IDX == "chkBox"){
			IDX = "";
			if($('input[name=chkBoxs]:checked').length ==0){
				alert("삭제할 데이터를 선택해 주세요.");
				isOk = false;
				return false;
			}
			
			$('input[name=chkBoxs]:checked').each(function(){
				seq += $(this).val() + ",";
			});
		}
		
		if (!confirm("삭제 하시겠습니까?")) {
			return;
		}		
		
		itsp.ajax.doPostJSON('/student/dataDeleteProc', { IDX : IDX },  function(data) {
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				ITSP.student.goList();
			} else {
				alert(data.header.message);
				// 화면 이동 없음
			}
		});
	});
};


//seklect box change
ITSP.student.SelectChange = function() {
	$('select[name=univeList]').change(function(event) {
		var univeCode = $('select[name=univeList]').val();
		alert("univeCode : " + univeCode);
	});
};

ITSP.student.LayerPopClose = function() {
	var dataListAreaObj = $('#ajaxDataList');
	dataListAreaObj.empty();
	$('#layerSearchForm')[0].reset();
	$('#layerSearchForm input[type=hidden]').attr('value', '');
	$('body').css('overflow', '');
	$('.layer_pop').removeClass('on');
};

ITSP.student.getAjaxDataList = function() {
	var url = "/company/ajaxList";
	
	itsp.ajax.showLoading();
	itsp.ajax.doPostJSON(url, {searchData : ITSP.student.curSearchData }, function(data) {
		itsp.ajax.hideLoading();
		if (data.header.code == itsp.ajax.CODE_SUCCESS) {
			var dataList = data.body;
			var dataListAreaObj = $('#ajaxDataList');
			if (dataList.length == 0) {
				var html = itsp.com.dynamicStringFromTemplateText( 'dataEmptyTemplate', {}).trim();
				dataListAreaObj.append(html);
			} else {
				dataListAreaObj.empty();
				ITSP.student.appendAjaxData(dataList);
			}
		} else {
			alert(data.header.message);
		}
	});
};

ITSP.student.appendAjaxData = function(dataList) {
	var dataListAreaObj = $('#ajaxDataList');
	for (var inx = 0; inx < dataList.length; inx++) {
		var data = dataList[inx];
		var html = itsp.com.dynamicStringFromTemplateText('dataTemplate', data).trim();
		dataListAreaObj.append(html);
	}
	itsp.com.changeDummyHref(dataListAreaObj);
};*/



var appLoading = function() {
	
	ITSP.login.bindLoginLink();
	
};