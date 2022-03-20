# 概述

## 输入输出系统的发展概况

+ 早期阶段

  **串行工作**

  ![image-20220213221458502](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213221549058.png)

+ 接口模块和DMA阶段

  **并行工作**

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213221838785.png" alt="image-20220213221549058" style="zoom:67%;" />

![image-20220213221819590](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213223640116.png)

+ 具有通道结构的阶段

  **可以看做是一个简单的处理器，有自己的指令系统**

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213221458502.png" alt="image-20220213221838785" style="zoom:67%;" />![image-20220213222218325](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213223524775.png)

+ 具有I/O处理机的阶段

  ![image-20220213222419003](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213222419003.png)

## 输入输出系统的组成

由IO软件和IO硬件组成

### I/O软件

#### I/O指令

**CPU指令的一部分**

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216212413431.png" alt="image-20220213223524775" style="zoom:50%;" />

![image-20220213223640116](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213222218325.png)

#### 通道指令 

**通道自身的指令**

指出数据的首地址、传输的字数、操作命令

### I/O硬件

设备 ——IO接口

设备——设备控制器——通道

## I/O设备与主机的联系方式

### IO设备编织方式

+ 统一编址
  + 把IO地址看做是内存地址的一部分
  + 把内存的低地址或高地址作为IO地址，如果访存指令落入到该地址，就当做是对IO的访问
  + 用取数、存数指令
+ 不统一编址
  + 在内存外单独开辟一段空间
  + 有专门的I/O指令

### 设备地址

用**设备选择电路**识别是否被选中

### 传送方式

串行

并行

### 联络方式

+ 立即相应
+ 异步工作采用应答信号
+ 同步工作采用同步时标

### IO设备与主机的连接方式

+ 辐射式链接![image-20220216212413431](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216213318888.png)

+ 总线连接

  **便于增删设备**

## IO设备与主机信息传送的控制方式

###  程序查询方式

cpu查询IO设备是否准备就绪，若未准备就绪，就继续查询。这种情况下，CPU需要等待IO，故而查询的效率不高。**CPU和IO串行工作。**

![image-20220216213318888](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220213221819590.png)

![image-20220216215039969](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216215039969.png)

### 程序中断方式

**当IO在自身准备时，CPU不进行查询**。当外部设备准备好之后，向CPU提出请求，CPU暂停现行程序，跳转到中断服务程序。

**CPU和IO部分的并行工作**

**IO在输入的过程中，仍需要CPU的参与，内存与IO之间还要通过CPU。**

![image-20220216214042812](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216214823253.png)

![image-20220216215025971](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216215648617.png)

### DMA方式

**内存IO通过DMA交换器能直接交互，不需要通过CPU**。

类似于数据通过IO预存到DMA控制器中，存完后DMA申请占用总线，存入内存。相比于上一种方式，CPU需要从IO中一个一个取

![image-20220216214823253](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216215025971.png)



# I/O设备

## 概述

![image-20220216215648617](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216230502385.png)

### 外部设备大致分三类

+ 人机交互设备 键盘 鼠标 打印机 显示器
+ 计算机信息存储设备 磁盘 光盘 
+ 机—机通信设备 调制解调器

## 输入设备

+ 键盘
+ 鼠标
+ 触摸屏

## 输出设备

### 显示器

+ 字符显示器
+ 图形显示器
+ 图像显示器

### 打印机

+ 打击式    点阵式
+ 非打击式	激光

## 其他

+ AD、DA
+ 终端
+ 汉字处理

## 多媒体设备

# I/O接口

## 概述

为什么要设置接口？

+ 实现设备的选择
+ 实现数据缓冲达到速度匹配
+ 实现数据串——并格式转换
+ 实现电平转换
+ 传送控制命令
+ 反映设备的状态（忙，就绪，中断请求）

## 接口的功能和组成

### 总线连接方式的IO接口电路

+ 设备选择线

+ 数据线

+ 命令线

+ 状态线

  ![image-20220216230502385](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216214042812.png)

### IO接口的基本组成

![image-20220216230931665](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216230931665.png)

## 接口类型

### 按数据传送方式分类

+ 并行接口

+ 串行接口

### 按功能选择的灵活性分类

+ 可编程接口
+ 不可编程接口

### 按通用性分类

+ 通用接口

+ 专用接口

### 按数据传送的控制方式分类

+ 中断方式
+ DMA方式

# 程序查询方式

## 程序查询方式的流程

<img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216231428647.png" alt="image-20220216231428647" style="zoom:67%;" /><img src="https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216231535558.png" alt="image-20220216231535558" style="zoom: 50%;" />



## 程序查询方式的接口电路

![image-20220216232728075](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216234534852.png)

# 程序中断方式

## 中断的概念

遇到特殊情况时，停止现行程序，转向异常情况的处理，处理完后返回执行源程序。

## IO中断的产生

**设备在准备时不做等待**

![image-20220216234534852](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220217003602598.png)

## 程序中断方式的接口电路

### 中断请求的触发器 中断屏蔽触发器

### 中断排队器

## IO中断处理过程

### CPU相应中断的条件和时间

CPU在每条指令执行阶段结束前，向接口中发中断查询信号。

### IO中断处理过程

## 中断服务程序的流程

+ 保护现场
+ 中断服务
+ 恢复现场
+ 中断返回

# DMA方式

## DMA方式的特点

+ 停止CPU访问主存

  要求CPU停止访问主存

+ 周期挪用

+ DMA和CPU交替访问

  ![image-20220217003602598](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220217232042074.png)

## DMA接口的功能和组成

### DMA接口的功能

![image-20220217232042074](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220216232728075.png)

### DMA接口的组成

+ 主存地址寄存器
+ 字计数器
+ 数据缓冲寄存器
+ DMA控制器
+ 中断机构
+ 设备地址寄存器

## DMA接口的类型
