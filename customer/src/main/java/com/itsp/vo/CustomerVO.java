package com.itsp.vo;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class CustomerVO implements Serializable {
	
	private Integer rnum;
	private Integer seq;
	private String name;
	private String phone1;
	private String phone2;
	private String phone3;
	private String contents;
	private String regDate;
	private String sex; 
	private Integer totalPrice; 
	
	public Integer gettotalPrice() {
		return totalPrice;
	}

	public void settotalPrice(Integer totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	public Integer getseq() {
		return seq;
	}

	public void setseq(Integer seq) {
		this.seq = seq;
	}
	
	public Integer getrnum() {
		return rnum;
	}

	public void setrnum(Integer rnum) {
		this.rnum = rnum;
	}
	
	public String getname() {
		return name;
	}

	public void setname(String name) {
		this.name = name;
	}
	
	public String getphone1() {
		return phone1;
	}

	public void setphone1(String phone1) {
		this.phone1 = phone1;
	}
	
	public String getphone2() {
		return phone2;
	}

	public void setphone2(String phone2) {
		this.phone2 = phone2;
	}
	
	public String getphone3() {
		return phone3;
	}

	public void setphone3(String phone3) {
		this.phone3 = phone3;
	}
	
	public String getcontents() {
		return contents;
	}

	public void setcontents(String contents) {
		this.contents = contents;
	}
	
	public String getregDate() {
		return regDate;
	}

	public void setregDate(String regDate) {
		this.regDate = regDate;
	}
	
	public String getsex() {
		return sex;
	}

	public void setsex(String sex) {
		this.sex = sex;
	}
	
		
}
