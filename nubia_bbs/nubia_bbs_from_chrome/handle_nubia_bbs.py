import requests
import time
from selenium import webdriver
import re



class NubiaBbs(object):
    def __init__(self):
        self.index_url = "https://bbs.nubia.cn/"
        self.header = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        }
        self.nubia_request_session = requests.session()

    def handle_index(self):
        """
        请求努比亚论坛首页获取arg1并替换本地破解文件
        :return:after_decode_cookie.html
        """
        response = self.nubia_request_session.get(url=self.index_url,headers=self.header)
        with open('decode_cookie.html','r') as f1:
            html = f1.read()
        arg1_search = re.compile(r"var\sarg1='(.*?)';")
        arg1_value = arg1_search.search(response.text).group(1)
        html = html.replace("&&&",arg1_value)
        with open('after_decode_cookie.html','w') as f2:
            f2.write(html)
        self.nubia_request_session.get(url="https://bbs.nubia.cn/favicon.ico",headers=self.header)

    def selenium_cookie(self):
        """
        通过selenium调用chrome打开after_decode_cookie.html破解文件,获取cookie值
        :return:response.text
        """
        nubia_selenium = webdriver.Chrome()
        nubia_selenium.get("file:///E:\\study\\js-reverse\\nubia_bbs\\after_decode_cookie.html")
        time.sleep(5)
        cookie_value = nubia_selenium.title
        nubia_selenium.quit()
        self.nubia_request_session.cookies.set("acw_sc__v2",cookie_value)
        response = self.nubia_request_session.get(url=self.index_url,headers=self.header)
        print(response.text)

if __name__ == '__main__':
    nubia = NubiaBbs()
    nubia.handle_index()
    nubia.selenium_cookie()