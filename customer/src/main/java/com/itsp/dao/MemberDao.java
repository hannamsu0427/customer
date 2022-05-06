package com.itsp.dao;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.itsp.vo.MemberVO;

public interface MemberDao {	
	
	public Integer totalCount(MemberVO MemberVO);
	
	public Integer totalCountBranch(MemberVO MemberVO);
	
	public Integer totalCountconfirmYn(Map<String, Object> params);
	
	public MemberVO selectApplyInformation();
	
}
