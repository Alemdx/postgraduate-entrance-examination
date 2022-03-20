# 机器指令

## 指令的一般格式

![image-20220206221543862](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206221951906.png)

操作码字段（反映了计算机要做什么操作、对什么样的数据进行操作）+地址码字段

### 操作码

+ 长度固定
+ 长度可变

#### 扩展操作码技术

操作码的位数随地址数的减少而增加![image-20220206221951906](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206221543862.png)

![image-20220206223248901](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206223248901.png)

**减少一种指将1111作为码点，那么OP为1111的$A_1$就能多出$2^4$个**

**要保证低位操作码不是高位操作码的前缀**

![image-20220206224643320](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209151812189.png)

#### 例题

![image-20220206225634504](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209151941677.png)

### 地址码

#### 四地址码

![image-20220209151707526](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206225634504.png)

#### 三地址码

![image-20220209151812189](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209160251562.png)

#### 二地址码

![image-20220209151856335](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209160319229.png)

#### 一地址码

![image-20220209151941677](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209151856335.png)

#### 零地址码

+ 对ACC进行操作
+ 对堆栈进行操作

## 指令的字长

指令字长决定于操作码长度、操作地址的长度、操作地址的个数

+ 指令字长固定
  + 指令字长=存储字长
+ 指令字长可变
  + 按字节的倍数变化

# 操作数类型和操作类型

## 操作数类型

地址       无符号数

数字		定点数、浮点数、十进制数

字符		ASCLL

逻辑数		逻辑运算

## 数据在存储器中的存放方式

+ 大端存储
  + ![image-20220209160251562](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209151707526.png)
+ 小端存储
  + ![image-20220209160319229](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209160430552.png)

### 边界对准存储

![image-20220209160410637](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209161301364.png)

![image-20220209160430552](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209225925141.png)

数据存放的起始地址是数据长度（按照字节进行计算，就是看是几个字节，这里假设为x，存放的地址为kn）的整数倍。

## 操作类型

+ 数据传送

+ 算术逻辑操作

+ 移位

+ 转移

  + 无条件转移

  + 条件转移

  + 调用与返回

    ![image-20220209161301364](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209230258136.png)

  + 陷阱与陷阱指令

    + 陷阱是意外事故的中断

+ 输入输出

+ 其他

# 寻址方式

确定本条指令的数据地址及下一条即将要执行的指令的地址

## 指令寻址

+ 顺序寻址

+ 跳跃寻址

  ![image-20220209225254107](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220206224643320.png)

## 数据寻址

![image-20220209225925141](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209160410637.png)

### 立即寻址

![image-20220209230015142](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209225254107.png)

### 直接寻址

**形式地址就是有效地址**

![image-20220209230258136](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209230015142.png)

### 隐含寻址

![image-20220209230458150](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209231253864.png)

### 间接寻址

形式地址不直接指出操作数的地址，而**是指出操作数有效地址所在的存储单元地址**。有效地址是由形式地址间接提供的。

![image-20220209231253864](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210004632733.png)

如果是1，则还需要间接寻址。所以真正的寻址范围是$2^{15}$

![image-20220209231849687](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210004106044.png)

### 寄存器寻址

![image-20220210003958254](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210004742543.png)

### 寄存器间接寻址

操作数的地址保存在寄存器中

![image-20220210004106044](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210003958254.png)

### 基址寻址

采用专用寄存器做基址寄存器

![image-20220210004233031](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209230458150.png)

+ 可扩大寻址范围
+ 有利于多道程序（给程序固定的基址）
+ BR由操作系统或管理程序确定
+ **BR不可变，A可变**

#### 采用通用寄存器作基址寄存器

![image-20220210004632733](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220209231849687.png)

### 变址寻址

![image-20220210004742543](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210004233031.png)



+ 可扩大寻址范围
+ IX的内容由用户给定
+ **在程序的执行过程中IX内容可变，形式地址A不可变**

+ 便于处理数组问题

### 相对寻址

![image-20220210005534707](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210005534707.png)

+ A的位数决定操作数的寻址范围
+ 程序浮动（程序在内存中的存储位置发展变化）

### 堆栈寻址

+ 硬堆栈   多个寄存器
+ 软堆栈   指定的存储空间

先进后出

**注意这里是上面小 下面大**

![image-20220210010343048](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210010358076.png)

![image-20220210010358076](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210014238766.png)

# 指令格式举例

## 设计指令格式时应该考虑的各种因素

+ 指令系统的**兼容性**
+ 其他因素

# RISC技术

![image-20220210014238766](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220210010343048.png)

## RISC的主要特征

+ 选用使用频度较高的一些**简单指令**，复杂指令的功能有简单指令来组合
+ 指令**长度固定、指令格式种类少、寻址方式少**
+ 只有**Load、Store**指令访存（大多数都存储在寄存器中）
+ CPU中有多个通用寄存器
+ 采用**流水技术 一个时钟周期**内完成一条指令
+ 采用**组合逻辑**实现控制器

## CISC的主要特征

+ 指令系统庞大，各种指令使用频度相差大
+ 指令**长度不固定、指令格式种类多、寻址方式多**
+ 访存指令**不受限制**
+ CPU设有专用寄存器
+ 大多数指令需要**多个时钟周期**执行完毕
+ 采用**微程序**控制器