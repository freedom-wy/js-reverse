# 红薯小说网JS逆向研究
***
#### 文件列表:
##### handle_hongshuwang.py 读取本地HTML文件，使用execjs调用破解JS  
##### hongshuwang.html 本地HTML文件  
##### hongshuwang.js 红薯网JS破解文件,实际项目中需要使用正则表达式抽取
***
#### 逆向方法:
##### 1、打开https://g.hongshu.com/content/93416/13877912.html，复制源代码到本地  
##### 2、删除或注释无关代码,防止保存的本地HTML文件打开后跳转等操作
##### 3、通过阅读JS代码和打断点确认最终需要获取secWords变量
##### 4、抽取相关JS代码，使用execjs调用

***
#### bug:dazhuang_python@sina.com
