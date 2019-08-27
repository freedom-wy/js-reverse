import execjs


with open("test.js",'r') as f:
    f_read = f.read()

js = execjs.compile(f_read)
print(js.call("test"))