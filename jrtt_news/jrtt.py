import requests
import json
import execjs



class Handle_jrtt(object):
    def handle_news(self,id,value):
        print(id,value)
        while True:
            js_result = json.loads(self.handle_js(id,value))
            as_value = js_result['as']
            cp_value = js_result['cp']
            signature = js_result['_signature']
            url = "https://www.toutiao.com/c/user/article/?page_type=1&user_id=4377795668&max_behot_time=%s&count=20&as=%s&cp=%s&_signature=%s"%(value,as_value,cp_value,signature)
            # print(url)
            header = {
                "Host":"www.toutiao.com",
                "Connection":"keep-alive",
                "Accept":"application/json, text/javascript",
                "X-Requested-With":"XMLHttpRequest",
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
                "Content-Type":"application/x-www-form-urlencoded",
                "Referer":"https://www.toutiao.com/c/user/4377795668/",
                "Accept-Encoding":"gzip, deflate, br",
                "Accept-Language":"zh-CN,zh;q=0.9",
            }
            response = requests.get(url=url,headers=header)
            result = json.loads(response.text)
            if result['data']:
                print(json.dumps(result))
                self.handle_news(id,result['next']['max_behot_time'])
            # else:
            #     time.sleep(random.choice(range(1,5)))

    def handle_js(self,id=None,value=0):
        with open('hongshuwang.jswang.js','r',encoding='utf-8') as f:
            f_js = f.read().replace("xxxxx",str(id)+str(value))
        ctx = execjs.compile(f_js)
        return ctx.call('get_as_cp_signature')

jrtt = Handle_jrtt()
result = jrtt.handle_news(4377795668,0)

