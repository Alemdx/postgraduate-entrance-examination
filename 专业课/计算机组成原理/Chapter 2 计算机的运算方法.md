# 有符号数和无符号数

## 无符号数

范围：$0\sim2^n-1$

## 有符号数

范围：这里范围需要分是反码原码还是补码，因为前者存在两个0

**正数三码合一**

### 原码

0表示正数，1表示负数

### 补码（好像无论是整数还是小数，都使用于取反加一）

目的：消除减法

可以理解为时钟转动。**转动一圈就相当于产生了进位，但产生的进位并没有记录在原来的数中，所以就相当于清0**

+ 一个负数可以用他的正补数来代替，而这个正补数可以用模加上负数本身求得
+ 一个正数和一个负数互为补数时，他们的绝对值之和即为模数

#### 整数的补码

取反加一（也是对于负数，除符号位外）

#### 小数补码

![image-20220119214335954](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220119214335954.png)

### 反码

#### 整数反码（除符号位取反）

![image-20220119214702615](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220119214702615.png)

#### 小数反码

![image-20220119214924221](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220119214924221.png)

### 移码

引入移码的目的：**人们很难从补码的形式上直接判断其真值的大小**

移码的定义：![image-20220119215639046](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220119215639046.png)

+ 关你补码屁事啊，我知道真值还不能判断吗

# 数的定点和浮点表示

## 定点表示

顾名思义就是小数点位置固定呗

小数范围：$-(1-2^{-n})\sim(1-2^{-n})$

## 浮点表示

小数点位置可以浮动

![image-20220119220905903](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220119220905903.png)



**在计算机中规定浮点数的尾数用纯小数形式。**

### 浮点数的表示形式

![image-20220119232604968](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220119232604968.png)

其实就是整数部分+小数部分呗（false）

是科学计数法，阶是次方

### 浮点数的表示范围

![image-20220119232802791](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220119232802791.png)

![image-20220119233125686](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220119233125686.png)

：不是太理解为什么分配给阶码部分的机器字长这么短

因为阶码是次方 不是整数+小数

### 浮点数的规格化

针对的是小数部分

![image-20220123164628677](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220123164628677.png)

## 浮点数与定点数的比较

![image-20220119234834075](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220119234834075.png)

## 举例

![image-20220119235402608](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220119235402608.png)

## 	IEEE 754标准

全部都是按照原码来计算

![image-20220120001440530](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120001440530.png)

### 正规数

关键点：

+ 数值加上偏移量之后存储（127）
+ 默认小数点左边有一个1，不加入存储

![image-20220123160758648](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120194613530.png)

### 次正规数

![image-20220123163416584](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120200346332.png)

# 定点运算

## 移位运算

### 移位的意义

![image-20220120194613530](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220123163416584.png)

移位可以代替乘除运算

### 算数移位规则

**无论是正数还是负数，移位后其符号均保持不变**（符号不参与移位）

![image-20220120194849960](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120194849960.png)

无论正数还是负数，三码都相当于是×2或÷2（奇数需要特别判断是向上取还是向下取）

### 算数移位和逻辑移位的区别

**有符号数**的移位称为算数移位，**无符号数**的移位称为逻辑移位

**无符号数无论左移还是右移，都是填0**

## 加法与减法运算

现代计算机中都采用补码进行加减法运算

### 补码加减法基本公式

![image-20220120200346332](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120202251050.png)

### 溢出的判断

补码定点加减法运算判断溢出有两种方法

+ 用一位符号位判断溢出

![image-20220120201157947](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120201157947.png)

**结论：不论是作加法还是减法，只要实际参加操作的两个数（减法时即为被减数和“求补”之后的减数）符号相同，结果又与源操作数的符号不同，即为溢出。**

**还要一种方法判断**：根据机器字长求出补码所对应的真值范围，直接计算真值在不在里面。例：

![image-20220120202251050](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120202304611.png)

![image-20220120202304611](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220123160758648.png)

**还有亿种方法：**

![image-20220120203311854](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120205608509.png)

+ 用两位符号位判断溢出

![image-20220120205608509](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120210227617.png)

![image-20220120205704829](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120203311854.png)

## 乘法运算

### 分析笔算乘法

![image-20220120210227617](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120205704829.png)

（难以实现一次相加）

### 笔算乘法的改进

![image-20220120210758152](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120210812154.png)

![image-20220120210812154](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120210758152.png)

![image-20220120210915922](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120211822253.png)

### 原码乘法

![image-20220120211822253](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120210915922.png)

（感觉可以直接笔算求啊。。。）

n次加法 n次移位

![image-20220120231208837](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120231208837.png)

**注意：**

+ **这是逻辑移位，小数点前面的也要算在内**
+ **执行的顺序是先加再位移，也就是最后还需要再位移一次**
+ **是对原码进行操作**

### 补码一位乘法运算规则

（看视频）

## 除法运算

经过n次移位

### 分析笔算除法

![image-20220120232328416](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220122162111928.png)

如果违反第一条约定 则溢出![image-20220122160220748](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220120232328416.png)

### 恢复余数法

恢复余数：恢复主要体现在被除数-除数，如果余数小于0，那么上商0，结果复原，对被除数进行左移

![image-20220122161342434](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220122163120950.png)

无论余数大小 都需要*2

### 不恢复余数法

![image-20220122162111928](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220122161342434.png)

![image-20220122162054841](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220122160220748.png)

# 浮点四则运算

### 浮点加减法运算

![image-20220122163120950](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220122162054841.png)

+ 对阶（小阶向大阶看齐）
  + ![image-20220122163440180](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220122163440180.png)

+ 尾数求和
+ 规格化
  + 左规
  + 右规
+ 舍入
  + 0舍1入法
  + 恒置1法
+ 溢出判断![image-20220122203858843](https://raw.githubusercontent.com/Alemdx/pic-bed/master/coa/image-20220122203858843.png)

# 算术逻辑单元

