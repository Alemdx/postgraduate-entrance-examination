# Lecture1

[TOC]

## 函数的概念及常见函数

### 复合函数

+ 只有当内函数的值域和外函数的定义域相交不为空时，才能复合。
+ ![image-20220710200121549](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220710200121549.png)
  + 图形重合是因为本质上还是同一个函数。关于y=x对称是因为不是同一个函数，但是相当于把坐标轴换了。

## 函数的性态

### 单调性

**注意这里是在区间上可导，如果是在邻域上可导呢？**

+ ![image-20220710200333237](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220710200333237.png)
  + 充分不必要的原因在于**也会存在某个点导函数等于0。**$x^3$
  + 所以单调增，我们得出的是$f(x)>=0$,单调不减我们得出的也是$f(x)>=0$

+ 单调性的运用
  + 根的个数
  + 不等式

### 奇偶性

+ 求某些特定类型函数的积分联想到奇偶性。
  + 奇函数在关于$y$轴对称的区间上，积分值为0.
  + 偶函数在关于$y$轴对称的区间上，积分值为单个区间的两倍.
+ 泰勒展开与奇偶性
  + 奇函数在零点的泰勒展开只有奇次项
  + 偶函数在零点的泰勒展开只有偶次项
  + **对于剩余的不确定的系数，我们可以从极限的角度去思考**
  + 辅导讲义P44习题
+ 导函数与奇偶性的关系。（求一次导，奇偶性发送变化）
  + 奇函数的导函数为偶函数
  + 偶函数的导函数为奇函数
+ 原函数与奇偶性的关系
  + 奇函数的原函数一定是偶函数。
  + 偶函数的原函数不一定是奇函数（只有唯一一个）。
  + **看到原函数我们要联想到不定积分的形式**
  + ![image-20220710202201328](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220710202201328.png)
    + 这里为什么偶函数的原函数就一定是奇函数了呢？
    + 原因在于下限是0。可以通过牛顿莱布尼茨公式来理解。原式等于$F(x)-F(0)$。故而对于奇函数而言，这里的0可以改成a，而对于偶函数而言，这里的0不能改成a。也可以对积分区间进行拆分。

### 周期性

+ 复合函数的周期问题（这么称可能不准确。。）
  + ![image-20220710202717849](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220710202717849.png)
+ 可导的周期函数其导函数还是周期函数
  + **那么其导函数的周期性和原函数的周期性是一样的吗？**

+ 但是周期函数的原函数却不一定是周期函数。
+ 那么什么情况下其函数才是周期函数呢？
  + **周期函数的原函数是周期函数的充要条件是该周期函数在一个周期上的积分为0。**（该定理由下面一点推出。通过变上限积分函数+定义来证明）
  + ![image-20220710203528179](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220710203528179.png)
  + 最开始我觉上面两点不是同一个意思吗？后来发现，第二点只是一个特殊情况，**他是原函数但只是其中的一个原函数。**第一点的范围更广了。
  + 其原函数是否为周期函数？$|sinx|,sin^5x,sin^2x$
+ 写到这里我们需要意识到，**一个复杂函数的导函数（高次），在某点的值，一般不会硬求，我们要联想到周期性和奇偶性来进行化简。**

### 有界性

![image-20220710210753397](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220710210753397.png)

+ 函数在闭区间上连续能推出在闭区间上有界。开区间上连续不能推出在开区间上有界。$1/x在（0，1）$
  + 这里需要注意，$1/x$在$[0,1]$上面是不连续的，所以在闭区间上也推不出有界。
+ 第三点说明了在何种情况下在开区间上连续也能推出有界。该结论也能运用到无穷区间上，即趋向于无穷的极限是存在的
+ 导函数在**有限区间**上有界，则原函数在有限区间上有界。**证明的方法是拉格朗日中值定理（连接函数与导函数的桥梁）**。构造出一个差的形式$f(x)=f(x)-f(x_0)+f(x_0)$。

## 易错点

+ 一点的导数大于0，只能推出该点右领域大于该点，左邻域小于该点（导数的定义+保号性证明）。推不出在该邻域内单调增（邻域之间两个值的大小没法比较）。**一定要与函数在区间导数大于0区分开来。**P7例三

## 一轮的整合与理解

+ 取整的基本不等式：不超过x的最大整数。$x-1<[x]<=x$,常用于夹逼

+ 单调函数一定有反函数（我存疑），有反函数的不定单调

+ 反函数和原函数的复合就是自变量。

+ 指数函数与对数函数，对a都有约束，为$a>0且a！=1$。幂函数的一点要求都没有的。

+ 反三角函数的图像（高中没学过）
  + 这里要注意，正余弦函数只有这么一段，因为x的定义域是固定的。


![image-20221114174020064](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221114174020064.png)

+ ![image-20220713213847941](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220713213847941.png)
+ ![image-20220713213904549](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220713213904549.png)
+ ![image-20220713213922916](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220713213922916.png)

+ 奇偶性经过加减乘之后的变化

+ 有界性问题：

  + 无界*无界=无界（false）

  + 无界*有界=无界（false    $ n \\ 1/n^2$）

  + 无界+无界=无界（false 01 0-1）

  + 无限个有界相加呢？

    