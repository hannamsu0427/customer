package com.itsp.dao;

import java.util.List;

import com.itsp.vo.AttachFiles;

public interface AttachFileDao {

	public String seqNextVal();

	public void insertFileProc(AttachFiles attachFile);

	public void deleteFileProc(String seq);
	
	public List<AttachFiles> selectFileList(String applyNo);

	public AttachFiles selectFile(String seq);
}
