import pymongo
from pymongo.collection import Collection


class HandleMeituanMongo(object):
    def __init__(self):
        client = pymongo.MongoClient(host="192.168.110.129",port=27017)
        self.db_name = client['meituan']

    def handle_save_data(self,item):
        data_collection = Collection(self.db_name,'business_detail_info')
        data_collection.insert(item)


meituan_mongo = HandleMeituanMongo()