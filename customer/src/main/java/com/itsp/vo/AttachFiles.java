package com.itsp.vo;

import java.io.File;
import java.io.Serializable;

import com.itsp.common.Config;

/**
 * Model class of 첨부파일.
 * 
 */
public class AttachFiles implements Serializable {

	/** serialVersionUID. */
	private static final long serialVersionUID = 1L;
	
	/** 첨부파일시퀀스. */
	private String yy;
	
	/** 첨부파일시퀀스. */
	private String term;

	/** 첨부파일시퀀스. */
	private Integer seq;

	private String applyNo;
	
	/**첨부파일 종류**/
	private String kind;

	/** 실제파일이름. */
	private String realFileName;

	/** 실제파일경로 URL. */
	private String realFilePath;

	/** 저장된파일이름. */
	private String savedFileName;

	/** 저장된파일경로. */
	private String savedFilePath;

	/** 파일형식. */
	private String fileType;

	/** 파일확장자. */
	private String extention;

	/** 파일사이즈. */
	private Integer fileSize;

	/** 등록일. */
	private String regDate;

	/** 기타. *//*
	private String etc;*/

	private String formFieldName;
	/**
	 * Constructor.
	 */
	private String procStatus;

	public AttachFiles() {
	}

	/**
	 * Set the 첨부파일시퀀스.
	 * 
	 * @param seq
	 *            첨부파일시퀀스
	 */
	public void setSeq(Integer seq) {
		this.seq = seq;
	}

	/**
	 * Get the 첨부파일시퀀스.
	 * 
	 * @return 첨부파일시퀀스
	 */
	public Integer getSeq() {
		return this.seq;
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
	
	public String getkind() {
		return kind;
	}

	public void setkind(String kind) {
		this.kind = kind;
	}
	

	public String getapplyNo() {
		return applyNo;
	}

	public void setapplyNo(String applyNo) {
		this.applyNo = applyNo;
	}

	/**
	 * Set the 실제파일이름.
	 * 
	 * @param realFileName
	 *            실제파일이름
	 */
	public void setRealFileName(String realFileName) {
		this.realFileName = realFileName;
	}

	/**
	 * Get the 실제파일이름.
	 * 
	 * @return 실제파일이름
	 */
	public String getRealFileName() {
		return this.realFileName;
	}

	/**
	 * Set the 저장된파일이름.
	 * 
	 * @param savedFileName
	 *            저장된파일이름
	 */
	public void setSavedFileName(String savedFileName) {
		this.savedFileName = savedFileName;
	}

	/**
	 * Get the 저장된파일이름.
	 * 
	 * @return 저장된파일이름
	 */
	public String getSavedFileName() {
		return this.savedFileName;
	}

	/**
	 * Set the 저장된파일경로.
	 * 
	 * @param savedFilePath
	 *            저장된파일경로
	 */
	public void setSavedFilePath(String savedFilePath) {
		this.savedFilePath = savedFilePath;
	}

	/**
	 * Get the 저장된파일경로.
	 * 
	 * @return 저장된파일경로
	 */
	public String getSavedFilePath() {
		return this.savedFilePath;
	}

	/**
	 * Set the 파일형식.
	 * 
	 * @param fileType
	 *            파일형식
	 */
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	/**
	 * Get the 파일형식.
	 * 
	 * @return 파일형식
	 */
	public String getFileType() {
		return this.fileType;
	}

	/**
	 * Set the 파일확장자.
	 * 
	 * @param extention
	 *            파일확장자
	 */
	public void setExtention(String extention) {
		this.extention = extention;
	}

	/**
	 * Get the 파일확장자.
	 * 
	 * @return 파일확장자
	 */
	public String getExtention() {
		return this.extention;
	}

	/**
	 * Set the 파일사이즈.
	 * 
	 * @param fileSize
	 *            파일사이즈
	 */
	public void setFileSize(Integer fileSize) {
		this.fileSize = fileSize;
	}

	/**
	 * Get the 파일사이즈.
	 * 
	 * @return 파일사이즈
	 */
	public Integer getFileSize() {
		return this.fileSize;
	}

	/**
	 * Set the 등록일.
	 * 
	 * @param regDate
	 *            등록일
	 */

	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}

	/**
	 * Get the 등록일.
	 * 
	 * @return 등록일
	 */
	public String getRegDate() {
		return regDate;
	}

	/**
	 * Set the 기타.
	 * 
	 * @param etc
	 *            기타
	 *//*
	public void setEtc(String etc) {
		this.etc = etc;
	}

	*//**
	 * Get the 기타.
	 * 
	 * @return 기타
	 *//*
	public String getEtc() {
		return this.etc;
	}*/

	/**
	 * {@inheritDoc}
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((seq == null) ? 0 : seq.hashCode());
		return result;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		AttachFiles other = (AttachFiles) obj;
		if (seq == null) {
			if (other.seq != null) {
				return false;
			}
		} else if (!seq.equals(other.seq)) {
			return false;
		}
		return true;
	}

	public String getFormFieldName() {
		return formFieldName;
	}

	public void setFormFieldName(String formFieldName) {
		this.formFieldName = formFieldName;
	}

	public String getRealFilePath() {
		return realFilePath;
	}

	public void setRealFilePath(String realFilePath) {
		this.realFilePath = realFilePath;
	}

	public String getProcStatus() {
		return procStatus;
	}

	public void setProcStatus(String procStatus) {
		this.procStatus = procStatus;
	}

	public static String getRealFilePath(String realFilePath) {
		return Config.COMMON_FILE_PATH + File.separator + realFilePath;
	}

}
