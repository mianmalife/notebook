## HTTP协议
1. 超文本传输协议(超媒体文档如HTML)
2. 应用层协议
3. 为Web浏览器,Web服务器之间通讯而设计
4. 客户端-服务端模型(客流端发送请求,然后等待直到收到消息)
5. 无状态协议(服务器在两个请求之间不保留任何数据状态)
6. 基于TCP/IP协议
7. Web数据交换的基础
8. 客户端-服务端协议


- 客户端(用户代理,一般是浏览器，也可以是其它,  比如机器爬虫)发起请求
- 浏览器发起请求并解析HTTP返回的消息
- Web服务器为客户端提供文档
- 浏览器和服务器之间存在代理,用来转发HTTP消息
  
## HTTP性质
1. 简单, 报文易读(虽然HTTP/2将HTTP消息封装到了帧中)
2. 可扩展
3. 无状态有会话(使用cookies可以创建有状态的会话)

## HTTP和连接
- 客户端和服务端交互之前必须在这两者间建立一个TCP链接, 每一对都是如此,因此相比多个请求复用一个TCP连接更低效
  
## HTTP控制内容
1. 缓存
2. 代理和隧道
3. 认证
4. 开发同源限制
5. 会话

## HTTP流
1. 打开一个TCP连接
2. 发送一个HTTP报文
   ```
    GET / HTTP/1.1
    Host: developer.mozilla.org
    Accept-Language: fr
   ```
3. 读取服务端返回的报文信息
   ```
    HTTP/1.1 200 OK
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Server: Apache
    Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
    ETag: "51142bc1-7449-479b075b2891b"
    Accept-Ranges: bytes
    Content-Length: 29769
    Content-Type: text/html

   ```
  4. 关闭连接或者为后续请求重用连接
   
## HTTP报文

1. 请求
   ```
    GET / HTTP/1.1
    Host: developer.mozilla.org
    Accept-Language: fr
   ```


2. 响应
   ```
    HTTP/1.1 200 OK
    Date: Sat, 09 Oct 2010 14:28:02 GMT
    Server: Apache
    Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
    ETag: "51142bc1-7449-479b075b2891b"
    Accept-Ranges: bytes
    Content-Length: 29769
    Content-Type: text/html
   ```

## 基于HTTP的APIs
  ```
  XMLHttpRequest, Fetch API
  ```

## HTTP状态码
- 信息响应(100~199)
- 成功响应(200~299)
- 重定向消息(300~399)
- 客户端错误响应(400~499)
- 服务端错误响应(500~599)

  ```
  301: 永久重定向
  302: 临时重定向
  303: 指示客户端通过一个GET请求在另一个URL中获取请求的资源
  304: 客户端继续使用缓存

  400: 客户端错误,无效请求参数等
  401: 请求的资源需身份验证
  403: 没有访问权限(与401不同的是, 服务器知道客户端身份)
  404: 服务器找不到资源
  405: 目标资源不支持该方法

  500: 服务器遇到不知如何处理的情况
  501: 服务器不支持请求方法
  502: 服务器作为网关需要得到一个处理这个请求的响应,但是得到一个错误的响应
  503: 服务没有准备好处理请求,比如服务器维护或停机
  504: 服务器充当网关响应超时
  ```
## HTTP headers

- 通用首部
- 请求头
- 响应头
- 实体头

## 跨域资源共享[CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
- 基于HTTP请求头的机制
- 服务器标示了除过它以外的域,允许浏览器访问自己的资源


### 简单请求
- GET
- POST
- HEAD(请求头部信息, 这些头部信息与GET请求返回的头部信息一致) 在一些大文件下载请求中 返回资源的大小信息,以决定是否下载

### 处理简单的跨域请求

服务端设置 `Access-Control-Allow-Origin: http://xxx...` 和客户端`Origin: http://xxx...`配合

### 预检请求

比如一个POST请求设置了自定义头和Content-Type

浏览器发起OPTIONS请求 -> 服务端响应 -> 浏览器发起实际请求(比如POST) -> 服务端响应

## HTTP响应首部字段

   ```
   // 服务端告诉客户端不同的域返回不同的内容
   Access-Control-Allow-Origin: http://xxx
   Vary: http://xxx

   // 将服务端允许访问的头放入白名单
   Access-Control-Expose-Headers: X-kaka-Headers X-hh-Headers

   // 预检请求的结果缓存多久
   Access-Control-Max-Age: 86400   // 24小时

   // 设置预检请求的响应 允许实际请求的HTTP方法
   Access-Control-Allow-Methods: GET, POST

   ...

   ```
   




