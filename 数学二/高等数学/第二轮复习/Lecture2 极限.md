# Lecture2 极限

[TOC]

## 极限的概念

### 数列极限

+ 后面**无穷多项**都落在以A为中心的邻域里面。前面有有限多项在这个区间外面（前面是有限项，就有最大项和最小项）。（几何意义）
+ 数列的极限与前有限项无关
+ 数列极限存在的充分必要条件是奇数列极限和偶数列极限都**存在**且**相等**

### 函数极限

+ ![image-20220715214652889](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220715214652889.png)

  + 该定义需要注意的有，该去心邻域一定是**处处有定义**的
    + 如何理解处处有定义？
    + 即使是在很小的一个邻域内，该区间上的每个值也一定可以取到。反例是就有可能出现即使区域很小，但是在该区域内也会间断性的出现使得分母为0的点，这些点是没有定义的。
    + $sin(xsin(1/x))\over xsin(1/x)$,不存在处处有定义的去心邻域
  + **去心邻域**，$x!=x_0$，跟这一点有没有定义，该点的值为多少**没有关系**。
  + 我有一个问题 如果不是去心邻域呢？

+ 极限存在的充分必要条件是左右极限存在且相等

  + 求极限时需要分情况求左右极限

    + 分段函数

    + $e^{\infin}$  （间断点类型、渐近线、反常积分用定义判断敛散性）

      ![image-20220715220222148](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220715220222148.png)

    + $arctan{\infin}$

      ![image-20220715220418479](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220715220418479.png)

## 极限性质

### 局部有界限



+ ![image-20220715220757694](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220715220757694.png)

+ 这是通过极限的定义得出来的（都小于$\epsilon$），再结合有界性的定义
+ 这只是一个充分不必要条件
+ 反例就是$sin(1/x)$

### 保号性

+ 极限值大于0，在该去心邻域内函数值大于0

  + 需要注意的是这里没有**等号**
  + 反例$x$

+ 在去心邻域内，函数值大于等于0，那么极限值大于等于0

  + 这里要注意**一定有等号**
  + 反例$x^2$
  + 函数值大于0，一定有极限值大于等于0。

+ 使用情况

  + 判断函数或极限的正负

+ 保序性

  + ![image-20220715224246967](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220715224246967.png)

  + 由保号性推出来
  + 当A大于等于B时，推不出函数值大于等于。（B移过去）

## 极限存在准则

### 夹逼

+ n项和

### 单调有界准则

单调有界数列必有极限；单调增，有上界，有极限；单调减，有下界，有极限。

+ 递推关系定义的数列极限

## 无穷小

### 无穷小的比较

+ ![image-20220715224908925](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220715224908925.png)

## 无穷大

### 常见的一些无穷大的比较

+ ![image-20220715225345485](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220715225345485.png)

+ ![image-20220715225500349](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220715225500349.png)

+ 看函数形式就行，不用考虑数的大小

### 无穷大量与无界变量的关系

+ ![image-20220715230124135](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220715230124135.png)

+ 无穷大量一定是无界变量，但无界变量不一定是无穷大量
+ 因为无穷大需要满足**之后的每一项**都比该值大；
+ 一个是有很大，一个是都很大
+ 无穷大*无穷大=无穷大；无界\*无界!=无界

## 常见题型方法与技巧

### 极限的概念性质及存在准则（概念）

### 求极限

### 确定极限式中的参数

### 无穷小量阶的比较