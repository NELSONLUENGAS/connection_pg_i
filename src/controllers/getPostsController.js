const db = require('../database/index');
const { selectAllPosts } = require('../database/querys/index');

const getAllPosts = async (req, res) => {
	try {
		const { rowCount, rows } = await db.query(selectAllPosts);
		if (rowCount) {
			res.status(200).json({
				msg: 'Data fetch successfuly',
				dataCount: rowCount,
				data: rows,
			});
		} else {
			res.status(200).json({
				msg: 'No data found',
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
	getAllPosts,
};
