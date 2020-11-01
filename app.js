const koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');

// 实例化koa
const app = new koa();
const router = new Router();

// 引入users.js
const users = require('./routes/api/users');

// 路由
router.get('/', async (ctx) => {
	ctx.body = { msg: 'Hello Koa Interface' };
});

// 连接数据库
mongoose
	.connect('mongodb://root:root@localhost:27017/koa-restful-api')
	.then(() => {
		console.log('Mongodb Connected...');
	})
	.catch((err) => {
		console.log(err);
	});

// 配置路由地址
router.use('/api/users', users);

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server started on ${port}`);
});
