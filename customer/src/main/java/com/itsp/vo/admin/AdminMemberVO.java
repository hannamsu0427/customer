package com.itsp.vo.admin;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class AdminMemberVO implements Serializable {
	
	private String yy;
	private String term;
	private String userId;
	private String userName;
	private String dptCd1;
	private String dptCd2;
	private String password;
	
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
	
	public String getpassword() {
		return password;
	}

	public void setpassword(String password) {
		this.password = password;
	}
	
	public String getuserName() {
		return userName;
	}

	public void setuserName(String userName) {
		this.userName = userName;
	}
	
	public String getdptCd1() {
		return dptCd1;
	}

	public void setdptCd1(String dptCd1) {
		this.dptCd1 = dptCd1;
	}
	
	public String getdptCd2() {
		return dptCd2;
	}

	public void setdptCd2(String dptCd2) {
		this.dptCd2 = dptCd2;
	}
}
