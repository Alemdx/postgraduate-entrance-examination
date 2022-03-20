# 网络层提供的两种服务

 互联网采用的设计思路：**网络层向上只提供简单灵活的、无连接到、尽最大努力交付的数据报服务。**

**网络层不提供服务质量的承诺**

第一种方法能够保证数据**不丢失、不重复**

![image-20220308194512008](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308195254301.png)

![image-20220308194853034](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308194853034.png)

# 网际协议IP

**IP指IPv4**

与IP协议配套使用的三个协议：

+ **地址解析协议ARP**
+ **网际控制报文协议ICMP**
+ **网际组管理协议IGMP**

![image-20220308195254301](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308200108327.png)

## 虚拟互连网络

**没有一种单一的网络能够适应所有用户的需求**

网络的相互连接需要一些中间设备。根据中间设备所在的层次，可以有一下四种不同的中间设备：

+ 物理层使用的中间设备叫做**转发器**
+ 数据链路层使用的中间设备叫做**网桥**或桥接器
+ 网络层使用的中间设备叫做**路由器**
+ 在网络层以上使用的中间设备叫做**网关**

![image-20220308200108327](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308194512008.png)

![image-20220308200124103](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308201949538.png)

![image-20220308200533410](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308200533410.png)

## 分类的IP地址

### IP地址及其表示方法

整个互联网就是一个**单一的、抽象的网络**。IP地址就是**给互联网上的每一台主机的每一个接口分配一个唯一的32位的标识符**。（根据这个来寻址）

IP地址的编址方法共经历过了三个历史阶段：

+  分类的IP地址
+ 子网的划分
+ 构成超网

一个IP地址可以分为**网络号**和**主机号**。主机号在网络号范围内是唯一的，**一个IP地址在整个互联网范围内是唯一的**

![image-20220308201949538](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308204307044.png)

![image-20220308203126565](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308200124103.png)

### 常用的三类别的IP地址

A类：

**127用做本地测试（localhost这就通了！）**

![image-20220308203947838](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308204455422.png)

![image-20220308204307044](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308203947838.png)

B类：

![image-20220308204440871](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308204907742.png)

C类：

![image-20220308204455422](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308203126565.png)

#### IP指派范围

![image-20220308204907742](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308204440871.png)

#### 一般不使用的IP地址

![image-20220308205145766](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308205145766.png)

IP地址的一些重要特点：

+ IP地址是分等级的地址结构，有以下好处：
  + IP分配机构只分配网络号，主机号有单位自行分配
  + 仅根据目的主机所链接的网络号来转发分组，减小了路由表所站从存储空间以及查找路由表的时间
+ ![image-20220308215150679](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308215150679.png)

​		（**路由器总是有两个或两个以上的IP地址**）

+ 用转发器或网桥连接起来的若干个局域网任为一个网络
+ 互联网**平等**的对待每一个IP地址

![image-20220308220512702](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308220530720.png)

![image-20220308220530720](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308220633530.png)

![image-20220308220543802](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308221424200.png)

## IP地址与硬件地址

![image-20220308220633530](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308220512702.png)

**物理地址是数据链路层和物理层使用的地址；而IP地址是网络层和以上各层使用的地址，是一种逻辑地址**

IP地址放在数据报的首部，硬件地址放在MAC帧的首部。





![image-20220308221424200](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308220543802.png)

![image-20220308221435634](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308221435634.png)

注意看下面这个图！

![image-20220308221823932](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220310181007867.png)



（数据报是一直没有变的，但是MAC帧是发送改变了的）

## 地址解析协议ARP

已经知道了一个机器的IP（主机或路由器）的IP地址，需要找出其相应的硬件地址。ARP就是用来解决这个问题的。

ARP协议的用途是为了**从网络层使用的IP地址**，**解析出在数据链路层使用的硬件地址**

ARP解决这个问题的方法是**在主机ARP高速缓存区中存放一个从IP地址到硬件地址的映射表**，并且这个映射表还在经常动态更新

查询流程：

+ 首先直接查询，若查询不到则
+ ARP进程在本局域网上广播发送一个ARP请求分组
+ 在本局域网上的所有所有主机上运行的ARP进程都收到次ARP请求分组
+ 主机B的IP地址与ARP请求分组中要查询的IP地址一致，同时在这个ARP相应分组中写入自己的硬件地质
+ 主机A收到主机B的ARP响应后，就在其ARP高速缓冲器中写入主机B的IP地址到硬件地址的映射。

注意：ARP是解决**同一个局域网上**的主机或路由器的IP和硬件地址的映射问题

![image-20220310181007867](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220310181030438.png)

![image-20220310181030438](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220311154505557.png)

