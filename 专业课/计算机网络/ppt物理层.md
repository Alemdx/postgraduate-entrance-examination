# 物理层

## 网络的类型

有两种类型

+ 多路复用共享介质
  + 基于电信号
+ 点对点（PPP）网络
  + 基于光信号

## 局域网介质

### 三种传输形式

+ 电信号
+ 光信号
+ 无线电波

### 传输媒介

 这些媒介考虑三点因素：价格、抗电磁干扰能力、传输距离

+ 无屏蔽双绞线
+ 同轴电缆
+ 光纤

### 光纤

+ 单模
  + 导体**直径很细**，可以认为光在其中传输**没有反射**，所以**损耗较少**，常用于远距离传输（广域网）
+ 多模
  + 比单模**粗**一个数量级，其中有**多个光在传输**，接收方根据角度不同判断光来自于哪个发送方，所以可以实现多路传输。由于**光在其中反射很多**，**损耗较大**，所以用于**短距离传输**（局域网）

### 无线通信

不同设备约定使用不同频段

#### 无线传输的方法

+ 激光
+ 红外
+ 无线电波

## 以太网使用的双绞线

### 线的类型

+ 直通线
+ 反转线
  + 用于主机和路由器/交换机的链接
+ 交叉电缆
  + 主要用来连接相同的设备（集线器、交换机、工作站、PC）

## 介质和信号问题

### 信令和通信问题

+ 传播

+ 衰减

+ 反射
  + 有介质的不连续性引起

+ 噪声

+ 和时间相关的问题
  + 色散
  + 抖动
  + 延迟

### 冲突和冲突域

当两个位元在**同一网路上同时传播**时，会发生冲突。

中继器和集线器会增大冲突域，到第二第三层(分段后)才能有效划分冲突域，**第一层不能解决冲突问题**。

## 数据通信的基础信息

+ 信号
  + 模拟
    + 波的形式，连续的
  + 数字
    + 取值是离散的

+ 码元
  + 码元传输的速率越高，或信号传输的距离越远，在信道的输出端的波形的失真就越严重
  + 传输基本单位，并不一定只包含一位，比如有8个单位，那么我们可以根据波形分为8种，8种区分可以传输三位，2<sup>3</sup> = 8
+ 波特率
  + 信号每秒钟变化的次数
+ 比特率：每秒钟传送的二进制位数
  + 比特率=波特率*信号值的位数
+ 码间串扰
  + 码元的传输速率是有上限的
+ 奈奎斯特定理
  + 无噪声信道
  + $C=W log_2 L bps$
  + W 为信道的带宽（以 Hz 为单位）
    L 为表示数据的信号电平的数量
  + 王道这边的书上是2W
+ 香浓定理
  + $C = W log 2 (1+S/N) bps$
  + 信噪比=$10log_{10}(S/N)$
  + 请注意：对于频带宽度已确定的信道，即使信噪比不能再提高，且码元速率已达上限，也**有办法提高**传输速率。这就是用编码的方法让每个码元携带更多比特的信息量

### 将数字数据转换到模拟信号：调制

### 将数字数据转换到数字信号：线路编码（重点？）

单极性编码

![image-20220707200456345](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220707200456345.png)

NRZ（不归零制码）

+ **注意这里是负电平表示0**

![image-20220707200527370](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220707200527370.png)

**不归零反相编码**

遇到1发生一次反转，遇到0不变

![image-20220707200816021](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220707200816021.png)

RZ（归零制码）

![image-20220707200939215](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220707200939215.png)

曼彻斯特码

![image-20220707201241992](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220707201241992.png)

差分曼彻斯特码

若码元为1，则前半个码元的电平与上一码元的后半个码元的电平相同；若码元为0，则情形相反。（就是说，后面一个的型号要看前面的脸色）

![image-20220707203217672](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220707203217672.png)

传号交替反转码（**AMI**）

![image-20220707203505578](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220707203505578.png)

### 多路复用技术

提高线路利用率，让多个信号共用一条物理线路。（信号复用，信号分解）

![image-20220707203734860](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220707203734860.png)

#### TDM（时分复用）

#### FDM（频分复用）

#### WDM（波分复用）

#### CDM（码分复用）

## 名词解释

### UTP

无屏蔽双绞线

+ 易安装便宜
+ 容易受电磁波干扰
+ 有效范围短

### IEEE

Institute of Electrical and Electronics Engineers

电器与电子工程师协会

### UL

Underwriters Laboratories

保险商实验室

### EIA

Electronic Industries Alliance

电子工业联盟

### TIA

Electronic Industries Alliance

电信工业协会

### ANSI

American National Standards Institute

美国国家标准协会

### TDM

时分复用

时分复用是将时间划分为一段段等长的时分复用（TDM ）帧，每个时分复用的用户在每个 TDM 帧中占用固定序号的时隙。

+ 时分复用可能会造成线路资源的浪费

![image-20220707204130373](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220707204130373.png)

+ STDM
  + 统计时分复用

### FDM

频分复用

频带被分成几份。用户在分配到一定的频带后，在通信过程中自始至终都占用这个频带。所有用户在同样的时间占用不同的带宽资源（请注意，这里的“带宽”是频率带宽）

![image-20220707204457284](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220707204457284.png)

### WDM

波分复用

波分复用就是光的频分复用。

### CDM

码分复用

+ 常用的名词是码分多址 CDMA(Code Division Multiple Access)

+ 各用户使用经过特殊挑选的**不同码型**，因此彼此不会造成干扰
+ 抗干扰能力强。



