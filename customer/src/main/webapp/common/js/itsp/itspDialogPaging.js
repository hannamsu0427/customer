var itsp = itsp ? itsp : {};
if (!itsp.dialogPaging) itsp.dialogPaging = {};

itsp.dialogPaging.display = function(targetArea, pageMap) {
	var prevPageNum = pageMap.pageNum - 1;
	var nextPageNum = pageMap.pageNum + 1;
	
	targetArea = $(targetArea);
	targetArea.empty();
	var html = itsp.com.dynamicStringFromTemplateHtml('dialogPageTemplate', 
			$.extend(true, { prevPageNum : prevPageNum, nextPageNum : nextPageNum }, pageMap));
	var tempDiv = $('<div>').append(html);

	var listArea = tempDiv.find('.list');
	listArea.attr('data-itsp-page-num', pageMap.pageNum);
	listArea.empty();
	listArea.hide();
	for (var tempPageNum = pageMap.sPage; tempPageNum<=pageMap.ePage; tempPageNum++) {
		var templateId = (tempPageNum == pageMap.pageNum) ? 'dialogPageNumCurTemplate' : 'dialogPageNumOtherTemplate'; 
		var listHtml = itsp.com.dynamicStringFromTemplateHtml(templateId, 
				$.extend(true, { tempPageNum : tempPageNum }, pageMap));
		listArea.append(listHtml);
	}

	// show, hide하지 않고 remove하는 이유는 마우스 오버시 오동작하기 때문
	if (parseInt(pageMap.pageNum, 10) <= 1) {
		tempDiv.find('[data-itsp-dialog-page-prev-area]').remove();
	}
	
	if (parseInt(pageMap.totalCnt, 10) <= 10 || parseInt(pageMap.pageNum, 10) == parseInt(pageMap.pageCnt,10)) {
		tempDiv.find('[data-itsp-dialog-page-next-area]').remove();
	}

	itsp.com.changeDummyHref(tempDiv);
	targetArea.append(tempDiv.children()[0]);
	itsp.com.changeDummyHref(listArea);
	listArea.show();
	delete tempDiv;
};


itsp.dialogPaging.bindPageLink = function() {
	$(document).on('click', '[data-itsp-dialog-page-link]', function(event) {
		event.preventDefault();
		var me = $(this);
		var root = me.closest('[data-itsp-dialog-handler]');
		var handler = root.attr('data-itsp-dialog-handler');
		var pageNum = me.attr('data-itsp-dialog-page-link');
		itsp.com.callFunction(handler, pageNum);
	});
};


itsp.dialogPaging.getPageNum = function(targetArea) {
	return targetArea.find('[data-itsp-page-num]').attr('data-itsp-page-num');
};


itsp.dialogPaging.init = function() {
	itsp.dialogPaging.bindPageLink();
};
