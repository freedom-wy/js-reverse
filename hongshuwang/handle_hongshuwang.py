import requests
import execjs
import re


class HongShuWang(object):
    def __init__(self):
        self.url = "https://g.hongshu.com/content/93416/13877912.html"
        self.header = {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36"
        }

    def handle_request(self):
        response = requests.get(url=self.url,headers=self.header)
        crypto_js = """ 
            const jsdom = require("C:\\\\Users\\\\Administrator\\\\node_modules\\\\jsdom"); 
            const { JSDOM } = jsdom;
            const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
            window = dom.window;
            document = window.document;
            XMLHttpRequest = window.XMLHttpRequest;
            function start(){
        """
        # 匹配出所有关于解密的js代码
        crypto_js += re.search(r"(var CryptoJS=CryptoJS[\s\S]*;}})</script>[\s\S]*<!--内容结束-->", response.text).group(1)
        crypto_js += "return words;}"
        print(crypto_js)
        # 编译js代码
        # ctx = execjs.compile(crypto_js)
        # ctx.call("start")
        # 获取解密好的字符数组
        # beffor_array = [" ", " "] + ctx.call('start')
        # print(ctx.call('start'))

        # 将解密出来的字符还原到html文档中
        # for context_kw_index in range(len(beffor_array)):
        #     print(context_kw_index)
        #     html, n = re.subn('<span class="context_kw{0}"></span>'.format(context_kw_index),
        #                       beffor_array[context_kw_index], response.text)
        #     print('本次共替换了：{0}处文本，内容为：{1}，'.format(n, beffor_array[context_kw_index]))
        # return html


if __name__ == '__main__':
    hongshuwang = HongShuWang()
    hongshuwang.handle_request()