package com.itsp.common;

import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.ImageIcon;

import org.apache.log4j.Logger;
import org.codehaus.plexus.util.FileUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.itsp.vo.AttachFiles;

public class FileUpload {

	private Map<String, Object> filesInfo;

	private List<AttachFiles> fileList;

	private String savePath;
	private String realFilePath;
	private String resultMsg;
	private Map<String, MultipartFile> fileMap;

	private AttachFiles attachFile;

	private static Logger logger = Logger.getLogger(FileUpload.class.getName());

	public String getResultMsg() {
		return resultMsg;
	}

	public String getSavePath() {
		return savePath;
	}

	public void setSavePath(String savePath) {
		this.savePath = savePath;
	}

	public Map<String, Object> getFilesInfo() {
		return filesInfo;
	}

	public List<AttachFiles> getFileList() {
		return fileList;
	}

	public void setRequestFilesInfo(HttpServletRequest request, HttpServletResponse response, String savePath) {
		setSavePath(savePath);
		setFilesInfo(request, response);
	}

	public String setFilesInfo(HttpServletRequest request, HttpServletResponse response) {

		filesInfo = new HashMap<String, Object>();
		MultipartHttpServletRequest multipart = (MultipartHttpServletRequest) request;
		fileMap = (Map<String, MultipartFile>) multipart.getFileMap();
		Iterator<String> formFieldNames = (Iterator<String>) multipart.getFileNames();
		String result = "Y";
		fileList = new ArrayList<AttachFiles>();
		
		String filename = "";

		while (formFieldNames.hasNext()) {

			String formFieldName = (String) formFieldNames.next();
			MultipartFile multipartFile = fileMap.get(formFieldName);
			
			if("file_2".equals(formFieldName)) {
				filename = "교육 및 연구경력사항";
			}else if("file_3".equals(formFieldName)) {
				filename = "연구실적";
			}else if("file_4".equals(formFieldName)) {
				filename = "강의계획서";
			}else if("file_1".equals(formFieldName)) {
				filename = "학력증명서";
			}else {
				filename = "기타서류";
			}

			long fileSize = multipartFile.getSize();
			String fileType = multipartFile.getContentType();
			logger.info("file content-type : " + fileType);			
			
			
			if (fileSize > 0) {

				// 설정파일에서 업로드 제한 용량 확인
				if (multipartFile.getSize() > Config.FILE_UPLOAD_LIMIT) {
					// 지정 용량을 초과 한 경우 메시지 출력
					return "size";
				}

				String type = fileType.split("/")[1];
				if (!Config.GetAttMimeList().contains(type)) {
					result = "N";
				}
				
				//String originalFilename = multipartFile.getOriginalFilename();
				String originalFilename = request.getAttribute("applyNo") + "_" + request.getAttribute("name") + "_" + filename + "." + fileType.substring(fileType.lastIndexOf("/")+1);
				String destFilePath = savePath + File.separator;
				//String destFilename = System.nanoTime() + "." + CommUtils.getRestWord(originalFilename, ".");
				String destFilename = /*request.getAttribute("applyNo") + "_" + */request.getAttribute("name") + "_" + filename + "." + fileType.substring(fileType.lastIndexOf("/")+1);

				AttachFiles attachFiles = new AttachFiles();

				attachFiles.setRealFileName(originalFilename);
				attachFiles.setRealFilePath(realFilePath);
				attachFiles.setSavedFileName(destFilename);
				attachFiles.setSavedFilePath(realFilePath);
				attachFiles.setFileSize((int) fileSize);
				attachFiles.setFileType(type);
				attachFiles.setFormFieldName(formFieldName);
				logger.info("formFieldName : " + formFieldName);
				filesInfo.put(formFieldName, attachFiles);
				setAttachFile(attachFiles);
				fileList.add(attachFiles);
			} else
				setAttachFile(new AttachFiles());
		}
		return result;
	}

	public void fileCopyAll() {
		Iterator<Entry<String, Object>> i = filesInfo.entrySet().iterator();
		while (i.hasNext()) {
			Entry<String, Object> entry = i.next();
			AttachFiles attachFile = (AttachFiles) entry.getValue();
			String filePath = AttachFiles.getRealFilePath(attachFile.getRealFilePath()) + File.separator;
			System.out.println("attachFile : " + attachFile);
			try {
				FileUtils.forceMkdir(new File(filePath));
				File destFile = new File(filePath + attachFile.getSavedFileName());
				fileMap.get(attachFile.getFormFieldName()).transferTo(destFile);

				String tmpPath = filePath;
				String tmpFileName = attachFile.getSavedFileName();
				int temp = attachFile.getSavedFileName().lastIndexOf(".");
				String ext = attachFile.getSavedFileName().substring(temp + 1);
				if ("jpg".equalsIgnoreCase(ext) || "gif".equalsIgnoreCase(ext) || "jpeg".equalsIgnoreCase(ext) || "bmp".equalsIgnoreCase(ext) || "png".equalsIgnoreCase(ext)) {
					String fullPath = tmpPath + "/" + tmpFileName;
					BufferedImage originalImage = ImageIO.read(new File(fullPath));
					int type = originalImage.getType() == 0? BufferedImage.TYPE_INT_ARGB : originalImage.getType();
					
					ImageIcon ic = ImageResize.resizeImage(fullPath, 1024, 1024, type);
					Image image = ic.getImage();
					BufferedImage bi = new BufferedImage(image.getWidth(null), image.getHeight(null), type);
					Graphics2D g2 = bi.createGraphics();
					g2.drawImage(image, 0, 0, null);
					g2.dispose();
					String newFileName = "resize_" + tmpFileName;
					String newPath = tmpPath + "/" + newFileName;
					ImageIO.write(bi, ext, new File(newPath));
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public boolean fileDelete(String filePath) {
		boolean flag = false;
		File file = new File(filePath);
		if (file.exists()) {
			flag = file.delete();
			logger.info("파일삭제여부: " + flag);
		} else {
			resultMsg = "파일이 존재하지 않습니다";
		}
		return flag;
	}

	public AttachFiles getAttachFile() {
		return attachFile;
	}

	public void setAttachFile(AttachFiles attachFile) {
		this.attachFile = attachFile;
	}

	public String getRealFilePath() {
		return realFilePath;
	}

	public void setRealFilePath(String realFilePath) {
		this.realFilePath = realFilePath;
	}

}
