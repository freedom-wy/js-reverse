# 马蜂窝生成sn的js解析

#### index.js是马蜂窝网站上原有JS文件
#### tool_decode_index.js是通过 http://jsnice.org/格式化和半解密
#### handle_sn.py对SN进行破解，请求时发现无需传递SN,晕菜...


##### 619行：salt值：c9d6618dbc657b41a66eb0af952906f1
##### 632行: 获取时间戳p3["_ts"] = (new Date)[__Ox2133f[65]]();
##### 635行: 调用VIEW函数获取sn值var vroot = view(obj["extend"](true, {}, p3));
##### 63行: 返回sn值,md5并切片 


### 交流:dazhuang_python@sina.com

