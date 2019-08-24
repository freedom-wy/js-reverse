import json
import time
import requests
import re
from fontTools.ttLib import TTFont
from font_list import FONT_LIST
from lxml import etree


class HandleDianpingCssFont(object):
    def __init__(self):
        self.css_url = "http://s3plus.meituan.net/v1/mss_0a06a471f9514fc79c981b5466f56b91/svgtextcss/f33291305f85acfa9d7d61c58ca617e4.css"
        self.header = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
        }

    def parse_css(self):
        """
        解析css文件，获取字体文件和css对应关系
        :return:
        """
        font_url_search = re.compile(r'font-family: "(.*?)".*?,url\("//(s3plus\.meituan\.net/v1/.*?\.woff)"\)')
        css_font_response = requests.get(url=self.css_url,headers=self.header)
        #获取css名称和字体URL文件对应关系
        font_url_list = font_url_search.findall(css_font_response.text)
        for font_name,font_url in font_url_list:
            font_response = requests.get(url="http://"+font_url,headers=self.header)
            #将字体文件写入本地
            font_name = font_name.split("-")[-1]+".woff"
            with open(font_name,'wb') as f:
                f.write(font_response.content)
            time.sleep(1)
            self.parse_font(font_name)
            break

    def parse_font(self,file_name):
        """
        处理字体文件，保存字符编码和文字对应关系
        :param file_name:
        :return:
        """
        font_file = TTFont(file_name)
        #找出字体和字体文件中编码的对应关系,保存为字典
        font_dict = json.dumps(dict(zip(font_file.getGlyphOrder(),FONT_LIST)))
        #写入本地，也可以写入数据库
        with open("font_dict",'w') as f:
            f.write(font_dict)

    def handle_business_detail(self):
        """
        请求大众点评页面
        :return:
        """
        business_detail_url = "http://www.dianping.com/shop/103986366"
        response = requests.get(url=business_detail_url,headers=self.header)
        html = etree.HTML(response.text)
        #取营业时间
        time = html.xpath('//div[@class="other J-other Hide"]//span/svgmtsi/text()')
        #读取本地字体对应关系文件
        with open('font_dict','r') as f:
            f_read = json.loads(f.read())
        for info in time:
            key = "uni"+json.dumps(info)[-5:][:-1]
            if key in f_read:
                print(f_read[key])

if __name__ == '__main__':
    #最终结果为 "周六周日为周一周五为"
    dianping = HandleDianpingCssFont()
    # dianping.parse_css()
    dianping.handle_business_detail()