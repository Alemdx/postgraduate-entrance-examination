# 运输层协议概述

## 进程之间的通信	

+ **运输层向它上面的应用层提供通信服务**

+ **只有主机才有运输层**，路由器只有下面三层

为什么还需要运输层？

答：**计算机中的通信归根结底是两个进程之间的通信**。而网络层只实现到主机之间的通信

运输层两个重要的功能：**复用**和**分用**

复用：发送方不同的应用进程都可以使用同一个运输层协议传输数据

分用：接收方的运输层在剥去报文的首部后能够把这些数据真确交付目的应用进程

![image-20220315125846767](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315125846767.png?token=AODOFY5KAYEIMJ2VQZXE5YDCG3UGY)

![image-20220315114247550](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315125526288.png?token=AODOFY3TN355G5MSJGHC7KTCG3UG2)

## 运输层的两个主要协议

+ 用户数据报协议（UDP）

+ 传输控制协议（TCP）

  <img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315115132527.png?token=AODOFY7VZQAMTMSXYLGVMELCG3UHA" alt="image-20220315115132527" style="zoom:50%;" />

UDP在传输数据之前**不需要先建立连接**。远地主机的运输层在收到UDP报文后，**不需要给出任何确认**

TCP测试**提供面向连接的服务**。在传送数据之前必须先建立连接，传送数据结束后要释放连接。**TCP不提供广播或多播服务**。

![image-20220315125526288](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315165156975.png?token=AODOFY3CNJVF4VRRSZCJYM3CG3UHC)

## 运输层的端口

+ 通信一方无法识别对方机器上的进程。解决方法是使用**端口**。**即把所传送的白问交到明目滴主机的某个合适的目的端口**。剩下的工作交给TCP或UDP来完成。

+ 16位的端口号可允许有65535个不同的端口号。

+ 两个计算机中的进程要相互通信，不仅要知道对方的IP地址（找到对方计算机），而且要知道对方的端口号（为了找到对方计算机中的应用进程）

# 用户数据报协议UDP

## UDP概述

+ UDP是无连接的   
  + 发送数据前不需要链接
+ UDP使用尽最大努力交付
  + 不保证可靠交付
+ UDP是面向报文的
  + ![image-20220315165156975](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315170942019.png?token=AODOFY5ATFFSEPLFS56TDATCG3UHE)

+ UDP没有拥塞控制
+ UDP支持一对一、一对多、多对一和多对多的交互通信
+ UDP的首部开销小

### UDP的首部格式

**这里面只有端口信息**

UDP首部只有8字节

+ 源端口
+ 目的端口
+ 长度
+ 检验和

![image-20220315170448000](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315192526433.png?token=AODOFY4AMDOP6D37UEOLFCTCG3UHG)

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315190914162.png?token=AODOFYZKKPZ5QGE7INNGAPLCG3UHI" alt="image-20220315170942019" style="zoom:50%;" />

**利用十二字节的伪首部进行检验**

（UDP不是不考虑数据的正确和错误吗）

# 传输控制协议TCP概述

## TCP的主要特点

+ TCP是面向连接的运输层协议
+ 每一条TCP连接只能有两个端点
+ TCP提供可靠交付的服务
+ TCP提供全双工通信
+ 面向字节流。TCP中的流指的是流入到进程或从进程流出的字节序列

![image-20220315190147592](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315190147592.png?token=AODOFYYGQRTQHUKTUATCXNLCG3UHM)

**（TCP会阻塞积累，UDP没有拥塞控制？）**

## **TCP的链接**

每一条TCP连接都有两个端点（**不是应用进程**，**也不是端口**），该端点叫做套接字或插口（socket）

![image-20220315190914162](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315170448000.png?token=AODOFY3LJ6OZ3X2JSGYLF43CG3UHQ)

# 可靠传输的工作原理

## 停止等待协议

### 无差错情况

![image-20220315192526433](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315193142249.png?token=AODOFY4VHQIRN6GVGJZOS5TCG3UHU)

### 出现差错

当出现差错就丢弃，一段时间后A没有收到reply就重新发送

### 确认丢失和确认迟到

A没有收到B的replay会再次发送

+ 可能是B确实没有收到数据，也有可能是Reply在中途出现了延迟或丢失

![image-20220315193142249](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315114247550.png?token=AODOFY26KL7T7BEVOQETRFDCG3UHY)

### 信道利用率

**停止等待协议简单，但信道的利用率太低**

![image-20220315193553973](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315194051429.png?token=AODOFY7FPPXWBY2SF3P2XLDCG3UH2)

**于是我们采用流水线传输**

![image-20220315193854905](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315193553973.png?token=AODOFY5SXURVC6CC2R3B4BLCG3UH6)

## 连续ARQ协议

**工作原理：**

+ **位于窗口的五个分组可以连续发送出去，而不需要等待对方确认**，**每收到一个确认，就把窗口向前移动一个位置**
+ 但出现问题时，需要GobackN，再退回来重传已发送国的N个分组

![image-20220315194051429](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315193854905.png?token=AODOFY2TTCE33WE2LHFIWALCG3UIA)

# TCP报文段的首部格式（具体功能没看）

![image-20220315200500213](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315221245931.png?token=AODOFYYENBBLUEZSHUK5KGDCG3UIC)



