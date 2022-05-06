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
								<div class="ls"><h4 class="article_tit">고객정보</h4></div>	
								<div class="bt_list tr">
									<label for="list" class="blind">리스트</label><button type="button" name="" id="list" class="bt bt_on" data-itsp-list-link>고객 검색</button>
									<label for="list" class="blind">리스트</label><button type="button" name="" id="list" class="bt bt_on" data-itsp-proc-list-link>시술 검색</button>
								</div>
							</div>
							<form action="/career/dataSaveProc.do" name="fm" id="fm" method="post">
								<div class="post_tbl">
									<fieldset>
										<legend>인적사항 입력 폼</legend>
										<table class="grid tbl_bordered">
											<caption>인적사항 목록 </caption>
											<colgroup>
												<col width="10%">
												<col width="40%">
												<col width="10%">
												<col width="40%">
											</colgroup>
											<tbody id="personal_data">
												<tr>
													<th scope="row"><span class="req">성명</span></th>
													<td>
														<div class="field">
															${customerData.name}
														</div>
													</td>
													<th scope="row"><span class="req">성별</span></th>
													<td>
														<div class="field">
															${'M' eq customerData.sex ? '남자':'여자'}
														</div>
													</td>
												</tr>
												
												<tr>
													<th scope="row"><span class="req">연락처</span></th>
													<td>
														<div class="field">
															${customerData.phone1} - ${customerData.phone2} - ${customerData.phone3}
														</div>	
													</td>
													<th scope="row"><span class="req">등록 일자 </span></th>
													<td>
														<div class="field">
															${customerData.regDate }
														</div>
													</td>
												</tr>
												<tr>
													<th scope="row"><span class="req">특이사항</span></th>
													<td>
														<div class="field">
														${customerData.contents }
														</div>
													</td>
													<th scope="row"><span class="req">총 시술금액</span></th>
													<td>
														<div class="field">
														<fmt:formatNumber value="${customerData.totalPrice }" pattern="#,###" />
														</div>
													</td>
												</tr>
											</tbody>
										</table>
										
										<div class="post_bottom" id="button_save">
											<div class="bt_list tr">
												<label for="list" class="blind">리스트</label><button type="button" name="" id="list" class="bt bt_on" data-itsp-customer-update-link=${customerData.seq }>고객정보 수정</button>
												<label for="list" class="blind">리스트</label><button type="button" name="" id="list" class="bt bt_on" data-itsp-customer-delete-link=${customerData.seq }>고객정보 삭제</button>
												<label for="list" class="blind">리스트</label><button type="button" name="" id="list" class="bt bt_on" data-itsp-proc-insert-link=${customerData.seq }>시술 등록</button>
											</div>
										</div>
									</fieldset>
								</div>
							</form>
							</div>
							
							<div class="pt20">
							<div class="grid_top">
								<div class="ls"><h4 class="article_tit">이전 시술 내역</h4></div>	
							</div>

							<div class="post_tbl">
								<fieldset>
									<legend>지원분야 입력 폼</legend>
									<table class="grid tbl_bordered" id="table_chk">
										<caption>주요학력사항 입력</caption>
										<colgroup>
											<col width="10%">
											<col width="10%">
											<col width="10%">
											<col width="10%">
											<col width="10%">
											<col width="40%">
											<col width="10%">
										</colgroup>
										<thead>
											<tr>
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
													${customerData.name}
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
</body>
</html>