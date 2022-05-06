var itsp = itsp ? itsp : {};
itsp.calendar = itsp.calendar ? itsp.calendar : {};

itsp.calendar.bind = function(element) {
	if (!$.datepicker) {
		return;
	}

	element = $(element);
	
	$.datepicker.setDefaults({
		closeText : '닫기',
		prevText : '이전달',
		nextText : '다음달',
		currentText : '오늘',
		monthNames : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
		monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
		dayNames : [ '일', '월', '화', '수', '목', '금', '토' ],
		dayNamesShort : [ '일', '월', '화', '수', '목', '금', '토' ],
		dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
		weekHeader : 'Wk',
		firstDay : 0,
		isRTL : false,
		duration : 200,
		showAnim : 'show',
		showMonthAfterYear : true,
		yearSuffix : '년',
		changeMonth : false,
		changeYear : true,
		yearRange: '-100:+10',
		// minDate: '-100y',
		showOtherMonths : false,
		dateFormat : 'yymmdd',
		defaultDate : +0,
		numberOfMonths : 1,
		showAnim : 'fadeIn',
		showButtonPanel : false,
		onClose : function(selectedDate) {
			$(this).val(selectedDate);
		}
	});

	element.attr("readonly", "readonly");
	element.datepicker();
};

itsp.calendar.init = function() {
	itsp.calendar.bind($('[data-itsp-type-date]'));
};