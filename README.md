# evtec

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
[1]:http://wx.expotec.com.cn/bargain/dist/index.html#/firstPage
项目地址：[项目链接][1]

项目总结：

采用vue + vux + less + vuescroll + vue-router + axios +webpack

业务逻辑：

1、客户进入页面，判断wxdata_wx_openid ,是否存在cookie 中。

	a. 存在获取 wxdata_wx_openid 、wxdata_wx_nickname 、 wxdata_wx_headimgurl 
	b. 不存在 需 先跳转"http://" + window.location.host + "/bargain/transfer.aspx"?return=" 返回页面


2、判断链接是否带参数 id
	a. 不带参数，显示用户信息，不显示帮他砍价按钮
	b.带参数
		1.参数id 和用户 openid 是否 一样，
			I. 一样 ，不显示帮他砍价按钮 ，显示用户信息
		 	II. 不一样， 显示 帮助砍价者的信息

3、获取砍价详情信息 
	a. 总共砍价金额达到 600  显示您已砍价成功 弹出框。
	链接："http://wx.expotec.com.cn/bargain/Handler.ashx?action=gettransfers&openid="+openid

4、砍价
	a.帮他人砍价
		1. 显示被砍价者的头像，
		2. 更新砍价详情信息 ，
		3. 弹出我要分享页面，
		
	b.我也要玩
		1. 显示用户的头像会帮自己砍价，
		2. 弹出我要分享页面

	砍价链接：'http://wx.expotec.com.cn/bargain/Handler.ashx?action=kj&openid='+ SelfOpenid+'&toopenid='+ toOpenid;
	显示用户信息链接：  'http://wx.expotec.com.cn/bargain/Handler.ashx?action=getuserinfo&openid='+openid

5、我要分享按钮 弹出框
	a. 如果从帮他人砍价按钮进去，点击我要分享，则会帮助自己砍价
	b. 点击我要分享， 跳转用户自己分享页面，
	c. 用 localStorage 保存弹出框是否显示数据  “window.localStorage.setItem('ShareShow',true)”

6、活动时间结束
	a. 用户有 砍价， 显示您已砍价成功
	b. 未砍价，显示活动已结束		

7、分享


总结：

axios 跨域问题：

解决办法：后台添加请求头部。

npm run  build 打包页面显示空白问题：

解决办法： config / index.js 中  assetsPublicPath: '', router中  base: '',


  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }





