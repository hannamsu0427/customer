package com.itsp.common;

import java.io.PrintWriter;
import java.net.InetAddress;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.itsp.common.CommandMap;
import com.itsp.common.Config;
import com.itsp.dao.MemberDao;
import com.itsp.vo.MemberVO;
import com.itsp.vo.UserVO;
import com.itsp.dao.UserDao;
import com.itsp.vo.ResponseHeaderVO;
import com.itsp.vo.ResponseVO;
import com.itsp.common.CommUtils;

@Controller
public class MemeberController {

	private static final Logger logger = LoggerFactory.getLogger(MemeberController.class);
	
	@Autowired
	MemberDao MemberDao; 
	
	@Autowired
	UserDao UserDao; 

	@RequestMapping(value = "/logIn.do")
	public ModelAndView logIn(@ModelAttribute MemberVO MemberVO, HttpServletRequest request, HttpServletResponse response, HttpSession session)
			throws Exception {
		ModelAndView mv = new ModelAndView("/login");
		
		session.removeAttribute(Config.SESSION_MEMBER);
		session.invalidate();
	    
		try { 
			System.out.println("LOGIN PAGE");	
			Integer count = MemberDao.totalCount(MemberVO);
			mv.addObject("count", count);
	        
		}catch (Exception e) {
			
			e.printStackTrace();
		}
		
		return mv;
	}

