# CPU的结构

## CPU的功能

+ 控制器的功能
  + 取指令
  + 分析指令
  + 执行指令，发出各种操作命令
  + 控制程序的输入及结果的输出
  + 总线管理
  + 处理异常情况和特殊请求
+ 运算器的功能
  + 实现算数运算和逻辑运算

## CPU的结构框图

![image-20220210155133396](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210155133396.png)

![image-20220210155300896](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210155300896.png)

![image-20220210155329352](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210160022897.png)

## CPU的寄存器

### 用户可见的寄存器

+ 通用寄存器 存放操作数
+ 数据寄存器 存放操作数
+ 地址寄存器 存放地址
+ 条件码寄存器 存放条件码

### 控制可状态寄存器

+ 控制寄存器

  ![image-20220210160003307](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210160003307.png)

+ 状态寄存器![image-20220210160022897](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210161312749.png)

## 控制单元CU和中断系统

### CU 产生全部指令的未操作命令序列

可以由组合逻辑或微程序设计而成



# 指令周期

## 指令周期的基本概念

+ 指令周期
  + 取出并执行一条指令所需的全部时间
  + 完成一条指令
    + 取指、分析（取指周期）
    + 执行（执行周期）

+ 每条指令的指令周期不同

![image-20220210161050934](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210161326609.png)

+ 具有间接寻址的指令周期

![image-20220210161312749](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210161050934.png)

+ 带有中断周期的指令周期

![image-20220210161326609](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210214254198.png)

### 指令周期流程

![image-20220210165919975](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210165919975.png)

### CPU工作周期的标志

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210170539377.png" alt="image-20220210170539377" style="zoom: 67%;" />

## 指令周期的数据流

注意这四个流程要连在一起看

**MAR 存储器地址寄存器、MDR存储器数据寄存器PC程序计数器、IR指令计数器**

### 取指周期数据流

![image-20220210214254198](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210155329352.png)

![image-20220210214333850](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210214333850.png)

### 间址周期数据流

**根据IR的内容来判断是否需要间址**

![image-20220210214953648](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210220659760.png)

![image-20220210220348503](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210220348503.png)

### 执行周期数据流

![image-20220210220659760](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210214953648.png)

### 中断周期数据流

![image-20220210221154686](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210221154686.png)

# 指令流水

如何提高机器速度？

+ 提高访存速度

  + 高速芯片
  + Cache
  + 多体并行

+ 提高IO和主机之间的传送速度

  + 中断
  + DMA
  + 通道
  + IO处理机
  + 多总线

+ 提高运算速度

  + 高速芯片
  + 改进算法
  + 快速进位链

+ 提高系统的并行性

  + 并发  两个或两个以上事件在**同一时间段**发生（分时间片执行）

  + 同时  两个或两个以上事件在**同一时刻**发生（时间上相互重叠）

    

## 指令流水原理

### 指令的串行执行

![image-20220210222901564](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210223822350.png)

**总有一个部件空闲**

### 指令的二级流水

![image-20220210223822350](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210222901564.png)

+ 执行事件>取址时间

![image-20220210224122457](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210224436893.png)

+ 条件转移指令对指令流水的影响
  + **必须等上条指令执行结束，才能确定下条指令的地址**
  + 造成时间损失  猜测法

![image-20220210224436893](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210224122457.png)



## 影响流水线性能的因素

+ 结构相关  
  + 不同指令争用同一功能部件产生资源冲突![image-20220210224806708](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210225135214.png)

+ 数据相关
  + 不同指令因重叠操作，可能改变操作数的读写访问顺序

![image-20220210225135214](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213164957358.png)

+ 控制相关

例如jmp指令

## 流水线性能

### 性能指标

+ 吞吐率（**单位时间内**流水线所完成指令或**输出结果**的**数量**）

  + 最大吞吐率

    ![image-20220213164957358](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210224806708.png)

  + 实际吞吐率

    ![image-20220213165019122](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213165343853.png)

​			第一条+（n-1）条

+ 加速比$S_p$

  + m段的流水线速度与等功能的非流水线速度之比

    ![image-20220213165343853](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213170359689.png)

+ 效率

  + 流水线中各段的利用率

    ![image-20220213165913638](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213165019122.png)

## 流水线中的多发技术

### 超标量技术

**多条流水线**

![image-20220213170359689](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213170606038.png)

### 超流水线技术

在**一个时钟周期**内**再分段**

在一个时钟周期内 **一个功能部件使用多次**

![image-20220213170606038](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213171543938.png)

### 超长指令字技术

![image-20220213170846273](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213170846273.png)

## 流水线结构

### 指令流水线结构

完成一条指令分成6**段**，每段需要一个时钟周期

![image-20220213171302952](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213165913638.png)

### 运算流水线

![image-20220213171543938](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213205150017.png)

# 中断系统

## 概述

### 引起中断的各种因素

+ 人为设置的中断
  + 如转管指令 INT TYPE
+ 程序性事故
  + 溢出、操作码不能识别、除法非法
+ 硬件故障
+ I/O设备
+ 外部事件
  + 用**键盘中断**现行程序

### 中断系统需要解决的问题

![image-20220213205150017](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213214300095.png)

![image-20220213205203181](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213171302952.png)

**软件+硬件**来实现

## 中断请求标记和中断判优逻辑

### 中断请求标记

为了判断是那个中断源提出请求

**INTR** 中断请求触发器

### 中断判优逻辑

任何一个中断系统，在任意时刻，只能响应一个中断源的请求，中断系统按照优先顺序进行响应

#### 硬件排队

**按优先级顺序进行排队**

![image-20220213205903233](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213211909077.png)

#### 软件排队

从高到低依次请求

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213210041696.png" alt="image-20220213210041696" style="zoom:67%;" />

## 中断服务程序入口地址的寻找

### 硬件向量法

![image-20220213211909077](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213205903233.png)

### 软件查找法

图8.26

## 中断响应

### 中断响应的条件

CPU响应I/O中断的条件是允许中断触发器必须为“1”（根据是否为1来判断是否有中断）

在中断系统的中有**一个允许中断触发器EINT**，他可被开中断指令设置为“1”，页可被关中断指令设置为“0”（只有他为1时才能响应中断）

### 响应中断的时间

**在指令执行周期结束后，才响应中断源的请求**

### 中断隐指令

在中断周期内，CPU要自动完成一系列操作，具体如下（都由中断隐指令完成）：

+ 保护程序断点

  **将PC的内容保存在存储器中**

+ 寻找中断服务程序的入口地址

  硬件和软件两种方法，将中断的首地址送到PC

+ 关中断

  防止CPU在在该中断周期内又收到新的中断请求，所以关中断

## 保护现场和恢复现场

## 中断屏蔽技术	

### 多重中断的概念

![image-20220213214300095](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213205203181.png)

### 实现多重中断的条件

+ 提前设置开中断指令

**由于之前在中断隐指令中进行了关中断，必须提前设置开中断指令**

+ 优先级高的中断源有权中断优先级别低的中断源

### 屏蔽技术