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
								<div class="ls"><h4 class="article_tit">고객등록</h4></div>	
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
															<ul class="name">
																<li class="p48"><label for="name" class="blind">국문이름</label><input type="text" name="name" id="name" class="text_field" placeholder="국문이름" value="${customerData.name }"  data-itsp-required data-itsp-title="이름" ></li>
															</ul>	
														</div>
													</td>
													<th scope="row"><span class="req">성별</span></th>
													<td>
														<div class="field">
															<input type="checkbox" name="sex" value="M" <c:if test="${customerData.sex eq 'M'}">checked="checked"</c:if>> 남
															<input type="checkbox" name="sex" value="W" <c:if test="${customerData.sex eq 'Y'}">checked="checked"</c:if>> 여
														</div>
													</td>
												</tr>
												
												<tr>
													<th scope="row"><span class="req">연락처</span></th>
													<td>
														<div class="field">
															<ul class="mobile">
																<li class="p30"><input type="text" name="phone1" class="text_field" title="" value="${customerData.phone1}" data-itsp-required data-itsp-title="연락처" maxlength="3" ></li>
																<li class="p40"><input type="text" name="phone2" class="text_field" title="" value="${customerData.phone2}" data-itsp-required data-itsp-title="연락처" maxlength="4" ></li>
																<li class="p30"><input type="text" name="phone3" class="text_field" title="" value="${customerData.phone3}" data-itsp-required data-itsp-title="연락처" maxlength="4" ></li>
															</ul>
														</div>	
													</td>														
													<th scope="row"><span class="req">시술 등록여부</span></th>
													<td>
														<div class="field">
															<input type="checkbox" name="procYn">
															<span style="color:red;font-weight:bold;">( 클릭시 하단 공간에 시술입력 폼이 활성화됩니다. )</span>
														</div>
													</td>
												</tr>
												<tr>
													<th scope="row"><span class="req">고객 특이사항</span></th>
													<td colspan="3">
														<div class="field">
														<textarea rows="10" name="contents" id="textarea" style="width:100%;">${customerData.contents }</textarea>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</fieldset>
								</div>
							</form>
						</div>
							
						<div class="pt20" id="fmProc" style="display:none;">
							<div class="grid_top">
								<div class="ls"><h4 class="article_tit">최초 시술 등록</h4></div>													
							</div>
							<form action="#" name="fm2" id="fm2" method="post">
								<div class="post_tbl">
									<fieldset>
										<legend>시술 등록 폼</legend>
										<table class="grid tbl_bordered">
											<caption>시술 등록 </caption>
											<colgroup>
												<col width="10%">
												<col width="40%">
												<col width="10%">
												<col width="40%">
											</colgroup>
											<tbody id="personal_data">
												<tr>
													<th scope="row"><span class="req">시술 일자 </span></th>
													<td colspan="3">
														<div class="field">
															<ul class="term">
																<li class="p45"><input type="text" name="procDate" id="" value="${today }" title="시술 일자" placeholder="" class="period" data-itsp-required data-itsp-title="시술일자"  data-itsp-type-date ></li>
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
														<div class="field">
														<input type="checkbox" name="practitionerCode" value="0001" <c:if test="${procData.practitionerCode eq '0001'}">checked="checked"</c:if>> 안지웅
														<input type="checkbox" name="practitionerCode" value="0002" <c:if test="${procData.practitionerCode eq '0002'}">checked="checked"</c:if>> 신지연
														</div>
													</td>
												</tr>
												<tr>
													<th scope="row"><span class="req">시술 특이사항</span></th>
													<td colspan="3">
														<div class="field">
														<textarea rows="10" id="textarea2" style="width:100%;">${procData.procExt }</textarea>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</fieldset>
								</div>							
							</form>
							</div>
							<div class="post_bottom" id="button_save">
								<div class="bt_list tr">
									<label for="save" class="blind">저장</label><button type="button" name="" id="save" class="bt bt_on" ${'addCustomer' eq action ? 'data-han-customer-save-link':'data-han-customer-update-link'}=${customerData.seq }>저장</button>
									<label for="back" class="blind">이전화면</label><button type="button" name="" id="back" class="bt bt_on" data-han-list-link>이전화면</button>
								</div>
							</div>
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