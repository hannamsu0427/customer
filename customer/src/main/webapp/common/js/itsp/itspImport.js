var curTime = new Date().getTime();

var importJSArray = [ 'itspAjax', 'itspCalendar', 'itspValidator', 'itspFormValidator', 'itspPopup', 'itspCommon', 'itspDialogPaging'];

var injectFile = function(jsSrc) {
	jsSrc += "?tm=" + curTime;
	document.write('<script type="text/javascript" src="' + jsSrc + '"></script>');
};

for (var impJsInx = 0; impJsInx < importJSArray.length; impJsInx++) {
	var jsSrc = "/common/js/itsp/" + importJSArray[impJsInx] + ".js";
	injectFile(jsSrc);
}
