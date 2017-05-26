var ws = require("nodejs-websocket");
// 文档地址：https://www.npmjs.com/package/nodejs-websocket
console.log(ws + '开始建立websocket链接');
var server = ws.createServer(function(conn){
	conn.on("text",function(str){
		console.log("收到的信息：" + str);
		conn.sendText(str.toUpperCase()+"!!!")
	});
	conn.on("close",function(code,reason){
		console.log("关闭连接");
	})
	conn.on('error',function(code,reason){
		console.log("异常关闭");
	})
}).listen(9000);
