function getBase64Image(img) { //将图片转化为base64
	var canvas = document.createElement("canvas");
	canvas.width = (img.width / 3);
	canvas.height = (img.height/3);
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, (img.width/3), (img.height/3));
	var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
	var dataURL = canvas.toDataURL("image/" + ext);
	console.log(dataURL.length)
	return dataURL;
}
function uploadvideo(vedio, id, type) { //上传视频
	var task = plus.uploader.createUpload("", {
			method: "POST",
			blocksize: 204800,
			priority: 100
		},
		function(t, status) {
			// 上传完成
			if(status == 200) {
				ifclose()
			} else {
				mui.toast('视频上传失败！')
				num = 3
				plus.nativeUI.closeWaiting();

			}
		}
	);
	task.setRequestHeader("Authorization", localStorage.getItem("token"))
	task.addFile(vedio[0], {
		key: "file1"
	});
	task.addFile(vedio[1], {
		key: "file2"
	});
	task.addFile(vedio[2], {
		key: "file3"
	});
	task.addFile(vedio[3], {
		key: "file4"
	});
	task.start();

}
var myajax = {
	baseurl: "http://122.156.218.91:8091/",
	task: 0,
	closetask: function() {
		console.log(myajax.task)
		if(myajax.task == 0) {
			mui.toast('上传成功')
			mui.back()
		} else {
			myajax.task--
		}
	},
	data: {

	},
	backfun: function(data) {

	},

	post: function(url) {
		var fun = this.backfun
		var close = this.closetask
		mui.ajax(this.baseurl + url, {
			data: this.data,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': localStorage.getItem("token")
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				console.log(data)
				if(data["code"] == 200) {
					fun(data)
					close()
				} else {
					mui.toast('服务器在开小差')
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('网络连接失败')
			}
		});
	},
	get: function(url) {
		var fun = this.backfun

		mui.ajax(this.baseurl + url, {
			data: this.data,
			headers: {
				//				'Content-Type': 'application/json',
				'Authorization': localStorage.getItem("token")
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				console.log(data)

				if(data["code"] == 200) {
					fun(data)

				} else {
					mui.toast('服务器在开小差')
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('网络连接失败')

			}
		});
	},
	put: function(url) {
		var fun = this.backfun

		var close = this.closetask
		mui.ajax(this.baseurl + url, {
			data: this.data,
			headers: {
				//				'Content-Type': 'application/json',
				'Authorization': localStorage.getItem("token")
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'put', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				console.log(data)

				if(data["code"] == 200) {
					fun(data)
//					close()

				} else {
					mui.toast(data["message"])
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('网络连接失败')

			}
		});
	}
}

function sortby(a,b){
	return b.time-a.time
}


