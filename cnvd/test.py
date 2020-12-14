import re
import execjs
import requests
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                  '(KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
}
url = 'https://www.cnvd.org.cn/shareData/download/718'

requests_session = requests.session()

# 第一个请求,response为第二个请求的__jsl_clearance_s
response1 = requests_session.get(url=url, headers=headers)
js1_search = re.compile(r"cookie=(.*?);location.href=")
# js_response1 = """
# ('_')+('_')+('j')+('s')+('l')+('_')+('c')+('l')+('e')+('a')+('r')+('a')+('n')+('c')+('e')+('_')+('s')+('=')+(+!+[]+'')+(6+'')+(~~false+'')+(2+5+'')+(2+7+'')+(4+'')+([2]*(3)+'')+((1<<2)+'')+(2+'')+(4+'')+('.')+(+!+[]+'')+(-~[]+'')+(1+8+'')+('|')+('-')+(-~{}+'')+('|')+('O')+('a')+('g')+('S')+('G')+('F')+('W')+('C')+('d')+(-~{}+'')+((1+[4]>>1)+'')+(-~false+'')+('O')+((1<<3)+'')+('v')+('H')+(-~(4)+'')+('b')+('P')+('G')+(1+8+'')+('j')+((2)*[2]+'')+('N')+('H')+(1+5+'')+('s')+('%')+(1+2+'')+('D')+(';')+('m')+('a')+('x')+('-')+('a')+('g')+('e')+('=')+(3+'')+((1+[2])/[2]+'')+((+false)+'')+((+false)+'')+(';')+('p')+('a')+('t')+('h')+('=')+('/')
# """
js1_result = js1_search.search(response1.text).group(1)
__jsl_clearance_s = execjs.eval(js1_result).split(";")[0].split("=")[1]
# __jsl_clearance_s = execjs.eval(js_response1).split(";")[0].split("=")[1]
requests_session.cookies.set("__jsl_clearance_s", __jsl_clearance_s)
# 第二次请求
response2 = requests_session.get(url=url, headers=headers)
print(response2.request.headers)
sha1_sha256_md5 = json.loads(re.findall(r'};go\((.*?)\)</script>', response2.text)[0])
# 判断cookie生成方式
js_file = ""
if sha1_sha256_md5['ha'] == 'sha1':
    js_file = 'sha1.js'
elif sha1_sha256_md5['ha'] == 'sha256':
    js_file = 'sha256.js'
elif sha1_sha256_md5['ha'] == 'md5':
    js_file = 'md5.js'


parameter = {
    "bts": sha1_sha256_md5['bts'],
    "chars": sha1_sha256_md5['chars'],
    "ct": sha1_sha256_md5['ct'],
    "ha": sha1_sha256_md5['ha'],
    "tn": sha1_sha256_md5['tn'],
    "vt": sha1_sha256_md5['vt'],
    "wt": sha1_sha256_md5['wt']
}
print(parameter)

print(js_file)
with open(js_file, "r", encoding="utf-8") as f:
    js = f.read()
    cmp = execjs.compile(js)
    end_js = cmp.call("go", parameter).split(";")[0].split("=")[1]
    requests_session.cookies.set("__jsl_clearance_s", end_js)

response3 = requests_session.get(url=url, headers=headers)
with open("test.xml", "w", encoding="utf-8") as f:
    f.write(response3.text)




