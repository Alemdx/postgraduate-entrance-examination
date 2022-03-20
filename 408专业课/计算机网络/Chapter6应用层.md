# 域名系统DNS

## 域名系统概述

+  用来把便于使用的机器名字转换为IP地址。就是名字系统。
+ 俩解释分布式系统，大多数名字在本地解析
+ 解析过程（就是从DNS中获得IP呗）
  + ![image-20220319120746905](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319120746905.png?token=AODOFY2VEP6AMG7D6SKHKS3CG3VBO)

## 互联网的域名结构

![image-20220319121047512](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319142312049.png?token=AODOFY7A3UZ6TTILFLEWSLDCG3VBQ)

+ 每个标号不超过63个字符 不区分大小写

+ 顶级域名

  + 国家顶级域名
  + 通用顶级域名
  + 基础结构域名

+ 二级域名

  + 类别域名
  + 行政区域名

  ![image-20220319142312049](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319144831027.png?token=AODOFYYRAZSD2TG2WJDLU5TCG3VBU)

## 域名服务器

+ 一个服务器所负责管辖的范围叫做**区**
+ 区是域的子集
  + ![image-20220319142837461](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319153643616.png?token=AODOFYZZS5ZRRPRM4QOEL3DCG3VBW)

+ 四种域名服务器
  + 根域名服务器
  + 顶级域名服务器
  + 权限域名服务器
  + 本地域名服务器
+ 域名解析的过程
  + 递归查询
  + 迭代查询
  + ![image-20220319144831027](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319121047512.png?token=AODOFY42ZQTY23JWWGDM52TCG3VBY)

# 文件传输协议

## FTP概述

特点：若要存取一个文件，就必须先获得一个本地的文件副本。如果要修改文件，只能对文件的副本进行修改，然后再将副本传回去。

## FTP从基本工作原理

+ 服务器端有两个从属进程：控制进程和数据传送进程
+ 实际用于传输文件的**数据链接**
+ ![image-20220319150626839](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319150626839.png?token=AODOFY3DSCBW55LC5ILJHM3CG3VB2)

## 简单的文件传送协议TFTP

+ 基于UDP数据报

+ 支持文件传输 不支持交互

+ TFTP代码所占内存较小

  ![image-20220319153643616](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319153947716.png?token=AODOFYYFS2HG6OBPJTJQOL3CG3VB6)

# 远程终端协议TELNET

有点像远程控制

![image-20220319153947716](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319155305017.png?token=AODOFYZPOVNIX4DYUCJWLDLCG3VCA)

# 万维网WWW

## 万维网概述

![image-20220319154446018](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319155543766.png?token=AODOFY3GMP5W52TPRF22HGTCG3VCC)

## 统一资源定位符URL

### URL的格式

![image-20220319155305017](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319142837461.png?token=AODOFY7Y53XQUCPRWIH6TBLCG3VCE)

+ 协议
  + http、ftp

### 使用HTTP的URL

![image-20220319155543766](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319160533508.png?token=AODOFY6FHGPNTSKCP4FMNNTCG3VCG)

## 超文本传送协议HTTP

### HTTP的操作过程

![image-20220319155926920](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319154446018.png?token=AODOFY7IMOWIIGQ6U5UYCT3CG3VCK)

![image-20220319160533508](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319155926920.png?token=AODOFY3JMUZBMUX5HKBKHB3CG3VCM)

+ HTTP/1.0采用的是**非持续链接**，请求一个文档有两倍的RTT开销，会加重服务器的负担

+ HTTP/1.1使用的是**持续链接**（发送响应后仍在一段时间内保持链接）
  + 非流水线方式
    + 客户在收到前一个响应后才能发出下一个请求
    + 节省一个RTT，但浪费服务器资源
  + 流水线方式
    + 在收到响应之前就能发送新的请求
    + 也只需要一个RTT

### 代理服务器

+ 代理服务器把最近的一些请求和响应暂存在本地磁盘中
+ ![image-20220319164402884](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319165006474.png?token=AODOFY6WD5QY3CQ3TERK3HLCG3VCS)

### HTTP的报文结构

HTTP有两类报文：

![image-20220319164619697](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319164619697.png?token=AODOFY7C2H2SXJROTBA66K3CG3VCW)

+ 请求报文

  + ![image-20220319165006474](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319165237190.png?token=AODOFYZ3ORL2YDGH7UP7XTTCG3VCY)

+ 响应报文

  ![image-20220319165237190](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319172713446.png?token=AODOFY3IRA67ELKRIZWUXK3CG3VC2)

### 在服务器上存放用户的信息

使用cookie来跟踪用户

cookie的工作原理：

![image-20220319165941138](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319170736704.png?token=AODOFYZYG6P5DBBIKWALACDCG3VC6)

## 万维网文档

HTML

XML

# 电子邮件

## 电子邮件概述

**简单邮件传输协议SMTP**

**互联网文本报文格式**

**通用互联网邮件扩充**

![image-20220319170736704](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319164402884.png?token=AODOFY4AFHFQYN3RE5RSEELCG3VDC)

+ 用户代理是用户与电子邮件系统的接口（Foxmail这种）

## 简单邮件传送协议SMTP（发送）

### 连接建立

SMTP不使用中间的邮件服务器

### 邮件传送

### 连接释放

## 邮件读取协议POP3和IMAP（接收）

![image-20220319172030254](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319172030254.png?token=AODOFY6JFHLROAWRF5VGDTTCG3VDE)

### **网际报文存取协议**    **IMAP**

支持在不同的地方使用不同的计算机查看

### **邮局协议**	**POP**

只要读取了 就从服务器中删除

## 通用互联网邮件扩充MIME

### MIME概述

SMTP有以下缺点：

+ 不能传送可执行文件或二进制对象
+ 限于传送7位的二进制码
+ 服务器会拒绝超过一定长度的邮件

![image-20220319172713446](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319172738040.png?token=AODOFY37I57RBWV3PDCKVODCG3VDG)

![image-20220319172738040](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319165941138.png?token=AODOFYYOFDW6YWE3BDJVRE3CG3VDK)