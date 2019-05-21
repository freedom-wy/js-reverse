import hashlib
import time
import requests
import json




for i in range(1,301):
    input_value = {
        "cost":"0",
        "days":"0",
        "mddid":"10065",
        "month":"0",
        "page":i,
        "pageid":"mdd_index",
        "sort":"1",
        "tagid":"0",
        "_ts":"1558433973256"
    }
    salt = "c9d6618dbc657b41a66eb0af952906f1"
    str = json.dumps(input_value)+salt

    # 创建md5对象
    hl = hashlib.md5()
    hl.update(str.encode(encoding='utf-8'))
    md5_result = hl.hexdigest()[2:12]
    # input_value['_sn'] = md5_result



    url = 'http://www.mafengwo.cn/gonglve/ajax.php?act=get_travellist'
    header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
    }
    response = requests.post(url=url,headers=header,data=input_value)
    print(response.text)
    time.sleep(1)
