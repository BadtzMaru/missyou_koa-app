# 安装项目

1. `cnpm init`
2. `cnpm install koa --save`
3. `cnpm install koa-router --save`

# 安装 nodemon (node 热更新)

`cnpm install nodemon --global`

# 连接 MongoDB

1. `cnpm install mongoose --save`
2. `const mongoose = require('mongoose');`
3. `mongoose.connect('mongodb://root:root@localhost:27017/koa-restful-api').then(() => { console.log('Mongodb Connected...'); }).catch((err) => { console.log(err); });`

# 安装字段解析包

`cnpm install koa-bodyparser --save`

# bcryptjs 密码加密

`cnpm install bcryptjs --save`

# 全球公认头像

`cnpm install gravatar --save`

# token

`cnpm install jsonwebtoken --save`

# 校验 token

`cnpm install koa-passport --save-dev`
`cnpm install passort-jwt --save-dev`

# 后端字段验证

`cnpm install validator --save`
