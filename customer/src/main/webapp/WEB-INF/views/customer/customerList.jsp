<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/common/include/taglib.jsp"%>
<!doctype html>
<html lang="ko">
<head>
<%@ include file="/common/include/meta.jsp" %>
<%@ include file="/common/include/title.jsp" %>
<%@ include file="/common/include/link.jsp" %>
<%@ include file="/common/include/script.jsp" %>

<script type="text/javascript">
	//app 전용 js는 injectFile로 호출할 것(이유 : 캐시 방지 코드를 붙임)
	injectFile("/js/application/customer.js");
	injectFile("/js/ready.js");
</script>
<style>
.trbg {background-color:#FFFFCD !important;}
</style>
</head>

<body>	
	<input type="hidden" name="institution_" id="institution" value="">
	<div id="wrap">
		<%@ include file="/common/include/header.jsp" %>					
					<div class="tabs_conts">							
						<div class="pt20">
							<div class="grid_top">
								<div class="ls"><h4 class="article_tit">리스트</h4></div>	
							</div>
							<!-- 게시판 검색 START -->
							<div class="post_tbl">
							<div class="grid_search mt10">
								<form name="newSearchForm" id="newSearchForm" method="post" >
								<input type="hidden" name="pageNum" value="<c:out value="${pageNum }"/>" />
								<fieldset>
									<legend>검색 폼</legend>
									<ul>
										<!-- <li>
											<label for="" class="blind">검색 조건</label>
											<select name="searchBy" id="searchBy" title="검색 조건" class="text_field" data-itsp-searchby-change>
												<option value="name">이름</option>
												<option value="phone">전화번호</option>
											</select>
										</li> -->
										<li class="pr5">
											<label for="" class="blind">검색어</label>
											<input type="text" placeholder="검색어 입력" id="searchValue" name="searchValue" value="${searchValue}" class="w250">
										</li>
										<li>
											<label for="" class="blind">검색</label><button type="button" class="bt bt_srch" title="검색" data-han-new-search-link>검색</button>
										</li>
									</ul>
								</fieldset>
								</form>
								
							</div>
							<!-- // 게시판 검색 END-->
							
							
								<div class="bt_list tr">
									<label for="add" class="blind">고객등록</label><button type="button" name="add" id="add" class="bt bt_on" data-itsp-add-link>고객등록</button>
								</div><br>
							

							<div class="post_tbl">
								<fieldset>
									<legend>회원 리스트</legend>
									<table class="grid tbl_bordered" id="table_chk">
										<caption>회원 리스트</caption>
										<colgroup>
											<col width="5%">
											<col width="10%">
											<col width="10%">
											<col width="10%">
											<col width="10%">
											<col width="55%">
										</colgroup>
										<thead>
											<tr>												
												<th scope="col">번호</th>
												<th scope="col">이름</th>
												<th scope="col">전화번호</th>
												<th scope="col">총 시술금액</th>
												<th scope="col">등록일자</th>
												<th scope="col">비고</th>
											</tr>
										</thead>
										<tbody>																		
											<c:forEach items="${List }" var="List">
											<tr name="customerList" style="cursor:pointer;" data-itsp-view-link="${List.seq }">
												<td class="tb_center">
													${List.rnum}
												</td>
												<td class="tb_center">
													${List.name}													
												</td>
												<td class="tb_center">
													${List.phone1} - ${List.phone2} - ${List.phone3}
												</td>
												<td class="tb_center">
													<fmt:formatNumber value="${List.totalPrice }" pattern="#,###" />
												</td>
												<td class="tb_center">
													${fn:substring(List.regDate,0,10)}
												</td>
												<td class="tb_center">
												</td>
											</tr>
											</c:forEach>											
										</tbody>
									</table>
								</fieldset>
							</div>
							</div>
							<%@ include file="/common/include/paginate.jsp" %>
							<!-- // 페이징 -->
						</div>	
					</div>
					<!-- //지원자 주요 교육.연구경력 -->
				</div>
				<!--//section_cont -->
			</section>
		</div>
		<!-- //container -->
	</div>
	<!-- //wrap -->
	
	<%@ include file="/common/include/footer.jsp" %>
	<!-- //footer -->
	<jsp:include page="search.jsp" />
</body>
</html>