package com.itsp.vo.admin;

import java.io.Serializable;
import java.util.List;

import com.itsp.vo.AttachFiles;

@SuppressWarnings("serial")
public class ApplyVO implements Serializable {
	
	//인적사항  VO
		private int num;
		private String yy;
		private String term;
		private String applyNo;
		private String applyDate;
		private String confirmYn;
		private String confirmDate;
		private String confirmNo;
		private String branchSeq;
		private String branch;
		private String name;
		private String nameEng;
		private String birthDate;
		private int age;
		private String sex;
		private String nationality;
		private String zipCode;
		private String address1;
		private String address2;
		private String address3;
		private String pNumber1;
		private String pNumber2;
		private String pNumber3;
		private String mobileNumber;
		private String phoneNumber;
		private String officeNumber;
		private String email;
		private String mail1;
		private String mail2;
		private String mail3;
		private String password;
		private String diplomaDoc;
		private String careerDoc;
		private String researchDoc;
		private String syllabusDoc;
		private String passGubun;	
		private String nationCode;	
		
		private List<AttachFiles> attachFileList;
		private AttachFiles attachFile;
		
		public List<AttachFiles> getAttachFileList() {
			return attachFileList;
		}

		public void setAttachFileList(List<AttachFiles> attachFileList) {
			this.attachFileList = attachFileList;
		}

		public AttachFiles getAttachFile() {
			return attachFile;
		}

		public void setAttachFile(AttachFiles attachFile) {
			this.attachFile = attachFile;
		}
				
		public int getnum() {
			return num;
		}

		public void setnum(int i) {
			this.num = i;
		}
		
		public String getnationCode() {
			return nationCode;
		}

		public void setnationCode(String nationCode) {
			this.nationCode = nationCode;
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
		
		public String getapplyNo() {
			return applyNo;
		}

		public void setapplyNo(String applyNo) {
			this.applyNo = applyNo;
		}
		
		public String getapplyDate() {
			return applyDate;
		}

		public void setapplyDate(String applyDate) {
			this.applyDate = applyDate;
		}
		
		public String getconfirmYn() {
			return confirmYn;
		}

		public void setconfirmYn(String confirmYn) {
			this.confirmYn = confirmYn;
		}
		
		public String getconfirmDate() {
			return confirmDate;
		}

		public void setconfirmDate(String confirmDate) {
			this.confirmDate = confirmDate;
		}
		
		public String getconfirmNo() {
			return confirmNo;
		}

		public void setconfirmNo(String confirmNo) {
			this.confirmNo = confirmNo;
		}
		
		public String getbranchSeq() {
			return branchSeq;
		}

		public void setbranchSeq(String branchSeq) {
			this.branchSeq = branchSeq;
		}
		
		public String getbranch() {
			return branch;
		}

		public void setbranch(String branch) {
			this.branch = branch;
		}
		
		public String getname() {
			return name;
		}

		public void setname(String name) {
			this.name = name;
		}	
		
		public String getnameEng() {
			return nameEng;
		}

		public void setnameEng(String nameEng) {
			this.nameEng = nameEng;
		}	
		
		public String getbirthDate() {
			return birthDate;
		}

		public void setbirthDate(String birthDate) {
			this.birthDate = birthDate;
		}	
		
		public int getage() {
			return age;
		}

		public void setage(int age) {
			this.age = age;
		}	
		
		public String getsex() {
			return sex;
		}

		public void setsex(String sex) {
			this.sex = sex;
		}	
		
		public String getnationality() {
			return nationality;
		}

		public void setnationality(String nationality) {
			this.nationality = nationality;
		}	
		
		public String getzipCode() {
			return zipCode;
		}

		public void setzipCode(String zipCode) {
			this.zipCode = zipCode;
		}	
		
		public String getaddress1() {
			return address1;
		}

		public void setaddress1(String address1) {
			this.address1 = address1;
		}	
		
		public String getaddress2() {
			return address2;
		}

		public void setaddress2(String address2) {
			this.address2 = address2;
		}	
		
		public String getaddress3() {
			return address3;
		}

		public void setaddress3(String address3) {
			this.address3 = address3;
		}
		
		public String getpNumber1() {
			return pNumber1;
		}

		public void setpNumber1(String pNumber1) {
			this.pNumber1 = pNumber1;
		}
		
		public String getpNumber2() {
			return pNumber2;
		}

		public void setpNumber2(String pNumber2) {
			this.pNumber2 = pNumber2;
		}
		
		public String getpNumber3() {
			return pNumber3;
		}

		public void setpNumber3(String pNumber3) {
			this.pNumber3 = pNumber3;
		}	
		
		public String getmobileNumber() {
			return mobileNumber;
		}

		public void setmobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}	
		
		public String getphoneNumber() {
			return phoneNumber;
		}

		public void setphoneNumber(String phoneNumber) {
			this.phoneNumber = phoneNumber;
		}		
		
		public String getofficeNumber() {
			return officeNumber;
		}

		public void setofficeNumber(String officeNumber) {
			this.officeNumber = officeNumber;
		}	
		
		public String getemail() {
			return email;
		}

		public void setemail(String email) {
			this.email = email;
		}	
		
		public String getmail1() {
			return mail1;
		}

		public void setmail1(String mail1) {
			this.mail1 = mail1;
		}
		
		public String getmail2() {
			return mail2;
		}

		public void setmail2(String mail2) {
			this.mail2 = mail2;
		}
		
		public String getmail3() {
			return mail3;
		}

		public void setmail3(String mail3) {
			this.mail3 = mail3;
		}
		
		public String getpassword() {
			return password;
		}

		public void setpassword(String password) {
			this.password = password;
		}	
		
		public String getdiplomaDoc() {
			return diplomaDoc;
		}

		public void setdiplomaDoc(String diplomaDoc) {
			this.diplomaDoc = diplomaDoc;
		}	
		
		public String getcareerDoc() {
			return careerDoc;
		}

		public void setcareerDoc(String careerDoc) {
			this.careerDoc = careerDoc;
		}
		
		public String getresearchDoc() {
			return researchDoc;
		}

		public void setresearchDoc(String researchDoc) {
			this.researchDoc = researchDoc;
		}
		
		public String getsyllabusDoc() {
			return syllabusDoc;
		}

		public void setsyllabusDoc(String syllabusDoc) {
			this.syllabusDoc = syllabusDoc;
		}
		
		public String getpassGubun() {
			return passGubun;
		}

		public void setpassGubun(String passGubun) {
			this.passGubun = passGubun;
		}
	
	
	
	
}
