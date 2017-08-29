<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<script type="text/javascript" src="/js/jquery-1.6.4.js"></script>
<script type="text/javascript">
	function callbackForJson(data) {
		alert(data);

	}

	function submitInfo() {
		jsonT();
		logInfo = $("#loginForm").serialize();

		$.ajax({

			type : "get",
			data : logInfo,
			dataType : "jsonp",
			url : "http://localhost:8089/test/user/login",
			success : function(data) {

				console.log("success")

				alert(data);

			}

		})

	}

	function jsonT() {

		var json = "{\"name\":\"zhangjinrui\",\"age\":\"12\"}";
		//var json={\"name\":\"zhangjinrui\",\"age\":\"12\"};

		var json2 = "{\" name\":\" zhangjingrui\" ,\"age\":\"12\"}";

		var obj = eval("(" + json2 + ")");
		console.log(obj);
		console.log(json2)

	}
	function forPath() {

		$.ajax({

			url : "/test/path",
			type : "post",
			dataType : "json",
			success : function(data) {

				alert(data);
			}

		});

	}

	function forCustomerHeader() {

		$.ajax({

			url : "/deal/redirect",
			type : "post",
			headers : {
				"redirectCustomerHeader" : "redirectCustomerHeaderValue"
			},
			dataType : "json",
			success : function(data) {

				alert(data);
			}

		});
	}

	function refreshImg(ev) {
		var img = document.getElementById("imgAuth");
		var url = "${pageContext.request.contextPath}/aut_checkCode";
		var xhr = new XMLHttpRequest();
		xhr.responseType = "blob";
		xhr.open("get", url, true);
		xhr.responseType = "blob";
		xhr.setRequestHeader("client_type", "DESKTOP_WEB");
		xhr.onload = function() {

			if (this.status == 200) {
				var img = document.getElementById("imgAuth");
				var blob = this.response;
				var setCookieHeader = xhr.getResponseHeader("set-cookie");
				console.log(setCookieHeader);
				img.onload = function(e) {
					window.URL.revokeObjectURL(img.src);

				}
				img.src = window.URL.createObjectURL(blob);
			}
		}
		xhr.send();
	}
</script>
<body>

	<form id="loginForm"
		action="${pageContext.request.contextPath}/user/register"
		onsubmit="return false;" method="post">
		<input type="text" name="username"> <input type="text"
			name="password"> <input type="text" name="phone"> <input
			type="button" onclick="submitInfo();" value="jsonp">


	</form>

	<input type="button" onclick="forPath();" value="forPath">
	<a href="http://passport.sachinme.com/test/redirect">测试重定向</a>

	<input type="button" onclick="forCustomerHeader();" value="测试自定义请求头">
	<input type="button" onclick="refreshImg();" value="获取验证码">
	<img src="" id="imgAuth">

	<img src="" id="testChangeImageUrl">




</body>
<script type="text/javascript">
	var chars = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B',
			'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
			'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

	function generateMixed(n) {
		var res = "";
		for (var i = 0; i < n; i++) {
			var id = Math.ceil(Math.random() * 35);
			res += chars[id];
		}
		return res;
	}
	var testChangeImageUrl = $("testChangeImageUrl");
	setInterval(function() {
		var img = document.getElementById('testChangeImageUrl');
		var random = generateMixed(6);
		//img.src = "/aut_checkCode?=imageId" + random;

	}, 1000);
</script>
</html>