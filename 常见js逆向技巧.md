# js-reverse
### JS逆向研究
#### 1、debugger断点反调试
##### 点击debugger左侧数字，点击鼠标 右键选择conditional breakpoint，设置条件断点，在弹出的框中输入false，再次刷新页面即可
#### 2、无线debugger断点反调试
##### （1）、可以取消所有断点
##### （2）、将调用函数置空，按f8继续下一行代码
#### 3、eval加密
##### （1）、复制除eval外其他所有JS代码
##### （2）、打开chrome开发者模式，并切换到console标签
##### （3）、粘贴js代码，敲回车，即可得到明文JS
##### （4）、使用在线代码格式化，格式化JS代码:[在线格式化代码](http://tool.oschina.net/codeformat/js/)
#### 4、字体通过css加密
##### (1)、通过浏览器开发者模式，找到页面中文字所使用的css样式
##### (2)、通过抓包等方法找到加载的css文件，通过正则表达式取出字体文件URL
##### (3)、通过[百度字体编辑器解析woff文件](http://fontstore.baidu.com/static/editor/index.html) 可以生成font_list.py文件
##### (4)、使用fontTools处理字体文件，得出对应关系
##### (5)、通过对应关系解析加密字体
#### 5、通过RSA加密关键字段，如密码,可以通过关键字找到相应的方法，扣取需要的代码

### bug:dazhuang_python@sina.com
