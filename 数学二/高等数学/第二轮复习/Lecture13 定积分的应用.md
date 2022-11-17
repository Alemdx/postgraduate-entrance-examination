# 定积分的应用

[TOC]

本质上都是微元

## 定积分在几何上的应用

### 平面的面积（***）

+ 一重积分采取的思想是微元法

+ 二重积分的思想：1在区域面积上的二重积分

![image-20221003215522835](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003215522835.png)

![image-20221003215516577](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003215516577.png)

![image-20221003215535840](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003215535840.png)

![image-20221003215547266](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003215547266.png)

注意用极坐标要乘r。

### 旋转体的体积（***）

+ 取一个小圆点。得出的类似于呼啦圈的体积=周长*面积。
  + 使用这个办法的时候要注意千万是在二重积分上面。**面积千万不要用一重积分来求。**


![image-20221003215920576](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003215920576.png)

![image-20221003220042653](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003220042653.png)

![image-20221003220406405](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003220406405.png)

### 截面体体积

![image-20221003220521808](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003220521808.png)

### 弧长

![image-20221003220653622](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003220653622.png)

![image-20221003220759583](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003220759583.png)

### 旋转体的侧面积（这里要注意下）

还是微元法的思想。取一小段弧。注意是对弧微元而不是对x微元。因为x的精度差太多了。

面积=**周长***ds

![image-20221003220831291](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221003220831291.png)

如果是极坐标或者参数方程的形式，只要按照上面的弧长公式换掉就行了

## 定积分在物理上的应用

### 压力

### 变力做功

### 引力问题（基本不考）

## 写在后面

+ 带有绝对值的做好区间划分就行了。**注意这里有一个易错点。**看讲义P130划线。**需要把之前分段的给加上。**
  + 形如$f(X)=积分函数$,对于被积函数是绝对值是，我们需要根据上限x来去绝对值。当下限为负数，且上限是大于0的情况时，要注意加上负的部分。

## 方法总结

+ 遇到参数方程和极坐标方程不要慌，**首先写成直角坐标的形式**。**然后进行变量代换**。记得变换上下限（这里要考虑单调性）。一般都是用一重积分的形式，如果**体积**很难求，就采用武老师那种二重积分的形式（注意周长*一重积分求出来的显然不对）本质上一次积分就是增加一维，而周长就是一维。

+ 对于周长和侧面积，就涉及到弧长。要采用特定的公式。侧面积其实就是2hpi*ds。的积分（周长的弧积分）
+ 关于极坐标的处理。先写成xcos，ysin。化成极坐标的形式，定出角度的范围（绝对值，根号），然后结合xy和角度画出图形。

