import execjs
import re
from lxml import etree


class HongShuWang(object):
    def handle_js(self,text):
        with open("hongshuwang.js", 'r') as f:
            f_read = f.read()

        js = execjs.compile(f_read)
        for i,j in enumerate(js.call("hongshuwang")):
            text = re.sub('<span class="context_kw%s"></span>'%i,chr(int(j)+1),text)
        html = etree.HTML(text)
        result = ''.join(html.xpath("//div[@class='rdtext']/p/text()"))
        print(result)



if __name__ == '__main__':
    hongshuwang = HongShuWang()
    with open('hongshuwang.html','r',encoding='utf-8') as f:
        text = f.read()
    hongshuwang.handle_js(text)