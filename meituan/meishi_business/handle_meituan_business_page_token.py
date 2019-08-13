import zlib
import re
import requests
import base64
import time



class MeituanToken(object):
    """
    美团token破解
    """
    def __init__(self):
        self.index_url = "https://bj.meituan.com/meishi/"
        self.header = {
            # "User-Agent":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36"
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        }
        self.meituan_session = requests.session()

    def handle_uuid(self):
        """
        获取uuid
        :return: uuid
        """
        uuid_search = re.compile(r"uuid:\s'(.*?)'")
        response = self.meituan_session.get(url=self.index_url,headers=self.header)
        self.uuid = uuid_search.search(response.text).group(1)

    #生成token
    def handle_token(self,value):
        """
        生成token
        :return: 加密后的token
        """
        # 二进制编码
        encode = str(value).encode()
        # 二进制压缩
        compress = zlib.compress(encode)
        # base64编码
        b_encode = base64.b64encode(compress)
        # 转为字符串
        token = str(b_encode, encoding='utf-8')
        return token

    #发送请求验证
    def handle_page(self,page):
        """
        发送请求验证
        :return:
        """
        #首先获取uuid
        self.handle_uuid()
        #拼接sign参数并加密
        sign_value = "areaId=0&cateId=0&cityName=北京&dinnerCountAttrId=&optimusCode=10&originUrl=https://bj.meituan.com/meishi/pn%s/&page=%s&partner=126&platform=1&riskLevel=1&sort=&userId=&uuid=%s"%(page,page,self.uuid)
        sign = self.handle_token(value=sign_value)
        time_ts = int(time.time() * 1000)
        #拼接token参数
        token_value = {"rId":100900,"ver":"1.0.6","ts":time_ts,"cts":time_ts+100,"brVD":[1034,616],"brR":[[1366,768],[1366,728],24,24],"bI":["https://bj.meituan.com/meishi/",""],"mT":[],"kT":[],"aT":[],"tT":[],"aM":"","sign":sign}
        print(token_value)
        token = self.handle_token(token_value)
        get_data_url = "https://bj.meituan.com/meishi/api/poi/getPoiList?cityName=北京&cateId=0&areaId=0&sort=&dinnerCountAttrId=&page=1&userId=&uuid=%s&platform=1&partner=126&originUrl=https://bj.meituan.com/meishi/&riskLevel=1&optimusCode=10&_token=%s"%(self.uuid,token)
        print(get_data_url)
        response = self.meituan_session.get(url=get_data_url,headers=self.header)
        print(response.text)


    #破解token加密字符串
    def decode_token(self):
        """
        破解token加密字符串
        :return: 明文token
        """
        encry_token = "eJxdj1tvgjAYhv+Kd1yw2NJKQe8QddGpHD1nF9AxKXJQqYBb9t9HTbYlu/iS9336fMnXT+k6fZMGHQXCPoRPHamKrm2VlC7sEqntvBSvKlE1iHW1hzTSQvqP4gcNr+tRiw8KxL2nDlHI6wO6gh0UTFpHI3oLfwoSBfXEPNSpMKWY83M5ACBMulnE+C3Iu7TIQJvLmAFxkyTszBe2SKffFPwm/scW4j9irWTHXORoVqcJRcs6MZw4rJo5dXZsaHqjO7deCOqtqOlk1KxLFy0bmMB6BrPLdEgKQy7xm631bVd2DCbDdeUf+1NQTlQ8XjAQgvetjp6d3d3fn+O54inrS3NxZ9be0/1VLIcn6Nn5nN7l2L6kdsQtHNtGNd6wkSXHfnCv8vF1nx83Bl+71u2Ua5Xlm3ZxMt3V5iMBgJuTpixUtj37iwr3UzovUkSMpafSBak3PE3NRMcBCrThiI8jNmxQXb9X/oqF0tc32QyNhA=="
        # base64解码
        token_decode = base64.b64decode(encry_token.encode())
        # 二进制解压
        token_string = zlib.decompress(token_decode)
        #其中的sign值的加密方法和token加密方法相同使用如下参数：
        #"areaId=0&cateId=0&cityName=北京&dinnerCountAttrId=&optimusCode=10&originUrl=https://bj.meituan.com/meishi/pn2/&page=2&partner=126&platform=1&riskLevel=1&sort=&userId=&uuid=42fa8d32-f530-4acd-8206-d6dd0bee2d6f"
        print(token_string.decode())

if __name__ == '__main__':
    meituan_page_token = MeituanToken()
    meituan_page_token.handle_page(page=1)
    # meituan_page_token.decode_token()
