import { createRouter, createWebHistory } from 'vue-router';


/***
 * route关系配置建议：
 * 由于vue-router有默认处理，在不配置路由关系的情况下，很多情况下都可以正常使用，但是为了更好的控制路由关系，
 * 建议每个都配置上路由关系，然后关于是否缓存和销毁，可以在router.push时，加参数动态处理。这样也更加方便开发者
 * 捋清路由间的关系。
 * 
 * 配置原则：如Home -> List -> Detail，这样的关系中
 * Home： {
 *   cacheRouterNext: ['List'],
 * }，
 * List: {
 *    cacheRouterPrev: ['Home'],
      cacheRouterNext: ['Detail'],
 * }，
   Detail: {
      cacheRouterPrev: ['List']
   }
 * */

/***
 * 第一种，最简单的使用即：A -> B -> C
 * 首页进入新闻列表，新闻列表刷新
 * 新闻列表进入新闻详情页，新闻详情刷新，
 * 新闻详情返回新闻列表，新闻列表不刷新
 * 新闻列表返回首页，首页不刷新

// 首页路由入口
const indexRouter = {
    path: '/',
    name: 'Root',
    component: () => import('@/pages/layout.vue'),
    redirect: '/home',
    children: [
        {
            path: '/home',
            name: 'Home',
            meta: {
                name: '首页',
                title: '新闻首页',
                keepAlive: true, // 如果keepAlive为true的话，该组件将永远不销毁（请慎用），如果不定义或者值为false，则进行动态缓存中
                cacheRouterNext: ['NewsList'], // 从首页进入新闻列表，列表页不缓存
            },
            component: () => import('@/pages/home/index.vue'),
        }
    ],
};

const routes = [
    indexRouter,
    {
        path: '/news/list',
        name: 'NewsList',
        meta: {
            title: '新闻列表',
            keepAlive: false,
            cacheRouterPrev: ['Home'],
            cacheRouterNext: ['NewsDetail'], // 新闻详情页不缓存, （虽然不配置的话，vue-router就是默认重新初始化组件）
        },
        component: () => import('@/pages/news/list.vue'),
    },
    {
        path: '/news/detail',
        name: 'NewsDetail',
        meta: {
            title: '新闻详情',
            keepAlive: false,
            cacheRouterPrev: ['NewsList'], // 新闻详情返回新闻列表，新闻列表不刷新
        },
        component: () => import('@/pages/news/detail.vue'),
    },
    {
        path: '/404',
        name: 'NotFound',
        meta: {
            title: '404',
            isLogin: false,
            
        },
        component: () => import('@/pages/error/not-find.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: 'OtherPath',
        redirect: '/404',
    },
];
 *  */ 

/***
 * 第二种 A -> B -> C -> D
 * 首页进入新闻列表，新闻列表刷新
 * 新闻列表进入新闻详情页，新闻详情刷新，
 * 新闻详情页进入相关详情页，相关详情刷新，而至于新闻详情页是否缓存（可以在hash上拼接`ROUTER_ALIVE_HASH_NO_CACHE_FROM`参数决定），
 * 相关详情页返回新闻详情页，新闻详情根据是否缓存可以刷新或者不刷新
 * 新闻详情返回新闻列表，新闻列表不刷新
 * 新闻列表返回首页，首页不刷新
 
// 首页路由入口
const indexRouter = {
    path: '/',
    name: 'Root',
    component: () => import('@/pages/layout.vue'),
    redirect: '/home',
    children: [
        {
            path: '/home',
            name: 'Home',
            meta: {
                name: '首页',
                title: '新闻首页',
                keepAlive: true, // 如果keepAlive为true的话，该组件将永远不销毁（请慎用），如果不定义或者值为false，则进行动态缓存中
                
                cacheRouterNext: ['NewsList'], // 从首页进入新闻列表，列表页不缓存
            },
            component: () => import('@/pages/home/index.vue'),
        }
    ],
};


const routes = [
    indexRouter,
    {
        path: '/news/list',
        name: 'NewsList',
        meta: {
            title: '新闻列表',
            keepAlive: false,
            
            cacheRouterPrev: ['Home'],
            // cacheRouterNext: ['NewsDetail', 'NewsDetailAbout'],
            cacheRouterNext: ['NewsDetail'],
        },
        component: () => import('@/pages/news/list.vue'),
    },
    {
        path: '/news/detail',
        name: 'NewsDetail',
        meta: {
            title: '新闻详情',
            keepAlive: false,
            
            cacheRouterPrev: ['NewsList', 'NewsDetailAbout'],
            cacheRouterNext: ['NewsDetailAbout'],
        },
        component: () => import('@/pages/news/detail.vue'),
    },
    {
        path: '/news/detail-about',
        name: 'NewsDetailAbout',
        meta: {
            title: '相关新闻',
            keepAlive: false,
            // cacheRouterPrev: ['NewsList', 'NewsDetail'],
            cacheRouterPrev: ['NewsDetail'],
            cacheRouterNext: ['NewsDetail'],
            // cacheRouterNext: ['NewsDetail', 'NewsList'],
        },
        component: () => import('@/pages/news/detail-about.vue'),
    },
    {
        path: '/news/no-destroy',
        name: 'NoDestroy',
        meta: {
            title: '永不销毁的组件',
            keepAlive: true,
            
            cacheRouterPrev: ['NewsDetailAbout'],
        },
        component: () => import('@/pages/news/no-destroy.vue'),
    },
    {
        path: '/404',
        name: 'NotFound',
        meta: {
            title: '404',
            isLogin: false,
            
        },
        component: () => import('@/pages/error/not-find.vue'),
    },
    {
        path: '/noPermission',
        name: 'NoPermission',
        meta: {
            title: '暂无权限',
            isLogin: false,
            
        },
        component: () => import('@/pages/error/no-permission.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: 'OtherPath',
        redirect: '/404',
    },
];
*  */ 

