import requests
from handle_meituan_token import handle_webdriver_meituan_token
import re
import time


class MeituanBusinessPage(object):
    """
    解析美团美食页码页
    """
    def __init__(self):
        self.index_url = "https://bj.meituan.com/meishi/pn1/"
        self.header = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        }

    def handle_uuid(self):
        """
        获取UUID
        :return: uuid
        """
        uuid_search = re.compile(r"uuid:\s'(.*?)',")
        uuid_response = requests.get(url=self.index_url,headers=self.header)
        self.uuid = uuid_search.search(uuid_response.text).group(1)


    def handle_page(self):
        """
        处理页码页
        :return:
        """
        self.handle_uuid()
        for page in range(1,11):
            time.sleep(1)
            token = handle_webdriver_meituan_token(page_num=page,uuid=self.uuid)
            page_detail_url = "https://bj.meituan.com/meishi/api/poi/getPoiList?cityName=北京&cateId=0&areaId=0&sort=&dinnerCountAttrId=&page=%s&userId=&uuid=%s&platform=1&partner=126&originUrl=https://bj.meituan.com/meishi/pn%s/&riskLevel=1&optimusCode=10&_token=%s"%(page,self.uuid,page,token)
            print(page_detail_url)
            break

if __name__ == '__main__':
    meituan_business_page = MeituanBusinessPage()
    meituan_business_page.handle_page()
