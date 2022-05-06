package com.itsp.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import com.itsp.vo.CustomerVO;


public class CustomerImp extends SqlMapClientDaoSupport implements CustomerDao {
	
	@SuppressWarnings("unchecked")
	
	public Integer saveProcCustomerData(CustomerVO CustomerVO) {
		return (Integer) getSqlMapClientTemplate().insert("Customer.saveProcCustomerData", CustomerVO);
	}
	
	public CustomerVO updateProcCustomerData(CustomerVO CustomerVO) {
		return (CustomerVO) getSqlMapClientTemplate().insert("Customer.updateProcCustomerData", CustomerVO);
	}
	
	@Override
	public List<CustomerVO> selectCustomerList(Map<String, Object> params) {
		return (List<CustomerVO>) getSqlMapClientTemplate().queryForList("Customer.selectCustomerList", params);		
	}
	
	@Override
	public CustomerVO selectCustomerData(Map<String, Object> params) {
		return (CustomerVO) getSqlMapClientTemplate().queryForObject("Customer.selectCustomerData", params);	
	}
	
	@Override
	public Integer deleteCustomerData(Integer seq) {
		return getSqlMapClientTemplate().delete("Customer.deleteCustomerData", seq);
	}
	
	@Override
	public Integer selectTotalCount(CustomerVO CustomerVO) {
		return (Integer) getSqlMapClientTemplate().queryForObject("Customer.totalCount", CustomerVO);
	}
	
	@Override
	public Integer selectPageCount(Map<String, Object> params) {
		return (Integer) getSqlMapClientTemplate().queryForObject("Customer.pageCount", params);
	}
	/*
	
	@Override
	public PersonalDataVO selectDepName(Map<String, Object> params) {
		return (PersonalDataVO) getSqlMapClientTemplate().queryForObject("PersonalData.selectDepName", params);	
	}
	
	@Override
	public PersonalDataVO selectUnivName(Map<String, Object> params) {
		return (PersonalDataVO) getSqlMapClientTemplate().queryForObject("PersonalData.selectUnivName", params);	
	}
	
	@Override
	public List<PersonalDataVO> selectNationalList() {
		return (List<PersonalDataVO>) getSqlMapClientTemplate().queryForList("PersonalData.selectNationalList");		
	}
	
	@Override
	public List<PersonalDataVO> selectUnivList(Map<String, Object> params) {
		return (List<PersonalDataVO>) getSqlMapClientTemplate().queryForList("PersonalData.selectunivList", params);		
	}
	
	@Override
	public List<PersonalDataVO> selectDepList(Map<String, Object> map) {
		return (List<PersonalDataVO>) getSqlMapClientTemplate().queryForList("PersonalData.selectDepList", map);		
	}
	
	@Override
	public List<PersonalDataVO> selectFieldList(Map<String, Object> map) {
		return (List<PersonalDataVO>) getSqlMapClientTemplate().queryForList("PersonalData.selectFieldList", map);		
	}
	
	@Override
	public List<PersonalDataVO> selectPersonalDataBranch(Map<String, Object> params) {
		return (List<PersonalDataVO>) getSqlMapClientTemplate().queryForList("PersonalData.selectPersonalDataBranch", params);		
	}
	
	
	
	public void updateProcPersonalData(PersonalDataVO PersonalDataVO) {
		getSqlMapClientTemplate().insert("PersonalData.updateProcPersonalData", PersonalDataVO);
	}
	
	@Override
	public Integer selectCountPersonalData(Map<String, Object> params) {
		return (Integer) getSqlMapClientTemplate().queryForObject("PersonalData.selectCountpersonalData", params);
	}
	
	@Override
	public Integer selectCountpersonalDataBranchSeq(Map<String, Object> params) {
		return (Integer) getSqlMapClientTemplate().queryForObject("PersonalData.selectCountpersonalDataBranchSeq", params);
	}
	
	@Override
	public Integer selectMaxPersonalDataConfirnNo(Map<String, Object> params) {
		return (Integer) getSqlMapClientTemplate().queryForObject("PersonalData.selectMaxPersonalDataConfirnNo", params);
	}	
	
	@Override
	public PersonalDataVO selectPersonalData(Map<String, Object> params) {
		return (PersonalDataVO) getSqlMapClientTemplate().queryForObject("PersonalData.selectPersonalData", params);	
	}
	
	@Override
	public List<PersonalDataVO> selectAjaxDepList(Map<String, Object> map) {
		return (List<PersonalDataVO>) getSqlMapClientTemplate().queryForList("PersonalData.selectAjaxDepList", map);		
	}
	
	@Override
	public List<PersonalDataVO> selectAjaxFieldList(Map<String, Object> map) {
		return (List<PersonalDataVO>) getSqlMapClientTemplate().queryForList("PersonalData.selectAjaxFieldList", map);		
	}
	
	@Override
	public PersonalDataVO selectUnivDep(Map<String, Object> params) {
		return (PersonalDataVO) getSqlMapClientTemplate().queryForObject("PersonalData.selectUnivDep", params);
	}
	
	@Override
	public void updateProcPersonalDocData(Map<String, Object> params) {
		getSqlMapClientTemplate().update("PersonalData.updateProcPersonalDocData", params);
	}*/
}
