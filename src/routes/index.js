const router = require('express').Router();
const postsRouter = require('./postsRouter/postsRouter');

router.use('/posts', postsRouter);

module.exports = router;
