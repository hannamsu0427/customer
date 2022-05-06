var HAN = HAN ? HAN : {};
HAN.customer = HAN.customer ? HAN.customer : {};


HAN.customer.goList = function() {
	var curSearchForm = $('#curSearchForm');
	var curPageForm = $('#curPageForm');
	location.href = '/customerList.do?'+curSearchForm.serialize()+'&'+curPageForm.serialize();
};

HAN.customer.goList2 = function() {
	var curSearchForm = $('#curSearchForm');
	var curPageForm = $('#curPageForm');
	location.href = '/procList.do?'+curSearchForm.serialize()+'&'+curPageForm.serialize();
};

HAN.customer.bindNewSearchLink = function() {
	$('[data-han-new-search-link]').click(function(event) {
		//검색 폼 빈값 체크
		if (!itsp.formValidator.validate($('#newSearchForm'))) {
			return;
		}
		
		var procDate = $('input[name=procDate]').val();
		var startDay = $('input[name=startDat]').val();
		var endDay = $('input[name=endDay]').val();
		$('#curSearchForm input[name=searchValue]').attr('value', $('#newSearchForm #searchValue').val());
		$('#curSearchForm input[name=searchBy]').attr('value', $('#newSearchForm #searchBy').val());
		$('#curSearchForm input[name=procDate]').attr('value', $('#newSearchForm #procDate').val());
		$('#curSearchForm input[name=startDay]').attr('value', $('#newSearchForm #startDay').val());
		$('#curSearchForm input[name=endDay]').attr('value', $('#newSearchForm #endDay').val());
		HAN.customer.goList2();
	});
};

