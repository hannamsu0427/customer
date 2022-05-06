/** 
* string String::cut(int len, subfix)
* 글자를 앞에서부터 원하는 바이트만큼 잘라 리턴합니다.
* 한글의 경우 2바이트로 계산하며, 글자 중간에서 잘리지 않습니다.
* 
* 자르기후 subfix문자를 연결해줍니다. ex// abc...
*/
String.prototype.cut = function(len, subfix) {
	var str = this;
	var l = 0;
	for (var i=0; i<str.length; i++) {
		l += (str.charCodeAt(i) > 128) ? 2 : 1;
		if (l > len) return str.substring(0,i) + subfix;
	}
	return str;
}

/** 
* bool String::bytes(void)
* 해당스트링의 바이트단위 길이를 리턴합니다. (기존의 length 속성은 2바이트 문자를 한글자로 간주합니다)
*/
String.prototype.bytes = function() {
	var str = this;
	var l = 0;
	for (var i=0; i<str.length; i++) l += (str.charCodeAt(i) > 128) ? 2 : 1;
	return l;
}

String.prototype.isEmpty = function(){
	return (this.length == 0) ? true : false;
}

String.prototype.equals = function(str){
	return (this == str) ? true : false; 
}

String.prototype.startsWith = function(str){
	var result = true;
	if(this.isEmpty() || str.isEmpty()) return false;
	if(this.length < str.length) return false;
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i).equals(this.charAt(i))) continue;
		result = false;
	}
	return result;
}

String.prototype.endsWith = function(str){
	var result = true;
	var index = this.length - 1;
	if(this.isEmpty() || str.isEmpty()) return false;
	if(this.length < str.length) return false;
	for(var i = str.length - 1; i >= 0; i--){
		if(str.charAt(i).equals(this.charAt(index--))) continue;
		result = false;
	}
	return result;
}

String.prototype.splitValue = function(separator, index){
	var splitValues = this.split(separator);
	return (splitValues.length > index) ? splitValues[index] : '';
}

String.prototype.replaceAll = function(str, searchStr, replaceStr) {

    while (str.indexOf(searchStr) != -1) {
        str = str.replace(searchStr, replaceStr);
    }
    return str;

}


function PageQuery(q) {
	if(q.length > 1) this.q = q.substring(1, q.length);
	else this.q = null;
	this.keyValuePairs = new Array();
	if(q) {
		for(var i=0; i < this.q.split("&").length; i++) {
			this.keyValuePairs[i] = this.q.split("&")[i];
		}
	}
	this.getKeyValuePairs = function() { return this.keyValuePairs; }
	this.getValue = function(s) {
		for(var j=0; j < this.keyValuePairs.length; j++) {
			if(this.keyValuePairs[j].split("=")[0] == s)
				return this.keyValuePairs[j].split("=")[1];
		}
		return false;
	}
	this.getParameters = function() {
		var a = new Array(this.getLength());
		for(var j=0; j < this.keyValuePairs.length; j++) {
			a[j] = this.keyValuePairs[j].split("=")[0];
		}
		return a;
	}
	this.getLength = function() { return this.keyValuePairs.length; } 
}

function queryString(key){
	var page = new PageQuery(window.location.search); 
	return unescape(page.getValue(key)); 
}