const express = require('express');
const app = express();

const userroutes = require('../users/routes.config');
const config = require('../common/config/env.config');
const bodyparser = require('body-parser');

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DEconstE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.use(bodyparser.json());
userroutes.routesConfig(app);

app.listen(config.port, function(){
    console.log('app listening', config.port);
})