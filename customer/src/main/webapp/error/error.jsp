<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/common/include/taglib.jsp"%>
<%
	String errCode = request.getParameter("errCode");
	if (errCode == null || "".equals(errCode)) {
		errCode = "404";
	}
	response.setStatus(404);
%>
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
		<h2>페이지를 <span>찾을 수 없습니다.</span></h2>
		<p>방문하시려는 페이지의 주소가 잘못 입력되었거나, 페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.</p>
		<p>입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다. </p>
		<p>관련 문의사항은 고객센터에 알려주시면 친절하게 안내해 드리겠습니다.</p>
		<div class="padT30">
			<button type="button" class="bt bt_on" onclick="javascript:history.back();">이전화면</button>
		</div>
	</div>
</body>
</html>