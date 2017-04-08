var users = require('../controllers/users.controller');

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index', {val:123})
	})
	app.route('/users')
		.get(users.listUsers)
	app.route('/users/add')
		.get(users.formUsers)
		.post(users.addUsers)
	app.route('/users/delete/:id')
		.get(users.deleteUser)
	app.route('/users/edit/:id')
		.get(users.formEditUser)
	app.route('/users/edit')
		.post(users.editUser)
}