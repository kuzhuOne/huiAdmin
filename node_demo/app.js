var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./db/connect')

//读取post参数
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var informationRouter = require('./routes/information');
var mationsRouter = require('./routes/mations');
var pictureRouter = require('./routes/picture');
var produceRouter = require('./routes/produce');
var commentRouter = require('./routes/comment');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var regRouter = require('./routes/reg');
var download = require('./routes/download')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/information', informationRouter);
app.use('/picture', pictureRouter);
app.use('/produce', produceRouter);
app.use('/comment', commentRouter);
app.use('/mations', mationsRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/reg', regRouter);

app.use('/download',download)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(req,res)
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
