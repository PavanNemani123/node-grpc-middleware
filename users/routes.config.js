const usercontroller = require('./controllers/users.controller');

exports.routesConfig = function(app) {
    app.get('/users', [
        usercontroller.list
    ]);
}