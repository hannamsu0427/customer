package com.itsp.controller;

import java.io.PrintWriter;
import java.net.Inet4Address;
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

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.itsp.common.CommandMap;
import com.itsp.common.Config;
import com.itsp.common.PageUtil;
import com.itsp.dao.CustomerDao;
import com.itsp.vo.CustomerVO;
import com.itsp.dao.ProcDao;
import com.itsp.vo.ProcVO;
import com.itsp.vo.ResponseHeaderVO;
import com.itsp.vo.ResponseVO;
import com.itsp.common.CommUtils;

/*import com.itsp.service.TeacherService;
import com.itsp.vo.ResponseHeaderVO;
import com.itsp.vo.ResponseVO;*/

@Controller
public class ProcController {

	Logger log = Logger.getLogger(this.getClass());
	
	@Autowired
	CustomerDao CustomerDao;
	
	@Autowired
	ProcDao ProcDao;
	
	@RequestMapping(value = "/procList.do")
	public ModelAndView procList(Map<String, Object> commandMap, HttpSession session, HttpServletRequest request, HttpServletResponse response
			,@RequestParam(defaultValue = "") String searchBy, @RequestParam(defaultValue = "") String searchValue
			,@RequestParam(defaultValue = "1") String pageNum, @RequestParam(defaultValue = "") String flag
			,@RequestParam(defaultValue = "") String procDate, @RequestParam(defaultValue = "") String startDay
			,@RequestParam(defaultValue = "") String endDay)
			throws Exception {
		
		ModelAndView mv = new ModelAndView("proc/procList");
		System.out.println("flag : " + flag);
		//오늘날짜 셋팅
		Date today = new Date();	        
		SimpleDateFormat date = new SimpleDateFormat("yyyyMMdd");
		mv.addObject("today", date.format(today).toString());
		
		Map<String, Object> params = new HashMap<String, Object>();
		if("day".equals(searchBy)) {
			searchValue = "";
			procDate = "";
		}else if("oneDay".equals(searchBy)){
			searchValue = "";
			startDay = "";
			endDay = "";
		}else {
			procDate = "";
			startDay = "";
			endDay = "";
		}
		params.put("searchBy", searchBy);
		params.put("searchValue", searchValue);
		params.put("procDate", procDate);
		params.put("startDay", startDay);
		params.put("endDay", endDay);
		
		//페이징 처리
		Integer count = ProcDao.selectPageCount(params);		
		Map<String, Object> pageMap = PageUtil.pageMap(count, pageNum, "20");
		mv.addObject("pageMap", pageMap);
		Integer startNum = Integer.valueOf(pageMap.get("startNum").toString());
		if(startNum != 0) {
			startNum = startNum-1;
		}
		params.put("startNum", startNum);
		params.put("endNum", pageMap.get("endNum"));
		
		
		List<ProcVO> ProcList = ProcDao.selectProcList(params);
		List<ProcVO> PriceList = ProcDao.selectPriceList(params);
		
		Integer totalPrice = 0;
		
		for(Integer i = 0; i<PriceList.size(); i++) {
			totalPrice += PriceList.get(i).getprice();
		}		
			
		mv.addObject("totalPrice", totalPrice);
		mv.addObject("count", count);
		mv.addObject("procDate", procDate);
		mv.addObject("startDay", startDay);
		mv.addObject("endDay", endDay);
		mv.addObject("searchBy", searchBy);
		mv.addObject("searchValue", searchValue);
		mv.addObject("ProcList", ProcList);
		
		/*Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("searchBy", searchBy);
		params.put("searchValue", searchValue);
		
		//페이징 처리
		Integer count = CustomerDao.selectPageCount(params);		
		Map<String, Object> pageMap = PageUtil.pageMap(count, pageNum, "20");
		mv.addObject("pageMap", pageMap);
		Integer startNum = Integer.valueOf(pageMap.get("startNum").toString());
		if(startNum != 0) {
			startNum = startNum-1;
		}
		params.put("startNum", startNum);
		params.put("endNum", pageMap.get("endNum"));
		
		List<CustomerVO> List = CustomerDao.selectCustomerList(params);		
		
		for(Integer i=0; i<List.size(); i++) {
			Integer seq = List.get(i).getseq();
			params.put("seq", seq);			
			CustomerVO data = CustomerDao.selectCustomerData(params);
			List.get(i).settotalPrice(data.gettotalPrice());
		}
		mv.addObject("flag", flag);
		mv.addObject("List", List);*/
		
		mv.addObject("flag", flag); 
		return mv;
	}
	
