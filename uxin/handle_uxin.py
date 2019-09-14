import execjs
import re
import requests


class HandleUxin(object):
    def __init__(self):
        self.index_url = "https://www.xin.com/beijing/i1/"
        self.header = {
            "User-Agent":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36",
        }

    def handle_request(self):
        arg1_search = re.compile(r"arg1='(.*?)';")
        # 首先获取arg1值
        js_response = requests.get(url=self.index_url,headers=self.header)
        arg1_value = arg1_search.search(js_response.text).group(1)
        # 该值固定
        _0x5e8b26 = "3000176000856006061501533003690027800375"
        #读取破解JS
        with open('uxin.js','r',encoding='utf-8') as f:
            f_read = f.read()
        js = execjs.compile(f_read)
        acw_sc__v2 = js.call("hexXor",_0x5e8b26,arg1_value)
        self.header['Cookie'] = "acw_sc__v2="+acw_sc__v2
        response = requests.get(url=self.index_url,headers=self.header)
        print(response.text)


if __name__ == '__main__':
    uxin = HandleUxin()
    uxin.handle_request()
