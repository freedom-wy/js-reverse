import requests
import execjs
import re



class LoginQzone(object):
    def __init__(self,username=None,password=None):
        self.username = username
        self.password = password
        self.qzone_session = requests.session()
        self.header = {
            # "Host":"xui.ptlogin2.qq.com",
            # "Connection":"keep-alive",
            # "Upgrade-Insecure-Requests":"1",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36",
            # "Sec-Fetch-Mode":"nested-navigate",
            # "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            # "Sec-Fetch-Site":"same-site",
            # "Referer":"https://i.qq.com/",
            # "Accept-Encoding":"gzip, deflate, br",
            # "Accept-Language":"zh-CN,zh;q=0.9",
            # "Cookie":"_qz_referrer=i.qq.com",
        }
        with open("decode_qzone_login.js",'r',encoding='utf-8') as f:
            js = f.read()
        self.decode_qzone_js = execjs.compile(js)

    def handle_login(self):
        """
        处理Qzone登录
        :return: 登录凭据
        """
        #获取login_sig
        self.qzone_session.get(url="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?proxy_url=https://qzs.qq.com/qzone/v6/portal/proxy.html&daid=5&&hide_title_bar=1&low_login=0&qlogin_auto_login=1&no_verifyimg=1&link_target=blank&appid=549000912&style=22&target=self&s_url=https://qzs.qzone.qq.com/qzone/v5/loginsucc.html?para=izone&pt_qr_app=手机QQ空间&pt_qr_link=http://z.qzone.com/download.html&self_regurl=https://qzs.qq.com/qzone/v6/reg/index.html&pt_qr_help_link=http://z.qzone.com/download.html&pt_no_auth=1",headers=self.header)
        login_sig = self.qzone_session.cookies.get_dict()['pt_login_sig']
        #获取登录时提交的验证码等参数
        response_verifycode = self.qzone_session.get(url="https://ssl.ptlogin2.qq.com/check?regmaster=&pt_tea=2&pt_vcode=1&uin="+str(self.username)+"&appid=549000912&js_ver=19081313&js_type=1&login_sig="+login_sig+"&u1=https://qzs.qzone.qq.com/qzone/v5/loginsucc.html?para=izone&r=0.3936066541294625&pt_uistyle=40",headers=self.header)
        result_search = re.compile(r"(\(.*?\))")
        result_list = eval(result_search.search(response_verifycode.text).group(1))
        v1,v2,v3,v4,v5,v6 = result_list
        verifycode = v2
        ptvfsession = v4
        ptdrvs = v6
        #密码
        password_encry_value = self.decode_qzone_js.call("test",self.password,v3,verifycode)
        login_url = "https://ssl.ptlogin2.qq.com/login?u="+str(self.username)+"&verifycode="+verifycode+"&pt_vcode_v1=0&pt_verifysession_v1="+ptvfsession+"&p="+password_encry_value+"&pt_randsalt=2&u1=https://qzs.qzone.qq.com/qzone/v5/loginsucc.html?para=izone&ptredirect=0&h=1&t=1&g=1&from_ui=1&ptlang=2052&action=2-27-1567503686472&js_ver=19081313&js_type=1&login_sig="+login_sig+"&pt_uistyle=40&aid=549000912&daid=5&ptdrvs="+ptdrvs
        print(login_url)
        #登录
        # print(self.qzone_session.cookies.get_dict())
        response = self.qzone_session.get(url=login_url,headers=self.header)
        #若登录成功，则返回登录成功信息
        if '登录成功' in response.text:
            print("登录成功")
        else:
            print("登录失败")

    def handle_message(self):
        pass

if __name__ == '__main__':
    username = input("请输入QQ号码:")
    password = input("请输入QQ密码:")
    qzone = LoginQzone(username=username,password=password)
    qzone.handle_login()
