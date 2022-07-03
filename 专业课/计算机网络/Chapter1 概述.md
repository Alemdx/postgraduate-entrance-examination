# 计算机网络在信息时代中的作用

连通性、共享

# 互联网概述

## 网络的网络

计算机网络由**节点**和**链路**组成

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220218001530696.png" alt="image-20220218001530696" style="zoom:50%;" />

网络之间通过路由器连接起来，就构成了更大范围的计算机网络，称为**互联网**

与网络相连的称为**主机**

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220218212733584.png" alt="image-20220218001828740" style="zoom:50%;" />

**网络把许多计算机链接在一起，而互联网则把许多网络通过路由器连在一起**

## 互联网发展的三个阶段

+ 从单个网络ARPANET向互联网发展的过程

+ 三级机构的互联网

  + 主干网、地区网、校园网

+ 逐渐形成了多层次ISP（互联网服务提供者）结构的互联网

  ![image-20220218212733584](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220219202824585.png)

## 互联网的标准化工作

# 互联网的组成

从工作方式上看，互联网的结构可以分为一下两大块：

+ 边缘部分    用户直接使用

+ 核心部分    为边缘部分提供服务

  <img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220218213637484.png" alt="image-20220218213637484" style="zoom:50%;" />

## 互联网的边缘部分

在网络**边缘的端系统之间的通信方式**可划分为两类：客户服务器方式（C/S方式）、对等方式（P2P方式）

### 客户服务器方式

客户服务器都是指通信中所设计的两个应用进程。描述的是进程服务与被服务之间的关系

![image-20220218214841532](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220219225352483.png)



### 对等链接方式

两台主机在通信时，**并不区分**哪个是服务器请求方或提供方

## 互联网的核心部分

路由器是是实现**分组交换**的关键构建，其任务是**转发收到的分组**

### 电路交换的主要特点

**在通话的全部时间内，通话的两个用户始终占用端到端的通信资源。**

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220218214841532.png" alt="image-20220218221137018" style="zoom:50%;" />

**传输效率很低**，因为数据是突发式的出现在传输线路上的

### 分组交换的特点

分组交换采用**存储转发**技术。

将报文（整块数据）划分为几个分组后再进行传送。

![image-20220219202824585](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220218221137018.png)

主机是为用户进行信息处理的。路由器则是用来转发分组的，即进行分组交换。

![image-20220219211029224](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220219230221408.png)

![image-20220219211214832](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220219211029224.png)

**过程：分组到达一个路由器后，先暂时存储下来，查找转发表，然后从一条适合的链路的转发出去。**（存储转发）

分组交换的优点：![image-20220219211646133](/home/jackson/snap/typora/46/.config/Typora/typora-user-images/image-20220219211646133.png)

![image-20220219212027659](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220150133180.png)

# 计算机网络的类别

## 计算机网络的定义

## 几种不同类别的计算机网络

### 按照网络的作业范围进行分类

+ 广域网WAN
  + 作用范围广
+ 城域网MAN
  + 作用范围是城市
+ 局域网LAN
  + 校园网 企业网
+ 个人区域网PAN

### 按照网络的使用者进行分类

+ 公用网
+ 专用网

### 用来把用户接入到互联网的网络

+ 接入网

# 计算机网络的性能

## 计算机网络的性能指标

**（特别要注意这里的M是$2^{20}还是10^{6}$,一般来说形容大小的是前者，形容速度的是后者）**

+ 速率

  bps(bit per second)

+ 带宽

  带宽有两个不同的意义

  + 本来指某个信号具有的频带宽度，单位是HZ
  + 在计算机网络中，用来代表网络中某通道传送数据的能力，因此网络带宽表示在**单位时间内网络中的某信道所能通过的最高数据率**（和速率差不多？）

+ 吞吐量
  + **在单位时间内通过某个网络的实际的数据量**

+ 时延

  + 数据从网络的一端传送到了一段所需的时间

    + 发送时延

      + 主机或路由器发送数据帧所需要的时间。也就是从发送的第一个比特起到最后一个比特所需要的时间

        ![image-20220219225204069](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220219225204069.png)

    + 传播时延  

      + 电磁波在信道中传播一定的距离需要花费的时间

        ![image-20220219225352483](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220219211214832.png)

​								**电磁波的传输速度是光速**

​	处理时延、传播时延

​	总时延=发送时延+传播时延+处理时延+排队时延

![image-20220219230221408](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220145919568.png)

+ 时延带宽积

  + $时延带宽积=传播时延*带宽$

+ 往返时延（RTT）

  + 确认消息的发送

    ![image-20220220150133180](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220219212027659.png)

+ 利用率

  + 信道利用率

  + **网络利用率**（这里不是太理解）

    ![image-20220220145919568](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220151839646.png)

![image-20220220145930509](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220145930509.png)

## 计算机网络的非性能指标

+ 费用
+ 质量
+ 标准化
+ 可靠性
+ 可扩展性和可升级性
+ 易于管理和维护

# 计算机网络体系结构

## 计算机网络体系结构的形成

激活、识别、检查是否正常、是否准备好、格式转换、容灾

![image-20220220150538255](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220153205410.png)

## 协议与划分层次

网络协议主要由一下三个要素组成

+ 语法  数据与控制信息的**结构**或**格式**

+ 语义   即需要**发出何种控制信息**，完成何种动作或做出何种响应

+ 同步   事件实现顺序的详细说明

  ![image-20220220151839646](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220150538255.png)

分层的好处：

+ 各层之间是独立的
+ 灵活性好
+ 结构上可以割开
+ 易于实现和维护
+ 能促进标准化工作

## 具有五层协议的体系结构

![image-20220220152319885](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220155336777.png)

+ 应用层

  + 应用层的任务是**通过应用进程之间的交互来完成特定网络应用**
  + 应用层定义的是**应用进程间通信和交互的规则**（诸如DNS、HTTP等）

+ 运输层

  + 负责两台主机中**进程之间的通信****提供通用的数据传输服务**

  + 运输层主要使用以下两种协议：

    + 传输控制协议TCP

    + 用户数据报协议UDP（如何理解无连接？）

      ![image-20220220153205410](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220160437370.png)

+ 网络层

  + 负责为分组交换网上的不同主机提供通信服务。网络层把数据产生的保温端或用户数据报封装成**分组**或**包**进行传送
  + 选择适合的路由

+ 数据链路层

  + 将网络层交下来的IP数据报**组装成帧**

+ 物理层

  + 传送数据的单位是比特

  ![image-20220220155216939](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220218001828740.png)

![image-20220220155336777](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220152319885.png)

![image-20220220155513918](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220160428163.png)

## 实体、协议、服务和服务访问点

实体：使用实体来抽象表示任何**可以发送或接收信息的硬件**或**软件进程**

协议：控制两个对等实体进行通信的**规则的集合**

## TCP/IP体系结构

![image-20220220160428163](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220160557845.png)

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220155513918.png" alt="image-20220220160437370" style="zoom:67%;" />

![image-20220220160557845](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220155216939.png)

# 本章的重要概念

![image-20220220160815850](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220160815850.png)

![image-20220220160825361](https://raw.githubusercontent.com/Alemdx/pic-bed/master/images1/image-20220220160825361.png)