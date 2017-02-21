开发饿了么  利用React

核心思想：
1.组件化开发
2.单向数据流

代码架构 Flux（中介者模式）

明确我们的需求

1. 地址搜索页

2. 餐厅列表页

3. 餐厅名称搜索页

4. 购物车详情页

布局方式，采用自定义布局，ionic css框架进行移动端布局


代码的设计？
1.规划我们目录结构

webpack.config.json

app.js --> 入口文件（配置我们的路由）
Flux.js ---> 中介者模式
fetch.js ---> 专门发送Ajax的一个工具
components --> 组件(View)
	Page --> 页面组件
		Address  地址搜索页
			Container.js ---> 容器组件
			header.js --> 头部组件
		Rlist   餐厅列表页  轮播图怎么实现？（待解决）
			Container.js ---> 容器组件
			searchBox.js -->搜索组件
		Rsearch  餐厅名称搜索页
			Container.js ---> 容器组件

		CarView  购物车详情页
			Container.js ---> 容器组件

	Common ---> 公用组件
		SingleInfo   --> 列表页中单个商家展示组件

Store
	AddressStore
	RlistStore
	RsearchStore
	CarViewStore
Action
	AddressAction
	RlistAction
	RsearchAction
	CarViewAction

进行React 项目的环境的搭建
