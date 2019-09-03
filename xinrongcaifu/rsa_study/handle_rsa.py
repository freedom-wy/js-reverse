import rsa


#生成公钥和私钥
# (public_key,private_key) = rsa.newkeys(1024)

#保存公钥
# with open("public.pem",'w+') as f:
#     f.write(public_key.save_pkcs1().decode())

#保存私钥
# with open('private.pem','w+') as f:
#     f.write(private_key.save_pkcs1().decode())

#加密
#导入公钥
with open("public.pem",'r') as f:
    public_key = rsa.PublicKey.load_pkcs1(f.read().encode())

#明文
message = "hello world"

#公钥加密
crypto = rsa.encrypt(message.encode(),public_key)
print(crypto)

#解密
#导入私钥
with open("private.pem","r") as f:
    private_key = rsa.PrivateKey.load_pkcs1(f.read().encode())

#私钥解密
message_value = rsa.decrypt(crypto,private_key)
print(message_value.decode())

#私钥签名
signature = rsa.sign(message.encode(),private_key,'SHA-1')
print(signature)
#公钥验证
print(rsa.verify(message.encode(),signature,public_key))