首部最少是20字节

+ 源端口和目的端口
+ 序号
+ 确认号
+ 数据偏移
+ 保留
+ 紧急URG
+ 确认ACK
+ 推送PSH
+ 复位RST
+ 同步SYN。。。。

# TCP可靠传输的实现

## 以字节为单位的滑动窗口

![image-20220315220706965](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315222857917.png?token=AODOFY6ITKSSZE5ARR4ONODCG3UIG)

## 超时重传时间的选择

背景：不同的网络有不同的速率

加权平均往返时间$RTT_s$：

![image-20220315221245931](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315223659285.png?token=AODOFY4LIEVUFKM6KNDRSMLCG3UII)

超时重传时间RTO：

![image-20220315222548791](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315222548791.png?token=AODOFY74GNH7ZAKGK2NM6ULCG3UIK)

会出现一种问题：**你不知道你收到的报文是对重传之前的确认还是对重传之后的确认**？

![image-20220315222857917](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315200500213.png?token=AODOFY2EY5BFNATWMFIG5PTCG3UIO)

解决方法：

![image-20220315223050811](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220316151032678.png?token=AODOFY4EFZ4QRJKM7WNSP2LCG3UIQ)

## 选择确认SACK

问题背景：**只传送缺少的数据而不重传已经正确到达接收方的数据**

**这里注意右边界加一**

![image-20220315223659285](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315220706965.png?token=AODOFY3E5WRZXKNX6KNQHYTCG3UIU)

在TCP首部增加标志信息（原来首部中没有该功能）

# TCP流量控制

## 利用滑动窗口实现流量控制

流量控制：**让发送方的发送速率不要太快，要让接收方来得及接收**

![image-20220315232131768](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315223050811.png?token=AODOFY7UUK2Z6PMHP2BGQDDCG3UIW)

## TCP的传输效率

TCP发送时机：

+ 缓存中存放的数据达到MSS
+ 发送方的应用进程指明要求发送报文段
+ 发送方的计时器期限到了

# TCP拥塞控制

## 拥塞控制的一般原理

**拥塞**：对网络中**某一资源的需求超过了该资源所能提供的可用部分**，网络性能就要变坏。

**拥塞控制**：**防止过多的数据注入到网络中**，这样可以使网络中的路由器或链路不致过载（不仅仅是发送

数据，还有缓存带宽等）

**流量控制：**点对点通信量的控制。**抑制发端发送数据的速率**，一边使接收端来得及接收

![image-20220316151032678](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220318214909871.png?token=AODOFY72WLRGG6SW7HKVWI3CG3UI2)

## TCP的拥塞控制方法

### 慢开始

+ 尤小到大逐渐增大发送窗口，也就是说逐渐增大拥塞窗口的数值
+ 在每收到一个对新的报文的确认后，可以把拥塞窗口增加最多一个SMSS（最大报文段）![image-20220318214909871](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220318222446046.png?token=AODOFYY7U5Z2LYRGMLKNDK3CG3UI4)

+ 算法举例：
  + 每收到一个确认，就把发送的数量增加1（这个说法准确吗？还是在前一次的基础上翻倍？）      **这里是翻倍** 可参考下图
  + 慢指的是最开始设置cwnd的值为1
  + ![image-20220318215317873](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220315232131768.png?token=AODOFY4MLIXPOIEZH2SRNFDCG3UJA)



### 拥塞避免

为了防止拥塞窗口CWND增长过大引起网络拥塞，还要设置一个**慢开始门限**（拥塞避免算法）

![image-20220318222446046](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220318225249971.png?token=AODOFYYQOFQL3Q6EPIYGUITCG3UJE)

把拥塞窗口控制为按线性规律增长，**是网络比较不容易出现拥塞**（这里可以注意到由指数变成了线性）

### 快重传

### 快恢复

## 主动队列管理

主动：不要等路由器的队列长度已经达到最大值是才不得不丢弃后面到达的分组。

AQM不是简单的队列尾部丢弃

# TCP的运输连接管理

运输连接有三个阶段：**连接建立、数据传送、连接释放**

主动发起连接建立的应用进程叫做**客户**，被动等待连接建立的应用进程叫做**服务器**

## TCP的连接建立

**三报文握手：**

后者的ack等于前者的seq+1。（等于前面已经传送过的数据的最后一个直接的序号加一）

![image-20220318225249971](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319115231452.png?token=AODOFY3NKN2G2324GDQGRUDCG3UJI)

## TCP的连接释放

**四次握手**

双方都能终止

![image-20220319115231452](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319115411979.png?token=AODOFY5DINYYTINK4F6UZR3CG3UJK)

# 本章的重要概念

![image-20220319115326774](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319115326774.png?token=AODOFY62ETVGVR2GYO2KWXDCG3UJU)

![image-20220319115347487](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220318215317873.png?token=AODOFY5ZIWOBAXX4UZO277TCG3UJY)

![image-20220319115411979](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319115422884.png?token=AODOFY4HPX3L3YG76VIVW4LCG3UJ4)

![image-20220319115422884](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images/image-20220319115347487.png?token=AODOFY2GGVMOSIAFOI3DZK3CG3UKA)