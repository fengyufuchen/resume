package com.resume.controller;

import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

	@RequestMapping(value = "/")

	public String index() {

		return "resume";

	}

	@RequestMapping(value = "/resume")

	public String forLogin(String redirect, Model model, HttpServletRequest request, HttpServletResponse response) {

		return "resume";

	}

	@RequestMapping(value = "/error")

	public String error() {

		return "error";

	}

}
