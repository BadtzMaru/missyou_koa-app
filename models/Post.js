const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 实例化数据模板
const PostSchema = new Schema({
	user: {
		type: String,
		ref: 'users',
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	name: {
		type: String,
	},
	avatar: {
		type: String,
	},

	likes: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users',
			},
		},
	],
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users',
			},
			text: {
				type: String,
				required: true,
			},
			name: {
				type: String,
			},
			avatar: {
				type: String,
			},
		},
	],
	date: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = Post = mongoose.model('post', PostSchema);
