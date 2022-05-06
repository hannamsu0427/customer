package com.itsp.dao;

import java.util.List;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.itsp.vo.AttachFiles;

public class AttachFileImp extends SqlMapClientDaoSupport implements AttachFileDao {

	@Override
	public String seqNextVal() {
		return (String) getSqlMapClientTemplate().queryForObject("attachFile.seqNextVal");
	}

	@Override
	public void insertFileProc(AttachFiles attachFile) {
		getSqlMapClientTemplate().insert("attachFile.insertFileProc", attachFile);
	}

	@Override
	public void deleteFileProc(String seq) {
		getSqlMapClientTemplate().delete("attachFile.deleteFileProc", seq);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<AttachFiles> selectFileList(String applyNo) {
		return getSqlMapClientTemplate().queryForList("attachFile.selectFileList", applyNo);
	}

	@Override
	public AttachFiles selectFile(String seq) {
		return (AttachFiles) getSqlMapClientTemplate().queryForObject("attachFile.selectFile", seq);
	}

}
