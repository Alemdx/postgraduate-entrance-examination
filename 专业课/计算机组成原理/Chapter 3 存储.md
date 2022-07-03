# 概述

## 存储器分类

用来存放程序和数据。

DMA 存储器与I/O直接进行数据交换

### 按存储介质分类

+ 半导体存储器

  体积小、功耗低、存取时间短、具有易失性

+ 磁表面存储器

  非易失

+ 磁芯存储器

+ 光盘存储器

  非易失

### 按存取方式分类

+ 随机存储器（RAM）
  + 可实现读写、主存都采用RAM
+ 只读存储器（ROM）
  + 只读
+ 串行访问存储器
  + 读写按照物理位置的先后顺序

### 按在计算机中的作用分类

存储器主要分为**主存储器、辅助存储器、缓冲存储器**

+ 主存储器
  + 可以直接与CPU交换信息
+ 辅助存储器
  + 是主存储器的后援存储器，用来存放当前暂时不用的程序和数据、不能直接和CPU交换信息
+ 缓冲存储器
  + **用在速度不同的部件之中**，例如CPU和主存之间可以设置一个快速缓存

![image-20220123223901726](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220123224818789.png)

## 存储器的层次结构

价格越低，速度越慢，容量越大、CPU访问频度也越少

![image-20220123224818789](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220123223901726.png)

![image-20220123225043432](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220123225043432.png)

缓存——主存层次主要解决CPU和主存速度不匹配为题

主存——辅助层次主要解决存储容量的问题（CPU不能直接访问）

# 主存储器

## 概述

![image-20220124200227161](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124200639850.png)

读：CPU将该字的地址送到MAR，经地址总线送至主存，然后发出读命令。主存接到读命令后，将该地址的内容读出，送到数据总线上，由MDR接收。

写：![image-20220124200639850](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124231249698.png)

### 主存中存储单元地址的分配

常用8位二进制表示一个字节，因此存储字长都取8的倍数

![image-20220124201445954](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124200227161.png)

![image-20220124231249698](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124202526277.png)

大端：高位低地址、低位高地址

小端：低位高地址、高位低地址

### 主存的技术指标

+ 存储容量

  + 总位数或者总字节数

  ![image-20220124201819980](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124215826456.png)

+ 存储速度

  + 由存取时间和存取周期来表示

+ 存储器带宽

  + 单位时间存取的信息量

## 半导体存储芯片简介

### 半导体存储芯片的基本结构

![image-20220124202526277](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124201445954.png)

![image-20220124233200536](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124201819980.png)

质疑？？？？？

![image-20220124202802240](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124202802240.png)

 

### 半导体存储芯片的译码驱动方式

+ 线选法

![image-20220124215810435](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124215810435.png)

![image-20220124215826456](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124215841097.png)

+ 重合法

  ![image-20220124215841097](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125152031807.png)

![image-20220124215850525](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124230316819.png)

## 随机存取存储器

### 静态RAM(SRAM)

由六个mos管组成。使用触发器，电源掉电时，原存储信息丢失

![image-20220124230316819](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124215850525.png)

**（64*64）行地址确定多少行。一个列地址控制四列。**

### 动态RAM（DRAM）

使用电容来存放0/1

#### 三管动态RAM

![image-20220125152031807](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125155916810.png)



#### 单管动态RAM

16k=$2^{14}$ 

信息分两次传送，一次传送行地址，一次传送列地址

![image-20220125155916810](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125162215964.png)

#### 动态RAM刷新

由于DRAM是使用电容存储信息，需要不定时的刷新。**刷新是按行进行刷新**。刷新的方法有以下几种：

+ 集中刷新

  ![image-20220125162215964](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125142825326.png)

+ 分散刷新

  把刷新分散在每次存取当中

  ![image-20220125162300864](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125163110287.png)

+ 异步刷新

  ![image-20220125162346457](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125190451404.png)

### 动态RAM和静态RAM的比较

![image-20220125142825326](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125163255846.png)

DRAM一般用作主存，SRAM一般用作缓存

## 只读存储器

**保存系统程序/系统的配置信息**

### 掩模ROM（MROM）

行列选择线交叉处有MOS管为1，无则为0

![image-20220125163110287](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125162300864.png)

### PROM（一次性编程）

![image-20220125163255846](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125190442489.png)

熔丝断为0，熔丝未断为1

### EPROM（多次性编程）

### EEPROM（多次性编程）

电可擦写、局部擦写、全部擦写

### FLASH Memory（闪存）

## 存储器与CPU的连接

### 存储器容量的扩展

#### 位扩展（增加存储字长）

#### ![image-20220125190451404](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125210922337.png)

**把两个芯片当做一个芯片使用，同时工作，使用片选。**

地址线不需要按顺序，数据线需要

#### 字扩展（增加存储字的数量）

![image-20220125190442489](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125162346457.png)

#### 字、位扩展

![image-20220125190723600](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125224904592.png)

### 存储器与CPU的连接

#### 地址线的连接

