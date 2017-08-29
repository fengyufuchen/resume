var applicationInfo = {};
applicationInfo.basic = JSON.parse(localStorage.getItem("basic"));
applicationInfo.education = JSON.parse(localStorage.getItem("education"));
applicationInfo.work = localStorage.getItem("work");
applicationInfo.practices = localStorage.getItem("practices");
applicationInfo.club = localStorage.getItem("club");
applicationInfo.reward = localStorage.getItem("reward");
applicationInfo.language = JSON.parse(localStorage.getItem("language"));
applicationInfo.certificate = JSON.parse(localStorage.getItem("certificate"));
applicationInfo.skill = JSON.parse(localStorage.getItem("skill"));
applicationInfo.laboratory = localStorage.getItem("laboratory");
applicationInfo.other = JSON.parse(localStorage.getItem("other"));
applicationInfo.attach = JSON.parse(localStorage.getItem("attach"));

console.log(applicationInfo);
if (applicationInfo.basic != null) {
	$("#basic").find("span[data-name=name]").text(applicationInfo.basic.name);
	$("#basic").find("span[data-name=gender]").text(applicationInfo.basic.gender);
	$("#basic").find("span[data-name=birthday]").text(applicationInfo.basic.birthday);
	$("#basic").find("span[data-name=currentCity]").text(applicationInfo.basic.currentCity);
	$("#basic").find("span[data-name=city]").text(applicationInfo.basic.city);
	$("#basic").find("span[data-name=email]").text(applicationInfo.basic.email);
	$("#basic").find("span[data-name=mobile]").text(applicationInfo.basic.mobile)
} else {
	$("#basic").hide()
}
if (applicationInfo.education != null && applicationInfo.education.length > 0) {
	var educa = applicationInfo.education;
	$.each(educa, function(n, value) {
		var eduDl = "";
		var degree = value.degree;
		var deg;
		if (degree == "2") {
			deg = "大专"
		} else if (degree == "3") {
			deg = "本科"
		} else if (degree == "4") {
			deg = "硕士"
		} else if (degree == "6") {
			deg = "博士"
		} else if (degree == "7") {
			deg = "其它"
		}
		var rank = value.rank;
		var ra;
		if (rank == "0") {
			ra = "(前5%)"
		} else if (rank == "1") {
			ra = "（前10%）"
		} else if (rank == "2") {
			ra = "（前20%）"
		} else if (rank == "3") {
			ra = "（前50%）"
		} else if (rank == "4") {
			ra = "(其它)"
		} else {
			ra = ''
		}
		eduDl += "<dl class='row'> <dd class='col-xs-3'> <i>" + value.start_date + "至" + value.end_date + " </i></dd> <dd class='col-xs-3'><span>" + value.school + "</span></dd> <dd class='col-xs-3'><span>" + value.major + "</span></dd> <dd class='col-xs-3'> <span>" + deg + "</span> <i> <span>" + ra + "</span> </i> </dd> </dl>";
		$("#edu").append(eduDl)
	})
} else {
	$("#education").hide()
}
if (applicationInfo.work != null) {
	$("#work").find("p[data-name=work]").text(applicationInfo.work)
} else {
	$("#work").hide()
}
if (applicationInfo.practices != null) {
	$("#practices").find("span[data-name=practices]").text(applicationInfo.practices)
} else {
	$("#practices").hide()
}
if (applicationInfo.club != null) {
	$("#club").find("span[data-name=club]").text(applicationInfo.club)
} else {
	$("#club").hide()
}
if (applicationInfo.reward != null) {
	$("#reward").find("span[data-name=reward]").text(applicationInfo.reward)
} else {
	$("#reward").hide()
}
if(!applicationInfo.language && !applicationInfo.certificate && !applicationInfo.skill){
    $("#skill-wrap").hide();
}
if (applicationInfo.language != null && applicationInfo.language.length > 0) {
	var language = applicationInfo.language;
	$.each(language, function(n, value) {
		var lbody = "";
		lbody += "<dd class='col-xs-3'><span>" + value.type + "</span> </dd> <dd class='col-xs-4'><span>" + value.level + "</span></dd> <dd class='col-xs-4'><i><span>" + (value.score ? value.score : (value.other ? value.other : '')) + "</span></i>";
		$("#lan").append(lbody)
	})
} else {
	$("#language").hide()
}
if (applicationInfo.certificate != null) {
	var certificate = applicationInfo.certificate;
	$.each(certificate, function(n, value) {
		var cbody = "";
		cbody += "<dl> <dd class='col-xs-12'> <i> <span>" + value + "</span> </i> </dd> </dl>";
		$("#certificate").append(cbody)
	})
} else {
	$("#certificate").hide()
}
if (applicationInfo.skill != null && applicationInfo.skill.length > 0) {
	var skill = applicationInfo.skill;
	$.each(skill, function(n, value) {
		var sbody = "";
		sbody += "<dl> <dd class='col-xs-3'><i><span>" + value.type + "</span></i></dd> <dd class='col-xs-9'><span>" + value.level + "</span></dd> </dl>";
		$("#skill").append(sbody)
	})
} else {
	$("#skill").hide()
}
if (applicationInfo.laboratory != null) {
	$("#laboratory").find("span[data-name=laboratory]").text(applicationInfo.laboratory)
} else {
	$("#laboratory").hide()
}
if (applicationInfo.other != null) {
    if(!applicationInfo.other.source && !applicationInfo.other.city && !applicationInfo.other.number && !applicationInfo.other.hobby && !applicationInfo.other.evaluation){
        $("#other").hide()
    }else{
        $("#other").find("span[data-name=source]").text(applicationInfo.other.source?applicationInfo.other.source:'');
        	$("#other").find("span[data-name=residence]").text(applicationInfo.other.city?applicationInfo.other.city:'');
        	$("#other").find("span[data-name=number]").text(applicationInfo.other.number?applicationInfo.other.number:'');
        	$("#other").find("span[data-name=hobby]").text(applicationInfo.other.hobby?applicationInfo.other.hobby:'');
        	$("#other").find("span[data-name=evaluation]").text(applicationInfo.other.evaluation?applicationInfo.other.evaluation:'')
    }
} else {
	$("#other").hide()
}
if (applicationInfo.attach != null) {
	$("#attach").find("span[data-name=attachName]").text(applicationInfo.attach.name);
	$("#attach").find("a[data-name=url]").attr("href", "/application/attach?url=" + applicationInfo.attach.url + '&name=' + applicationInfo.attach.name)
} else {
	$("#attach").hide()
}