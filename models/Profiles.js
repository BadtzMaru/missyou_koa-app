const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 实例化数据模板
const ProfileSchema = new Schema({
	// 关联数据表
	user: {
		type: String,
		ref: 'users',
		required: true,
	},
	handle: {
		type: String,
		required: true,
		max: 40,
	},
	company: {
		type: String,
	},
	website: {
		type: String,
	},
	location: {
		type: String,
	},
	status: {
		type: String,
		required: true,
	},
	skills: {
		type: [String],
		required: true,
	},
	bio: {
		type: String,
	},
	githubusername: {
		type: String,
	},
	experience: [
		{
			current: {
				type: Boolean,
				default: true,
			},
		},
		{
			title: {
				type: String,
				default: true,
			},
		},
		{
			company: {
				type: String,
				default: true,
			},
		},
		{
			location: {
				type: String,
			},
		},
		{
			from: {
				type: String,
				required: true,
			},
		},
		{
			to: {
				type: String,
			},
		},
		{
			description: {
				type: String,
			},
		},
	],
});

module.exports = User = mongoose.model('users', UserSchema);
