package com.itsp.dao;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.itsp.vo.CustomerVO;

public interface CustomerDao {		
	
	public Integer saveProcCustomerData(CustomerVO CustomerVO);
	
	public CustomerVO updateProcCustomerData(CustomerVO CustomerVO);	
	
	public List<CustomerVO> selectCustomerList(Map<String, Object> params);
	
	public CustomerVO selectCustomerData(Map<String, Object> params);
	
	public Integer deleteCustomerData(Integer seq);
	
	public Integer selectTotalCount(CustomerVO CustomerVO);
	
	public Integer selectPageCount(Map<String, Object> params);
	
	
	/*public PersonalDataVO selectDepName(Map<String, Object> params);
	
	public PersonalDataVO selectUnivName(Map<String, Object> params);	
	
	public List<PersonalDataVO> selectNationalList();
	
	public List<PersonalDataVO> selectUnivList(Map<String, Object> params);
	
	public List<PersonalDataVO> selectDepList(Map<String, Object> map);
	
	public List<PersonalDataVO> selectFieldList(Map<String, Object> map);
	
	public List<PersonalDataVO> selectPersonalDataBranch(Map<String, Object> params);
	
	public Integer selectCountPersonalData(Map<String, Object> params);
	
	public Integer selectCountpersonalDataBranchSeq(Map<String, Object> params);
	
	public Integer selectMaxPersonalDataConfirnNo(Map<String, Object> params);*/
	
	/*public void updateProcPersonalData(PersonalDataVO PersonalDataVO);
	
	public PersonalDataVO selectPersonalData(Map<String, Object> params);	
	
	public List<PersonalDataVO> selectAjaxDepList(Map<String, Object> map);
	
	public List<PersonalDataVO> selectAjaxFieldList(Map<String, Object> map);
	
	public PersonalDataVO selectUnivDep(Map<String, Object> params);
	
	public void updateProcPersonalDocData(Map<String, Object> params);*/
	
}