CPU的地址线往往比存储芯片的地址线数多。通常总是将CPU地址线的低位与存储芯片的地址线相连。**CPU地址线的高位或在存储芯片扩充时使用，或用作其他用途，如片选信号等。**

#### 数据线的连接

![image-20220125210922337](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125211025968.png)

#### 读写命令线的连接

**有可能是一根也有可能是两根**

![image-20220125211025968](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220126011151087.png)

#### 片选线的连接

![image-20220125224904592](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125222702814.png)要注意MREQ的选择，表示是进行IO访问还是进行存储访问

![image-20220125211557420](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125190723600.png)

#### 芯片的选择

一般来说，系统程序使用ROM（只读）、用户程序使用RAM。

#### 时序、负载

#### 举例

这里408好像不考。

## 存储器的校验

为什么需要对存储器校验？

+ 在某些情况下会造成触发器的翻转（SRAM）和电容的改变（DRAM），避免程序运行时产生错误

### 编码的最小举例

组合任意两组合法代码之间**二进制位数**的**最少差异**

![image-20220125222702814](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125222854383.png)

**纠错理论**

![](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220126014143217.png)

### 汉明码的组成

+ 汉明码采用奇偶校验
+ 汉明码采用分组校验
+ 汉明码分组是一种非划分的方式

## 提高访存速度的措施

# 高速缓冲存储器

## 概述

### 问题的提出

+ 避免CPU空等的现象
+ CPU和主存（DRAM）之间存在速度差异
  + ![image-20220126011151087](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220126012955465.png)

+ 程序访问的局部性原理

### Cache的工作原理

#### 主存和缓存的编制

直接进行块移动

#### 命中与未命中

缓存一共有C块

主存共有M块 M>>C

![image-20220126012955465](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206192328239.png)

#### Cache的命中率

CPU欲访问的信息在Cache中的**比率**

**命中率**与Cache的**容量**和**块长**有关

一般每块可取4~8个字

**块长取一个存取周期内从主存调出的信息的长度**

#### Cache- 主存系统的效率

效率e与命中率有关

$e={访问Cache的时间\over平均访问时间}*100\%$

![image-20220126014132395](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220126014132395.png)

![image-20220126014143217](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206194531566.png)



#### Cache的基本结构

![image-20220206173541128](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125211557420.png)

#### 对Cache的读写操作

读操作

![image-20220206192328239](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206193031448.png)

写操作  **要解决Cache个主存的一致性问题**

+ 写直达法

  + 数据既写入Cache又写入主存
  + 写操作的时间就是访问主存的时间
  + Cache退出时就不需要对主存进行写操作
  + 增加了访问次数

+ 写回法

  + 把数据写入Cache而不写入主存
  + 当Cache数据被替换是才写回主存

  ![image-20220206193031448](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206173541128.png)

#### Cache的改进

+ 增加Cache的级数

  + 片载Cache
    + 放在CPU里面
  + 片外Cache

+ 统一缓存和分立缓存

  + 指令Cache 数据Cache

    ![image-20220206194531566](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206194721939.png)

## Cache-主存的地址映射

主存当中的任意一块，可以加载到Cache中的哪些块？

### 直接映射

一对多

![image-20220206194721939](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206200035503.png)

总共分为t个区

**如何判断是否命中？**

比较主存字块标记和Cache字块标记是否相同

+ Cache利用率低（如果有空闲区域 产生冲突时还是会替换）
+ 速度快、便捷

### 全相连映射

多对多

![image-20220206195701043](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206195701043.png)

只要有空闲的字块就能调入，但要进行比较，速度慢

### 组相连映射

![image-20220206200035503](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125230513820.png)

**主存储器的区数等于Cache中的组数**

## 替换算法

### FIFO

### LRU

# 辅助存储器

## 概述

### 特点

+ 不直接与CPU交换信息

### 磁表面的存储器（常用）技术指标

+ 记录密度 （道密度，位密度）越往外位密度越低
+ 存储容量 $C=n*k*s$
+ 平均寻址时间 （寻道时间【找到磁道】+等待时间【磁盘旋转，等到扇区旋转到磁头下面】）
  + 辅存的速度={寻址时间、磁头读写时间}
+ 数据传输率 $D_r=D_b*V$  （位密度*旋转速度）
+ 误码率

## 磁记录的原理

根据方向来

![image-20220125230513820](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125231141902.png)

根据电势的变化判断01

![image-20220125230553724](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125230917927.png)

## 硬磁盘存储器

### 硬磁盘存储器的类型

+ 固定磁头和移动磁头
+ 可换盘和固定盘

### 硬磁盘存储器结构

![image-20220125230917927](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125231615432.png)

+ 磁盘驱动器

![image-20220125231141902](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125232012959.png)

+ 磁盘控制器
  + 接收主机发来的命令，转换为磁盘驱动器的控制命令

+ 盘片
  + 由硬质的铝合金结构

## 软磁盘存储器

### 概述

![image-20220125231615432](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125230553724.png)

## 光盘存储器

### 概述

采用光存储技术 利用激光写入和读出

![image-20220125231941054](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220125231941054.png)

### 光盘的存储原理

![image-20220125232012959](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220124233200536.png)