	@RequestMapping(value = "/viewProc.do")
	public ModelAndView viewProc(@ModelAttribute ProcVO ProcVO, HttpSession session, HttpServletRequest request, HttpServletResponse response
			, @RequestParam(defaultValue = "") String seq, @RequestParam(defaultValue = "") String flag)
			throws Exception {
		
		ModelAndView mv = new ModelAndView("proc/viewProc");
		Map<String, Object> CustomerDataParams = new HashMap<String, Object>();
		CustomerDataParams.put("seq", seq);
		CustomerVO customerData = CustomerDao.selectCustomerData(CustomerDataParams);
		mv.addObject("customerData", customerData);
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("parent_seq", seq);
		List<ProcVO> ProcList = ProcDao.selectProcList(params);
		
		mv.addObject("flag", flag);
		mv.addObject("ProcList", ProcList);
		
		return mv;
	}
	
	@RequestMapping(value = "/editProc.do")
	public ModelAndView editProc(Map<String, Object> commandMap, HttpSession session, HttpServletRequest request, HttpServletResponse response
			, @RequestParam(defaultValue = "") String seq, @RequestParam(defaultValue = "") String action
			, @RequestParam(defaultValue = "") String flag)
			throws Exception {
		//action addProc : 고객정보 수정
		ModelAndView mv = new ModelAndView("proc/editProc");
		
		//오늘날짜 셋팅
		Date today = new Date();	        
	    SimpleDateFormat date = new SimpleDateFormat("yyyyMMdd");
	    mv.addObject("today", date.format(today).toString());
		
		Map<String, Object> customerParams = new HashMap<String, Object>();
		customerParams.put("seq", seq);
		CustomerVO customerData = CustomerDao.selectCustomerData(customerParams);
		mv.addObject("customerData", customerData);
		
		Map<String, Object> procParams = new HashMap<String, Object>();
		procParams.put("parent_seq", seq);
		List<ProcVO> ProcList = ProcDao.selectProcList(procParams);
		
		mv.addObject("flag", flag);
		mv.addObject("ProcList", ProcList);
		
		
		return mv;
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(headers = "Content-Type=application/json", value = "/addProc/dataSaveProc", method = RequestMethod.POST)
	public @ResponseBody ResponseVO dataSaveProc(@ModelAttribute ProcVO ProcVO, @RequestBody HashMap<String, Object> map, HttpSession session) throws Exception {
		
		ResponseVO resVO = new ResponseVO();
		ResponseHeaderVO responseHeader = new ResponseHeaderVO();
		
		ProcVO.setparentSeq(Integer.valueOf(map.get("parentSeq").toString()));
		ProcVO.setprocDate(map.get("procDate").toString());		
		ProcVO.setpractitionerCode(map.get("practitionerCode").toString());
		ProcVO.setprocExt(map.get("procExt").toString());	
		String code_price_array = map.get("code_price_array").toString().replaceAll("\\[", "").replaceAll("\\]", "").replaceAll(" ", "");
		System.out.println(code_price_array);
		try {
			String[] array = code_price_array.split(","); 
			if(array.length > 1 ) {
				System.out.println("array : " + array);
				for(Integer i=0; i<array.length; i++) {
					ProcVO.setprocCode(array[i]);					
					Integer price = Integer.parseInt(array[i+1]);
					ProcVO.setprice(price);
					i++;
					ProcDao.saveProcData(ProcVO);
				}				
			}else {
				ProcVO.setprice(Integer.valueOf(map.get("price").toString()));
				ProcVO.setprocCode(map.get("procCode").toString());
				ProcDao.saveProcData(ProcVO);
			}
			
			//ProcDao.saveProcData(ProcVO);
			responseHeader.setCode(ResponseHeaderVO.SUCCESS);
		} catch (Exception e) {			
			responseHeader.setCode(ResponseHeaderVO.FAIL);
			responseHeader.setMessage(ResponseHeaderVO.FAIL_MESSAGE);
		}	
		
		resVO.setHeader(responseHeader);
		return resVO;
	}	
	
	@SuppressWarnings("unchecked")
	@RequestMapping(headers = "Content-Type=application/json", value = "/proc/dataDeleteProc", method = RequestMethod.POST)
	public @ResponseBody ResponseVO dataDeleteProc(@ModelAttribute CustomerVO CustomerVO, @RequestBody HashMap<String, Object> map, HttpSession session) 
			throws Exception {

		ResponseVO resVO = new ResponseVO();
		ResponseHeaderVO responseHeader = new ResponseHeaderVO();
		
		Integer seq = Integer.valueOf(map.get("seq").toString());
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("seq", seq);
		
		try {
			ProcDao.deleteProcData(params);
			responseHeader.setCode(ResponseHeaderVO.SUCCESS);
		} catch (Exception e) {			
			responseHeader.setCode(ResponseHeaderVO.FAIL);
			responseHeader.setMessage(ResponseHeaderVO.FAIL_MESSAGE);
		}	
		
		resVO.setHeader(responseHeader);
		return resVO;
	}
	
	
	/*@RequestMapping(value = "/selectBranch.do")
	public ModelAndView result(Map<String, Object> commandMap, HttpSession session, HttpServletRequest request)
			throws Exception {
		ModelAndView mv = new ModelAndView("application/selectBranch");
		
		MemberVO map = MemberDao.selectApplyInformation();			
        SimpleDateFormat format = new SimpleDateFormat("yyyy-mm-dd HH:mm:ss");	        
        Date now = new Date();
        Date today = format.parse(format.format(now));
        Date startDay = format.parse( map.getrdateFrom() );
        Date endDay = format.parse( map.getrdateTo() );

        int compare = today.compareTo(startDay);
        
        System.out.println("compare : " + compare);

        if ( compare == -1 ) {
    		mv = new ModelAndView("/other/ready");            	
        }
		
		Map<String, Object> params = new HashMap<String, Object>();
		
		params.put("name", session.getAttribute("name"));
		params.put("email", session.getAttribute("email"));
		params.put("yy", session.getAttribute("yy"));
		params.put("term", session.getAttribute("term"));
		//params.put("password", request.getParameter("password"));
		
		PersonalDataVO personalData = (PersonalDataVO) PersonalDataDao.selectPersonalData(params);
		
		List<PersonalDataVO> branchList = PersonalDataDao.selectPersonalDataBranch(params);
		
		mv.addObject("branchList", branchList);
		
		StringBuffer URL = request.getRequestURL();		
		String flag = URL.substring(URL.lastIndexOf("/")+1,URL.lastIndexOf(".do"));
		mv.addObject("flag", flag);
		
		return mv;
	}	
	
	@SuppressWarnings("unchecked")
	@RequestMapping(headers = "Content-Type=application/json", value = "/selectBranch/ajaxGoPersonalData", method = RequestMethod.POST)
	public @ResponseBody ResponseVO ajaxGoPersonalData(@RequestBody HashMap<String, Object> map, HttpSession session) throws Exception {

		ResponseVO resVO = new ResponseVO();
		ResponseHeaderVO responseHeader = new ResponseHeaderVO();
		
		try {
			session.setAttribute("applyNo", map.get("applyNo"));
			responseHeader.setCode(ResponseHeaderVO.SUCCESS);
		} catch (Exception e) {			
			responseHeader.setCode(ResponseHeaderVO.FAIL);
			responseHeader.setMessage(ResponseHeaderVO.FAIL_MESSAGE);
		}	
		
		resVO.setHeader(responseHeader);
		return resVO;
	}*/
}
