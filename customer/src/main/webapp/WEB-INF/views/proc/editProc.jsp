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
								<div class="ls"><h4 class="article_tit">시술 등록</h4></div>	
							</div>
							<form action="#" name="fm" id="fm" method="post">
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
															${customerData.name }
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
													<th scope="row"><span class="req">시술 일자 </span></th>
													<td>
														<div class="field">
															<ul class="term">
																<li class="p45"><input type="text" name="procDate" id="" value="${today }" title="시술 일자" placeholder="" class="period" data-itsp-type-date ></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<th scope="row"><span class="req">시술 내용</span></th>
													<td colspan="3">
														<div class="field" style="margin-left:-5px">
														<input type="checkbox" name="procCode" id="procCode001" value="001" <c:if test="${procData.procCode eq '001'}">checked="checked"</c:if>> CUT
														<input type="checkbox" name="procCode" id="procCode002" value="002" <c:if test="${procData.procCode eq '002'}">checked="checked"</c:if>> GP
														<input type="checkbox" name="procCode" id="procCode003" value="003" <c:if test="${procData.procCode eq '003'}">checked="checked"</c:if>> DI
														<input type="checkbox" name="procCode" id="procCode004" value="004" <c:if test="${procData.procCode eq '004'}">checked="checked"</c:if>> DT
														<input type="checkbox" name="procCode" id="procCode005" value="005" <c:if test="${procData.procCode eq '005'}">checked="checked"</c:if>> MG
														<input type="checkbox" name="procCode" id="procCode006" value="006" <c:if test="${procData.procCode eq '006'}">checked="checked"</c:if>> DRY
														<span class="req" style="margin-left:20px;">선택하면 금액입력란이 활성화 됩니다.</span>
														</div>														
													</td>
												</tr>
												<tr id="price001" style="display:none;">
													<th scope="row"><span class="req">CUT 시술 금액</span></th>
													<td colspan="3">
														<input type="text" name="price001" value="${price }">
													</td>
												</tr>
												<tr id="price002" style="display:none;">
													<th scope="row"><span class="req">GP 시술 금액</span></th>
													<td colspan="3">
														<input type="text" name="price002" value="${price }">
													</td>
												</tr>
												<tr id="price003" style="display:none;">
													<th scope="row"><span class="req">DI 시술 금액</span></th>
													<td colspan="3">
														<input type="text" name="price003" value="${price }">
													</td>
												</tr>
												<tr id="price004" style="display:none;">
													<th scope="row"><span class="req">DT 시술 금액</span></th>
													<td colspan="3">
														<input type="text" name="price004" value="${price }">
													</td>
												</tr>
												<tr id="price005" style="display:none;">
													<th scope="row"><span class="req">MG 시술 금액</span></th>
													<td colspan="3">
														<input type="text" name="price005" value="${price }">
													</td>
												</tr>
												<tr id="price006" style="display:none;">
													<th scope="row"><span class="req">DRY 시술 금액</span></th>
													<td colspan="3">
														<input type="text" name="price006" value="${price }">
													</td>
												</tr>												
												<tr>
													<th scope="row"><span class="req">시술 담당자</span></th>
													<td colspan="3">
														<div class="field" style="margin-left:-5px">
														<input type="checkbox" name="practitionerCode" value="0001" <c:if test="${procData.practitionerCode eq '0001'}">checked="checked"</c:if>> 안지웅
														<input type="checkbox" name="practitionerCode" value="0002" <c:if test="${procData.practitionerCode eq '0002'}">checked="checked"</c:if>> 신지연
														</div>
													</td>
												</tr>
												<tr>
													<th scope="row"><span class="req">특이사항</span></th>
													<td colspan="3">
														<div class="field">
														<textarea rows="10" id="textarea" style="width:100%;">${procData.procExt }</textarea>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
										
										<div class="post_bottom" id="button_save">
											<div class="bt_list tr">
												<c:if test="${personal_data.confirmYn ne 'Y'}">
													<label for="save" class="blind">저장</label><button type="button" name="" id="save" class="bt bt_on" data-itsp-save-link=${customerData.seq }>저장</button>
													<label for="list" class="blind">리스트</label><button type="button" name="" id="list" class="bt bt_on" data-itsp-prev-link>이전화면</button>
												</c:if>
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
											<c:forEach items="${ProcList }" var="ProcList" varStatus="status" begin="0" end="5">
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