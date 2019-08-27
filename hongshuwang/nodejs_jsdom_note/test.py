import execjs


with open("nodejs_jsdom.js",'r') as f:
    f_read = f.read()

js_init = execjs.compile(f_read)
value = js_init.call("test")
print(value)