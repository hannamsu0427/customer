var ITSP = ITSP ? ITSP : {};
ITSP.apply = ITSP.apply ? ITSP.apply : {};


ITSP.apply.goList = function() {
	var curSearchForm = $('#curSearchForm');
	var curPageForm = $('#curPageForm');
	location.href = '/admin/apply/list.do?'+curSearchForm.serialize()+'&'+curPageForm.serialize();
};

ITSP.apply.bindNewSearchLink = function() {
	$('[data-itsp-new-search-link]').click(function(event) {
		/*
		검색 폼 빈값 체크
		if (!itsp.formValidator.validate($('#newSearchForm'))) {
			return;
		}
		*/
		$('#curSearchForm input[name=searchValue]').attr('value', $('#newSearchForm #searchValue').val());
		ITSP.apply.goList();
	});
};

ITSP.apply.bindPageLink = function() {
	$('[data-itsp-page-link]').click(function(event) {
		var me = $(this);
		var pageNum = me.attr('data-itsp-page-link');
		var branchSeq = $("input[name=branchSeq]").val();
		var dptCd1 = $("input[name=dptCd1]").val();
		var dptCd2 = $("input[name=dptCd2]").val();
		$('input[name=pageNum]').attr('value', pageNum);
		$('input[name=branchSeq]').attr('value', branchSeq);
		$('input[name=dptCd1]').attr('value', dptCd1);
		$('input[name=dptCd2]').attr('value', dptCd2);
		ITSP.apply.goList();
	});
};

ITSP.apply.bindApplyInfoLink = function() {
	
$('[data-itsp-update-link]').click(function(event) {
		
		var confirmYn = $(this).attr("data-itsp-update-link");	
		var applyNo = $(this).attr("data-itsp-applyNo");
				
		if (!confirm("최종 제출 하시겠습니까?")) {
			return;
		}		
		
		itsp.ajax.showLoading();
		
		itsp.ajax.doPostJSON('/applyInfo/dataSaveProc', { confirmYn : confirmYn, applyNo : applyNo },  function(data) {
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				alert("최종 제출 되었습니다.");	
				location.reload();
			} else {
				alert(data.header.message);
				// 화면 이동 없음
			}
		});
	});
	
	$('[data-itsp-cancle-link]').click(function(event) {
		
		var confirmYn = $(this).attr("data-itsp-cancle-link");
		var applyNo = $(this).attr("data-itsp-applyNo");
		
		if (!confirm("제출을 취소 하시겠습니까?")) {
			return;
		}		
		
		itsp.ajax.showLoading();		
		
		itsp.ajax.doPostJSON('/applyInfo/dataSaveProc', { confirmYn : confirmYn, applyNo : applyNo },  function(data) {
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				alert("제출 취소 되었습니다.");	
				location.reload();
			} else {
				alert(data.header.message);
				// 화면 이동 없음
			}
		});
	});
	
	
	$('[data-itsp-applyInfo-link]').click(function(event) {
		var me = $(this);
		var applyNo = me.attr('data-itsp-applyInfo-link');		
		location.href="/admin/applyInfo.do?applyNo="+applyNo;
	});
	
	$('[data-itsp-allView-link]').click(function(event) {	
		location.href="/admin/apply/list.do";
	});
	
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
		
		/*itsp.ajax.doPostJSON('/personalData/ajaxDepList', { selectUniv : selectUniv ,  yy : yy , term : term },  function(data) {
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				var dataList = data.body;
				var dataListAreaObj = $('#ajaxDepList');
				var dataListAreaObj2 = $('#ajaxFieldList');
								
				dataListAreaObj.empty();
				dataListAreaObj2.empty();
				
				var htmlgyo = "";
				
					
				var htmlFirst = itsp.com.dynamicStringFromTemplateText('EmptyTemplate', data).trim();
				var htmlFirst2 = itsp.com.dynamicStringFromTemplateText('EmptyTemplate2', data).trim();
				$("#ajaxDepList").append(htmlFirst);
				$("#ajaxFieldList").append(htmlFirst2);
				
			
				for (var inx = 0; inx < dataList.length; inx++) {
					var data = dataList[inx];
					var html = itsp.com.dynamicStringFromTemplateText('DepListEmptyTemplate', data).trim();
					
					$("#ajaxDepList").append(html);
				}		
			} else {
				alert(data.header.message);
			}
		});*/
	}
	
	/*var selectUniv = $("select[name=univeList]").val();
	var selectDep = $("select[name=depList]").val();
	var yy = $("input[name=yy]").val(); 
	var term = $("input[name=term]").val(); 	
	
	itsp.ajax.doPostJSON('/personalData/ajaxFieldList', { selectUniv : selectUniv ,  selectDep : selectDep,  yy : yy , term : term  },  function(data) {
		if (data.header.code == itsp.ajax.CODE_SUCCESS) {
			
			var dataList = data.body;
			
			var dataListAreaObj = $('#ajaxFieldList');
			
			dataListAreaObj.empty();
			
			var htmlFirst = itsp.com.dynamicStringFromTemplateText('EmptyTemplate2', data).trim();
			
			if(selectUniv == "" || selectUniv == null || selectDep == "" || selectDep == null ) { 
				dataListAreaObj.empty(); 
				$("#ajaxFieldList").append(htmlFirst); 
				return;
			}
			
			$("#ajaxFieldList").append(htmlFirst);
			
			for (var inx = 0; inx < dataList.length; inx++) {
				var data = dataList[inx];
				var html = itsp.com.dynamicStringFromTemplateText('FieldListEmptyTemplate', data).trim();
				$("#ajaxFieldList").append(html);
			}
		} else {
			alert(data.header.message);
			// 화면 이동 없음
		}
	});*/
	
	$('[data-itsp-univList-change]').change(function(event) {		
		var selectUniv = $("select[name=univeList]").val();		
		location.href="/admin/apply/list.do?dptCd1="+selectUniv;		
	});
	
	$('[data-itsp-depList-change]').change(function(event) {
		var selectUniv = $("select[name=univeList]").val();
		var selectDep = $("select[name=depList]").val();
		location.href="/admin/apply/list.do?dptCd1="+selectUniv+"&dptCd2="+selectDep;
	});
	
	$('[data-itsp-fieldList-change]').change(function(event) {
		var selectUniv = $("select[name=univeList]").val();
		var selectDep = $("select[name=depList]").val();
		var selectField = $("select[name=fieldList]").val();
		location.href="/admin/apply/list.do?dptCd1="+selectUniv+"&dptCd2="+selectDep+"&branchSeq="+selectField;
	});
	
};


var appLoading = function() {
	
	ITSP.apply.bindPageLink();
	ITSP.apply.bindNewSearchLink();
	ITSP.apply.bindApplyInfoLink();
	
};