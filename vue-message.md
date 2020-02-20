### vue组件通信，传值

- ##### 父组件 -> 子组件

  - 属性方式props

    ```vue
    // child
    props: {
    	msg: String
    }
    
    // parent
    <Parent msg="hello vue"></Parent>
    ```

  - 引用refs

    ```vue
    // parent
    <Parent ref="par"></Parent>
    
    this.refs.par.xxx = 'xxx';
    ```

  - 子组件children

    ```vue
    // parent
    this.$children[0].xxx = 'xxx';
    ```

- ##### 子组件 -> 父组件

  - ```vue
    // child
    this.$emit('child_data', '儿子传来的');
    
    // parent
    <HelloWorld @child_data="$event" />
    ```

- ##### 兄弟组件

  - 通过共同的父辈组件搭桥 $parent或者$root

    ```vue
    // brother1
    this.$parent.$emit('msg');
    
    //brother2
    this.$parent.$on('msg', handle);
    ```

- ##### 祖先和后代

  - provide和inject：能够实现祖先给后代传值

    ```vue
    // 祖先
    provide() {
    	return { grand: 'data'}
    }
    
    // 后代
    inject: ['grand']
    ```

- ##### 任意两个组件之间

  - 事件总线或者vuex

    ```vue
    class MyBus {
      constructor() {
        // {
        // eventName1:[fn1,fn2],
        // eventName2:[fn3,fn4],
        // }
        this.callback = {}
      }
    
      $on(name, fn) {
        this.callback[name] = this.callback[name] || [];
        this.callback[name].push(fn);
      }
    
      $emit(name, args) {
        if (this.callback[name]) {
          this.callback[name].forEach(cb => cb(args));
        }
      }
    }
    
    // main.js
    Vue.prototype.$bus1 = new MyBus(); // 也可以 Vue.prototype.$bus = new Vue();
    
    // child1
    this.$bus1.$emit('bus1','兄弟又来消息了');
    // child2
    this.$bus1.$on('bus1', data => {
        console.log('兄弟又来消息了', data);
    });
    ```

  - vuex: 创建唯一的全局数据管理者store,通过它管理数据并通知组件状态变更。

### vue插槽

- 匿名插槽

  ```vue
  // comp1
  <div>
      <slot></slot>
  </div>
  
  //parent
  <comp1>hello vue</comp1>
  ```

- 具名插槽

  ```vue
  // comp2
  <div>
      <slot></slot>
      <slot name="content"></slot>
  </div>
  
  // parent
  <comp2>
      //默认插槽用default做参数
  	<template v-slot:defalut>bababababa</template>
      //具名插槽用插槽名name做参数
      <template v-slot:content>hahhahahahaha</template>
  </comp2>
  ```

- 作用域插槽

  ```vue
  // comp3
  
  <div>
      <slot msg="message"></slot>
  </div>
  
  // parent
  <comp3>
      // 把v-slot的值指定为作用域的上下文对象
   	<template v-slot:default="ctx">
      来自子组件:{{ctx.msg}}
      </template>
  </comp3>
  
  ```

  