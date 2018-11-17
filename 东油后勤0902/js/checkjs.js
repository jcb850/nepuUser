var mycheck = {
	empty: function(classname) {
		var mark = true;
		var item = document.getElementsByClassName(classname)
		for(i in item) {
			if(item[i].value == "") {
				mark = false;
				break;
			}
		}
		return mark;
	},
	phoneNumber: function(id) {
		var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
		if(!myreg.test(document.getElementById(id).value)) {
			return false;
		} else {
			return true;
		}
	}
}