/***
 * 第三种 A -> B -> C -> D -> B
 * 首页进入新闻列表，新闻列表刷新
 * 新闻列表进入新闻详情页，新闻详情刷新，
 * 新闻详情页进入相关详情页，相关详情刷新，而至于新闻详情页是否缓存（可以在hash上拼接`ROUTER_ALIVE_HASH_NO_CACHE_FROM`参数决定），
 * 
 * 相关详情页直接跳转新闻列表页，新闻列表页不刷新
 * 新闻列表返回首页，首页不刷新
 *  */ 
// 首页路由入口
const indexRouter = {
    path: '/',
    name: 'Root',
    component: () => import('@/pages/layout.vue'),
    redirect: '/home',
    children: [
        {
            path: '/home',
            name: 'Home',
            meta: {
                name: '首页',
                title: '新闻首页',
                keepAlive: true, // 如果keepAlive为true的话，该组件将永远不销毁（请慎用），如果不定义或者值为false，则进行动态缓存中
                
                cacheRouterNext: ['NewsList'], // 从首页进入新闻列表，列表页不缓存
            },
            component: () => import('@/pages/home/index.vue'),
        }
    ],
};


const routes = [
    indexRouter,
    {
        path: '/news/list',
        name: 'NewsList',
        meta: {
            title: '新闻列表',
            keepAlive: false,
            
            cacheRouterPrev: ['Home', 'NewsDetailAbout'],
            // cacheRouterNext: ['NewsDetail', 'NewsDetailAbout'],
            cacheRouterNext: ['NewsDetail'],
        },
        component: () => import('@/pages/news/list.vue'),
    },
    {
        path: '/news/detail',
        name: 'NewsDetail',
        meta: {
            title: '新闻详情',
            keepAlive: false,
            cacheRouterPrev: ['NewsList', 'NewsDetailAbout'],
            cacheRouterNext: ['NewsDetailAbout'],
        },
        component: () => import('@/pages/news/detail.vue'),
    },
    {
        path: '/news/detail-about',
        name: 'NewsDetailAbout',
        meta: {
            title: '相关新闻',
            keepAlive: false,
            // cacheRouterPrev: ['NewsList', 'NewsDetail'],
            cacheRouterPrev: ['NewsDetail'],
            cacheRouterNext: ['NewsDetail', 'NewsList'],
        },
        component: () => import('@/pages/news/detail-about.vue'),
    },
    {
        path: '/news/no-destroy',
        name: 'NoDestroy',
        meta: {
            title: '永不销毁的组件',
            keepAlive: true, // 如果keepAlive为true的话，该组件将永远不销毁（请慎用）
            cacheRouterPrev: ['NewsDetailAbout'],
        },
        component: () => import('@/pages/news/no-destroy.vue'),
    },
    {
        path: '/404',
        name: 'NotFound',
        meta: {
            title: '404',
            isLogin: false,
        },
        component: () => import('@/pages/error/not-find.vue'),
    },
    {
        path: '/noPermission',
        name: 'NoPermission',
        meta: {
            title: '暂无权限',
            isLogin: false,
        },
        component: () => import('@/pages/error/no-permission.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: 'OtherPath',
        redirect: '/404',
    },
];

const BASE_PATH = {
    development: './',
    test: '/WMP/MBM/unionPay/',
    staging: '/WMP/MBM/unionPay/',
    production: '/WMP/MBM/unionPay/',
};

const ENV_MODE = import.meta.env.MODE;

// process.env.BASE_URL
let router = createRouter({
    history: createWebHistory(BASE_PATH[ENV_MODE]), // 采用的是history模式
    routes, // routesOne
    linkActiveClass: 'is-active',
});

export default router;
