package com.resume.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ResumeVideoController {

	@RequestMapping(value = "/resume/video/{videoName}")
	public void resumeImage(HttpServletRequest request, @PathVariable("videoName") String videoName,
			HttpServletResponse response) throws Exception {

		if (StringUtils.isEmpty(videoName)) {
			videoName = "";
		}
		String path1 = request.getSession().getServletContext().getRealPath("/") + "video/" + videoName;

		videoName = path1;
		File file;

		System.out.println(videoName);
		file = new File(videoName + ".mp4");
		response.setContentType("video/mp4");
		// 判断文件是否存在如果不存在就返回默认图标
		if (!(file.exists() && file.canRead())) {
			throw new RuntimeException();
		}

		FileInputStream inputStream = new FileInputStream(file);
		byte[] data = new byte[(int) file.length()];
		int length = inputStream.read(data);
		response.setContentLength(length);
		inputStream.close();

		OutputStream stream = response.getOutputStream();
		stream.write(data);
		stream.flush();
		stream.close();

	}
}
