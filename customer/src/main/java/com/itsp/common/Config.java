package com.itsp.common;

import java.util.ArrayList;
import java.util.Arrays;

public class Config {

	/*public static String COMMON_FILE_PATH = "/ITSP_iWORK_DATA/files/upload";*/
	
	//public static String COMMON_FILE_PATH = "/home/cic/apply/files";
	//public static String COMMON_FILE_PATH = "D:\\Tomcat 6.0\\webapps2\\appointment\\file";
	public static String COMMON_FILE_PATH ="D:\\00.han\\00. devel\\kcenter\\file";
	public static String COMMON_FILE_PATH_EDITOR = "/ITSP_iWORK_DATA/files/upload/ckEditor";
	public static String COMMON_FILE_PATH_EXCEL = "/devel/excel";

	public static String FILE_URL = "";

	public static String PATH_SEPARATOR = "/";

	public static String BOARD_FILE_PATH = "board";

	public static String SESSION_MEMBER = "sessionScopeMember";
	public static String SESSION_GOOGLE_ANALYTICS = "googleAnalytics";

	public static int EXL_ROW = 3;
	public static int EXL_COL = 3;
	public static String EXCEL_FILE_PATH = "excel";

	// public static long FILE_UPLOAD_LIMIT = 314572800; // 300MB
	public static long FILE_UPLOAD_LIMIT = 629145600; // 600MB

	public static String[] IMAGE_MIME_TYPE = { /*"jpeg", "pjpeg", "gif", "png", "jpg", "bmp", "image/jpeg" */};
	public static String[] VIDEO_ITSP_MIME_TYPE = { /*"mp4"*/ };
	public static String[] ATT_MIME_TYPE = { "pdf"};
	/*public static String[] ATT_MIME_TYPE = { "x-zip-compressed", "excel", "vnd.ms-excel", "x-excel", "x-msexcel",
			"vnd.openxmlformats-officedocument.spreadsheetml.sheet"
			 var doc =  , "msword", "vnd.openxmlformats-officedocument.wordprocessingml.document","haansoftxls"
			 var ppt =  , "mspowerpoint", "powerpoint", "vnd.ms-powerpoint", "x-mspowerpoint", "vnd.openxmlformats-officedocument.presentationml.presentation"
			 var pdf =  , "pdf"
			 var hwp =  , "haansofthwp", "x-hwp", "hangul", "jpeg", "pjpeg", "gif", "png", "jpg", "quicktime", "x-msvideo", "x-ms-wmv", "vnd.mpegurl", "vnd.objectvideo", "vnd.sealed.mpeg1", "vnd.sealed.mpeg4", "vnd.sealed.swf", "vnd.sealedmedia.softseal.mov", "vnd.vivo", "x-sgi-movie", "x-msvideo", "mp4", "zip", "rar", "apk", "octet-stream" };*/

	private static ArrayList<String> imageMimeList = null;
	private static ArrayList<String> videoItspMimeList = null;
	private static ArrayList<String> attMimeList = null;

	public static ArrayList<String> GetImageMimeList() {
		if (imageMimeList == null) {
			imageMimeList = new ArrayList<String>();
			imageMimeList.addAll(Arrays.asList(IMAGE_MIME_TYPE));
		}
		return imageMimeList;
	}

	public static ArrayList<String> GetVideoItspMimeList() {
		if (videoItspMimeList == null) {
			videoItspMimeList = new ArrayList<String>();
			videoItspMimeList.addAll(Arrays.asList(VIDEO_ITSP_MIME_TYPE));
		}
		return videoItspMimeList;
	}

	public static ArrayList<String> GetAttMimeList() {
		if (attMimeList == null) {
			attMimeList = new ArrayList<String>();
			attMimeList.addAll(Arrays.asList(ATT_MIME_TYPE));
		}
		return attMimeList;
	}
}
