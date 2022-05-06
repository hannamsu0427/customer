package com.itsp.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

public class RequestWrapper extends HttpServletRequestWrapper {

	public RequestWrapper(HttpServletRequest servletRequest) {
		super(servletRequest);
	}

	public String[] getParameterValues(String parameter) {
		String[] values = super.getParameterValues(parameter);

		if (values == null) {
			return null;
		}

		int count = values.length;
		String[] encodedValues = new String[count];
		for (int i = 0; i < count; i++) {
			encodedValues[i] = cleanXSS(values[i]);
		}

		return encodedValues;
	}

	public String getParameter(String parameter) {
		String value = super.getParameter(parameter);
		if (value == null) {
			return null;
		}
		return cleanXSS(value);
	}

	public String getHeader(String name) {
		String value = super.getHeader(name);
		if (value == null) {
			return null;
		}
		return cleanXSS(value);
	}

	/**
	 * 크로스사이트 스크립팅 필터처리
	 * 
	 * @param value
	 * @return
	 */
	private String cleanXSS(String value) {

		value = value.replaceAll("<", "&lt");
		value = value.replaceAll(">", "&gt;");
		value = value.replaceAll("\\(", "(");
		value = value.replaceAll("\\)", ")");
		value = value.replaceAll("'", "'");
		value = value.replaceAll("eval\\((.*)\\)", "");
		value = value.replaceAll("[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']", "\"\"");
		value = value.replaceAll("[\\\"\\\'][\\s]*vbscript:(.*)[\\\"\\\']", "\"\"");
		value = value.replaceAll("script", "");
		value = value.replaceAll("onload", "no_onload");
		value = value.replaceAll("expression", "no_expression");
		value = value.replaceAll("onmouseover", "no_onmouseover");
		value = value.replaceAll("onmouseout", "no_onmouseout");
		value = value.replaceAll("onclick", "no_onclick");
		return value;
	}

}