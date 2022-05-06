package com.itsp.common;

import java.io.File;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Enumeration;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.itsp.vo.AttachFiles;

public class CommUtils {

	private static final Logger logger = LoggerFactory.getLogger(CommUtils.class);
	
	//금지어 필터링 하기
	public static String filterText(String swearWord , String content) {
		Pattern p = Pattern.compile(swearWord, Pattern.CASE_INSENSITIVE);
		Matcher m = p.matcher(content);
		
		StringBuffer sb = new StringBuffer();
		while (m.find()) {
			System.out.println(m.group());
			m.appendReplacement(sb, maskWord(m.group()));
		}
		m.appendTail(sb);
		
		System.out.println(sb.toString());
		return sb.toString();
	}
	
	public static String maskWord(String word) {
		StringBuffer buff = new StringBuffer();
		char[] ch = word.toCharArray();
		for (int i = 0; i < ch.length; i++) {
			if (i < 1) {
				buff.append(ch[i]);
			} else {
				buff.append("*");
			}
		}
		return buff.toString();
	}
	
	public static boolean isEmpty(Object s) {
		if (s == null) {
			return true;
		}
		if ((s instanceof String) && (((String) s).trim().length() == 0)) {
			return true;
		}
		if (s instanceof Map) {
			return ((Map<?, ?>) s).isEmpty();
		}
		if (s instanceof List) {
			return ((List<?>) s).isEmpty();
		}
		if (s instanceof Object[]) {
			return (((Object[]) s).length == 0);
		}
		return false;
	}

	static public String checkNull(String string) {
		if (string == null)
			string = "";
		return string;
	}

	static public boolean isEmptyString(String string) {
		return (string == null || "".equals(string));
	}

	static public String getStringDefault(String str, String defVal) {
		if (isEmptyString(str)) {
			return defVal;
		}

		return str;
	}

