var express = require('express');
var router = express.Router();
var myWeb = require('../db/myWeb_schema');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: '个人主页-畅'
	});
});

/* GET login page. */
router.get('/login', function(req, res, next) {
	res.render('login', {
		title: '登录'
	});
});

var doLogin = function(req, res) {
	var query = {
		username: req.body.username,
		password: req.body.password
	};
	// console.log(query);
	
	if (query.username == "alex2917" && query.password == "llcc2012") {
			res.send("success");
			// 		var findResult = myWeb.userlist.find(function(error, result){
			//   		if (error) {
			//     			res.send(error);
			//   		}else{
			//       	res.render('userlist', {
			//          title : '后台',
			//          status: doc,
			//          username : query.username,
			//          adminlist : result,
			//        		date : new Date()
			//     			});
			//   		}
			// });
		} else {
			res.send("failed");
			// res.render('userlist', {
			//   title : '后台',
			//   status: doc,
			// });
		}
	
}

var logout = function(req, res, next) {
	res.redirect('/');
	next();
};

var home = function(req, res, next) {
	var user = {
		username: 'lc',
		password: 'llcc2012'
	}
	res.render('home', {
		title: 'Home',
		user: user
	});
	next();
};

var message_board = function(req, res) {
	myWeb.messages_board.find(function(error, result) {
		if (error) {
			res.send(error);
		} else {
			res.render('message_board', {
				title: '留言板',
				messages_list: result
			});
		}
	});
	// res.render('message_board', {
	// 			title: '留言板',
	// 			message_lists: result
	// 		});
	
}

var send_message = function(req, res){
	var now = moment().format("MMMM Do YYYY, h:mm:ss a");
	var message_data = {
		name: req.body.nickname,
		content: req.body.content,
		time: now
	};
	myWeb.messages_board.create(message_data,function(err){
          if (err) {
            res.send("error");
          }else{
          	res.render('message_model',{
				name: req.body.nickname,
				content: req.body.content,
				time: now
			});
          }
      });

}

var login_success = function() {

	}
	//判断是否登陆
router.post('/doLogin', doLogin);

//留言提交
router.post('/send_message', send_message);

//登陆成功
router.get('/login_success', login_success);

//登出页面
router.get('/logout', logout);

//登陆成功页面
router.get('/home', home);

//留言板页面
router.get('/message_board', message_board)


module.exports = router;