既然上述行为是通过IP地址来寻找硬件地址，那为什么不直接使用硬件地址进行通信呢？

因为不同的网络，他们使用不同的硬件地址,需要进行非常复杂的转换工作。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

## IP数据报的格式

![image-20220311152359727](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220311152359727.png)

+ 版本
  + IPv4、IPv6

## IP层转发分组的流程

![image-20220311154505557](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220311162036262.png)

+ 查找路由表
+ 用ARP得到硬件地址
+ 把硬件地址写入MAC帧的首部
+ 重复上述操作

**分组转换算法：**

![image-20220311162036262](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220311164612909.png)

![image-20220311163109476](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220311164844602.png)

**问题：一个路由（比喻中的岔口）是只能与一个路由相连吗？**（false）

# 划分子网和构造超网

## 划分子网

### 从两级IP地址到三级IP地址

+ IP地址空间的利用率有时很低
+ 路由表会变大
+ 两级IP地址不够灵活

**划分子网的基本思路**

+ 仅对内部可见

![image-20220311164612909](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220311163109476.png)

+ 借用主机号

![image-20220311164844602](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220311165400297.png)

+ 根据网络号找到路由器，根据网络号和子网号找到目的子网

  ![image-20220311165400297](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312144838828.png)

![image-20220311165411677](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220311165411677.png)

### 子网掩码

问题背景：**从IP数据报的首部无法看出源主机或目的主机所连接的网络是否进行了子网的划分**

![image-20220312144838828](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312145401039.png)

通过对c、d进行与操作，来得到e

![image-20220312145032964](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312145505145.png)

![image-20220312145505145](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312145032964.png)

![image-20220312145401039](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312151129730.png)

**子网数=$2^n-2$**  n是子网号的位数

**可以观察到，若使用较少位数的子网号，则每一个子网上可链接的主机数就较多**，**划分子网增加了灵活性，但却减少了能够链接在网络上的总的主机数**

例题：![image-20220312150459153](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312150459153.png)

## 使用子网是分组的转发

路由表必须包含以下三项内容：**目的网络地址、子网掩码和下一跳地址**

**路由器转发分组的算法：**

![image-20220312151129730](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312163316975.png)

**简述：将目的主机的IP与本主机的子网掩码进行与操作，如果相同则是在同一个网络下。否则就交给路由器进行匹配**

![image-20220312151839090](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312151839090.png)

![image-20220312151853900](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312165141673.png)

## 无分类编址CIDR（略）

### 网络前缀

![image-20220312163316975](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312164914738.png)

CIDR（无分类域间路由选择）的特点有二：

+ 消除了传统的ABC类和子网划分的概念
  + 斜线记法：在IP地址地址后面加上'/'，然后写上网络前缀所站的位数
+ CIDR把网络前缀都相同的连续的IP的地址组成一个CIDR地址块“”



### 最长前缀匹配

### 使用二叉线索查找路由表

# 网际控制报文协议ICMP

![image-20220312164914738](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312151853900.png)

### ICMP报文的种类

**ICMP差错报告报文**和**ICMP询问报文**

![image-20220312165141673](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312172540086.png)

### ICMP的应用举例

**分组网间探测PING**

用来测试两台主机之间的连通性

# 互联网的路由选择协议

## 有关路由选择协议的几个基本概念

### 理想的路由算法

+ 正确完整
+ 计算简单
+ 能够适应通信量
+ 具有稳定性
+ 公平
+ 最佳

### 分层次的路由选择协议

## 内部网关协议RIP

#### 工作原理

RIP是一种分布式的**基于距离向量的路由选择协议**

**距离**：每经过一个路由器，距离就+1。当直接到达目的地，距离也记为1（距离小于16）

RIP协议的特点：

+ 仅和相邻路由器交换信息
+ 当前路由器知道全部信息，即在自己现在的路由表
+ 按固定的时间间隔交换信息
+ 使用UDP

#### 距离向量算法

![image-20220312172527166](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312195237653.png)

![image-20220312172540086](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312172527166.png)

### RIP协议的报文格式

![image-20220312192832551](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312210715011.png)

**实现简单，开销小**

## 内部网关协议OSPF

### OSPF协议的基本特点

开放最短路径优先OSPF

**洪泛法：**

![image-20220312195237653](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312210458662.png)

**知道全网的拓扑结构，RIP不知道**

与RIP的不同点：

+ 向本自治系统中所有路由器发送信息
+ 发送的信息就是与本路由器所相邻的所有路由器的链路状态
+ 只有当链路的状态发送变化时，路由器才向所有路由器用洪泛法发送此信息

![image-20220312194529725](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312211933298.png)

### OSPF的五中分组类型

