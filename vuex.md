### vuex

##### 整合vuex

```vue
vue add vuex
```

##### 状态和状态变更

- state用于保存状态，mutations修改状态

```javascript
// store.js
export default new Vuex.Store {
	state: { count: 1 },
	mutations: {
	 increment(state) {
		return state += 1;
	}
}}
```

- 使用状态

  ```vue
  <template>
    <div class="home">
       <h2>{{$store.state.count}}</h2>
      <button @click="add">vuex按钮</button>
    </div>
  </template>
  
  
  export default {
    name: "Home",
    methods: {
      add() {
  		this.$store.commit('increment')
  	}
    },
  };
  ```

##### 派生状态 - getters

- 从state中派生出新状态，类似计算属性computed

  ```vue
  export default new Vuex.Store {
  	getters: {
  		remaining() {
  			return 10 - state.count; //计算剩余的数量
   }
  }}
  
  //使用
  <template>{{$store.getter.remaining}}</template>
  ```

##### 动作 - actions

- 复杂业务逻辑编写，类似controller

```javascript
export default new Vuex.store {
    actions: {
      increment({getters, commit}) {
        if(getters.remaining>0) {
          commit('increment');
          return true;
        }
        return false
      },
      asyncIncrement({getters, commit, dispath}) {
        // 异步逻辑
        return new Promise(resolve => {
          setTimeout(() => {
              //复用其他actions
              resolve(dispatch('increment'));
            }, 2000)
        })
      }
    }
}


```

- 使用 actions

  ```javascript
  this.$store.dispath('asyncIncrement').then(result => {
      if(!result) {
          alert('failure')
  	}
  })
  ```

##### 模块化

- 按模块化的方式编写代码

  ```javascript
  // count.js
  export default {
      namespaced: true,
      //保存数据状态
      state: {
        count: 0
      },
      //从state派生出新状态，类似计算属性
      getters: {
        remaining(state) {
          return 10 - state.count;
        }
      },
      //修改状态
      mutations: {
        increment(state) {
          state.count += 1
        }
      },
      //复杂业务逻辑 类似mvc 中的controller
      actions: {
        increment({getters, commit}) {
          if(getters.remaining>0) {
            commit('increment');
            return true;
          }
          return false
        },
        asyncIncrement({getters, commit, dispatch}) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(dispatch('increment'));  
            }, 2000)
          })
        }
      }
  }
  
  export default new Vuex.Store({
    modules: {
      modCount: count
    }
  })
  
  // 使用
  <h2>{{$store.state.modCount.count}},<span>剩余数量        {{$store.getters['modCount/remaining']}}</span></h2>
  <button @click="add">vuex按钮</button>
  
  this.$store.dispatch("modCount/incrementAsync");
  ```

  