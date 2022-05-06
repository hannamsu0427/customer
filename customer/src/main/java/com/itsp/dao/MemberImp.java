package com.itsp.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.itsp.vo.MemberVO;

public class MemberImp extends SqlMapClientDaoSupport implements MemberDao {
	
	@SuppressWarnings("unchecked")
	@Override
	public Integer totalCount(MemberVO MemberVO) {
		return (Integer) getSqlMapClientTemplate().queryForObject("Member.totalCount", MemberVO);
	}
	
	public Integer totalCountBranch(MemberVO MemberVO) {
		return (Integer) getSqlMapClientTemplate().queryForObject("Member.totalCountBranch", MemberVO);
	}
	
	public Integer totalCountconfirmYn(Map<String, Object> params) {
		return (Integer) getSqlMapClientTemplate().queryForObject("Member.totalCountconfirmYn", params);
	}
	
	@Override
	public MemberVO selectApplyInformation() {
		return (MemberVO) getSqlMapClientTemplate().queryForObject("Member.selectApplyInformation");	
	}
	
	
}
