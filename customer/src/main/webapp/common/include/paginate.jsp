<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/include/taglib.jsp"%>
<c:if test="${pageMap.ePage > 1}">
<div class="pt20">
	<div class="paginate">
		<c:if test="${pageMap.pageNum != 1}">
			<a href="#" class="roll first" data-itsp-page-link="1">처음</a>
			<a href="#" class="roll prev" data-itsp-page-link="${pageMap.pageNum -1}" >이전</a>
		</c:if>
		<span class="list"> 
			<c:forEach var="pageNumber" begin="${pageMap.sPage}" end="${pageMap.ePage}" step="1">
				<c:choose>
					<c:when test="${pageNumber eq pageMap.pageNum}">
						<strong>${pageNumber}</strong>
					</c:when>
					<c:otherwise>
						<span><a href="#" data-itsp-page-link="${pageNumber}" >${pageNumber}</a></span> 
					</c:otherwise>
				</c:choose>
			</c:forEach>
		</span>
		<c:if test="${pageMap.totalCnt > 10 && pageMap.pageNum ne pageMap.pageCnt}">
			<a href="#" class="roll next" data-itsp-page-link="${pageMap.pageNum + 1}" >다음</a>
			<a href="#" class="roll last" data-itsp-page-link="${pageMap.pageCnt}" >마지막</a>
		</c:if>
	</div>
</div>
</c:if>