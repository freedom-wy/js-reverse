# jsdom研究
***
##### 1、需要有**nodejs**环境支持  
##### 2、使用**npm install jsdom** 安装jsdom模块
##### 2、使用jsdom，主要用到jsdom模块的一个命名导出的jsdom构造函数，往构造器传递一个字符串，将会得到一个jsdom构造实例对象，这个对象有很多使用的属性，特别是window对象
```javascript
const jsdom = require("C:\\Users\\Administrator\\node_modules\\jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
console.log(dom.window.document.querySelector("p").textContent)
```
***
#### bug:dazhuang_python@sina.com
