### vue-router

##### 配置：

```vue
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
```

##### 指定路由器

```vue
// main.js
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

##### 路由视图

```vue
<router-view />
```

##### 导航链接

```vue
<router-link to="/detail/1">Home</router-link>|
<router-link to="/about">About</router-link>
```

##### 路由嵌套

```vue
// router.js
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	children: [{ path: "/list", name: "list", component: List }]
  }
]

// Home.vue
<template>
  <div class="home">
    <router-view />
  </div>
</template>
```

##### 动态路由

```vue
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
      }
    ]
  },

// Detail.vue
<template>
    <div>
        {{$route.params.id}}
    </div>
</template>
```



