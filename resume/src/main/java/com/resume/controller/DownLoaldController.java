package com.resume.controller;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DownLoaldController {
	@RequestMapping(value = "/download")
	public Object download(HttpServletRequest request, @RequestParam("fileName") String fileName, Model model,
			HttpServletResponse response) throws Exception {

		System.out.println(fileName);
		fileName = new String(fileName.getBytes("iso-8859-1"), "UTF-8");

		String path = request.getSession().getServletContext().getRealPath("/data/");
		System.out.println(path);
		File file = new File(path + File.separator + fileName);
		if (file.exists()) {

			HttpHeaders headers = new HttpHeaders();
			// String downloadFielName = new String(fileName.getBytes("UTF-8"),
			// "iso-8859-1");
			headers.setContentDispositionFormData("attachment", fileName);

			headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);

			return new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(file), headers, HttpStatus.CREATED);
		} else
			return "noReumeUpdate";

	}

	@RequestMapping(value = "/page")
	public String page(HttpServletRequest request) throws Exception {

		return "downloadTest";

	}

}
