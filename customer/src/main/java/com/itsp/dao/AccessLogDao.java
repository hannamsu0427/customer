package com.itsp.dao;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.itsp.vo.MemberVO;

public interface AccessLogDao {	
	
	void insertProcAccessLogData(Map<String, Object> params);
	
}

	
