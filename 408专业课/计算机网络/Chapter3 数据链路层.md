![image-20220220201815775](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220220204315404.png)

# 使用点对点信道的数据链路层

## 数据链路和帧

**链路**：一个节点到相邻节点的一段物理线路，中间没有任何其他的交换节点。

**数据链路：**物理链路加上数据协议（可以使用网络适配器来实现）

![image-20220220202603880](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220220202603880.png)

点对点信道的数据链路层在进行通信是的主要步骤：

+ 节点A的数据链路层把网络层交下来的**IP数据报添加首部**和**尾部封装成帧**
+ 结点A把封装好的帧**发送**给结点B的数据链路层
+ 若结点B点数据链路层收到的帧无差错，则从收到的帧中提取出IP数据报交给上面的网络层，否则丢掉该帧

## 三个基本问题

数据链路层协议都遵守三个基本原则：**封装成帧**、**透明传输**、**差错检测**

### **封装成帧**

定义：**在一段数据的前后分别添加首部和尾部**（是不是可以理解为首部和尾部是用来识别数据和判断完整性？有待后续验证）

![image-20220220203825470](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220220212443551.png)

![image-20220220204315404](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220220201815775.png)

SOH的十六进制编码是01，EOH的十六进制编码是04（数据部分不允许组织成这两个数）

### **透明传输**

在数据链路层透明传输数据，表示**无论什么样的比特组合的数据，都能按照原样没有差错的通过这个数据链路层**（例如当遇到04时不会误判为该帧已经结束而将其丢弃）

**解决方法：加入转义字符ESC**

![image-20220220205353320](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220220203825470.png)

### **差错检测**

在传输过程中会产生**比特差错**（0变1，1变0）

广泛使用了**循环冗余检验**（CRC）的检错技术

**CRC技术：**

+ 约定M是原数据，P是除数。发送的数据是（k+n）位，该数据可以由以下格式得到$2^nM+FCS$
+ $2^nM$就是在原数据M后面加上n个0
+ FCS=M/P
+ 进行传输
+ 将接收到的数据/P，判断余数是不是0
+ 为0则没错，反之则错了

传输过程中还会出现**帧丢失**、**帧重复**、**帧失序**等差错

![image-20220220212443551](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220220215939579.png)

# 点对点协议PPP

## PPP协议的特点

PPP协议是**用户计算机和ISP进行通信**时所使用的数据链路层协议

![image-20220220212948700](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220220212948700.png)

### PPP协议应满足的需求

+ 简单
+ 封装成帧
+ 透明性
+ 多种网络协议
  + **在同一条物理链路上同时支持多种网络协议**
+ 多种类型链路
  + 支持在多种类型的链路上运行
+ 差错检测
+ 检测链接状态
+ 最大传送单元
  + 对每一种点对点链路设置最大传送单元MTU的标准默认值。MTU是数据部分的最大长度，不是帧的总长度。**MTU的默认值是1500字节**
+ 网络层地址协商
+ 数据压缩协商

### PPP协议的组成

![image-20220220213759034](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220220213759034.png)

## PPP协议的帧格式

### 各字段的意义

PPP帧的首部和尾部分别为**四个字段**和**两个字段**

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220221162408925.png" alt="image-20220220215939579" style="zoom:50%;" />

![image-20220220220257677](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220220205353320.png)

### 字节填充

还是使用转移字符

### 零比特填充

发现五个相同的1，填充0。

![image-20220221155318741](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220221161146125.png)

## PPP协议的工作状态

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220221162615452.png" alt="image-20220221161146125" style="zoom:50%;" />

# 使用广播信道的数据链路层

局域网使用的是广播信道

## 局域网的数据链路层

**网络为一个单位所拥有，且地理范围和站点数据均**

局域网的优点：

![image-20220221162408925](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220221155318741.png)

![image-20220221162615452](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220221163929199.png)

+ 静态划分信道
+ 固定分配
  + 代价高、不适合局域网使用
+ 动态媒体接入控制
  + 随机接入
  + 受控接入，需要轮询

