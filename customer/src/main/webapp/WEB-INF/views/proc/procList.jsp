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
	injectFile("/js/application/proc.js");
	injectFile("/js/ready.js");
</script>
<style>
.trbg {background-color:#FFFFCD !important;}
</style>
</head>

<body>
	<div id="u_skip"> 
		<a href="#" onClick="document.getElementById('career_list').tabIndex = -1;document.getElementById('career_list').focus();return false;"><span>경력사항 작성 바로가기</span></a> 
		<a href="#" onClick="document.getElementById('button_save').tabIndex = -1;document.getElementById('button_save').focus();return false;"><span>경력사항 저장 바로가기</span></a>
	</div>
	
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
								<form name="newSearchForm" id="newSearchForm" action="/customerList.do" method="post" >
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
										<li class="pr20">
											<label for="searchByLabel" class="blind">검색조건 선택</label>
											<select id="searchBy" title="검색조건 선택"class="opt">
												<option value="customerName">검색조건 선택</option>
												<option value="oneDay" <c:if test="${searchBy eq 'oneDay' }">selected=selected</c:if>>날짜</option>
												<option value="day" <c:if test="${searchBy eq 'day' }">selected=selected</c:if>>기간</option>
												<option value="customerName" <c:if test="${searchBy eq 'customerName' }">selected=selected</c:if>>고객명</option>
												<option value="phone" <c:if test="${searchBy eq 'phone' }">selected=selected</c:if>>핸드폰 뒷자리</option>
											</select>
										</li>
										<li class="pr5"><input type="text" style="display:${'' ne procDate ? 'block' : 'none'};" name="procDate" id="procDate" value="${'oneDay' ne searchBy ? today : procDate}" title="시술 일자" placeholder="" class="period 100" data-itsp-type-date ></li>
										<li class="pr5"><input type="text" style="display:${'' ne startDay ? 'block' : 'none'};" name="startDay" id="startDay" value="${'day' eq searchBy ? startDay : ''}" title="시작일" placeholder="시작일" class="period 100" data-itsp-type-date > </li>  
										<li class="pr5"><input type="text" style="display:${'' ne startDay ? 'block' : 'none'};" name="endDay" id="endDay" value="${'day' eq searchBy ? endDay : ''}" title="종료일" placeholder="종료일" class="period 100" data-itsp-type-date ></li>
										<li class="pr5">
											<label for="" class="blind">검색어</label>
											<input type="text" style="display:${'' ne searchValue ? 'block' : 'none'};" placeholder="검색어 입력" id="searchValue" name="searchValue" value="${searchValue}" class="w250">
										</li>
										<li>
											<label for="" class="blind">검색</label><button type="button" class="bt bt_srch" title="검색" data-han-new-search-link>검색</button>
										</li>
									</ul>
								</fieldset>
								</form>
							</div>
							<!-- // 게시판 검색 END-->

							<div class="post_tbl">
								<fieldset>
									<legend>시술 리스트</legend>
									<div class="post_bottom" id="button_save">
										<div class="bt_list tr">
											<b>개수</b> : ${count }&nbsp;&nbsp;&nbsp;<b>총매출</b> : <fmt:formatNumber value="${totalPrice }" pattern="#,###" />										
										</div>
									</div>
									<table class="grid tbl_bordered" id="table_chk">
										<caption>주요학력사항 입력</caption>
										<colgroup>
											<col width="10%">
											<col width="10%">
											<col width="10%">
											<col width="10%">
											<col width="10%">
											<col width="10%">
											<col width="30%">
											<col width="10%">
										</colgroup>
										<thead>
											<tr>
												<th scope="col">번호</th>
												<th scope="col">이름</th>
												<th scope="col">시술일자</th>
												<th scope="col">시술내용</th>
												<th scope="col">금액</th>
												<th scope="col">시술담당자</th>
												<th scope="col">특이사항</th>
												<th scope="col">삭제</th>
											</tr>
										</thead>
										<tbody>																		
											<c:forEach items="${ProcList }" var="ProcList">
											<tr>
												<td class="tb_center">
													${ProcList.rnum}
												</td>
												<td class="tb_center">
													${ProcList.name}
												</td>
												<td class="tb_center">
													${fn:substring(ProcList.procDate,0,10)}
												</td>
												<td class="tb_center">
													${ProcList.procName}
												</td>
												<td class="tb_center">
												<fmt:formatNumber value="${ProcList.price }" pattern="#,###" />
												</td>
												<td class="tb_center">
													${ProcList.practitionerName}
												</td>												
												<td>
													${ProcList.procExt}
												</td>
												<td class="tb_center">
												<label for="list" class="blind">시술 삭제</label><button type="button" name="" id="list" class="bt bt_on" data-itsp-proc-delete-link=${ProcList.seq }>시술 삭제</button>
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
							
							<div class="post_bottom" id="button_save">
								<div class="bt_list tr">
									<!-- <label for="add" class="blind">고객등록</label><button type="button" name="add" id="add" class="bt bt_on" data-itsp-add-link>고객등록</button> -->
								</div>
							</div>
							
							<!-- <ul class="comment">
								<li>* 현재 재직중인 경우 또는 증명서상에 종료일이 명시되어있지 않은 경우 종료일은 접수마감일로 기재</li>
								<li>* 경력사항 입력시 증명서 상의 내용과 동일하게 기재</li>
								<li>* 증빙서류를 제출할 수 없는경우 입력 불필요</li>
								<li>* 중복되는 기간의 경력은 하나만 기재</li>
							</ul> -->
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