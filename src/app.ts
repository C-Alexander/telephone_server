import express from 'express';
import createError = require('http-errors');

const app = express();
const port = 3000;

require('./routes')(app);

// catch 404 and forward to error handler
app.use(function(req : express.Request, res : express.Response, next : express.NextFunction) {
    next(createError(404));
});

// error handler
app.use(function(err : createError.HttpError, req : express.Request, res : express.Response) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

module.exports = app;
