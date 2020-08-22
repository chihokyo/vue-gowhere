# Vue仿去哪儿网移动端APP

Vue学习练习用。

https://chihokyo.github.io/vue-gowhere/

## 目的

学习练习用

因为是练习Vue最基础用的，所以几乎不包含后端。后端数据是用`JSON`的形式进行模拟的，

## 具体步骤

最难的地方是在部署`GIthub Page`上的一些问题。现在总结一下步骤。

### 参考用：Vue 部署 Github Page 官方文档

https://cli.vuejs.org/zh/guide/deployment.html#github-pages

#### 1. 修改 `vue.config.js`

```javascript
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/' // github上库是什么，这里写什么
    : '/'
}
```

#### 2. 自动脚本`deploy.sh`

```shell
#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
# =====================================
# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# 写仓库的名字
# =====================================
cd -
```

#### 3. 一系列操作

```javascript
npm run build // 编译生成dist
git subtree push --prefix dist origin gh-pages 
// 将dist目录推送到远程的gh-pages分支
// 若远程没有gh-pagse分支则会新建gh-pagse分支然后再推送。
// 必须要有这一步！！
```

#### 4. Github上操作

连接到库→点击Settings→下面找`Github Pages`

![](https://raw.githubusercontent.com/chihokyo/image_host/master/20200822181230.png)

连接

https://chihokyo.github.io/vue-gowhere/

完成撒花！

## 注意点

在跨域上花了点时间，由于这一次用的是自己的本地数据，所以`axios`上如果直接编译肯定是错误的。

```javascript
/* 
** 跨域写法
*/
// 直接使用了跨域所以要在vue设置开发环境的部署文件
axios.get('/api/city.json')
// vue.config.js
module.exports = {
  // 配置转发mock路径
  devServer: {
    proxy: {
      '/api': {
        // 这里就是所有请求api转发到这个url
        target: 'http://localhost:8080/static/mock',
        changeOrigin: true,
        pathRewrite: {
         // 适用于所有/api开头的请求 如果在请求里都写了，可以不写pathRewrite这个配置
          '^/api': ''
        }
      }
    }
  }
}

/* 
** 非跨域本地直接写
*/
// Tips 如果遇到不会的，就看一下请求的具体url，然后在url栏里直接连接看能有数据，没有就是url有错误
axios.get('/vue-gowhere/static/mock/city.json')
```

## 修改日志

#### 2020/8/22 

首次尝试部署