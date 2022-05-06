<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/common/include/taglib.jsp"%>
<%@page buffer="none"%>
<!doctype html>
<html lang="ko">
<head>
<%@ include file="/common/include/meta.jsp" %>
<%@ include file="/common/include/title.jsp" %>
<%@ include file="/common/include/link.jsp" %>
<%@ include file="/common/include/script.jsp" %>

<%  
String ipAddr = request.getRemoteAddr();
String returnUrl = "";
if("".equals(returnUrl)){
	//returnUrl = URLEncoder.encode(request.getRequestURL()+"?"+request.getQueryString(),"UTF-8");
}
%>

<%-- <%if(!"192.168.3.74".equals(ipAddr)){%>
<script lanquage="javascript"> alert("접근이 제한된 IP주소입니다.<%=ipAddr%>"); </script>
<%return; } %> --%>

<script type="text/javascript">
	//app 전용 js는 injectFile로 호출할 것(이유 : 캐시 방지 코드를 붙임)
	injectFile("/js/login.js");
	injectFile("/js/ready.js");
</script>

</head>

<body>
	<div id="u_skip">
		<a href="#" onClick="document.getElementById('appointment_new').tabIndex = -1;document.getElementById('appointment_new').focus();return false;"><span>신규작성 바로가기</span></a> 
		<a href="#" onClick="document.getElementById('appointment_edit').tabIndex = -1;document.getElementById('appointment_edit').focus();return false;"><span>지원서 수정 및 확인 바로가기</span></a> 
		<a href="#" onClick="document.getElementById('PrivacyPolicy').tabIndex = -1;document.getElementById('PrivacyPolicy').focus();return false;"><span>개인정보처리방침 바로가기</span></a>
	</div>
	<div class="login">
		<div class="login_wrap">
			<h1>예뻐질래</h1>
			<h2>예뻐질래 회원관리 시스템</h2>
			<div class="login_form">
				<form action="/logInProc.do" name="fm" id="fm" method="post">
				<fieldset>
					<legend>로그인 입력폼</legend>
					<!-- <div class="login_form_item" id="appointment_new">
						<h3>지원서 작성</h3>
						<ul class="login_form_box pt50">
							<li class="pt50">
								<ul class="bt_login_wrap">
									<li>
										<label for="appointment_start" class="blind">지원서 신규작성</label>
										<button type="button" name="appointment_start" id="appointment_start" class="bt_login_page2" data-itsp-start-link>지원서 신규작성</button>
									</li>
								</ul>
							</li>
						</ul>
					</div> -->
					
					<div class="login_form_item" id="appointment_edit">
						<h3>예뻐질래 로그인</h3>
						<ul class="login_form_box">
							<li>
								<div class="field id">
									<label for="userid" class="blind">아이디</label>
									<input type="text" name="id" id="id" placeholder="아이디를 입력하세요" class="line_none" value="" data-itsp-required data-itsp-title="이름">
								</div>
							</li>
							<!-- <li>
								<div class="field email">
									<label for="useremail" class="blind">이메일</label>
									<input type="text" name="email" id="useremail" placeholder="이메일을 입력하세요" maxlength="30" value="" autocomplete="off" class="line_none" data-itsp-required data-itsp-title="이메일">
								</div>
							</li> -->
							<li>
								<div class="field pw">
									<label for="userpw" class="blind">비밀번호</label>
									<input type="password" name="password" id="userpw" placeholder="비밀번호를 입력하세요" value="" maxlength="30" autocomplete="off" class="line_none" data-itsp-required data-itsp-title="비밀번호">
								</div>
							</li>
							<li>
								<ul class="bt_login_wrap">
									<li>
										<label for="loginBtn" class="blind">로그인</label>
										<button type="button" name="loginBtn" id="loginBtn" class="bt_login_page" data-itsp-login-link>로그인</button>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</fieldset>
				</form>
			</div>
			<!-- // login_form -->
			
			<div class="pt10 pb20">
				<ul class="list_ty1">
					<!-- <li>처음 방문자 또는 중복지원 시 지원분야별 "지원서 신규작성", <strong class="txt_red">(중복지원시 같은 이메일 사용)</strong><br/>(분야별 중복지원 가능여부는 공고문 참고)</li> -->
				</ul>
			</div>
			
			<div class="login_bottom">COPYRIGHT &copy; 2019 <em>I want prety</em>. ALL RIGHTS RESERVED.</div>
			<!-- <div class="pt10">
				<ul class="tbl f_c">
					<li class="tbl_c"><a href="https://www.chugye.ac.kr/mbs/university/subview.jsp?id=university_080201000000" target="_blank" title="새창으로 이동" id="PrivacyPolicy"><strong>[개인정보처리방침]</strong></a></li>
					<li class="tbl_c"><a href="https://www.chugye.ac.kr/mbs/university/subview.jsp?id=university_080301000000" target="_blank" title="새창으로 이동">[이메일주소무단수집거부]</a></li>
				</ul>
			</div> -->
		</div>
	</div>
	<!-- // login-->
</body>
</html>