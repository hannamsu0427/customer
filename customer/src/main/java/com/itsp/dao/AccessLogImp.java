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

public class AccessLogImp extends SqlMapClientDaoSupport implements AccessLogDao {
	
	@SuppressWarnings("unchecked")
	@Override
	public void insertProcAccessLogData(Map<String, Object> params) {
		getSqlMapClientTemplate().insert("AccessLog.insertProcAccessLogData", params);
	}
}
