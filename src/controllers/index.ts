const  express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.status(404).send("Get to the fucking choppa");
});

module.exports = router;
