package com.itsp.vo.admin;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class UserVO implements Serializable {
	
	//대학, 학과, 지원분야 코드 VO
	private String num;
	private String yy;
	private String term;
	private String userId;
	private String userName;
	private String password;
	private String univeList;
	private String depList;	
	private String dptCd1;
	private String dptCd1Name;
	private String dptCd2;
	private String dptCd2Name;
	private String etc;
	private String regDate;
	private String regId;
	private String regName;
	private String regIp;
	
	public String getnum() {
		return num;
	}

	public void setnum(String num) {
		this.num = num;
	}
	
	public String getyy() {
		return yy;
	}

	public void setyy(String yy) {
		this.yy = yy;
	}
	
	public String getterm() {
		return term;
	}

	public void setterm(String term) {
		this.term = term;
	}
	
	public String getuserId() {
		return userId;
	}

	public void setuserId(String userId) {
		this.userId = userId;
	}
	
	public String getuserName() {
		return userName;
	}

	public void setuserName(String userName) {
		this.userName = userName;
	}
	
	public String getpassword() {
		return password;
	}

	public void setpassword(String password) {
		this.password = password;
	}	
	
	public String getuniveList() {
		return univeList;
	}

	public void setuniveList(String univeList) {
		this.univeList = univeList;
	}
	
	public String getdepList() {
		return depList;
	}

	public void setdepList(String depList) {
		this.depList = depList;
	}
	
	public String getdptCd1() {
		return dptCd1;
	}

	public void setdptCd1(String dptCd1) {
		this.dptCd1 = dptCd1;
	}
	
	public String getdptCd1Name() {
		return dptCd1Name;
	}

	public void setdptCd1Name(String dptCd1Name) {
		this.dptCd1Name = dptCd1Name;
	}
	
	public String getdptCd2() {
		return dptCd2;
	}

	public void setdptCd2(String dptCd2) {
		this.dptCd2 = dptCd2;
	}
	
	public String getdptCd2Name() {
		return dptCd2Name;
	}	

	public void setdptCd2Name(String dptCd2Name) {
		this.dptCd2Name = dptCd2Name;
	}
	
	public String getetc() {
		return etc;
	}	

	public void setetc(String etc) {
		this.etc = etc;
	}
	
	public String getregDate() {
		return regDate;
	}	

	public void setregDate(String regDate) {
		this.regDate = regDate;
	}
	
	public String getregId() {
		return regId;
	}	

	public void setregId(String regId) {
		this.regId = regId;
	}
	
	public String getregName() {
		return regName;
	}	

	public void setregName(String regName) {
		this.regName = regName;
	}
	
	public String getregIp() {
		return regIp;
	}	

	public void setregIp(String regIp) {
		this.regIp = regIp;
	}
	
	
	
	
}
