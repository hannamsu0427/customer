package com.itsp.common;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/*import com.itsp.dao.SwearWordDao;
import com.itsp.dao.VisitDao;
import com.itsp.vo.SwearWordVO;*/

public class DomainInterceptor extends HandlerInterceptorAdapter {
	private static final Logger logger = LoggerFactory.getLogger(DomainInterceptor.class);

	/*@Autowired
	VisitDao VisitDao;
	@Autowired
	SwearWordDao SwearWordDao;*/

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

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
	}

	/*@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {

		HttpSession session = request.getSession();

		Calendar cal = Calendar.getInstance();
		String year = Integer.toString(cal.get(Calendar.YEAR));
		String month = (cal.get(Calendar.MONTH) + 1) < 10 ? "0" + Integer.toString(cal.get(Calendar.MONTH) + 1)
				: Integer.toString(cal.get(Calendar.MONTH) + 1);
		String day = Integer.toString(cal.get(Calendar.DAY_OF_MONTH));
		String hour = Integer.toString(cal.get(Calendar.HOUR));

		String uri = request.getRequestURI();
		String serverName = request.getServerName();
		String ip = request.getRemoteAddr();

		if (session.getAttribute("REG_IP") != null && !"".equals(session.getAttribute("REG_IP").toString())) {
			if (!ip.equals(session.getAttribute("REG_IP").toString())) {
				Map<String, Object> maps = new HashMap<String, Object>();
				maps.put("regIp", ip);
				maps.put("regYear", year);
				maps.put("regMonth", month);
				maps.put("regDay", day);
				maps.put("regTime", hour);
				maps.put("regAgent", request.getHeader("user-agent"));
				maps.put("regOs", System.getProperty("os.name"));
				VisitDao.insertDataProc(maps);
			}
		} else {
			Map<String, Object> maps = new HashMap<String, Object>();
			maps.put("regIp", ip);
			maps.put("regYear", year);
			maps.put("regMonth", month);
			maps.put("regDay", day);
			maps.put("regTime", hour);
			maps.put("regAgent", request.getHeader("user-agent"));
			maps.put("regOs", System.getProperty("os.name"));
			VisitDao.insertDataProc(maps);

			session.setAttribute("REG_IP", ip);
		}
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("useYn", "Y");
		SwearWordVO swearWordVO = SwearWordDao.selectData(params);
		if (!CommUtils.isEmpty(swearWordVO)) {
			session.setAttribute("SWEAR_WORD", swearWordVO.getContents());
		}
		return true;
	}*/

}
