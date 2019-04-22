#email:dazhuang_python@sina.com
#date:20190422


'''
 var e = Math.floor((new Date).getTime() / 1e3)
          , i = e.toString(16).toUpperCase()
          , t = md5(e).toString().toUpperCase();
        if (8 != i.length)
            return {
                as: "479BB4B7254C150",
                cp: "7E0AC8874BB0985"
            };
        for (var o = t.slice(0, 5), n = t.slice(-5), a = "", s = 0; 5 > s; s++)
            a += o[s] + i[s];
        for (var r = "", l = 0; 5 > l; l++)
            r += i[l + 3] + n[l];
        return {
            as: "A1" + a + i.slice(-3),
            cp: i.slice(0, 3) + r + "E1"
        }

'''
import time
import hashlib
def handle_as_cp():
    e = int(time.time())#获取当前时间戳
    i = hex(e).upper()[2:]#转换16禁止并切片
    my_md5 = hashlib.md5()#获取一个MD5的加密算法对象
    my_md5.update(str(e).encode("utf-8")) #得到MD5消息摘要
    t = my_md5.hexdigest().upper()#以16进制返回消息摘要，32位
    if len(i) != 8:
        as_value = "479BB4B7254C150"
        cp_value = "7E0AC8874BB0985"
        return as_value,cp_value
    else:
        o = t[0:5]
        n = t[-5:]
        a = ""
        for s in range(0,5):
            a = a + o[s]+i[s]
        r = ""
        for l in range(0,5):
            r = r+i[l+3]+n[l]
        as_value = "A1"+a+i[-3:]
        cp_value = i[0:3]+r+"E1"
        return as_value,cp_value

print(handle_as_cp())