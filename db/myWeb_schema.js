// 链接 myWeb 集合
var mongoose = require('mongoose');
// var db = mongoose.createConnection('mongodb://alex2917:llcc2012@ds051635.mongolab.com:51635/CloudFoundry_qjeq3sca_gsf1qntq');
var db = mongoose.createConnection('mongodb://120.27.46.16:27017/alexdb');
// 链接错误
db.on('error', function(error) {
  console.log(error);
});
// Schema 结构
var Schema = mongoose.Schema;
var messagesSchema = new Schema({
	name : String,
	// time : {type : Date, default: Date.now},
	content : String,
	time : String
  //content  : {type : String},
  // age : Number
});
var userSchema = new Schema({
	_id:Number,
	username:String,
	password:String
});

// var messagesSchema = new Schema({
// 	_id : Number,
// 	name : String,
// 	email : String,
// 	content : String
// });
// 关联 firstblood -> admins 表
exports.messages_board = db.model('admins', messagesSchema);
exports.userModel = db.model('user',userSchema);
// exports.messages_board = db.model('messages_board',messagesSchema);
exports.db = db;

// { "id" : 1, "name" : "alex", "content" : "666" ，"time" : }
// { "id" : 2, "name" : "llcc2012", "content" : "哈杀鸡" }
// { "id" : 3, "name" : "东方败败", "content" : "踩踩，顺便试试这个到底能不能留言，嘻嘻" }
