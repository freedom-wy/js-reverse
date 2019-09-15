import requests
from fontTools.ttLib import TTFont
from lxml import etree
import re


class AutohomeKoubei(object):
    def __init__(self):
        self.detail_url = "https://k.m.autohome.com.cn/detail/share_01dmqy8fa168vkae9h60vg0000.html"
        self.header = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
        }
        self.font_list = [" ","中","低","是","级","排","坐","硬","量","五","下","里","软","矮","八","档","灯","空","过","光","大","手","公","开","地","保","左","机","远","音","性","身","不","三","长","冷","的","泥","皮","二","当","右","了","门","高","和","有","油","味","呢","七","少","小","孩","坏","","电","多","养","动","六","来","加","控","只","副","响","耗","短","自","内","十","外","得","真","无","上","比","启","盘","一","好","雨","路","实","九","问","近","着","更","四","很"]

    def handle_font(self):
        '''
        首先获取ttf字体文件,写入本地
        :return:
        '''
        response = requests.get(url=self.detail_url,headers=self.header)
        ttf_url_search = re.compile(r"src:url\('//(.*?)'\)\sformat\('woff'\);")
        ttf_url = 'http://'+ttf_url_search.search(response.text).group(1)
        ttf_response = requests.get(url=ttf_url,headers=self.header)
        with open('koubei.ttf','wb') as f:
            f.write(ttf_response.content)
        self.detail = response.text

    def handle_detail(self):
        '''
        处理网页返回数据，进行替换
        :return:老朋友的推荐，去看了一几个牌子，头都看晕了，没有结果，决定不了买哪个牌子，九了女儿意见，准备在荣威里面选盘款。性价上最高的就是I5了，看中这款的原因，并不是因为配置高，也不是养力强，而是囊中羞涩，预算控有那么电啊�，而荣威这个品牌过硬，质量可靠，故障率低，朋友买了都说挺一的。暂时没有，还是觉外有点说不过去啊！买车看车子做这个决定，是和女儿共同商量决定的，我看中的是这个牌子的知名度，品质这些方面，女儿的话是喜欢这款车型的十观，女孩子嘛，都是十貌协会，两厢车上较炫酷，十形时尚养感，适合年轻妹子。女儿盘看就中意了。
        '''
        font_file = TTFont('koubei.ttf')
        # 找出字体和字体文件中编码的对应关系,保存为字典
        font_dict = dict(zip(font_file.getGlyphOrder(),self.font_list))
        for key,value in font_dict.items():
            self.detail = self.detail.replace("&#x"+key[3:].lower()+";",value)
        html = etree.HTML(self.detail)
        print(''.join(html.xpath("//div[@class='matter']/div[@class='item']//span/text()")))


if __name__ == '__main__':
    koubei = AutohomeKoubei()
    koubei.handle_font()
    koubei.handle_detail()