	public static int getIntDefault(String str, int defVal) {
		if (isEmptyString(str)) {
			return defVal;
		}

		try {
			return Integer.parseInt(str, 10);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return -1;
	}

	public static boolean isNumeric(String str) {
		return str.matches("[-+]?\\d*\\.?\\d+");
	}

	public static int MonthDays(int year, int month) {
		int dayOfMonth = 0;
		// 윤년일 조건
		Boolean isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || year % 400 == 0;
		// 31일 일 조건
		Boolean is31 = (month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10)
				|| (month == 12);

		if (isLeapYear && month == 2) {
			dayOfMonth = 29;
		} else if (!isLeapYear && month == 2) {
			dayOfMonth = 28;
		} else if (is31) {
			dayOfMonth = 31;
		} else {
			dayOfMonth = 30;
		}
		return dayOfMonth;
	}

	public static char DayofDate(int year, int month, int day) {
		char dayOfWeek = 0;
		int totalDay = 0;
		for (int i = 1900; i <= year; i++) {
			// 입력 년도 이전 까지는 12월 까지 다 더함
			if (i < year) {
				for (int j = 1; j <= 12; j++) {
					totalDay += MonthDays(i, j);
				}
				// 입력 년도는 입력 월 이전까지 더함
			} else {
				for (int j = 1; j < month; j++) {
					totalDay += MonthDays(i, j);
				}
			}
		}
		// 나머지 일 수를 구해진 전체 일수에 더함
		totalDay += day;
		// 기준일인 1900년 1월 1일이 월요일이므로
		switch (totalDay % 7) {
		case 0:
			dayOfWeek = '일';
			break;
		case 1:
			dayOfWeek = '월';
			break;
		case 2:
			dayOfWeek = '화';
			break;
		case 3:
			dayOfWeek = '수';
			break;
		case 4:
			dayOfWeek = '목';
			break;
		case 5:
			dayOfWeek = '금';
			break;
		case 6:
			dayOfWeek = '토';
			break;
		}
		return dayOfWeek;
	}

	static public String encSHA512(String source) // 64Byte
			throws NoSuchAlgorithmException {

		MessageDigest md = MessageDigest.getInstance("SHA-512");

		md.update(source.getBytes());

		byte byteData[] = md.digest();

		StringBuffer sb = new StringBuffer();

		for (int i = 0; i < byteData.length; i++) {
			byte temp = byteData[i];
			String s = Integer.toHexString(new Byte(temp));
			while (s.length() < 2) {
				s = "0" + s;
			}
			sb.append(s.substring(s.length() - 2));
		}

		return sb.toString();
	}

	static public String dateToString(Date date, String format) {
		String resultString = "";
		if (format == null || "".equals(format))
			format = "yyyy-MM-dd";
		if (date == null)
			return "";

		SimpleDateFormat transFormat = new SimpleDateFormat(format);
		resultString = transFormat.format(date);

		return resultString;
	}

	static public Date stringToDate(String date) {

		Date resultDate = null;
		if (date == null || "".equals(date))
			resultDate = new Date();

		SimpleDateFormat transFormat = new SimpleDateFormat("yyyy-MM-dd");

		try {
			resultDate = transFormat.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
			resultDate = new Date();
		}

		return resultDate;
	}

	static public int stringToInt(String value) {
		int result = 0;
		boolean check = Pattern.matches("^[0-9]*$", value);
		if (check && value != null && !"".equals(value))
			result = Integer.parseInt(value);

		return result;
	}

	static public Integer returnInteger(String value) {

		Integer result = stringToInt(value);
		if (result == 0)
			result = null;

		return result;
	}

	static public String getRestWord(String str, String split) {
		return (str == null) ? "" : str.substring(str.lastIndexOf(split) + 1);
	}

	static public String nl2br(String str) {
		return (str == null) ? str : str.replaceAll("\\n", "<br/>").replaceAll("\\r", "");
	}

	static public String space2nbsp(String str) {
		return (str == null) ? str : str.replaceAll(" ", "&nbsp;");
	}

	static public String p2br(String str) {
		return (str == null) ? str : str.replaceAll("<p>", "").replaceAll("</p>", "<br>");
	}

	/***
	 * 초성추출
	 *
	 * @param str
	 * @return string ex1 : 한글입력 -> return "ㅎㄱㅇㄹ" ex2 : 한글 입력 -> return "ㅎㄱ ㅇㄹ"
	 */
	static public String getInitSoundWords(String str) {

		String[] choList = new String[] { "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ" };
		int code = 0;
		int uniCode = 0;
		int choIndx = 0;

		String resultString = "";
		for (int i = 0; i < str.length(); ++i) {
			code = str.charAt(i);

			if (code >= 44032 && code <= 55203) {
				uniCode = code - 44032;
				choIndx = uniCode / 21 / 28;

				resultString += choList[choIndx];
			} else if (code == 32) {
				resultString += " ";
			}
		}

		return resultString;
	}

	public static String toNoHtml(String html) {
		if (html == null) {
			return "";
		}
		return html.replaceAll("\\<.*?\\>", "");
	}

	public static String removeScript(String html) {
		// 반드시 : https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
		// 무지하게 많음
		// <img src="javascript:">, <img onerror=> 등 처리해야 함
		// 대소문자 구분없이 처리해야 함
		// <BODY BACKGROUND="javascript:alert('XSS')">
		// <STYLE>li {list-style-image:
		// url("javascript:alert('XSS')");}</STYLE><UL><LI>XSS</br>
		// <IMG SRC='vbscript:msgbox("XSS")'>
		// <IMG SRC="livescript:[code]">
		// <BGSOUND SRC="javascript:alert('XSS');">
		// <STYLE>@import'http://ha.ckers.org/xss.css';</STYLE>
		// <META HTTP-EQUIV="refresh" CONTENT="0;url=javascript:alert('XSS');">

		String newHtml = html;

		// Avoid null characters
		newHtml = newHtml.replaceAll("\0", "");

		newHtml = newHtml.replaceAll("(?i)<script", "&lt;script").replaceAll("(?i)</script>", "&lt;/script>");

		Pattern scriptPattern;
		// Avoid anything between script tags
		// Pattern scriptPattern = Pattern.compile("<script>(.*?)</script>",
		// Pattern.CASE_INSENSITIVE);
		// newHtml = scriptPattern.matcher(newHtml).replaceAll("");

		// Avoid anything in a src='...' type of expression
		// scriptPattern = Pattern.compile("src[\r\n]*=[\r\n]*\\\'(.*?)\\\'",
		// Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);
		// newHtml = scriptPattern.matcher(newHtml).replaceAll("");

		// scriptPattern = Pattern.compile("src[\r\n]*=[\r\n]*\\\"(.*?)\\\"",
		// Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);
		// newHtml = scriptPattern.matcher(newHtml).replaceAll("");

		// Remove any lonesome </script> tag
		// scriptPattern = Pattern.compile("</script>",
		// Pattern.CASE_INSENSITIVE);
		// newHtml = scriptPattern.matcher(newHtml).replaceAll("");

		// Remove any lonesome <script ...> tag
		// scriptPattern = Pattern.compile("<script(.*?)>",
		// Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);
		// newHtml = scriptPattern.matcher(newHtml).replaceAll("");

		// Avoid eval(...) expressions
		scriptPattern = Pattern.compile("eval\\((.*?)\\)",
				Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);
		newHtml = scriptPattern.matcher(newHtml).replaceAll("");

		// Avoid expression(...) expressions
		scriptPattern = Pattern.compile("expression\\((.*?)\\)",
				Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);
		newHtml = scriptPattern.matcher(newHtml).replaceAll("");

		// Avoid javascript:... expressions
		scriptPattern = Pattern.compile("javascript:", Pattern.CASE_INSENSITIVE);
		newHtml = scriptPattern.matcher(newHtml).replaceAll("");

		// Avoid livescript:... expressions
		scriptPattern = Pattern.compile("livescript:", Pattern.CASE_INSENSITIVE);
		newHtml = scriptPattern.matcher(newHtml).replaceAll("");

		// Avoid vbscript:... expressions
		scriptPattern = Pattern.compile("vbscript:", Pattern.CASE_INSENSITIVE);
		newHtml = scriptPattern.matcher(newHtml).replaceAll("");

		String[] eventArray = { "fscommand", "onabort", "onactivate", "onafterprint", "onafterupdate",
				"onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforeeditfocus",
				"onbeforepaste", "onbeforeprint", "onbeforeunload", "onbeforeupdate", "onbegin", "onblur", "onbounce",
				"oncellchange", "onchange", "onclick", "oncontextmenu", "oncontrolselect", "oncopy", "oncut",
				"ondataavailable", "ondatasetchanged", "ondatasetcomplete", "ondblclick", "ondeactivate", "ondrag",
				"ondragend", "ondragleave", "ondragenter", "ondragover", "ondragdrop", "ondragstart", "ondrop", "onend",
				"onerror", "onerrorupdate", "onfilterchange", "onfinish", "onfocus", "onfocusin", "onfocusout",
				"onhashchange", "onhelp", "oninput", "onkeydown", "onkeypress", "onkeyup", "onlayoutcomplete", "onload",
				"onlosecapture", "onmediacomplete", "onmediaerror", "onmessage", "onmousedown", "onmouseenter",
				"onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmove",
				"onmoveend", "onmovestart", "onoffline", "ononline", "onoutofsync", "onpaste", "onpause", "onpopstate",
				"onprogress", "onpropertychange", "onreadystatechange", "onredo", "onrepeat", "onreset", "onresize",
				"onresizeend", "onresizestart", "onresume", "onreverse", "onrowsenter", "onrowexit", "onrowdelete",
				"onrowinserted", "onscroll", "onseek", "onselect", "onselectionchange", "onselectstart", "onstart",
				"onstop", "onstorage", "onsyncrestored", "onsubmit", "ontimeerror", "ontrackchange", "onundo",
				"onunload", "onurlflip", "seeksegmenttime" };

		for (String eventName : eventArray) {
			// Avoid onload= expressions
			scriptPattern = Pattern.compile(eventName + "(.*?)=",
					Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);
			newHtml = scriptPattern.matcher(newHtml).replaceAll("not" + eventName + "=");
		}

		return newHtml;
	}

	public static String stackTraceToString(Exception e) {
		StackTraceElement[] stackTrace = e.getStackTrace();
		StringWriter sw = new StringWriter();
		printStackTrace(stackTrace, new PrintWriter(sw));
		return e.toString() + "\n" + sw.toString();
	}

	public static void printStackTrace(StackTraceElement[] stackTrace, PrintWriter pw) {
		for (StackTraceElement stackTraceEl : stackTrace) {
			pw.println(stackTraceEl);
		}
	}

	public static String getHttpsPrefix(HttpServletRequest req) {
		String serverName = req.getServerName();

		if ("iwork.itsp.kr".equals(serverName) || "local.iwork.itsp.kr".equals(serverName)) {
			return "https://" + serverName;
		}

		return getHttpPrefix(req);
	}

	public static String getHttpPrefix(HttpServletRequest req) {
		String serverName = req.getServerName();
		Integer port = req.getServerPort();

		String prefix = "http://" + serverName;
		if (port != 80) {
			prefix += ":" + port;
		}

		return prefix;
	}

	public static void printHeadersInfo(HttpServletRequest request) {

		Map<String, String> map = new HashMap<String, String>();

		Enumeration headerNames = request.getHeaderNames();
		while (headerNames.hasMoreElements()) {
			String key = (String) headerNames.nextElement();
			String value = request.getHeader(key);
			map.put(key, value);
		}

		System.out.println("HTTP REQUEST HEADER START");
		System.out.println(map);
		System.out.println("HTTP REQUEST HEADER End");
	}

	public static boolean contains(List list, Object o) {
		if (list == null)
			return false;
		else
			return list.contains(o);
	}

	/**
	 * 월의 해당 주의 날짜 배열을 얻어온다.
	 *
	 * @param yyyymm
	 * @param weekSeq
	 * @return
	 */
	public static String[] getRangeDateOfWeek(String yyyymm) {
		SimpleDateFormat monthFormat = new SimpleDateFormat("yyyyMM");
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
		String yyyy = yyyymm.substring(0, 4);
		String mm = yyyymm.substring(4, 6);

		Calendar cal = converterDate(yyyymm + "01");
		int lastDateOfMonth = getLastDateOfMonth(monthFormat.format(cal.getTime()));
		int startDayOfWeek = dayOfWeek(yyyy, mm, "1");
		int endDayOfWeek = dayOfWeek(yyyy, mm, Integer.toString(lastDateOfMonth));
		String rangeDateOfWeek[] = new String[lastDateOfMonth + startDayOfWeek + (6 - endDayOfWeek)];

		// 달력의 첫번째 날짜(전월 포함)
		cal.add(Calendar.DATE, -startDayOfWeek);

		for (int i = 0; i < rangeDateOfWeek.length; i++) {
			rangeDateOfWeek[i] = dateFormat.format(cal.getTime());
			cal.add(Calendar.DATE, 1);
		}

		return rangeDateOfWeek;
	}

	/**
	 * 특정날짜의 요일의 숫자를 리턴 0:일요일 ~ 6:토요일
	 *
	 * @return
	 */
	public static int dayOfWeek(String sYear, String sMonth, String sDay) {
		int iYear = Integer.parseInt(sYear);
		int iMonth = Integer.parseInt(sMonth) - 1;
		int isDay = Integer.parseInt(sDay);

		GregorianCalendar gc = new GregorianCalendar(iYear, iMonth, isDay);

		return gc.get(gc.DAY_OF_WEEK) - 1;
	}

	/**
	 * String 형식의 날자를 Calendar 로 변환 해준다.
	 *
	 * @param yyyymmdd
	 * @return
	 */
	public static Calendar converterDate(String yyyymmdd) {
		Calendar cal = Calendar.getInstance(); // 양력 달력
		if (yyyymmdd == null)
			return cal;

		String date = yyyymmdd.trim();
		if (date.length() != 8) {
			if (date.length() == 4)
				date = date + "0101";
			else if (date.length() == 6)
				date = date + "01";
			else if (date.length() > 8)
				date = date.substring(0, 8);
			else
				return cal;
		}

		cal.set(Calendar.YEAR, Integer.parseInt(date.substring(0, 4)));
		cal.set(Calendar.MONTH, Integer.parseInt(date.substring(4, 6)) - 1);
		cal.set(Calendar.DAY_OF_MONTH, Integer.parseInt(date.substring(6)));

		return cal;
	}

	/**
	 * 해당 월의 마지막일을 구한다.
	 *
	 * @return
	 */
	public static int getLastDateOfMonth() {
		return getLastDateOfMonth(new Date());
	}

	public static int getLastDateOfMonth(Date date) {
		return getLastDateOfMonth(new SimpleDateFormat("yyyyMM").format(date));
	}

	public static int getLastDateOfMonth(String yyyymm) {
		int year = Integer.parseInt(yyyymm.substring(0, 4));
		int month = Integer.parseInt(yyyymm.substring(4, 6)) - 1;

		Calendar destDate = Calendar.getInstance();
		destDate.set(year, month, 1);

		return destDate.getActualMaximum(Calendar.DATE);
	}

	public static boolean IsCaptchaOK(HttpSession session, String captchaInput) {
		String captchaYn = (String) session.getAttribute("CAPTCHA_YN");

		if ("Y".equals(captchaYn)) {
			String captchaSession = (String) session.getAttribute("CAPTCHA");

			if (!captchaInput.equals(captchaSession)) {
				return false;
			}
		}

		return true;
	}

	/*********
	 *
	 * @param request
	 * @param response TODO
	 * @return
	 */
	static public List<AttachFiles> multiFileUpload(HttpServletRequest request, HttpServletResponse response, String applyNo, String name) throws Exception {
		Date date = new Date(System.currentTimeMillis());
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
		String today = sdf.format(date);
		//String year = today.substring(0, 4);
		logger.info("AttachFiles_request::" + request);
		String realFilePath = today + File.separator + applyNo;
		String savePath = AttachFiles.getRealFilePath(realFilePath);
		logger.info("AttachFiles_savePath::" + savePath);
		
		request.setAttribute("applyNo", applyNo);
		request.setAttribute("name", name);

		FileUpload fileUpload = new FileUpload();
		fileUpload.setSavePath(savePath);
		fileUpload.setRealFilePath(realFilePath);
		fileUpload.setFilesInfo(request, response);

		String result = fileUpload.setFilesInfo(request, response);
		logger.info("setFileInfo result::" + result);

		if (!"Y".equals(result))
			return null;

		if ("Y".equals(result) && fileUpload.getFileList() != null && fileUpload.getFileList().size() > 0)
			fileUpload.fileCopyAll();

		return fileUpload.getFileList();
	}

	static public void fileDelete(AttachFiles attachFile) {
		FileUpload fileUpload = new FileUpload();
		fileUpload.fileDelete(AttachFiles.getRealFilePath(attachFile.getSavedFilePath()) + File.separator + attachFile.getSavedFileName());
		int temp = attachFile.getSavedFileName().lastIndexOf(".");
		String ext = attachFile.getSavedFileName().substring(temp + 1);
		if ("jpg".equalsIgnoreCase(ext) || "gif".equalsIgnoreCase(ext) || "jpeg".equalsIgnoreCase(ext) || "bmp".equalsIgnoreCase(ext) || "png".equalsIgnoreCase(ext)) {
			fileUpload.fileDelete(AttachFiles.getRealFilePath(attachFile.getSavedFilePath()) + File.separator + "resize_"+attachFile.getSavedFileName());
		}
	}

	static public void fileDelete(String savedFilePath, String savedFileName) {
		FileUpload fileUpload = new FileUpload();
		fileUpload.fileDelete(savedFilePath + File.separator + savedFileName);
	}

}
