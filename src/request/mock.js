var Mock = require('mockjs');
var Random = Mock.Random  //工具类 用于随机生成数据
var data = Mock.mock("/mock",{
    "userinfo|4":[{   			//生成四个如下格式的数据
		"id|+1":1, 						//数字从1开始，后续依次加1
		"name":"@cname",			//名字为随机中文名
		"age|18-28":25, 			//年龄是18-28之间的随机数
		"sex|1":["男","女"],	 //性别是数组里的随机一项
		"job|1":["web","teacher","python","php"]   //job是数组里的随机一项
	}]
})
var userdata = Mock.mock("/login",{
    userdata:{username:"admin",password:"123456"}
})
var tableData1 = Mock.mock("/ProcessList",{
	"tableinfo|11":[{   			//生成四个如下格式的数据
		"avatar":Random.image('30x30','#ffcc33', '#FFF', 'png', '!'), 						//数字从1开始，后续依次加1
		"realname":"@cname",			//名字为随机中文名
		"openId":Random.guid(), 			//年龄是18-28之间的随机数
		"registerTime":Random.date('yyyy-MM-dd'),	 //性别是数组里的随机一项
		"photo":Random.email(),
		'key|+1':1,
		'name':Random.word(5)
		
	}]
})
var data2 = Mock.mock('/firstpage',{
	"data2|1":[{
		 "newClient|0-1000":2,
		 "finshOrder|0-1000":2,
		 "newOrder|0-1000":2,
		 "profit|0-10000":2,
	}]

})
var data3 = Mock.mock('/firstpage2',{
	"data3|13":[{
		 "name|1":["袜子","牛仔裤","衬衫","背带裤"],
		 "pv|100-1000":2,
		 "uv|100-1000":2,
		 "amt|100-1000":2,
	}]

})
// console.log( Random.email());
export default {
    data,
    Random,
	userdata,
	tableData1, 
	data2,
	data3
}
