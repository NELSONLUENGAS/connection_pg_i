const db = require('../database/index');
const { createNewPost } = require('../database/querys/index');

const createPost = async (req, res) => {
	try {
		if (req.body) {
			const { titulo, url, descripcion } = req.body;

			if (titulo && url && descripcion) {
				const values = [titulo, url, descripcion];

				const { rowCount, rows } = await db.query(createNewPost, values);
				if (rowCount) {
					res.status(200).json({
						msg: 'Post created success!!',
						dataCount: rowCount,
						data: rows,
					});
				} else {
					res.status(400).json({
						msg: 'Post is not created',
					});
				}
			} else {
				res.status(400).send({
					status: 'Bad request',
					msg: 'All fielkds are required',
				});
			}
		} else {
			res.status(400).send({
				status: 'Bad request',
				msg: 'Body is required',
			});
		}
	} catch (error) {
		res.status(400).send({
			status: 'Bad request',
			msg: error,
		});
	}
};

module.exports = {
	createPost,
};
