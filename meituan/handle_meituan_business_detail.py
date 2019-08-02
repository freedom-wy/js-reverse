import requests
import re
import json
from handle_mongo import meituan_mongo



class Meituanbusiness(object):
    """
    处理美团商家详情页
    https://www.meituan.com/meishi/6484620/
    """
    def __init__(self,business_id):
        self.business_id = business_id
        self.business_detail_url = "https://www.meituan.com/meishi/%s/"%business_id
        #MAC下的UA可用。。。
        self.header = {
            # "User-Agent":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36"
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        }

    def handle_detail(self):
        response = requests.get(url=self.business_detail_url,headers=self.header)
        #提取数据区域
        data = re.search(r'12315消费争议(.*?)"dealList":', response.text, flags=re.DOTALL)
        if data:
            # 细节信息
            detail_info = re.search(r'"detailInfo":\{"poiId":(\d+),"name":"(.*?)","avgScore":(.*?),"address":"(.*?)","phone":"(.*?)","openTime":"(.*?)","extraInfos":\[(.*?)\],"hasFoodSafeInfo":(.*?),"longitude":(.*?),"latitude":(.*?),"avgPrice":(\d+),"brandId":(\d+),"brandName":"(.*?)",".*?photos":{"frontImgUrl":"(.*?)","albumImgUrls":(.*?)},"recommended":(.*?),"crumbNav":(.*?),"prefer',data.group(1))
            if detail_info:
                info = {}
                # 商家ID
                info['poiId'] = detail_info.group(1)
                # 商家名称
                info['name'] = detail_info.group(2)
                #商家评分
                info['avgScore'] = detail_info.group(3)
                #商家地址
                info['address'] = detail_info.group(4)
                #电话
                info['phone'] = detail_info.group(5)
                #营业时间
                info['openTime'] = detail_info.group(6)
                #是否有食品安全档案
                info['hasFoodSafeInfo'] = detail_info.group(8)
                #经纬度
                info['longitude'] = detail_info.group(9)
                info['latitude'] = detail_info.group(10)
                #均价
                info['avgPrice'] = detail_info.group(11)
                # 品牌ID
                info['brandId'] = detail_info.group(12)
                # 品牌名称
                info['brandName'] = detail_info.group(13)
                #商家图片
                info['frontImgUrl'] = detail_info.group(14)
                #宣传图片
                info['albumImgUrls'] = detail_info.group(15)

                # 其他信息解析,wifi,停车位
                extraInfos = detail_info.group(7)
                if extraInfos:
                    items = json.loads("[" + extraInfos + "]")
                    extraInfos = ''
                    for item in items:
                        extraInfos = item.get('text') + ',' + extraInfos
                info['extraInfos'] = extraInfos[0:-2]
                # 推荐菜
                info['recommended'] = json.loads(detail_info.group(16))
                meituan_mongo.handle_save_data(info)


if __name__ == '__main__':
    meituan_business_detail = Meituanbusiness("6484620")
    meituan_business_detail.handle_detail()
