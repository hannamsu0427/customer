package com.itsp.common;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.itsp.logger.LoggerInterceptor;

public class AuthInterceptor extends HandlerInterceptorAdapter {
	 protected Log log = LogFactory.getLog(AuthInterceptor.class);
	 

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		// TODO Auto-generated method stub
	}

	@Override
	public void afterConcurrentHandlingStarted(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// TODO Auto-generated method stub
	}

	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, HttpSession session,
			ModelAndView modelAndView) throws Exception {
		
		//System.out.println("//////////////////////////////AutiInterceptor Start1///////////////////////////////////");
		
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();	
		if(session.getAttribute("name") == null || session.getAttribute("name") == "") {
			out.println("<script>location.href='/logIn.do';</script>"); 
			out.flush();			
		}
		
		//System.out.println("//////////////////////////////AutiInterceptor End1///////////////////////////////////");
		
		// TODO Auto-generated method stub
	}

	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {	
		
		//System.out.println("//////////////////////////////AutiInterceptor Start2///////////////////////////////////");
		
		String uri = request.getRequestURI();
		ArrayList<String> exceptURIList = new ArrayList<String>();
		exceptURIList.add("/logIn.do");
		exceptURIList.add("/logInProc.do");
		
		//exceptURIList.add("/logOutProc.do");
		//exceptURIList.add("/customerList.do");
		//exceptURIList.add("/editCustomer.do");		
		//exceptURIList.add("/editProc.do");
		//exceptURIList.add("/viewProc.do");
		//exceptURIList.add("/addCustomer.do");
		//exceptURIList.add("/dataSaveProc.json");	
		//exceptURIList.add("/dataUpdateProc.json");
		//exceptURIList.add("/addProc/dataSaveProc.json");
		//exceptURIList.add("/customer/dataDeleteProc.json");
		//exceptURIList.add("/proc/dataDeleteProc.json");		
		
		//System.out.println("uriuriuriuriuriuriuriuriuriuriuriuriuriuriuriuriuriuriuriuri : " + uri);
 		// URL�삁�쇅�벑濡�
		if (exceptURIList.contains(uri))
			return true;

		@SuppressWarnings("unchecked")
		
		String name = (String) request.getSession().getAttribute("name");
		
		boolean isOK = false;
		
		if (name != null) {	
			
			isOK = true;

		} else {
			
			if (isOK == false) {				
				request.getSession().removeAttribute(Config.SESSION_MEMBER);
				request.getSession().invalidate();
				response.sendRedirect("/logIn.do");
				return false;
			}
			
			String agreement_chk = request.getParameter("agreement");
			
			
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			
			if(!"ok".equals(agreement_chk)) {
				out.println("<script>alert('잘못된 접근 입니다.'); location.href='/logIn.do';</script>"); 
				out.flush();
			}
			
		}
		
		//System.out.println("//////////////////////////////AutiInterceptor End2///////////////////////////////////");
		return true;
	}

}
