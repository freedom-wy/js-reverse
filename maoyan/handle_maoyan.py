import requests
from fontTools.ttLib import TTFont
import re
from maoyan.knn_font import classifyPerson
from lxml import etree
import time



class HandleMaoYan(object):
    def __init__(self,movie_id):
        self.url = "https://maoyan.com/films/%s"%movie_id
        self.header = {
            "Connection":"keep-alive",
            "Upgrade-Insecure-Requests":"1",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36",
            "Sec-Fetch-Mode":"navigate",
            "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Sec-Fetch-Site":"none",
            "Accept-Encoding":"gzip, deflate, br",
            "Accept-Language":"zh-CN,zh;q=0.9",
        }

    def request_css_font(self):
        '''
        请求字体文件
        :return:当前网页源码
        '''
        css_response = requests.get(url=self.url,headers=self.header)
        # 使用正则表达式匹配woff字体URL
        font_url_search = re.compile(r"\/\/.*?\.woff")
        font_url = font_url_search.search(css_response.text).group()
        if font_url:
            font_url = 'http:'+font_url
        #请求字体文件
        font_file_response = requests.get(url=font_url,headers=self.header)
        with open("maoyan.woff",'wb') as f:
            f.write(font_file_response.content)
        return css_response.text

    def handle_font(self):
        '''
        替换所有的加密字符
        :return:
        '''
        html = self.request_css_font()
        base_font = TTFont('maoyan.woff')
        base_list = base_font.getGlyphOrder()[2:]

        font_dict = {}
        for font in base_list:
            # 获取字体坐标
            coordinate = base_font['glyf'][font].coordinates
            font_0 = [i for item in coordinate for i in item]
            # 使用k邻近值算法确定该坐标是哪个数字
            font_dict[font] = classifyPerson(font_0)

        for i in base_list:
            pattern = i.replace('uni','&#x').lower() + ';'
            html = html.replace(pattern,str(font_dict[i]))
        maoyan_html = etree.HTML(html)
        value = maoyan_html.xpath("//span[@class='stonefont']/text()")
        value_unit = maoyan_html.xpath("//span[@class='unit']/text()")[0]
        name = maoyan_html.xpath("//div[@class='movie-brief-container']/h3[@class='name']/text()")[0]
        info = {}
        info["电影名称"] = name
        info["用户评分"] = value[0]
        info["评分人数"] = value[1]
        info["累计票房"] = value[2] + value_unit
        info['url'] = self.url
        print(info)

    def woff_to_xml(self):
        base_font = TTFont('maoyan2.woff')
        base_font.saveXML('maoyan2.xml')





if __name__ == '__main__':
    movie_id_list = ['1218029','345419','1230121','360504','503342']
    for id in movie_id_list:
        maoyan = HandleMaoYan(movie_id=id)
        maoyan.handle_font()
        # maoyan.woff_to_xml()
        time.sleep(2)
