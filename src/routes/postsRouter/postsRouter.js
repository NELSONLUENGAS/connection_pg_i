const router = require('express').Router();
const {
	controllerPosts,
	controllerPostsCreate,
} = require('../../controllers/index');
const { getAllPosts } = controllerPosts;
const { createPost } = controllerPostsCreate;

router.get('/get', getAllPosts);
router.post('/create', createPost);

module.exports = router;
