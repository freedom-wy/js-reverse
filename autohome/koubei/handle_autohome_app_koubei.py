import requests
import json
from fontTools.ttLib import TTFont
from lxml import etree
import re


class AutohomeKoubei(object):
    def __init__(self):
        self.detail_url = "https://k.m.autohome.com.cn/detail/share_01dmqy8fa168vkae9h60vg0000.html"
        self.header = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
        }

    def handle_font(self):
        '''
        首先获取ttf字体文件,写入本地
        :return:
        '''
        response = requests.get(url=self.detail_url,headers=self.header)
        # ttf_url_search = re.compile(r"src:url\('//(.*?)'\)\sformat\('woff'\);")
        # ttf_url = 'http://'+ttf_url_search.search(response.text).group(1)
        # ttf_response = requests.get(url=ttf_url,headers=self.header)
        # with open('koubei.ttf','wb') as f:
        #     f.write(ttf_response.content)
        self.detail = response.text

    def handle_detail(self):
        font_file = TTFont('koubei.ttf')
        # 找出字体和字体文件中编码的对应关系,保存为字典
        # font_dict = json.dumps(dict(zip(font_file.getGlyphOrder(), FONT_LIST)))
        print(font_file.getGlyphOrder())


if __name__ == '__main__':
    koubei = AutohomeKoubei()
    # koubei.handle_font()
    koubei.handle_detail()