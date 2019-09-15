# 信融财富登录接口密码加密js逆向研究
***
#### 文件列表:
##### AA.base-min.js 破解JS
##### decode.py 使用pyexecjs读取破解JS，实现破解
***
#### 逆向方法:
##### 通过password关键字找到js入口
```javascript
data:{
    username:_form.find('#rapid-userName').val(),
    password:AA.Helper.encrypPw(_form.find('#rapid-userPw').val()),
    captcha:_form.find('#rapid-captcha').val(),
    seed:_form.find('#rapid-seed').val()
}
```
##### 通过encrypPw找到加密方法  
##### 扣取需要的JS代码

***
#### 我在慕课网上主讲课程[Python爬虫工程师必学——App数据抓取实战](https://coding.imooc.com/class/283.html),还请各位大神多多支持.
#### bug:dazhuang_python@sina.com
