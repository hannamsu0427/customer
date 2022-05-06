package com.itsp.vo;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class UserVO implements Serializable {
	
	//대학, 학과, 지원분야 코드 VO
	private String id;
	private String name;
	private String password;
	private Integer seq;
	
	public String getid() {
		return id;
	}

	public void setid(String id) {
		this.id = id;
	}	
	
	public String getname() {
		return name;
	}

	public void setname(String name) {
		this.name = name;
	}
	
	public String getpassword() {
		return password;
	}

	public void setpassword(String password) {
		this.password = password;
	}	
	
	public Integer getseq() {
		return seq;
	}

	public void setseq(Integer seq) {
		this.seq = seq;
	}
	
	
}
