import zlib
import re
import requests
import base64
import time



class MeituanToken(object):
    """
    美团token破解   eJyFj0tvozAUhf+Lt6DY5mWINIuGhAKZJEAoTam6AEp4lICHZ8Jo/vu4aqsuK13pHH/36Oj6L2itV7DECGkI8WBMW7AEeIEWCuBB37GNrMgIyRohIiE8SL6ZIhJBkhmL22ANls9YExAvqvjlnXgMfBCMVPTCf3mJeUFi856yWAjkfU+7JYTdvLikRT9E9SJpLpD5Li8grUXILvkpJEDACi8+K2T69qnRp/Zf7x37HGvriqxmLrWnavbx4W7euKtUJ9TURfWseES391lg5d7JTab70bEL59G5/nEs1QiHu2MhbbxpXdwasUrUMU7m8hB7bjR0m/Nk3tLBV90Mnq7wTGS4fXBLi+JCd6x8IlHxlJuzTbnMHarQoNlghBrJtvT3bXyN5TjlPGoXU6+ZrVJPVZ1ss8C3Tvl2c3+UBaMtuaZfVaEljo1h7LlDutv3XJM8PuhBaXJnGurrKG3NwQ/WO626RklEJM3fxbnCyssow1g5rQxxlLF0LN1f4N9/qZybIA==
    """
    def __init__(self):
        self.index_url = "https://sz.meituan.com/meishi/pn3/"
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
    def handle_token(self):
        """
        生成token
        :return: 加密后的token
        """
        time_ts = int(time.time() * 1000)
        token_value ={
            "rId":100900,
            "ver":"1.0.6",
            "ts":time_ts,
            "cts":time_ts*1000+100,
            "brVD":[
                1920,
                381
            ],
            "brR":[[1920,1080],[1920,1040],24,24],
            "bI":[
                "https://sz.meituan.com/meishi/pn3/",
                "https://sz.meituan.com/meishi/pn2/"
            ],
            "mT":[],
            "kT":[],
            "aT":[],
            "tT":[],
            "aM":"",
            "sign":"eJwlzT1OAzEQBeC7pHC38f6R7CJNgVIhRXQcwGvPJiPWPxqPI8FZuASi4ERwDiyo3lc8vbczjObRQausEfwHyeuT8Qg/Xx/f75/KUQjIp1iCPIhw7aiYhHzJp+gQulZFpguFZ97gKpLyvdb5be+RpJiwt9Hr6nwlncKgVTIXhKEGS52Frj+otBlZI3voFFN+OeMNt+ocWUCVjH+fpZCDaerHuTVDM9lxaca749TMbh6b5bjag116XBF3v514SjQ="
        }
        # 二进制编码
        encode = str(token_value).encode()
        # 二进制压缩
        compress = zlib.compress(encode)
        # base64编码
        b_encode = base64.b64encode(compress)
        # 转为字符串
        token = str(b_encode, encoding='utf - 8')
        return token

    #发送请求验证
    def handle_page(self):
        """
        发送请求验证
        :return:
        """
        self.handle_uuid()
        token = self.handle_token()
        get_data_url = "https://sz.meituan.com/meishi/api/poi/getPoiList?cityName=深圳&cateId=0&areaId=0&sort=&dinnerCountAttrId=&page=2&userId=&uuid=%s&platform=1&partner=126&originUrl=https://sz.meituan.com/meishi/pn2/&riskLevel=1&optimusCode=10&_token=%s"%(self.uuid,token)
        response = self.meituan_session.get(url=get_data_url,headers=self.header)
        print(response.text)

    #破解token加密字符串
    def decode_token(self):
        """
        破解token加密字符串
        :return: 明文token
        """
        encry_token = "eJyFj0tvozAUhf+Lt6DY5mWINIuGhAKZJEAoTam6AEp4lICHZ8Jo/vu4aqsuK13pHH/36Oj6L2itV7DECGkI8WBMW7AEeIEWCuBB37GNrMgIyRohIiE8SL6ZIhJBkhmL22ANls9YExAvqvjlnXgMfBCMVPTCf3mJeUFi856yWAjkfU+7JYTdvLikRT9E9SJpLpD5Li8grUXILvkpJEDACi8+K2T69qnRp/Zf7x37HGvriqxmLrWnavbx4W7euKtUJ9TURfWseES391lg5d7JTab70bEL59G5/nEs1QiHu2MhbbxpXdwasUrUMU7m8hB7bjR0m/Nk3tLBV90Mnq7wTGS4fXBLi+JCd6x8IlHxlJuzTbnMHarQoNlghBrJtvT3bXyN5TjlPGoXU6+ZrVJPVZ1ss8C3Tvl2c3+UBaMtuaZfVaEljo1h7LlDutv3XJM8PuhBaXJnGurrKG3NwQ/WO626RklEJM3fxbnCyssow1g5rQxxlLF0LN1f4N9/qZybIA=="
        # base64解码
        token_decode = base64.b64decode(encry_token.encode())
        # 二进制解压
        token_string = zlib.decompress(token_decode)
        """
        {
            "rId":100900,
            "ver":"1.0.6",
            "ts":1565005977377,
            "cts":1565006372457,
            "brVD":[
                1920,
                381
            ],
            "brR":[[1920,1080],[1920,1040],24,24],
            "bI":[
                "https://sz.meituan.com/meishi/pn3/",
                "https://sz.meituan.com/meishi/pn2/"
            ],
            "mT":[],
            "kT":[],
            "aT":[],
            "tT":[],
            "aM":"",
            "sign":"eJwlzT1OAzEQBeC7pHC38f6R7CJNgVIhRXQcwGvPJiPWPxqPI8FZuASi4ERwDiyo3lc8vbczjObRQausEfwHyeuT8Qg/Xx/f75/KUQjIp1iCPIhw7aiYhHzJp+gQulZFpguFZ97gKpLyvdb5be+RpJiwt9Hr6nwlncKgVTIXhKEGS52Frj+otBlZI3voFFN+OeMNt+ocWUCVjH+fpZCDaerHuTVDM9lxaca749TMbh6b5bjag116XBF3v514SjQ="
        }
        """
        print(token_string.decode())

meituan_page_token = MeituanToken()
meituan_page_token.handle_page()
