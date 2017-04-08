var users = require('../models/users');

exports.formUsers = function(req, res){

	res.render('addUsers');
}

exports.formEditUser = function(req, res){
	var id = parseInt(req.params.id),
		valueEdit = users.filter(function(val, index){
			return val.id === id;
		})

		user = valueEdit[0];
		res.render('editUsers', {user: user});
}
 
exports.listUsers = function(req, res){
	res.render('users', {listUsers: users});
}

exports.addUsers = function(req, res){

	var id=users.length + 1,
		user = Object.assign(req.body, {id: id});

	if (req.body.name && req.body.last) {

		users.push(user);
		res.redirect('/users');

	}else{

		res.send('Invalid data');
	}

}

exports.deleteUser = function(req, res){
	var id = parseInt(req.params.id),
		del = users.filter(function(val, index){
			return val.id !== id;
		});

	users = del;

	res.redirect('/users');

}

exports.editUser = function(req, res){
	//users[req.params.id] = req.body;
	var id = parseInt(req.body.id);
		
		req.body.id = parseInt(req.body.id)

		users[id-1] = req.body;
		res.redirect('/users');

}