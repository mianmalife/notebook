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

  <!DOCTYPE html... (here comes the 29769 bytes of the requested web page)

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
