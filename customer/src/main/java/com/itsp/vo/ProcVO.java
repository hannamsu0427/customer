package com.itsp.vo;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class ProcVO implements Serializable {
	
	private Integer rnum;
	private Integer seq;
	private String name;
	private String phone3;
	private Integer parentSeq;
	private String procDate;
	private String procCode;
	private String practitionerCode;
	private String procExt;
	private Integer price;
	private String procName;
	private String practitionerName;
	
	public Integer getrnum() {
		return rnum;
	}

	public void setrnum(Integer rnum) {
		this.rnum = rnum;
	}
	
	public Integer getseq() {
		return seq;
	}

	public void setseq(Integer seq) {
		this.seq = seq;
	}
	
	public String getname() {
		return name;
	}

	public void setname(String name) {
		this.name = name;
	}
	
	public String getphone3() {
		return phone3;
	}

	public void setphone3(String name) {
		this.phone3 = phone3;
	}
	
	public Integer getparentSeq() {
		return parentSeq;
	}

	public void setparentSeq(Integer parentSeq) {
		this.parentSeq = parentSeq;
	}
	
	public String getprocDate() {
		return procDate;
	}

	public void setprocDate(String procDate) {
		this.procDate = procDate;
	}
	
	public String getprocCode() {
		return procCode;
	}

	public void setprocCode(String procCode) {
		this.procCode = procCode;
	}
	
	public String getpractitionerCode() {
		return practitionerCode;
	}

	public void setpractitionerCode(String practitionerCode) {
		this.practitionerCode = practitionerCode;
	}
	
	public String getprocExt() {
		return procExt;
	}

	public void setprocExt(String procExt) {
		this.procExt = procExt;
	}
	
	public Integer getprice() {
		return price;
	}

	public void setprice(Integer price) {
		this.price = price;
	}
	
	public String getprocName() {
		return procName;
	}

	public void setprocName(String procName) {
		this.procName = procName;
	}
	
	public String getpractitionerName() {
		return practitionerName;
	}

	public void setpractitionerName(String practitionerName) {
		this.practitionerName = practitionerName;
	}
	
		
}
