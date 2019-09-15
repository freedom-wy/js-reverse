# 汽车之家app端口碑css加密字体破解
### 仅限学术交流，如有冒犯，请及时联系本人删除
***
#### 文件列表:
##### handle_autohome_app_koubei.py 破解程序
##### koubei.ttf 字体文件
***
#### 破解方法:
##### 1、通过浏览器开发者模式，找到页面中文字所使用的css样式
##### 2、通过抓包等方法找到加载的css文件，通过正则表达式取出字体文件URL
##### 3、通过[百度字体编辑器解析woff文件](http://fontstore.baidu.com/static/editor/index.html) 可以生成font_list.py文件
##### 4、使用fontTools处理字体文件，得出对应关系
##### 5、通过对应关系解析加密字体
##### 6、破解方法和大众点评css字体加密逆向方法相同
***
#### bug:dazhuang_python@sina.com
