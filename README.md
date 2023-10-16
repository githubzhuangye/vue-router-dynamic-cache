### 项目介绍
本软件基于vue-router及vuex实现一种H5单页应用（SPA）的路由组件缓存策略，是实现H5单页应用路由组件在路由前进重新加载，后退不刷新功能的更优化方案。本软件充分利用Vuex和keep-live组件的特点，一是Vuex的状态存储是响应式的，当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件中的值也能得到高效更新。二是keep-live组件会随时监听组件属性include和exclude值的变化，当属性值变化时，keep-live组件会及时修剪其缓存的路由组件。基于这两个特点，再利用vue-router提供的routes中可自定义配置功能，本软件在vue-router自带的钩子函数router.beforeEach中实现动态增删keep-live组件include和exclude属性值，从而在不侵入业务组件代码，不增加业务组件逻辑功能的情况下，实现H5单页应用路由组件在路由前进重新加载，后退不刷新功能，另外由于被keep-live组件include包含的缓存组件，在应用的访问会话期间，即便当前路由跳转到其他组件，该不会被销毁，从而组件状态能够被保留下来，当路由再次匹配到对应组件时，应用将从缓存栈中取出已被缓存的组件，再进行渲染展示，组件状态不会丢失。使得H5单页应用的在拥有单页应用优点的同时，用户体验更接近于App原生应用。

### 使用方法：
#### 简单的push跳转
```js
const handleNavNews = (index) => {
    router.push({
        name: 'NewsDetail',
        hash: C.KEY.ROUTER_ALIVE_HASH_PUSH // 参数代表是push跳转到下一个路由导航，只要是push跳转都得添加该参数
    });
};
```

#### 当前路由页面跳转到下一个路由导航时，不想缓存当前路由组件页面
```js
const handleNavNews = (index) => {
    router.push({
        name: 'NewsDetail',
        hash: hash: `${C.KEY.ROUTER_ALIVE_HASH_PUSH}${C.KEY.ROUTER_ALIVE_HASH_NO_CACHE_FROM}` // 参数代表push跳转下一个路由导航且不缓存当前面
    });
};
```

#### 当需要使用router.push({ replace: true})或者router.replace进行路由导航时

##### 使用router.push({ replace: true})
```js
const handleNavNews = (index) => {
    router.push({
        name: 'NewsDetail',
        hash: hash: `${C.KEY.ROUTER_ALIVE_HASH_PUSH}${C.KEY.ROUTER_ALIVE_HASH_NO_CACHE_FROM}` // 参数代表使用push({ replace: true})跳转下一个路由导航
        replace: true,
    });
};
```

##### 使用router.replace
```js 
const handleNavNews = (index) => {
    router.replace({
        name: 'NewsDetail',
        hash: hash: `${C.KEY.ROUTER_ALIVE_HASH_PUSH}${C.KEY.ROUTER_ALIVE_HASH_PUSH_REPLACE}` // 参数代表使用router.replace跳转下一个路由导航
    });
};
```