	@RequestMapping(value = "/logInProc.do", method = RequestMethod.POST)
	public ModelAndView logInProc(@ModelAttribute MemberVO MemberVO, UserVO UserVO, HttpServletRequest request, HttpServletResponse response, HttpSession session) throws Exception {
		ModelAndView mv = new ModelAndView("redirect:/logIn.do");
		
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		ResponseVO resVO = new ResponseVO();
		ResponseHeaderVO responseHeader = new ResponseHeaderVO();
		
	
		
		String id = request.getParameter("id");
		String password = request.getParameter("password");
		
		System.out.println("id : " + id);
		System.out.println("password : " + password);
			 
		
		try {	
			UserVO.setid(id);
			UserVO.setpassword(password);	
			Integer count = UserDao.totalCount(UserVO);	 
			System.out.println("countcountcountcount : " + count);
			if(count > 0) {
				//로그인 사용자 정보 select
				Map<String, Object> loginParams = new HashMap<String, Object>();
				loginParams.put("id", id);
				loginParams.put("password", password);		
				UserVO userInfo = UserDao.selectUserInfo(loginParams);
				
				session.setAttribute("id", userInfo.getid());
				session.setAttribute("name", userInfo.getname());
				
				System.out.println("session.getid : " + session.getAttribute("id"));
				System.out.println("session.getname : " + session.getAttribute("name"));
				mv = new ModelAndView("redirect:/customerList.do?flag=customer");
			}	
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return mv;
	}

	@RequestMapping("/logOutProc.do")
	public ModelAndView logOutProc(HttpSession session) throws Exception {
		ModelAndView mv = new ModelAndView("redirect:/logIn.do");
		
		/*Map<String, Object> params = new HashMap<String, Object>();
		params.put("yy", session.getAttribute("yy"));
		params.put("term", session.getAttribute("term"));
		params.put("applyNo", session.getAttribute("applyNo"));
		params.put("hostName", InetAddress.getLocalHost().getHostName());
		params.put("ipAddress", InetAddress.getLocalHost().getHostAddress());
		
		System.out.println(session.getAttribute("yy"));
		System.out.println(session.getAttribute("term"));
		System.out.println(session.getAttribute("applyNo"));
		System.out.println(InetAddress.getLocalHost().getHostName());
		System.out.println(InetAddress.getLocalHost().getHostAddress());
		System.out.println("LOGOUT COMPLETE");
		
		params.put("logGubun", "LOGOUT");	
		
		AccessLogDao.insertProcAccessLogData(params);*/
		
		session.invalidate();
		return mv;
	}

	/*@RequestMapping(value = "/idFind.do")
	public ModelAndView idFind(Map<String, Object> commandMap, HttpSession session, HttpServletRequest request)
			throws Exception {
		ModelAndView mv = new ModelAndView("/idFind");
		return mv;
	}
	
	@RequestMapping(value = "/idFindProc", method = RequestMethod.POST)
	public @ResponseBody ResponseVO idFindProc(CommandMap commandMap, HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		ResponseVO resVO = new ResponseVO();
		ResponseHeaderVO responseHeader = new ResponseHeaderVO();

		Map<String, Object> map = new HashMap<String, Object>();
		try {
			System.out.println("ma Data = " + commandMap.getMap());
			if("T".equals(CommUtils.checkNull(commandMap.getMap().get("AUTH").toString()))) {
				commandMap.getMap().remove("EMAIL");
				map = TeacherService.selectData(commandMap.getMap());
			}else {
				map = MemberService.selectData(commandMap.getMap());
			}
			responseHeader.setCode(ResponseHeaderVO.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseHeader.setCode(ResponseHeaderVO.FAIL);
			responseHeader.setMessage(ResponseHeaderVO.FAIL_MESSAGE);
		}
		
		resVO.setHeader(responseHeader);
		resVO.setData(map);
		return resVO;
	}

	@RequestMapping(value = "/pwFind.do")
	public ModelAndView pwFind(Map<String, Object> commandMap, HttpSession session, HttpServletRequest request)
			throws Exception {
		ModelAndView mv = new ModelAndView("/pwFind");
		return mv;
	}
	
	@RequestMapping(value = "/pwUpdateProc", method = RequestMethod.POST)
	public @ResponseBody ResponseVO pwUpdateProc(CommandMap commandMap, HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		ResponseVO resVO = new ResponseVO();
		ResponseHeaderVO responseHeader = new ResponseHeaderVO();

		Map<String, Object> map = new HashMap<String, Object>();
		try {
			System.out.println("ma Data = " + commandMap.getMap());
			if("T".equals(CommUtils.checkNull(commandMap.getMap().get("AUTH").toString()))) {
				map = TeacherService.selectData(commandMap.getMap());
			}else {
				map = MemberService.selectData(commandMap.getMap());
			}
			
			String mail = map.get("EMAIL").toString();
			int idx = mail.indexOf("@");
			String PASSWORD = mail.substring(0, idx);
			map.put("PASSWORD", CommUtils.encSHA512(PASSWORD));
			
			if("T".equals(CommUtils.checkNull(commandMap.getMap().get("AUTH").toString()))) {
				TeacherService.updateDataProc(map);
			}else {
				MemberService.updateDataProc(map);
			}
			
			responseHeader.setCode(ResponseHeaderVO.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseHeader.setCode(ResponseHeaderVO.FAIL);
			responseHeader.setMessage(ResponseHeaderVO.FAIL_MESSAGE);
		}
		
		resVO.setHeader(responseHeader);
		resVO.setData(map);
		return resVO;
	}
	
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/myPage/edit.do")
	public ModelAndView openBoardWrite(CommandMap commandMap, HttpSession session) throws Exception {
		
		ModelAndView mv = new ModelAndView();
		Map<String, Object> map  = new HashMap<String, Object>();
		if (session.getAttribute("sessionScopeMember") != null) {
			Map<String, Object> sessionData = new HashMap<String, Object>();
			sessionData = (Map<String, Object>) session.getAttribute("sessionScopeMember");
			if("T".equals(sessionData.get("AUTH").toString())) {
				commandMap.put("IDX", sessionData.get("IDX").toString());
				mv = new ModelAndView("/teacher/edit");
				map = TeacherService.selectData(commandMap.getMap());
				mv.addObject("map", map);
			}else{
				commandMap.put("IDX", sessionData.get("IDX").toString());
				MemberService.updateLoginDate(commandMap.getMap());
				mv = new ModelAndView("/member/edit");
				map = MemberService.selectData(commandMap.getMap());
				mv.addObject("data", map);
			}
		}
		
		mv.addObject("flag", "myPage");
		return mv;
	}*/

}