+ 问候
+ 数据库描述
+ 链路状态请求
+ 链路状态更新
+ 链路状态确认

## 外部网关协议BGP

使用BGP的两个原因：

+ 互联网的规模太大，使得自治系统AS之间路由选择非常困难
+ 自治系统AS之间的路由选择必须考虑有关策略
  + 找到比较好的路由，并非寻找一条最佳路由

![image-20220312210458662](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312194529725.png)

**用于对外通信**，(也就是说外部网关和内部网关混用？)

![image-20220312210715011](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312212335308.png)

![image-20220312211933298](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314140141514.png)

## 路由器的构成

### 路由器的结构

路由器的**任务**是转发分组，把该分组从路由器的某个合适的输出端口转发给下一跳路由器。

![image-20220312212335308](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314140433495.png)

路由器的结构可以划分为两大部分：**路由选择**部分和**分组转发**部分

**路由选择：**

+ 路由选择处理机根据路由选择协议构造出路由表

**分组转发：**

+ 交换结构
  + **根据转发表对分组进行处理**
+ 输入端口
  + 上图中123分别代表物理层、数据链路层、网络层的处理模块
  + ![image-20220314140141514](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314140157687.png)

+ 输出端口
  + ![image-20220314140157687](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314142913874.png)


ps:关于转发表和路由表(数据结构的差异)

![image-20220314115840286](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314115840286.png)

### 交换结构

三种交换方法

![image-20220314140433495](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314144035966.png)

# IPV6

## IPv6的基本首部

变化：

+ 更大的地址空间
  + **从32位增大到128位**
+ 扩展的地址层次结构
+ 灵活的首部格式
+ 改进的选项
+ 允许协议继续扩充
+ 支持资源预分配
+ 首部改为8字节对齐（原来是4字节）

IPv6数据报的格式：

+ 由**基本首部**和**有效荷载**构成

![image-20220314142913874](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314143127192.png)

![image-20220314143127192](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314154045382.png)

## IPv6的地址

IPv6数据报的目的地址：

+ 单播   点对点通信
+ 多播    一对多通信
+ 任播   任播的终点是一组计算机，但数据报只交付其中的一个，通常是距离最近的一个

冒号十六进制记法：

![image-20220314144035966](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314170823213.png)

## 从IPv4向IPv6过渡

### 双协议栈

既能够和IPv6通信又能和IPv4通信

![image-20220314154045382](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314154454214.png)

### 隧道技术

在IPv6数据报进入IPv4网络时，把IPv6数据报封装成IPv4数据报。**IPv6的数据报变成IPv4数据报的数据部分**

![image-20220314154454214](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314195857542.png)

## ICMPv6

用来反馈差错信息

# IP多播

## IP多播的基本概念

这里我可不可以理解为在路由器端使用了复制的功能？

![image-20220314170823213](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314173613201.png)

**多播数据报的目的地址是D类IP地址，而不是某个单一的主机的IP地址**

## 在局域网上进行硬件多播

![image-20220314173613201](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314195549970.png)

## 网际组管理协议IGMP和多播路由选择协议

### IP多播需要两种协议

+ IGMP协议是让**链接在本地局域网**上的多播路由器知道本**局域网上是否有主机**
+ 多播转发必须动态地适应多播组员的变化
+ 多播路由器在转发多播数据报时，不能仅仅根据多播数据报中的目的地址
+ 多播数据报可以由没有加入多播组的主机发出，也可以通过没有组成员组成员接入的网络

### 网际组管理协议IGMP

功能实现：



+ 加入时声明加入，并告诉其它多播路由器
  + ![image-20220314195549970](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314195923381.png)

+ 动态更新组员关系

  + ![image-20220314195857542](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314205935296.png)

  + ![image-20220314195923381](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314210733973.png)

### 多播路由选择协议

**多播路由选择实际上就是找出以源主机为根节点的多播转发树**

转发多播数据报时使用的三种方法：

+ 洪泛与剪除
+ 隧道技术
+ 基于核心的发现技术

# 虚拟专用网VPN和网络地址转换

## 虚拟专用网VPN

简单而言就是机构的自定义地址呗，无法和外部通信

![image-20220314205935296](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314211157227.png)

![image-20220314210733973](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314211245493.png)

这里XY的地址应该是内部分配的本地IP

## 网络地址转换NAT

# 多协议标记交换MPLS

# 本章的重要概念

![image-20220314211125825](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308221823932.png)

![image-20220314211142601](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220312192832551.png)

![image-20220314211157227](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314211125825.png)

![image-20220314211232011](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314211232011.png)

![image-20220314211245493](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220314211142601.png)

问题：书P140例题4-3