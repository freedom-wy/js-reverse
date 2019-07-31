import requests
import time
import execjs
import re

class HandleKongzhongwang(object):
    def __init__(self):
        self.dc_url = "https://sso.kongzhong.com/ajaxLogin?j=j&jsonp=j&service=https://passport.kongzhong.com"
        self.login_url = "https://passport.kongzhong.com/login"
        self.sso_kgzqrt_url = "https://sso.kongzhong.com/createQRCode"
        self.dc_value = ""
        self.kongzhongwang_session = requests.session()
        self.header = {
            "Connection":"keep-alive",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36",
            "Accept":"*/*",
            "Referer":"https://passport.kongzhong.com/login",
            "Accept-Encoding":"gzip, deflate, br",
            "Accept-Language":"zh-CN,zh;q=0.9",
        }

    def handle_dc(self):
        """
        获取dc值
        :return: dc值
        """
        dc_search = re.compile(r'"dc":"(.*?)"')
        #获取KSPSSIONID
        self.kongzhongwang_session.get(url=self.login_url,headers=self.header)
        #获取SSO-KGZQRT
        self.kongzhongwang_session.get(url=self.sso_kgzqrt_url,headers=self.header)
        response = self.kongzhongwang_session.get(url=self.dc_url,headers=self.header)
        self.dc_value = dc_search.search(response.text).group(1)


    def handle_password(self,password):
        '''
        处理密码
        :param password: 传入密码
        :return: 返回加密后密码
        '''
        # 获取dc值
        self.handle_dc()
        #处理密码加密js文件
        with open('encrypt-js.js','r',encoding='utf-8') as f:
            f_js = execjs.compile(f.read())
        print(self.dc_value)
        encrypt_password = f_js.call('encrypt',password,self.dc_value)
        return encrypt_password

    def handle_login(self,username,password):
        """
        登录空中网
        :param username: 用户名
        :param password: 密码
        :return: 判断登录是否成功
        """
        encrypt_password = self.handle_password(password)
        login_api = "https://sso.kongzhong.com/ajaxLogin?j=j&&type=1&service=https://passport.kongzhong.com/&username=%s&password=%s&vcode=&toSave=0&_=%s"%(username,encrypt_password,str(int(time.time())))
        print(login_api)
        response = self.kongzhongwang_session.get(url=login_api,headers=self.header)
        print(response.text)

if __name__ == '__main__':
    kongzhongwang = HandleKongzhongwang()
    username = input("请输入用户名:")
    password = input("请输入密码:")
    kongzhongwang.handle_login(username,password)

