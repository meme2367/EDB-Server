var express = require('express');
var router = express.Router();

router.use('/auth', require('./auth/index'));
router.use('/locks', require('./locks/index'));
router.use('/external', require('./external/index'));
module.exports = router;
