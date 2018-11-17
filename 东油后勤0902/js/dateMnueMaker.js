function getday(date) { //根据年月日获取星期
	var arys1 = []
	arys1 = date.split('-'); //日期为输入日期，格式为 2013-3-10
	//				console.log(arys1);
	var ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
	var week1 = String(ssdate.getDay()).replace("0", "Sun").replace("1", "Mon").replace("2", "Tue").replace("3", "Wed").replace("4", "Thr").replace("5", "Fri").replace("6", "Sat") //就是你要的星期几
	return week1
}

function getdayclass(date) { //根据年月日获取星期
	var arys1 = []
	arys1 = date.split('-'); //日期为输入日期，格式为 2013-3-10
	//				console.log(arys1);
	var ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
	var week1 = String(ssdate.getDay()).replace("0", "weekend").replace("1", "workday").replace("2", "workday").replace("3", "workday").replace("4", "workday").replace("5", "workday").replace("6", "workday") //就是你要的星期几
	return week1
}
//			console.log(getday("1992-12-7"))
//console.log(new Date(1532275200 * 1000).getDay())
//console.log(new Date().getFullYear())

function makeDivOther(year,month) { //动态添加上方日期栏
	$("#dateList").empty()
	var daycount
	var Fdaycount
	var dayclass;
//	var year = new Date().getFullYear()
//	var month = new Date().getMonth() + 1
	if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		Fdaycount = 29;
	} else {
		Fdaycount = 28;
	}
	if(new Date().getDay() == 0 || new Date().getDay() == 6) {
		dayclass = "weekend"
	} else {
		dayclass = "workday"
	}
//	console.log(dayclass)
//	console.log(Fdaycount)
//	console.log(month)
	switch(month) {
		case 1:
			;
		case 3:
			;
		case 5:
			;
		case 7:
			;
		case 8:
			;
		case 10:
			;
		case 12:
			;
			daycount = 31;
			break;
		case 2:
			daycount = Fdaycount;
			break;
		default:
			daycount = 30;
			break;
	}
	for(i = 0; i < daycount; i++) {
		var selectclass = "unselect"
		if((i + 1) == new Date().getDate()) {
			selectclass = "select"
		}
		$("#dateList").append("<div  class='dateItem'><p class='" + getdayclass(year + "-" + month + "-" + (i + 1).toString()) + "'>" + getday(year + "-" + month + "-" + (i + 1).toString()) + "</p><div class='forif unselect'><p >" + (i + 1).toString() + "</p></div></div>");
	}
//	document.getElementById("dateList").scrollLeft
	mui('#dateList').on('tap', '.dateItem', function() {
		var index = $(this).index()
		for(i in document.getElementsByClassName("forif")) {
			document.getElementsByClassName("forif")[i].className = "forif unselect";
		}
		document.getElementsByClassName("forif")[index].className = "forif select"
	})

}