import requests
import re
import time


class MeituanBusinessComment(object):
    def __init__(self):
        self.index_url = "https://www.meituan.com/meishi/1467844/"
        self.header = {
            # "User-Agent":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36"
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        }

    def handle_uuid(self):
        uuid_search = re.compile(r"uuid=(.*?);")
        uuid_response = requests.get(url=self.index_url,headers=self.header)
        self.uuid = uuid_search.search(uuid_response.headers['Set-Cookie']).group(1)

    def handle_comment(self):
        self.handle_uuid()
        """
        https://www.meituan.com/meishi/api/poi/getMerchantComment?uuid=4c075f52-c8ba-4116-b02d-5015c4ade7e5&platform=1&partner=126&originUrl=https://www.meituan.com/meishi/1467844/&riskLevel=1&optimusCode=10&id=1467844&userId=&offset=30&pageSize=10&sortType=1
        """
        for page in (0,110,10):
            comment_url = "https://www.meituan.com/meishi/api/poi/getMerchantComment?uuid=%s&platform=1&partner=126&originUrl=https://www.meituan.com/meishi/1467844/&riskLevel=1&optimusCode=10&id=1467844&userId=&offset=%s&pageSize=10&sortType=1"%(self.uuid,page)
            response = requests.get(url=comment_url,headers=self.header)
            print(response.text)
            time.sleep(1)

meituan_comment = MeituanBusinessComment()
meituan_comment.handle_comment()