import execjs




with open("AA.base-min.js",'r',encoding='gbk') as f:
    f_read = f.read()

js = execjs.compile(f_read)
print(js.call("test"))
