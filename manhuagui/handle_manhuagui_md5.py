import lzstring
import re
import requests


class Manhuagui(object):
    def __init__(self):
        self.index_url = "https://www.manhuagui.com/comic/32927/446274.html"
        self.header = {
            "Connection":"keep-alive",
            "Upgrade-Insecure-Requests":"1",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36",
            "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Accept-Encoding":"gzip, deflate, br",
            "Accept-Language":"zh-CN,zh;q=0.9",
        }

    def handle_html(self):
        """
        首先请求漫画柜中漫画首页，是用正则表达式匹配加密后的JS代码
        :return:加密后的JS代码
        """
        js_search = re.compile(r";',\d+,\d+,'(.*?),")
        response = requests.get(url=self.index_url,headers=self.header)
        self.js_value = js_search.search(response.text).group(1)

    def handle_md5_value(self):
        """
        使用正则表达式匹配出加密字符串，并通过lzstring解密
        :return:明文md5值
        """
        md5_search = re.compile(r"preInit\|(.*?)\|block_cc")
        self.handle_html()
        x = lzstring.LZString()
        self.js_decode_value = x.decompressFromBase64(self.js_value)
        print(self.js_decode_value)
        self.md5_value = md5_search.search(self.js_decode_value).group(1)

    def handle_pic(self):
        """
        请求图片URL
        :return:
        """
        self.handle_md5_value()
        pic_url = "https://i.hamreus.com/ps3/dp/yytzdcrhb_zfang/短篇/004 拷贝.jpg.webp?cid=446274&md5=%s"%self.md5_value
        print(pic_url)




if __name__ == '__main__':
    manhuagui = Manhuagui()
    manhuagui.handle_pic()
