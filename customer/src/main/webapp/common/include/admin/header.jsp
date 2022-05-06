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
					<span class="login_user">${adminType eq 'S' ? '슈퍼유저' : userName}</span>님 안녕하세요!(${adminType })
				</div>
			</div>
			<div class="line_2nd">
				<h1><a href="/" class="h1_txt">추계예술대학교 강사채용 관리자 - 2020학년도 상반기</a></h1>
				<ul class="util_srv">
					<c:if test="${userId ne '' && userId ne null}">
					<li><a href="#" class="util_link logout" data-itsp-admin-logout-link>로그아웃</a></li>
					</c:if>
				</ul>
			</div>
		</div>
	</header>
	
	<div id="container">
			<div class="aside" id="lnb">
				<h3>
					<span>관리자</span>
				</h3>
				<div class="lnb">
					<ul class="l_depth2">
					<c:if test="${adminType eq 'S' }">
						<li><a href="/admin/user/list.do">일반 사용자 등록<i class="fa"></i></a>
							<!-- <ul class="l_depth3">
								<li class="on"><a href="#">입사지원서_1_1</a></li>
								<li><a href="#">입사지원서_1_2</a></li>
							</ul> -->
						</li>
					</c:if>
						<li><a href="/admin/apply/list.do">지원서 리스트<i class="fa"></i></a></li>
						<!-- <li><a href="#">입사지원서_3<i class="fa"></i></a></li>
						<li><a href="#">입사지원서_4<i class="fa"></i></a></li> -->
					</ul>
				</div>
			</div>
			<!-- // aside -->
			
			<section id="section">
				<!-- <div class="section_head">
					<div class="location">
						<ul>
							<li>홈</li>
							<li>직원</li>
							<li>입사지원서_1</li>
							<li class="here">입사지원서_1_1</li>
						</ul>
					</div>
					<h3 class="page_tit">입사지원서_1_1</h3>
					<div class="section_head_btn">
						<input type="button" value="도움말" class="bt bt_line">
						<input type="button" value="출력" class="bt bt_line">
					</div>
				</div> -->
				<!--//section_head -->