from selenium import webdriver
import os
import time

def handle_webdriver_meituan_token(page_num,uuid):
    """
    通过浏览器加载美团js，获取token
    :param page_num: 页码
    :param uuid: uuid
    :return: token
    """
    jv = "https://bj.meituan.com/meishi/api/poi/getPoiList?cityName=北京&cateId=0&areaId=0&sort=&dinnerCountAttrId=&page=%s&userId=&uuid=%s&platform=1&partner=126&originUrl=https://bj.meituan.com/meishi/pn%s/&riskLevel=1&optimusCode=10"%(page_num,uuid,page_num)
    with open('meituan_token.html') as f:
        f.read().replace("bbbb",jv)
    file_path = 'file:///' + os.path.abspath('meituan_token.html')
    browser = webdriver.Chrome()
    browser.get(url=file_path)
    # token_data = browser.execute_script('return meituan_token()', jv)   # 这里使用execute_script调用了ssss函数，并传入参数jv
    print(browser.title)
    token_data = browser.title
    time.sleep(10)
    browser.close()
    return token_data
