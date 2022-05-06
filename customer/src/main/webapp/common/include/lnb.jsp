<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/include/taglib.jsp"%>
					
<div class="aside" id="lnb">
	<c:choose>
		<c:when test="${'T' eq sessionScopeMember.AUTH}">
			<c:choose>
				<c:when test="${'myPage' eq flag}">
					<h3><span>마이페이지</span></h3>
					<div class="lnb">
						<ul class="l_depth2">
							<li <c:if test="${'myPage' eq flag}">class="on"</c:if>><a href="#" data-itsp-myInfo-edit-link>정보수정</a></li>
							<li><a href="#" data-itsp-myInfo-logout-link>로그아웃</a></li>
						</ul>
					</div>
				</c:when>
				<c:when test="${'board' eq flag || 'schd' eq flag }">
					<h3><span>게시판 &#38; 일정</span></h3>
					<div class="lnb">
						<ul class="l_depth2">
							<li <c:if test="${'board' eq flag}">class="on"</c:if>><a href="/board/list.do">게시판</a></li>
							<li <c:if test="${'schd' eq flag}">class="on"</c:if>><a href="/schedule.do">일정</a></li>
						</ul>
					</div>
				</c:when>
				<c:otherwise>
					<h3><span>연수생 관리</span></h3>
					<div class="lnb">
						<ul class="l_depth2">
							<li <c:if test="${'attendance' eq flag}">class="on"</c:if>><a href="/attendance.do">출석 관리</a></li>
							<li <c:if test="${'grades' eq flag}">class="on"</c:if>><a href="/grades.do">성적 관리</a></li>
						</ul>
					</div>
				</c:otherwise>
			</c:choose>
		</c:when>
		<c:otherwise>
			<c:choose>
				<c:when test="${'myPage' eq flag}">
					<h3><span>마이페이지</span></h3>
					<div class="lnb">
						<ul class="l_depth2">
							<li <c:if test="${'myPage' eq flag}">class="on"</c:if>><a href="#" data-itsp-myInfo-edit-link>정보수정</a></li>
							<li><a href="#" data-itsp-myInfo-logout-link>로그아웃</a></li>
						</ul>
					</div>
				</c:when>
				<c:when test="${'board' eq flag || 'schd' eq flag || 'code' eq flag ||  'semester' eq flag ||  'company' eq flag  || 'organize' eq flag || 'member' eq flag || 'budget' eq flag}">
					<h3><span>공통</span></h3>
					<div class="lnb">
						<ul class="l_depth2">
							<li <c:if test="${'board' eq flag}">class="on"</c:if>><a href="/board/list.do">게시판</a></li>
							<li <c:if test="${'schd' eq flag}">class="on"</c:if>><a href="/schedule.do">일정</a></li>
							<li <c:if test="${'code' eq flag}">class="on"</c:if>><a href="/codeMstList.do">코드 관리</a></li>
							<li <c:if test="${'company' eq flag}">class="on"</c:if>><a href="/company/list.do">모집업체 관리</a></li>
							<li <c:if test="${'semester' eq flag}">class="on"</c:if>><a href="/semester.do">학기 관리</a></li>
							<li <c:if test="${'organize' eq flag}">class="on"</c:if>><a href="/organize/list.do">반편성</a></li>
							<li <c:if test="${'member' eq flag}">class="on"</c:if>><a href="/member/list.do">사용자 관리</a></li>
							<li <c:if test="${'budget' eq flag}">class="on"</c:if>><a href="/budget.do">예산 관리</a></li>
						</ul>
					</div>
				</c:when>
				<c:when test="${'teacher' eq flag || 'contract' eq flag || 'wage' eq flag || 'docentFee' eq flag || 'consignmentCost' eq flag || 'employment' eq flag || 'certificate_t' eq flag || 'salary' eq flag}">
					<h3><span>강사</span></h3>
					<div class="lnb">
						<ul class="l_depth2">
							<li <c:if test="${'teacher' eq flag}">class="on"</c:if>><a href="/teacher/list.do">인적 관리</a></li>
							<li <c:if test="${'contract' eq flag}">class="on"</c:if>><a href="/contract/lecturer.do">계약서 출력</a></li>
							<li <c:if test="${'wage' eq flag || 'docentFee' eq flag || 'consignmentCost' eq flag}">class="on"</c:if>><a href="/basicWage.do">위탁강의료 관리</a>
								<ul class="l_depth3">
									<li <c:if test="${'wage' eq flag}">class="on"</c:if>><a href="/basicWage.do">기본 시급</a></li>
									<li <c:if test="${'docentFee' eq flag}">class="on"</c:if>><a href="/docentFee.do">결정 강사료</a></li>
									<li <c:if test="${'consignmentCost' eq flag}">class="on"</c:if>><a href="/consignmentCost.do">위탁비용</a></li>
									<li <c:if test="${'salary' eq flag}">class="on"</c:if>><a href="/salary.do">위탁 강사료 명세서</a></li>
								</ul>
							</li>
							<li <c:if test="${'certificate_t' eq flag}">class="on"</c:if>><a href="/certificate/application.do?type=teacher">증명서 발급</a>
								<ul class="l_depth3">
									<li <c:if test="${'certificate_t' eq flag}">class="on"</c:if>><a href="/certificate/application.do?type=teacher">재직/경력증명서</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</c:when>
				<c:otherwise>
					<h3><span>연수생</span></h3>
					<div class="lnb">
						<ul class="l_depth2">
							<li <c:if test="${'student' eq flag}">class="on"</c:if>><a href="/student/list.do">학적 관리</a>
							<li <c:if test="${'attendance' eq flag}">class="on"</c:if>><a href="/attendance.do">출석 관리</a></li>
							<li <c:if test="${'grades' eq flag}">class="on"</c:if>><a href="/grades.do">성적 관리</a></li>
							<li <c:if test="${'reward' eq flag}">class="on"</c:if>><a href="/reward.do">포상/징계</a></li>
							<li <c:if test="${'certificate_s' eq flag}">class="on"</c:if>><a href="/certificate/application.do?type=student">증명서 발급</a>
								<ul class="l_depth3">
									<li <c:if test="${'certificate_s' eq flag}">class="on"</c:if>><a href="/certificate/application.do?type=student">재학/제적증명서</a></li>
								</ul>
							</li>
							<li <c:if test="${'certificate' eq flag}">class="on"</c:if>><a href="/certificate/application.do?type=student_c">수료증 발급</a></li>
							<li <c:if test="${'statics' eq flag}">class="on"</c:if>><a href="/student/statics.do">통계</a></li>
							<li <c:if test="${'counsel' eq flag}">class="on"</c:if>><a href="/counsel/list.do">상담 관리</a></li>
						</ul>
					</div>
				</c:otherwise>
			</c:choose>
		</c:otherwise>
	</c:choose>
</div>