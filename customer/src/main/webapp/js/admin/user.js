var ITSP = ITSP ? ITSP : {};
ITSP.user = ITSP.user ? ITSP.user : {};


ITSP.user.bindSaveLink = function() {
	
	var univSeq = $("select[name=univeList]").val();
	
	//학과 코드 처리
	if(univSeq == "259"){
		var html = "<option value='259' selected=selected>교양학부</option>";
		$("select[name=depList]").append(html);
	}
	
	if(univSeq == "264"){
		var html = "<option value='264' selected=selected>교육대학원</option>";
		$("select[name=depList]").append(html);
	}
	
	
	var form = $('#fm');	
	var doSave = function() {
		
		if (!itsp.formValidator.validate(form)) {
			return false;
		}
		
		if (!confirm("저장 하시겠습니까?")) {
			return;
		}			
		
		itsp.ajax.showLoading();
		
		itsp.ajax.doPostFormJSON(form, function(data) {
			
			itsp.ajax.hideLoading();
			
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				alert(data.header.message);				
				location.href="/admin/user/list.do";
			} else {
				alert(data.header.message);
			}
		});
	};
	
	itsp.com.blockFormEnterKey(form, function() {
		// doSave();
	});	
	
	$('[data-itsp-save-link]').click(function(event) {		
		doSave();
	});
};

ITSP.user.bindDeleteLink = function() {
	$('[data-itsp-delete-link]').click(function(event) {
		var me = $(this);
		var userId = me.attr('data-itsp-delete-link');

		if (!confirm("삭제 하시겠습니까?")) {
			return;
		}

		itsp.ajax.doPostJSON('/admin/dataDeleteProc', {userId : userId}, function(data) {
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				location.href="/admin/user/list.do";
			} else {
				alert(data.header.message);
				// 화면 이동 없음
			}
		});
	});
};

ITSP.user.getAjaxUnivList = function() {
	
	$('[data-itsp-univList-change]').change(function(event) {
		
		var selectUniv = $("select[name=univeList]").val();
		var yy = $("input[name=yy]").val(); 
		var term = $("input[name=term]").val(); 	
		
		if(selectUniv == '259' || selectUniv == '264'){
			itsp.ajax.doPostJSON('/personalData/ajaxFieldList', { selectUniv : selectUniv, yy : yy , term : term},  function(data) {
				if (data.header.code == itsp.ajax.CODE_SUCCESS) {
					var dataList = data.body;
					var dataListAreaObj = $('#ajaxDepList');
					var dataListAreaObj2 = $('#ajaxFieldList');
					
					dataListAreaObj.empty();
					dataListAreaObj2.empty();
					
					//교양학부 일때 
					if(selectUniv == '259'){
						htmlgyo = itsp.com.dynamicStringFromTemplateText('EmptyTemplate_gyo', data).trim();	
						$("#ajaxDepList").append(htmlgyo);
					}
					
					//교육대학원
					if(selectUniv == '264'){
						htmlgyo = itsp.com.dynamicStringFromTemplateText('EmptyTemplate_da', data).trim();	
						$("#ajaxDepList").append(htmlgyo);
					}
					
					//교양학부 일때 
					//var htmlgyo = itsp.com.dynamicStringFromTemplateText('EmptyTemplate_gyo', data).trim();					
					var htmlFirst2 = itsp.com.dynamicStringFromTemplateText('EmptyTemplate2', data).trim();
					//$("#ajaxDepList").append(htmlgyo);
					$("#ajaxFieldList").append(htmlFirst2);					
				
					for (var inx = 0; inx < dataList.length; inx++) {
						var data = dataList[inx];
						var html = itsp.com.dynamicStringFromTemplateText('FieldListEmptyTemplate', data).trim();
						
						$("#ajaxFieldList").append(html);
					}		
				} else {
					alert(data.header.message);
				}
			});			
		}else{
			//alert("selectUniv : " + selectUniv + ", YY : " + yy +", term : " + term);
			itsp.ajax.doPostJSON('/personalData/ajaxDepList', { selectUniv : selectUniv ,  yy : yy , term : term },  function(data) {
				if (data.header.code == itsp.ajax.CODE_SUCCESS) {
					var dataList = data.body;
					var dataListAreaObj = $('#ajaxDepList');
									
					dataListAreaObj.empty();
					
					var htmlgyo = "";					
						
					var htmlFirst = itsp.com.dynamicStringFromTemplateText('EmptyTemplate', data).trim();
					$("#ajaxDepList").append(htmlFirst);					
				
					for (var inx = 0; inx < dataList.length; inx++) {
						var data = dataList[inx];
						var html = itsp.com.dynamicStringFromTemplateText('DepListEmptyTemplate', data).trim();
						$("#ajaxDepList").append(html);
					}		
				} else {
					alert(data.header.message);
				}
			});
		}
		
	});	
};


ITSP.user.bindEditLink = function() {
	
	$('[data-itsp-apply-link]').click(function(event) {	
		location.href = "/admin/user/edit.do";
	});
	
	$('[data-itsp-edit-link]').click(function(event) {	
		userId = $(this).attr("data-itsp-edit-link");
		location.href = "/admin/user/edit.do?userId="+userId;
	});
	
	$('[data-itsp-list-link]').click(function(event) {	
		location.href = "/admin/user/list.do";
	});
}

ITSP.user.goList = function() {
	var curSearchForm = $('#curSearchForm');
	var curPageForm = $('#curPageForm');
	location.href = '/admin/user/list.do?'+curSearchForm.serialize()+'&'+curPageForm.serialize();
};

ITSP.user.bindNewSearchLink = function() {
	$('[data-itsp-new-search-link]').click(function(event) {
		
		/*검색 폼 빈값 체크
		if (!itsp.formValidator.validate($('#newSearchForm'))) {
			return;
		}*/
		
		$('#curSearchForm input[name=searchValue]').attr('value', $('#newSearchForm #searchValue').val());
		ITSP.user.goList();
	});
};

ITSP.user.bindPageLink = function() {
	$('[data-itsp-page-link]').click(function(event) {
		var me = $(this);
		var pageNum = me.attr('data-itsp-page-link');
		$('input[name=pageNum]').attr('value', pageNum);
		ITSP.user.goList();
	});
};


var appLoading = function() {
	
	ITSP.user.bindPageLink();
	ITSP.user.bindSaveLink();
	ITSP.user.bindDeleteLink();
	ITSP.user.bindEditLink();
	ITSP.user.getAjaxUnivList();
	ITSP.user.bindNewSearchLink();
	
};