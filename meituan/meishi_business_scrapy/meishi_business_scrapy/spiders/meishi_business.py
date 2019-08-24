# -*- coding: utf-8 -*-
import scrapy
import re
import json


class MeishiBusinessSpider(scrapy.Spider):
    """
    构造页码请求，返回商家ID，通过请求商家ID信息返回商家信息，推荐菜信息，评论信息等
    """
    name = 'meishi_business'
    allowed_domains = ['meituan.com']
    # start_urls = ['http://meituan.com/']

    def start_requests(self):
        """
        构造页码请求
        :return:
        """
        #模拟100页
        for page in range(1,100):
            page_url = "http://bj.meituan.com/meishi/sales/pn%s/" % page
            yield scrapy.Request(url=page_url,callback=self.handle_page_response)
            break

    def handle_page_response(self,response):
        """
        获取商家ID
        :param response:页码返回数据
        :return:商家详情页信息
        """
        data_search = re.compile(r'"poiInfos":(.*?)},"comHeader"')
        data = data_search.search(response.text).group(1)
        for item in json.loads(data):
            # print(item['poiId'])
            business_detail_url = "https://www.meituan.com/meishi/%s/"%item['poiId']
            yield scrapy.Request(url=business_detail_url,callback=self.handle_business_detail)
            #获取评论
            for offset in range(0,100,10):
                business_comment_url = "https://www.meituan.com/meishi/api/poi/getMerchantComment?uuid=4c075f52-c8ba-4116-b02d-5015c4ade7e5&platform=1&partner=126&originUrl=https://www.meituan.com/meishi/%s/&riskLevel=1&optimusCode=10&id=%s&userId=&offset=%s&pageSize=10&sortType=1"%(item['poiId'],item['poiId'],offset)
                yield scrapy.Request(url=business_comment_url,callback=self.handle_comment_response)
                break
            break


    def handle_business_detail(self,response):
        """
        解析商家详情页，获取商家信息和推荐菜信息
        :param response:
        :return:
        """
        # 提取数据区域
        data = re.search(r'12315消费争议(.*?)"dealList":', response.text, flags=re.DOTALL)
        if data:
            # 细节信息
            detail_info = re.search(
                r'"detailInfo":\{"poiId":(\d+),"name":"(.*?)","avgScore":(.*?),"address":"(.*?)","phone":"(.*?)","openTime":"(.*?)","extraInfos":\[(.*?)\],"hasFoodSafeInfo":(.*?),"longitude":(.*?),"latitude":(.*?),"avgPrice":(\d+),"brandId":(\d+),"brandName":"(.*?)",".*?photos":{"frontImgUrl":"(.*?)","albumImgUrls":(.*?)},"recommended":(.*?),"crumbNav":(.*?),"prefer',
                data.group(1))
            if detail_info:
                info = {}
                # 商家ID
                info['poiId'] = detail_info.group(1)
                # 商家名称
                info['name'] = detail_info.group(2)
                # 商家评分
                info['avgScore'] = detail_info.group(3)
                # 商家地址
                info['address'] = detail_info.group(4)
                # 电话
                info['phone'] = detail_info.group(5)
                # 营业时间
                info['openTime'] = detail_info.group(6)
                # 是否有食品安全档案
                info['hasFoodSafeInfo'] = detail_info.group(8)
                # 经纬度
                info['longitude'] = detail_info.group(9)
                info['latitude'] = detail_info.group(10)
                # 均价
                info['avgPrice'] = detail_info.group(11)
                # 品牌ID
                info['brandId'] = detail_info.group(12)
                # 品牌名称
                info['brandName'] = detail_info.group(13)
                # 商家图片
                info['frontImgUrl'] = detail_info.group(14)
                # 宣传图片
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
                print(info)
        else:
            print('提取数据失败，请查看详情页返回情况')
            print(response.text)

    def handle_comment_response(self,response):
        """
        评论返回数据
        :param response:
        :return:
        """
        print(response.text)
