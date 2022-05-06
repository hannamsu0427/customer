package com.itsp.common;

import java.util.HashMap;

public class PageUtil {

	public static HashMap<String, Object> pageMap(int totalCnt, String pageNum) {
		return pageMap(totalCnt, pageNum, "");
	}

	public static HashMap<String, Object> pageMap(int totalCnt, String pageNum, String pageSize) {
		int num;
		int size;

		if (pageNum == null || pageNum.equals(""))
			num = 1;
		else
			num = Integer.valueOf(pageNum);

		if (pageSize == null || pageSize.equals(""))
			size = 10;
		else
			size = Integer.valueOf(pageSize);

		return pageMap(totalCnt, num, size, 10);
	}

	public static HashMap<String, Object> pageMap(int totalCnt, int pageNum) {
		return pageMap(totalCnt, pageNum, 0, 10);
	}

	public static HashMap<String, Object> pageMap(int totalCnt, int pageNum, int pageSize, int listCnt) {

		if (pageSize <= 0) {
			pageSize = 10;
		}

		// 전체 페이지수
		listCnt = 10;

		int pageCnt = 0;
		int sLimit = (pageNum - 1) * pageSize;

		int sPage = pageNum < 11 ? 1 : pageNum / listCnt * listCnt + 1;
		int ePage = 10;

		int startNum = pageNum == 1 ? 0 : (pageNum * pageSize) - (pageSize - 1);
		if (pageNum % listCnt == 0 && pageNum > listCnt)
			sPage -= listCnt;
		int endNum = pageSize * pageNum;

		HashMap<String, Object> result = new HashMap<String, Object>();

		if (totalCnt % pageSize > 0) {
			pageCnt = totalCnt / pageSize + 1;
		} else {
			pageCnt = totalCnt / pageSize;
		}

		if (pageCnt - sPage > (listCnt - 1)) {
			ePage = sPage + (listCnt - 1);
		} else {
			ePage = pageCnt;
		}

		System.out.println("sPage >>>" + sPage + "/// ePage >>>" + ePage);

		result.put("startNum", startNum);
		result.put("endNum", endNum);

		result.put("pageNum", pageNum);
		result.put("totalCnt", totalCnt);
		result.put("pageSize", pageSize);
		result.put("pageCnt", pageCnt);
		result.put("sLimit", sLimit);
		result.put("sPage", sPage);
		result.put("ePage", ePage);

		return result;
	}
}
