package com.itsp.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class CustomGenericException extends RuntimeException {
		private static final Logger logger = LoggerFactory.getLogger(CustomGenericException.class);	 
		private static final long serialVersionUID = 1L;
	 
		private String errCode;
		private String errMsg;
		private String alrtType;
	 
		public String getErrCode() {
			return errCode;
		}
	 
		public void setErrCode(String errCode) {
			this.errCode = errCode;
		}
	 
		public String getErrMsg() {
			return errMsg;
		}
	 
		public void setErrMsg(String errMsg) {
			this.errMsg = errMsg;
		}
	 
		public String getAlrtType() {
			return alrtType;
		}

		public void setAlrtType(String alrtType) {
			this.alrtType = alrtType;
		}

		public CustomGenericException(String errCode, String errMsg) {
			this.errCode = errCode;
			this.errMsg = errMsg;
			logger.trace(this.errCode+" "+this.errMsg);
		}
		
		public CustomGenericException(String errCode, String errMsg, String alrtType) {
			this.errCode = errCode;
			this.errMsg = errMsg;
			this.alrtType = alrtType;
			logger.trace(this.errCode+" "+this.errMsg);
		}
	 
	}

