<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/common/include/taglib.jsp"%>
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge" >
<meta name="format-detection" content="telephone=no">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="0">
<meta http-equiv="Pragma" content="no-cache">
<meta name = "keywords" content ="">
<meta name = "description" content ="">
<title>error</title>
<style type="text/css">
*{margin:0; padding:0}
body { font: normal normal 14px/1.2 Malgun Gothic, '맑은고딕',Dotum,'돋움', Gulim,'굴림', 'Apple SD Gothic Neo', Helvetica, Arial, Sans-serif !important; color: #444; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
button, select { text-transform: none; cursor: pointer; }
button, html input[type=button], input[type=reset], input[type=submit] { -webkit-appearance: button; cursor: pointer; border:0;  }
.error_box {padding:8% 0 3% 0;text-align:center; line-height:28px; color:#000; letter-spacing:-0.05em;}
.error_box h1 {font-size:36px;margin:0 auto; text-align:center; font-weight:normal;line-height:50px;}
.error_box h2 {font-size:20px;line-height:50px;}
.error_box h2 span {color:#0e42ad}
.padT30 {padding-top:30px;}
.bt {display:inline-block; min-width:100px; height:40px;line-height:38px; text-align:center; padding:0 10px;color:#fff; font-weight:bold;}
.bt_on {background-color:#0e42ad}
</style>
</head>
<body>
	<div class="error_box">
		<h1><img src="/error/bg_error.png"></h1>
		<c:if test="${not empty exception.errCode}">
				<h2>${exception.errCode}: System Errors</h2>
			</c:if>
			<c:if test="${empty exception.errCode}">
				<h2>System Errors</h2>
			</c:if>
			<c:if test="${not empty exception.errMsg}">
				<p>
					<span class="h3">${exception.errMsg}</span>
				</p>
			</c:if>
			<p>
				<span class="h3">이용에 불편을 드려 죄송합니다.</span><br> 잠시 후에 다시 한번 시도해 주시기 바랍니다.
			</p>
			<div class="line"></div>
			<p>동일한 문제가 지속적으로 발생할 경우 고객센터로 문의하여 주십시오.</p>
			<div class="pt30">
				<button type="button" class="bt bt_on" onclick="javascript:history.back();">이전화면</button>
			</div>
	</div>
</body>
</html>