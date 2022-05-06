var HAN = HAN ? HAN : {};
HAN.customer = HAN.customer ? HAN.customer : {};


HAN.customer.goList = function() {
	var curSearchForm = $('#curSearchForm');
	var curPageForm = $('#curPageForm');
	location.href = '/customerList.do?'+curSearchForm.serialize()+'&'+curPageForm.serialize();
};

HAN.customer.bindNewSearchLink = function() {
	$('[data-han-new-search-link]').click(function(event) {
		//검색 폼 빈값 체크
		if (!itsp.formValidator.validate($('#newSearchForm'))) {
			return;
		}
		$('#curSearchForm input[name=searchValue]').attr('value', $('#newSearchForm #searchValue').val());
		HAN.customer.goList();
	});
};

HAN.customer.bindPageLink = function() {
	$("#searchValue").keydown(function(key) {
        //키의 코드가 13번일 경우 (13번은 엔터키)
        if (key.keyCode == 13) {
        	//검색 폼 빈값 체크
    		if (!itsp.formValidator.validate($('#newSearchForm'))) {
    			return;
    		}
    		$('#curSearchForm input[name=searchValue]').attr('value', $('#newSearchForm #searchValue').val());
    		HAN.customer.goList();
        }
    });
	
	//리스트 선택시 색상 표시
	$('tr[name=customerList]').mouseover(function(){
		$(this).children('td').addClass('trbg');
	}).mouseout(function() {
		$(this).children('td').removeClass('trbg');
	});
	
	
	$('[data-itsp-view-link]').click(function(event) {
		var curSearchForm = $('#curSearchForm');
		var seq = $(this).attr('data-itsp-view-link');
		location.href = '/viewCustomer.do?'+curSearchForm.serialize()+"&seq="+seq;
	});
	
	$('[data-itsp-add-link]').click(function(event) {
		var curSearchForm = $('#curSearchForm');
		location.href = '/editCustomer.do?&action=addCustomer&flag=customer';
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
	
	//고객 삭제
	$('[data-itsp-customer-delete-link]').click(function(event) {
		
		var seq = $(this).attr('data-itsp-customer-delete-link');		
						
		if (!confirm("등록된 시술내역까지 삭제됩니다.\n삭제 하시겠습니까?")) {
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
	
	$('[data-han-list-link]').click(function(event) {
		history.back();
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
	
	//성별 체크박스 하나만 선택하지
	$('input[type=checkbox][name=sex]').click(function(){
		if($(this).prop('checked')){
			$('input[type=checkbox][name=sex]').prop('checked', false);
			$(this).prop('checked', true);
		};
	});
	
	//시술 등록 클릭시 display:bolck
	$('input[type=checkbox][name=procYn]').click(function(){
		if($(this).prop('checked')){
			$('#fmProc').css('display', 'block');
			$(this).val('Y');
		}else{
			$('#fmProc').css('display', 'none');
			$(this).val('N');
		};
	});	
	
	//페이징
	$('[data-itsp-page-link]').click(function(event) {
		var me = $(this);
		var pageNum = me.attr('data-itsp-page-link');
		$('input[name=pageNum]').attr('value', pageNum);
		HAN.customer.goList();
	});
	
	//고객 등록
	$('[data-han-customer-save-link]').click(function(event) {
		var form = $('#fm');
		var form2 = $('#fm2');
		
		if (!itsp.formValidator.validate(form)) {
			return false;
		}
		
		if($('input[name=sex]').val() == ''){
			alert("성별은 필수사항 입니다.");
		}
		
		var name = $('input[name=name]').val();
		var sex = $('input[name=sex]:checked').val();
		var phone1 = $('input[name=phone1]').val();
		var phone2 = $('input[name=phone2]').val();
		var phone3 = $('input[name=phone3]').val();
		var contents = $('#textarea').val();
		
		var procYn = $('input[name=procYn]').val();
		
		if(procYn == "Y"){
			
			//시술등록 부분 validate
			if (!itsp.formValidator.validate(form2)) {
				return false;
			}
			
			if($('input[name=procCode]').is(":checked") == false){
				alert("시술 내용을 선택해 주세요.");
				return;
			}
			
			if($('input[name=practitionerCode]').is(":checked") == false){
				alert("시술 담당자를 선택해 주세요.");
				return;
			}
			
			var procDate = $('input[name=procDate]').val();			
			var practitionerCode = $('input[name=practitionerCode]:checked').val();
			var procExt = $('#textarea2').val();
			
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
			
		}
				
		if (!confirm("저장 하시겠습니까?")) {
			return;
		}		
		
		itsp.ajax.showLoading();
		if(procYn == "Y"){
			itsp.ajax.doPostJSON('/dataSaveProc', { name : name, sex : sex, phone1 : phone1, phone2 : phone2, phone3 : phone3, contents : contents, 
													procDate : procDate, procCode : procCode, code_price_array : code_price_array, practitionerCode : practitionerCode, procExt : procExt, 
													price : price, procYn : procYn },  function(data) {
				if (data.header.code == itsp.ajax.CODE_SUCCESS) {
					alert("고객이 등록 되었습니다.");	
					HAN.customer.goList();
				} else {
					alert(data.header.message);
					// 화면 이동 없음
				}
			});
		}else{
			itsp.ajax.doPostJSON('/dataSaveProc', { name : name, sex : sex, phone1 : phone1, phone2 : phone2, phone3 : phone3, contents : contents, procYn : procYn},  function(data) {
				if (data.header.code == itsp.ajax.CODE_SUCCESS) {
					alert("고객이 등록 되었습니다.");	
					HAN.customer.goList();
				} else {
					alert(data.header.message);
					// 화면 이동 없음
				}
			});
		}
	});
	
	//고객 수정
	$('[data-han-customer-update-link]').click(function(event) {
		var form = $('#fm');
		
		if (!itsp.formValidator.validate(form)) {
			return false;
		}
		
		if($('input[name=sex]').val() == ''){
			alert("성별은 필수사항 입니다.");
		}
		
		var seq = $(this).attr('data-han-customer-update-link');
		var name = $('input[name=name]').val();
		var sex = $('input[name=sex]:checked').val();
		var phone1 = $('input[name=phone1]').val();
		var phone2 = $('input[name=phone2]').val();
		var phone3 = $('input[name=phone3]').val();
		var contents = $('#textarea').val();
				
		if (!confirm("고객정보를 수정 하시겠습니까?")) {
			return;
		}	
		
		itsp.ajax.showLoading();
		
		itsp.ajax.doPostJSON('/dataUpdateProc', { seq : seq, name : name, sex : sex, phone1 : phone1, phone2 : phone2, phone3 : phone3, contents : contents },  function(data) {
			if (data.header.code == itsp.ajax.CODE_SUCCESS) {
				location.href = '/viewProc.do?seq='+seq;
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