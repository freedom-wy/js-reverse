# js-reverse
### JS基础
1、获取时间戳
```javascript
// 获取时间戳
var time1 = new Date().getTime();
var time3 = Date.now();
alert(time1);
// 时间戳转时间
var time2 = new Date(time1).toLocaleString();
alert(time2);
```
2、声明变量，使用var关键字时声明的是局部变量，不使用var关键字，则为全局变量  
3、||遇真返回,如果全为假，则返回最右值,&&遇假返回
```javascript
var b = a||0||""||100;
console.log(b);
//var a = 0;
//(1==0)&&(a=100);
//alert(a);
```
4、在两个不同类型值中间使用+，返回值为字符串类型  
5、三元运算符
```javascript
var a = 0;
a?alert("真"):alert("假");
// 如果a为真则弹出真,否则弹出假
```
6、return和返回值之间不可换行，否则将返回空,常见于格式化代码后出错  
7、创建对象的两种方法
```javascript
var obj = {};
var obj2 = new Object;
```

### bug:dazhuang_python@sina.com
