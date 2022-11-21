[TOC]

# 积分学

## 不定积分

### 两个基本概念

**原函数有需要+C**

F（x）只是一个原函数

### 原函数的存在性

+ 连续函数一定有原函数
  + 如果是连续，那么f(x)的变上限积分就是可导函数，并且变上限积分的导数就是f(x)
+ **如果函数在区间上有第一类间断点，那么该函数在该区间上就一定没有原函数**
  + **但是有第二类间断点的函数也有可能有原函数**
+ **所以连续一定有原函数，但是有原函数不一定连续**
+ 原函数一定是连续的。因为根据定义来，**可导一定连续**。$F'(x)=f(x)$。但是$f(x)$就不一定连续了。

#### 问题

我们可以看到，如果存在有限个第一类间断点，其变上限积分是存在的。那这是什么原因呢？

原函数并不能和变上限积分等同。变上限积分是一个原函数。**变上限积分描述的是面积。而原函数是通过导数定义的。（函数的导数）**

#### 总结

+ 有第一类间断点，变上限积分存在，原函数不存在。
  + 本质上在于原函数要满足处处可导。（每个点）。而有些点是不可导的。变限积分存在是因为变限积分本质上是面积，他是极限定义的形式，所以即使是在不可导的点，变限积分依然有极限的形式。

### 不定积分的性质

![image-20220924142643741](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220924142643741.png)

### 基本积分形式

![image-20220924142925196](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220924142925196.png)

### 三种主要积分法（核心）

连续求导的两大方法，加减就是分项积分，乘除就是分部积分，复合对应的就是换元。

![image-20220924143819132](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220924143819132.png)

+ 出现根号，三角代换
+ **注意啊，变量代换之后还要回带。**

![image-20220924143928298](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220924143928298.png)

+ 指数和三角的形式，一次凑不出来，要凑两次及以上。

#### 有以下积分是积不出的。

$e^{x^2}, {sinx \over x},{cosx \over x}$

 这三种形式在二重积分那边会经常出现，使用的办法是**交换积分的次序**。

### 三类常见可积函数的积分（核心）

![image-20220924144603774](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220924144603774.png)

+ 有理函数就是多项式通过加减乘除等到的函数。
+ 并不是所有的有理函数都能积分
+ **常用的方法就是加项减项拆。**



![image-20220924144650270](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220924144650270.png)

+ 万能代换建立起了三角和有理之间的桥梁。（不到万不得已是不用这种方法的）
  + 三角有理式里面方幂比较低适合万能代换。一般都是一次的。
  + 注意2/1+t^2不要漏掉。

![image-20220924144743403](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220924144743403.png)

+ 根号里面是两个一次式的比

![image-20221002102837303](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221002102837303.png)

+ 这里也提供了一种方法。根据奇偶性来判断如何凑微分。有时候比较难以对积分式子进行拼凑，不妨先斩后奏。**即先凑出d，再改前面的。**

**做不定积分，求导检查对错。**

### 大题目常用到分部积分（***）

## 定积分（重点）

### 定积分的概念

是一个和式的极限

+ 分
+ 匀
+ 和
+ 精

![image-20220929154240076](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220929154240076.png)

### 定积分的几何意义

从面积的角度去考虑。

### 可积性

+  函数可积->在区间上有界
   +  反证法，逆否命题，无界 ⇒ 不可积；

   +  **对于无界函数的反常积分呢？**
      +  不要主观想象在，这种例子其实是不存在的（比如说自己之前一直以为在（-1，1）上$x^-2$是可积的，其实不是）
   
+  有界不能推出可积
  + ​	狄利克雷函数

+  无界函数的积分一定是不存在的
+  有界是可积的**必要条件而非充分条件**（关注）
+  函数连续一定能推出可积。但是可积不能推出函数连续。

![image-20220929154856259](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220929154856259.png)

第三个用起来更方便

### 定积分的计算（*）

![image-20220929155014368](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220929155014368.png)

注意：

+ 换元需要变上下限
+ 奇偶性可以通过面积来考虑
+ 公式五还有拓展的形式。
+ 公式5里面，n是大于1的奇数。
+ 设计sin，cos的都可以尝试用图形来解决。

### 变上限积分（*）

![image-20220929155725718](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220929155725718.png)

+ 一般方法就是拆项和换元。其余的花里胡哨可以不记

### 定积分性质

#### 不等式

![image-20220929160330709](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220929160330709.png)

积分是和氏极限，本质上是不等式和的绝对值小于和的绝对值

#### 积分中值定理

![image-20220929161333027](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220929161333027.png)

![image-20220929160734630](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220929160734630.png)

留在里面的不变号

+ 使用积分中值定理的时候需要注意kesi是不是变化的
  + 本质上是看被积函数是不是会发生变化。



## 问题

### 关于周期性的讨论

三角函数尤其是复合形式，**要善于用图形判断周期性。**

求导不会改变周期性。

**周期函数的原函数不一定是周期函数。**（如何理解？）

次方会改变周期性

  