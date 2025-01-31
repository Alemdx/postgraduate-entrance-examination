# 矩阵的概念及运算

## 矩阵的运算

### 数乘

![image-20220618162720938](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618162720938.png)

这里每一个元素都要乘，而行列式只是乘某一行或某一列

![image-20220618165058985](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618165058985.png)

### 乘法

![image-20220618163034344](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618163034344.png)

+ 矩阵乘法没有交换律
+ AB=0时，推不出A等于0或B等于0
+ 矩阵没有消去率（AB=AC推不出B=C）

### 单位矩阵

任何矩阵乘单位矩阵等于本身（次序在哪都一样）

### 对角矩阵

+ 对角对应的元素相乘就行了（两个都是对角）

+ 两个对角矩阵相乘可以交换次序
+ 注意对角的符号是什么

![image-20220618163710084](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618163710084.png)

### 转置

![image-20220618164250143](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618164250143.png)

### 矩阵多项式

![image-20220618164908448](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618164908448.png)

### 加法

+ 交换律
+ 结合律

### 乘法

+ **结合律**
+ **分配率**

![image-20220618165306214](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618165306214.png)

+ **特别注意，乘法不能交换次序**
+ $A^2B^2!=(AB)^2$

### 转置

![image-20220618165409960](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618165409960.png)

### 常见的矩阵

+ 单位阵
+ 数量阵kE
+ 对角阵
+ 上（下）三角阵
+ 对称阵$A^T=A $
+ 反对称阵$A^T=A \ a_{ij}=-a_{ji}$

### 伴随矩阵

![image-20220618172119723](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618172119723.png)

**这里我们需要注意，是按列填充的**

**伴随矩阵这边并不需要乘上系数！，一定要与行列式相区分**

![image-20220618172648042](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618172648042.png)

这些公式要牢记 ！

+ 对于**二阶伴随矩阵**， **主兑换，副变号**
+ 注意第二个公式

### 可逆矩阵
+ 特别注意矩阵可逆的证明！

![image-20220618193107351](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618193107351.png)

![image-20220618193242298](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618193242298.png)

![image-20220618193446822](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618193446822.png)

![image-20220618194200231](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618194200231.png)

![image-20220618194347696](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618194347696.png)

+ 求矩阵的值的时候灵活利用：
  + **乘逆阵**
  + **写成两个式子相乘=E的形式**（因式分解）
+ 学会使用单位矩阵恒等变型（*E）
+ AB=E可逆的前提是A、B都是n阶矩阵

## 初等变换、初等矩阵

### 初等变换的概念

+ 倍乘、互换、倍加行（列）变换

### 初等矩阵(重要！)

+ **单位矩阵**经过**一次**初等变换所得到的矩阵称为初等矩阵 660T362

![image-20220618214303709](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618214303709.png)

+ 对第2点有质疑，逆矩阵的转置还是本身？(他只说是初等矩阵，没说相等啊。。。)

  + **倍加是倍数改成相反数**

    ![image-20220619164634925](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220619164634925.png)

  + 位置互换是本身![image-20220619164746043](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220619164746043.png)

  + 某行乘k是1/k![image-20220619164843285](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220619164843285.png)

+ **特别注意第三点（左边是行变换，右边是列变换）**

+ ![image-20220619165812543](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220619165812543.png)

+ ![image-20220619170441839](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220619170441839.png)



### 行阶梯矩阵

![image-20220618214712571](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618214712571.png)

![image-20220618214721355](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618214721355.png)

+ **视频中说主元下面是0？**（√）
+ 作用之一：高斯消元中使用，用于方程组的解

### 行最简矩阵

![image-20220618215058154](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220618215058154.png)

### 矩阵等价

#### 两个充要条件（满足其中一个就行）

+ A经过有限次初等变换变成B

+ **A、B等价 的充要条件是 r(A)=r(B)**

![image-20220624105013137](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624105013137.png)

![image-20220624142321868](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624142321868.png)

![image-20220624142253621](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624142253621.png)

## 增广矩阵、抽象行列式的计算

### 分块矩阵

![image-20220624143801395](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624143801395.png)

![image-20220624143809498](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624143809498.png)

![image-20220624143817980](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624143817980.png)

### 分块矩阵的运算

#### 加法

![image-20220624143950907](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624143950907.png)

#### 乘法

![image-20220624144828509](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624144828509.png)

#### 转置

![image-20220624144843782](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624144843782.png)

#### 次方

![image-20220624144912503](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624144912503.png)

#### 逆矩阵

![image-20220624144920120](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624144920120.png)

**当我们看到乘法、次方、逆的时候要想到分块矩阵**

### 向量的线性表出

![image-20220624145716827](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624145716827.png)

+ 这次C的向量又可以由B的向量线性表出

  ![image-20220624145956418](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624145956418.png)

**由向量的线性表出要联想到等价**

+ 需要分类讨论

![image-20220624150427088](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624150427088.png)

### 方阵的行列式

![image-20220624151636722](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624151636722.png)

![image-20220624151804142](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624151804142.png)

#### 行列式里面是加减法该如何处理呢?

+ 公式代换

![image-20220624152317306](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220624152317306.png)

## 矩阵的秩

### 定义

+ 存在r阶不为0
+ 任意r+1阶都为0

![image-20220625174510924](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625174511219.png)

### notes

+ 任何一个矩阵的秩不超过行数或列数的最小值。
+ 向量是特殊的矩阵（行或者列为1），所以它的秩小于等于1。具体来说，如果该向量为0，那么秩就是0，否则秩为1。
+ **A可逆与A满秩与A的行列式不等于0等价**。A不可逆与A降秩等价。![image-20220625181135664](/home/jackson/snap/typora/57/.config/Typora/typora-user-images/image-20220625181135664.png)

### 如何求秩

本质在于判断一个方程组中有几个式子是有效的（r）

+ 对方程组进行阶梯化![image-20220625181611085](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625181611085.png)

![image-20220625181923830](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625181923830.png)

### 秩的性质

+ 性质一：秩的相等![image-20220625182319518](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625182319518.png)

+ 性质二：矩阵的相加![image-20220625182440902](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625182440902.png)
  + ![image-20220625182853639](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625182853639.png)

+ 性质三：**矩阵的扩充**![image-20220625183153007](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625183153007.png)

  + ![image-20220625183807239](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625183807239.png)

  + ![image-20220625184012470](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625184012470.png)

  + 矩阵在左边可以“踢出去”![image-20220625184219403](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625184219403.png)

+ 性质四：矩阵的相乘

  ![image-20220625185133581](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625185133581.png)

+ **性质五：相乘为0**

  ![image-20220625185416105](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625185416105.png)

  + ![image-20220625185656199](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625185656199.png)

  + ![image-20220625190217083](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625190217083.png)

+ 性质六：一个矩阵，如果左边右边乘的是**可逆的矩阵**，那么矩阵的秩是不变的。**与性质四的区别在于可逆。**![image-20220625190414885](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625190414885.png)

+ **性质七：伴随矩阵的秩**

  ![image-20220625191131306](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220625191131306.png)

## 思考与总结

+ 对角矩阵的性质
+ $AB=O $转化为$AX=O$
+ A矩阵进行初等变换操作时，要条件反射的写出初等矩阵
+ 矩阵与伴随矩阵之间的桥梁是逆矩阵

#### 注意：

+ 得不出X=Y

  ![image-20220627195713302](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220627195713302.png)

+ 不存在交换律

  ![image-20220627195840580](https://raw.githubusercontent.com/Alemdx/pic-bed/master/linear/image-20220627195840580.png)

+ 矩阵左乘x，矩阵在左边
