package com.itsp.vo;

public class ResponseHeaderVO {
	public final static String SUCCESS = "00";
	public final static String DUP_USER_EMAIL = "89";
	public final static String NO_LOGIN = "90";
	public final static String NO_AUTH = "91";
	public final static String DUP_USER_ID = "92";
	public final static String DUP_USER_NAME = "93";
	public final static String ID_FIND = "94";
	public final static String FAIL = "99";
	public final static String DUP_SITE_ID = "88";
	public final static String DUP_BRANCHSEQ = "55";
	public final static String SUCCESS_MESSAGE = "저장 성공했습니다.";
	public final static String NO_LOGIN_MESSAGE = "로그인 하여 주십시오.";
	public final static String NO_AUTH_MESSAGE = "권한이 없습니다.";
	public final static String DUP_USER_ID_MESSAGE = "아이디가 중복되었습니다.";
	public final static String DUP_USER_EMAIL_MESSAGE = "이메일이 중복되었습니다.";
	public final static String DUP_USER_NAME_MESSAGE = "이름이 중복되었습니다.";
	public final static String ID_FIND_NAME_MESSAGE = "아이디가 존재합니다.";
	public final static String FAIL_MESSAGE = "실패했습니다.";
	public final static String DUP_SITE_ID_MESSAGE = "중복 된 사이트 아디디가 존재하여 실패하였습니다.\n사이트 주소와 사이트 아이디를 확인 바랍니다. ";
	public final static String DUP_BRANCHSEQ_MESSAGE = "이미 등록된 핸드폰번호가 있습니다.\n"; 
	public final static String BLANK_DATA_MESSAGE = "시술내용, 시술금액, 시술담당자는 필수 값 입니다. \n고객정보만 저장합니다.\n고객을 검색해서 시술을 등록해주세요."; 
	
	private String code;
	private String message;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
		String message = "";
		if (SUCCESS.equals(code)) {
			message = SUCCESS_MESSAGE;
		} else if (NO_LOGIN.equals(code)) {
			message = NO_LOGIN_MESSAGE;
		} else if (NO_AUTH.equals(code)) {
			message = NO_AUTH_MESSAGE;
		} else if (DUP_USER_ID.equals(code)) {
			message = DUP_USER_ID_MESSAGE;
		} else if (DUP_USER_EMAIL.equals(code)) {
			message = DUP_USER_EMAIL_MESSAGE;
		} else if (DUP_USER_NAME.equals(code)) {
			message = DUP_USER_NAME_MESSAGE;
		} else if (ID_FIND.equals(code)) {
			message = ID_FIND_NAME_MESSAGE;
		} else if (FAIL.equals(code)) {
			message = FAIL_MESSAGE;
		} else if (DUP_SITE_ID.equals(code)) {
			message = DUP_SITE_ID_MESSAGE;
		} else if (DUP_BRANCHSEQ.equals(code)) {
			message = DUP_BRANCHSEQ_MESSAGE;
		}
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
