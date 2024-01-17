var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const secret = 'flower-login-2023';

app.use(cors())
const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'flowerdb'
});

app.post('/register', jsonParser, function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        connection.execute(
            'INSERT INTO users (username, password, firstname, lastname, citizen_id, email, mobile) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [req.body.username, hash, req.body.firstname, req.body.lastname, req.body.citizen_id, req.body.email, req.body.mobile],
            function(err, results, fields) {
                if(err){
                    res.json({status: 'error', message: err})
                    return
                }
                res.json({status: 'success'})
            }
        );
    });
})

app.post('/login', jsonParser, function (req, res, next) {
    connection.execute(
        'SELECT * FROM users WHERE username=?',
        [req.body.username],
        function(err, users, fields) {
          if(err){res.json({status: 'error', message: err}); return}
          if(users.length == 0){res.json({status: 'error', message: 'no user found'}); return}
          bcrypt.compare(req.body.password, users[0].password, function(err, isLogin) {
            if(isLogin){
                var user = req.body.username
                var token = jwt.sign({ username: users[0].username }, secret, { expiresIn: '1h' });
                res.json({status: 'success', message: 'login success', token, user})
            }else{
                res.json({status: 'error', message: 'login failed'})
            }
        });
        }
    );
})

app.post('/authen', jsonParser, function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token, secret);
        res.json({status: 'success', decoded})
    } catch (err) {
        res.json({status: 'error', message: err.message})
    }
})

app.get('/profile', jsonParser, function (req, res, next) {
    const user = req.body.username
    connection.execute(
        'SELECT * FROM users WHERE username=?',
        [user],
        function(err, users, fields) {
            if(users.username === user){
                res.json({status: 'Get data success', users})
            }else{
                    res.json({status: 'error', message: err})
                    return
                }
            }
    );
})

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
//   console.log(`Server is running on port ${port}`);
})