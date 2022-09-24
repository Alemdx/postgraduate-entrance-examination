# 微分中值定理有关的证明题

## 写在前面

+ 如果连一阶导数都没有，往往就是零点定理。
+ 再看是不是两个中值点。



## 类型一

![image-20220923160329471](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220923160329471.png)

### 注：

需要注意的是**一定要出现一阶导数**。不然的话就不是微分中值定理的证明题，而是连续函数零点定理的证明题。其余的可以出现也可以不出现

### 方法

构造辅助函数用罗尔定理

#### 分析法

![image-20220923160747243](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220923160747243.png)

+ 找辅助函数是找一个不是找所有
+ 要是出现二阶导数，那么原函数里面就至少有一阶。可以根据此来构建
+ 在构造原函数的时候，可以在x的那项后面加减常数，这样的比较好验证。${f(b)-f(a) \over b-a}{(x-t})$

#### 微分方程法

好好使用。

![image-20220923160802557](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220923160802557.png)

第二个方法有点牛逼啊，基本上可以求出所有的辅助函数了吧。

### 难点

辅助函数的构造

### 归纳总结

![image-20220923193221305](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220923193221305.png)

![image-20220923193708199](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220923193708199.png)

+ 第四条是更一般的结论。最前面的两个也能写成这种形式。

+ 注意不要局限于f(x)的形式，这可以是一个复合函数也可以是导数，二阶导数等等
+ 一般第一问都是给第二问做准备的。
  + 有可能除下来的时候要用到第一问的条件。分母不为0这种。

## 类型二

![image-20220923202142624](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220923202142624.png)

也叫双中值定理。该形式要保证有后面两个一阶导数。其余的可以出现也可以不出现

### 方法

这种题目很有规律。

![image-20220923202344213](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220923202344213.png)

+ 在同一区间上用两次不同的中值定理根本没办法说清这两个点不同，所以联想到分区间

### 难点

+  是用拉格朗日还是柯西呢
  + 如果只是单独的一个导数，那就用拉格朗日。如果是导数+自变量的形式，那一般就是柯西。

+ 分点的选取
  + 根据第一问的提示
  + 用逆推法找出该点。
    + **不妨设改该点为c。用拉格朗日定理带进去。把C求出来。再正向做一遍。**

## 类型三

