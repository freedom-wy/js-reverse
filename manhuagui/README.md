# 漫画柜MD5值JS逆向研究
***
#### 文件列表:
##### handle_manhuagui_md5.py 漫画柜md5值解密程序
##### md5_test.js 从网页中抠出的js加密代码 
***
#### 逆向方法:
##### 首先通过抓包并在浏览器中打断点定位到cid值，通过浏览器右侧堆栈区域找到Md5生成代码
##### 使用正则表达式抠出加密的JS代码，使用正则表达式抠出MD5加密字符串
##### 使用lzstring解密
***
#### 我在慕课网上主讲课程[Python爬虫工程师必学——App数据抓取实战](https://coding.imooc.com/class/283.html),还请各位大神多多支持.
#### bug:dazhuang_python@sina.com
