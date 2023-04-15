require("./env");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Router = require('./routes/index');
var pesame = require('./routes/pesame-home');
var sendMoney = require('./routes/pesame-send-money');
var pesame_my_account = require('./routes/pesame-my-account');
var payments = require('./routes/pesame-payments');
var pesameRequestMoney = require('./routes/pesame-request-money');
var pesameTillNumber = require('./routes/pesame-till-number');
var pesamePaybillNumber = require('./routes/pesame-paybill-number');
var pesameLoansAndSavings = require('./routes/pesame-loans-and-savings');


var app = express();


const apiKey = process.env.API_KEY ;
const username = process.env.USERNAME ;
const phoneNumber = process.env.PHONE_NUMBER ;
const base_url = process.env.BASE_URL;
const NODE_ENV = process.env.NODE_ENV;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use(Router);
app.use('/pesame',pesame);
app.use('/pesame-my-account',pesame_my_account);
app.use('/pesame/send-money',sendMoney);
app.use('/pesame/payments',payments);
app.use('/pesame/request-money',pesameRequestMoney);
app.use('/pesame/request-money',pesameTillNumber);
app.use('/pesame/request-money',pesamePaybillNumber);
app.use('/pesame/request-money',pesameLoansAndSavings);


app.use('/sounds', express.static('sounds'));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    console.log({"eroror": err});
    res.render('error');
});

module.exports = app;
