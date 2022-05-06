package com.itsp.common;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HTTPSFilter implements Filter {

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws java.io.IOException, ServletException {

		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;

		String uri = req.getRequestURI();
		String protocol = req.getScheme().toLowerCase();
		//System.out.print("protocol = " + protocol);
		String domain = req.getServerName().toLowerCase();
		String port = Integer.toString(req.getServerPort());
		String toBeProtocol = "http";

		if (domain.equals("cgc.chugye.ac.kr")) {
			toBeProtocol = "https";
		}

		if (!protocol.equals(toBeProtocol)) {
			// Set response content type
			response.setContentType("text/html");

			// New location to be redirected
			String newLocation = toBeProtocol + "://" + domain + uri;

			String site = new String(newLocation);
			res.setStatus(HttpServletResponse.SC_MOVED_TEMPORARILY);
			res.setHeader("Location", site);
		}

		// Pass request back down the filter chain
		chain.doFilter(req, res);
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
	}
}
