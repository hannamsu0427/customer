package com.itsp.vo;

import java.util.List;
import java.util.Map;

public class ResponseVO {
	private ResponseHeaderVO header;
	private List<?> body;
	private Map<String, Object> data;

	public ResponseHeaderVO getHeader() {
		return header;
	}

	public void setHeader(ResponseHeaderVO header) {
		this.header = header;
	}

	public List<?> getBody() {
		return body;
	}

	public void setBody(List<?> body) {
		this.body = body;
	}

	public Map<String, Object> getData() {
		return data;
	}

	public void setData(Map<String, Object> data) {
		this.data = data;
	}

}
