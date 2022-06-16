### React是什么？
  `JavaScript UI`库, 只关注`UI`层,声明式和函数式风格, 虚拟`DOM`,使前端程序更高效
   
### 特性
1. 组件化
2. 单项数据流
3. 声明式编程和函数式编程
4. 虚拟`DOM`
5. `JSX`语法
   
### 优势
1. 高效灵活
2. 声明式设计,使用简单
3. 组件化, 代码复用率高

### 真实DOM与虚拟DOM

- `reactDOM`是真实`DOM`
- `React`中使用`JSX`语法创建虚拟`DOM`
- 虚拟`DOM`本质是`JavaScript`对象
- `JSX`会被`Babel`转换为`React.createElement()`
  ```
  const HELE = <h1>haha</h1>
  ReactDOM.render(HELE, document,getElementById('app'))
  
  // 第一个参数是标签名,第二个参数是属性,第三个参数是文本
  React.createElement('h1', { class: 'test1' }, 'haha')
  
  ```

### 优缺点

  真实`DOM`的优势

  - 易用

  缺点: 效率低, 内存占用高, 频繁操作导致不断重绘和回流

  虚拟`DOM`的优势

  - 效率高 
  - 大规模应用维护简单
  - 不会因频繁操作导致不断重绘和回流
 - ` React`跨平台

  缺点
  - 首次渲染因为有虚拟`DOM`这一次处理, 速度稍慢
  - 性能要求高的应用无法极致优化
  


