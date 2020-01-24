const index = require('./controllers/index');

module.exports = (app) => {
    app.use('/', index);
};