HAN.customer.bindPageLink = function() {
	
	 $("#searchValue").keydown(function(key) {
         //키의 코드가 13번일 경우 (13번은 엔터키)
         if (key.keyCode == 13) {
        	 if (!itsp.formValidator.validate($('#newSearchForm'))) {
     			return;
     		}
     		
     		var procDate = $('input[name=procDate]').val();
     		var startDay = $('input[name=startDat]').val();
     		var endDay = $('input[name=endDay]').val();
     		$('#curSearchForm input[name=searchValue]').attr('value', $('#newSearchForm #searchValue').val());
     		$('#curSearchForm input[name=searchBy]').attr('value', $('#newSearchForm #searchBy').val());
     		$('#curSearchForm input[name=procDate]').attr('value', $('#newSearchForm #procDate').val());
     		$('#curSearchForm input[name=startDay]').attr('value', $('#newSearchForm #startDay').val());
     		$('#curSearchForm input[name=endDay]').attr('value', $('#newSearchForm #endDay').val());
     		HAN.customer.goList2();
         }
     });
	
	//검색조건 변경 이벤트
	$('#searchBy').change(function(){
		var me = $(this).val();
		if(me == 'oneDay'){
			$('input[name=procDate]').css('display','block');
			$('input[name=startDay]').css('display','none');
			$('input[name=endDay]').css('display','none');
			$('input[name=searchValue]').css('display','none');			
		}else if(me == 'day'){
			$('input[name=procDate]').css('display','none');
			$('input[name=startDay]').css('display','block');
			$('input[name=endDay]').css('display','block');
			$('input[name=searchValue]').css('display','none');
		}else if(me == 'customerName'){
			$('input[name=procDate]').css('display','none');
			$('input[name=startDay]').css('display','none');
			$('input[name=endDay]').css('display','none');
			$('input[name=searchValue]').css('display','block');
		}else if(me == 'phone'){
			$('input[name=procDate]').css('display','none');
			$('input[name=startDay]').css('display','none');
			$('input[name=endDay]').css('display','none');
			$('input[name=searchValue]').css('display','block');
		}else if(me == ''){
			$('input[name=procDate]').css('display','none');
			$('input[name=startDay]').css('display','none');
			$('input[name=endDay]').css('display','none');
			$('input[name=searchValue]').css('display','block');
		}
	});
	
	//시술 내용 체크박스 선택시 input 활성화
	$('input[type=checkbox][name=procCode]').click(function(){
		var checkId = $(this).val();
		if($(this).prop('checked')){			
			$('#price'+checkId).css({'display':'block','display':'table-row'});
		}else if($(this).prop('checked') == false){
			$('#price'+checkId).css('display','none');
		}
	});
	
	//시술 담당자 체크박스 하나만 선택하지
	$('input[type=checkbox][name=practitionerCode]').click(function(){
		if($(this).prop('checked')){
			$('input[type=checkbox][name=practitionerCode]').prop('checked', false);
			$(this).prop('checked', true);
		};
	});
	
	$('[data-itsp-list-link]').click(function(event) {		
		location.href = '/customerList.do';
	});
	
	$('[data-itsp-prev-link]').click(function(event) {		
		history.back();
	});	
	
	$('[data-itsp-customer-update-link]').click(function(event) {
		var curSearchForm = $('#curSearchForm');
		var seq = $(this).attr('data-itsp-customer-update-link');
		location.href = '/editCustomer.do?seq='+seq+'&action=updateCustomer&flag=customer';
	});
	
	$('[data-itsp-proc-insert-link]').click(function(event) {
		var seq = $(this).attr('data-itsp-proc-insert-link');
		location.href = '/editProc.do?seq='+seq+'&action=addProc&flag=proc';
	});
	
	//시술 삭제
	$('[data-itsp-proc-delete-link]').click(function(event) {
		
		var seq = $(this).attr('data-itsp-proc-delete-link');		
		if (!confirm("이전 시술을 삭제 하시겠습니까?")) {
			return;
		}		
		
		itsp.ajax.showLoading();
		
		itsp.ajax.doPostJSON('/proc/dataDeleteProc', { seq : seq },  function(data) {
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				location.reload();
			} else {
				alert(data.header.message);
				// 화면 이동 없음
			}
		});
	});
	
	//페이징
	$('[data-itsp-page-link]').click(function(event) {
		var me = $(this);
		var pageNum = me.attr('data-itsp-page-link');
		$('input[name=pageNum]').attr('value', pageNum);
		HAN.customer.goList2();
	});
	
	//고객 등록
	$('[data-itsp-save-link]').click(function(event) {
		
		//오늘날짜 셋팅
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();		
		if((month+"").length < 2){
			month = "0"+month;
		}		
		if((day+"").length < 2){
			day = "0"+day;
		}
		var today = year+""+month+""+day;
		
		var form = $('#fm');
		
		if (!itsp.formValidator.validate(form)) {
			return false;
		}
		
		var parentSeq = $(this).attr('data-itsp-save-link');		
		var procDate = $('input[name=procDate]').val();
		
		var code_price_array = Array();
		var cnt = 0;
		var chkbox = $('input[name=procCode]');
		
		//checkbox 2개 이상 선택시 code_price_array 셋팅
		if(1 < $('input[name=procCode]:checked').length){			
			for(i=0;i<chkbox.length;i++) {
			    if (chkbox[i].checked == true){
			    	code_price_array[cnt] = chkbox[i].value;
			    	cnt++;
			    	code_price_array[cnt] = $('input[name=price00'+(i+1)+']').val();
			        cnt++;
			    }
			}
		}else{
			var procCode = $('input[name=procCode]:checked').val();
			var price = $('input[name=price'+procCode+']').val();
		}
		
		
		var practitionerCode = $('input[name=practitionerCode]:checked').val();
		var procExt = $('#textarea').val();		
		//시술 날짜 비교 
		var dayConfirm = today-procDate;
		if(dayConfirm < 0){
			alert("시술 일짜는 미래 일 수 없습니다.");
			return;
		}
		//alert("parentSeq : " + parentSeq + "procDate : " + procDate + "procCode : " + procCode + "practitionerCode : " + practitionerCode + " procExt : " + procExt + "price : " + price) ;
				
		if (!confirm("저장 하시겠습니까?")) {
			return;
		}		
		
		itsp.ajax.showLoading();
		
		itsp.ajax.doPostJSON('/addProc/dataSaveProc', { parentSeq : parentSeq, procDate : procDate, procCode : procCode, code_price_array : code_price_array, practitionerCode : practitionerCode, procExt : procExt, price : price },  function(data) {
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				location.href = 'viewProc.do?seq='+parentSeq+'&flag=proc';
			} else {
				alert(data.header.message);
				// 화면 이동 없음
			}
		});
	});	
	
	//고객 삭제
	$('[data-itsp-customer-delete-link]').click(function(event) {
		
		var seq = $(this).attr('data-itsp-customer-delete-link');		
						
		if (!confirm("삭제 하시겠습니까?")) {
			return;
		}		
		
		itsp.ajax.showLoading();
		
		itsp.ajax.doPostJSON('/customer/dataDeleteProc', { seq : seq },  function(data) {
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				location.href = 'customerList.do';
			} else {
				alert(data.header.message);
				// 화면 이동 없음
			}
		});
	});
};

HAN.customer.bindcustomerInfoLink = function() {
	
};


var appLoading = function() {
	
	HAN.customer.bindPageLink();
	HAN.customer.bindNewSearchLink();
	HAN.customer.bindcustomerInfoLink();
	
};