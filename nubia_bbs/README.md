# 努比亚论坛cookies值JS逆向研究
***
#### 文件列表:
##### after_decode_cookie.html 努比亚论坛cookie值破解程序-破解文件
##### decode_cookie.html 努比亚论坛cookie值破解程序-替换前
##### handle_nubia_bbs.py 努比亚论坛cookie值破解python程序
***
#### 逆向方法:
##### 通过fiddler抓包发现第一次请求https://bbs.nubia.cn/时会返回一段JS代码
##### 通过chrome浏览器调试，发现有debugger反调试,保存fiddler抓取到的js代码到本地
##### 通过js美化，格式化代码[美化JS代码](https://tool.lu/js/)
##### 通过chrome浏览器打开本地文件，在debugger情况下找到调用debugger的地方，删除代码,解除反debug
##### 通过打断点找到arg2即找到了cookie值

***
#### bug:dazhuang_python@sina.com
