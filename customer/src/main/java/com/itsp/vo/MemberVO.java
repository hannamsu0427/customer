package com.itsp.vo;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class MemberVO implements Serializable {
	
	//대학, 학과, 지원분야 코드 VO
	private String name;
	private String email;	
	private String password;
	private String yy;
	private String term;
	private String rdateFrom;
	private String rdateTo;
	
	public String getname() {
		return name;
	}

	public void setname(String name) {
		this.name = name;
	}
	
	public String getemail() {
		return email;
	}

	public void setemail(String email) {
		this.email = email;
	}
	
	public String getpassword() {
		return password;
	}

	public void setpassword(String password) {
		this.password = password;
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
	
	public String getrdateFrom() {
		return rdateFrom;
	}

	public void setrdateFrom(String rdateFrom) {
		this.rdateFrom = rdateFrom;
	}
	
	public String getrdateTo() {
		return rdateTo;
	}

	public void setrdateTo(String rdateTo) {
		this.rdateTo = rdateTo;
	}
	
	
}
