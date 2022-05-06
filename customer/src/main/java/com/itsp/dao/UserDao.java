package com.itsp.dao;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.itsp.vo.UserVO;

public interface UserDao {	
	
	public Integer totalCount(UserVO UserVO);
	
	public UserVO selectUserInfo(Map<String, Object> params);
	
	/*public Integer totalCountBranch(MemberVO MemberVO);
	
	public Integer totalCountconfirmYn(Map<String, Object> params);
	
	public MemberVO selectApplyInformation();*/
	
}
