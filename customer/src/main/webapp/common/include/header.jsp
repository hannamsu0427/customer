<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<body>	
	<header id="header">
		<div class="header">
			<div class="line_1st">
				<div class="log_info">
					<%-- <c:if test="${name ne '' && name ne null}">
					<span id="timeTest" class="pr20"></span>
					</c:if> --%>
					<span class="login_user">${name }</span>님 안녕하세요!
				</div>
			</div>
			<div class="line_2nd">
				<h1><a href="/customerList.do" class="h1_txt">예뻐질래 미용실 고객관리 프로그램</a>
				</h1>
				<ul class="util_srv">
					<c:if test="${name ne '' && name ne null}">
					<li><a href="#" class="util_link logout" data-itsp-myInfo-logout-link>로그아웃</a></li>
					</c:if>
				</ul>
			</div>
		</div>
	</header>
	
	<div id="container">
		<section id="section">
			<div class="section_head">
				<div class="location">
					<ul>
						<c:if test="${flag eq 'customer' }">
						<li>고객관리</li>	
						</c:if>		
						<c:if test="${flag eq 'proc' }">
						<li>시술관리</li>	
						</c:if>						
						<%-- <li class="${'agreement' eq flag ? 'here' : 'here_none'}">개인정보 수집·이용 동의서</li>						
						<li class="${'personalData' eq flag ? 'here' : 'here_none'}">인적사항</li>
						<li class="${'education' eq flag ? 'here' : 'here_none'}">학력사항</li>
						<li class="${'career' eq flag ? 'here' : 'here_none'}">교육&middot;연구경력</li>
						<li class="${'research' eq flag ? 'here' : 'here_none'}">연구실적</li>
						<li class="${'document' eq flag ? 'here' : 'here_none'}">증빙서류 업로드</li>
						<li class="${'submit' eq flag ? 'here' : 'here_none'}">최종확인 및 제출</li> --%>
		
					</ul>
				</div>
				<c:if test="${flag eq 'customer'}">
				<h3 class="page_tit">고객 관리</h3>	
				</c:if>		
				<c:if test="${flag eq 'proc'}">
				<h3 class="page_tit">시술 관리</h3>
				</c:if>
			</div>
			<div class="section_cont">				
				<div class="pt20">
					<div class="comm_tabs">
						<ul>
							<li class="${'customer' eq flag ? 'active' : ''}"><a href="/customerList.do?flag=customer" class="link_tab">고객관리</a></li>
							<li class="${'proc' eq flag ? 'active' : ''}"><a href="/procList.do?flag=proc" class="link_tab">시술관리${proc }</a></li>				
						</ul>
					</div>
				</div>