### 以太网的两个标准

### 适配器的作用

计算机与外界局域网的链接是通过**通信适配器**进行的。适配器和局域网之间的通信是通过电缆或双绞线以串行传输方式进行的。

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220223143145409.png" alt="image-20220221163929199" style="zoom:50%;" />

## CSMA/CD协议

​	为了通信的简便，以太网采取了以下两种措施：

**其一**

+ 采用无连接的工作方式，不进行编号，也不要求对方发回确认。以太网提供的服务是尽最大努力的交付，即不可靠的交付。对有差错帧是否需要重新穿则有高层决定。
+ **同一时间只允许一台计算机发送数据（随机接入）**
+ CSMA/CD的意思是载波监听多点接入/碰撞检测。（监听总线上是否有数据在传输）

**其二**

以太网发送的数据都使用**曼彻斯特编码**的信号

![image-20220221171845055](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220221171845055.png)

### CSMA/CD协议的要点

+ 多点接入
  + 总线型网络，多台计算机链接在一条总线上
+ 载波监听
  + 用电子检测技术检测总线上有没有其他计算机也在发送
+ 碰撞检测
  + 边发送边检测

## 使用集线器的星形拓扑

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220220220257677.png" alt="image-20220223143145409" style="zoom:67%;" />

集线器的特点：

![image-20220223143348402](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220223151650876.png)

![image-20220223151650876](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220223152513925.png)

**采用堆叠式**

## 以太网的信道利用率

![image-20220223152409938](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220223161300223.png)

![image-20220223152513925](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220223143348402.png)

## 以太网的MAC层

#### MAC层的硬件地址

+ 硬件地址又称为物理地址或MAC地址，其实就是下段的适配器地址。

+ 全球地址指局域网中**每一台计算机固化在适配器的ROM中的地址**（计算机地址位置改变并不会造成该地址位置改变，但若是ROM造成损坏，则会导致地址改变）
+ 总共48位，前24位是公司标识符，后24位是扩展标识符（由厂家指定）

#### MAC帧的格式

# 扩展的以太网

![image-20220223161300223](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220223152409938.png)

**目的地址**和**源地址**应该就是上面的mac层的硬件地址，**类型**表示的是上层协议的类型（IP等）



MAC子层又怎么知道从接收到的以太网中取出多少字节数据交付给上层协议呢？

+ 曼彻斯特码会有电压的转换，在一个以太网帧发送完毕后，就不再发送码元了，因此发送方适配器的接口上的电压也就不再产生变化了。

## 在物理层扩展以太网

![image-20220223162304501](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220223162801620.png)

缺点：

+ 会产生碰撞
+ 不同的以太网技术不能把集线器互联

## 在数据链路层扩展以太网

网桥：查找地址表，将该帧转发到接口（过滤）已经被淘汰了。

![image-20220223162801620](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308185646971.png)

### 以太网交换机的特点

+ 实质上就是一个**多接口的网桥**。相互通信的主机都是**独占传输媒体**，**无碰撞地传输数据**
+ 接口还有存储器，能够缓存帧
+ 通过地址表进行交换

### 以太网交换机的自学习功能

![image-20220308183800389](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308190120533.png)

### 从总线以太网到星型以太网

## 虚拟局域网

![image-20220308184317059](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308184317059.png)

**在局域网上的每一个站都可以收到同一个局域网上其他成员所发出的广播**

# 高速以太网

## 100BASE-T以太网

不用改变网络的拓扑结构，改变集线器和交换机即可

![image-20220308185646971](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308191007410.png)

## 吉比特以太网

+ 载波延伸
+ 分组突发

## 10吉比特以太网

![image-20220308190120533](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220223162304501.png)

![image-20220308191007410](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308191417508.png)

## 使用以太网进行宽带接入

# 本章的重要概念

![image-20220308191417508](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308183800389.png)

![image-20220308191429699](https://raw.githubusercontent.com/Alemdx/pic-bed/master/nets3/image-20220308191429699.png)
