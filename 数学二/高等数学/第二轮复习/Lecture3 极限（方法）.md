# Lecture3 极限（方法）

[TOC]

## 利用有理运算求极限

+ **极限都存在的情况下**，和差积商的极限等于极限的和差积商。
+ ![image-20220718225956147](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718225956147.png)
  +  这里有两个要求。必须要满足是非0。必须要满足是因子，即是相乘的形式
     +  $e^xcosx-1 \over x^2$
+ ![image-20220718230150689](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230150689.png)
  + 第二点，不然的话就是无穷了，极限就不存在，所以必定为0。
+ ![image-20220718230314650](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230314650.png)
  + 存在+不存在=**一定不存在**
  + 不存在+不存在=**不一定存在**
    + 存在=存在+存在 是必要不充分条件
    + 故，**极限存在的时候，有两种可能。要么都存在，要么都不存在。**
+ 极限有理法则一般运用在极限已知，求极限中的参数。
  + 解法一般是把该极限拆分成几个极限相加（存在+存在=存在），一般是前面有一个极限存在。


## 利用基本极限求极限

+ $(1+x)^\alpha-1 $~$\alpha x$   这里注意与下面一个公式区分开来。$\alpha$ 是常数

+ ![image-20220718230554786](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230554786.png)

+ ![image-20220718230626843](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230626843.png)
  + $n \rightarrow \infin$一般都默认为是趋向正无穷，即负无穷不考虑。

+ 注意这里有一个经典的错误：
  + $lim_{n->\infin} n^n/(n+1)^n=1/e$
  + 重做基础篇P18 例19
  + 需要注意等价无穷小的代换。是相同形式的代换。例如基础篇P22 例25。我就直接把后面括号里面的直接用公式给代换了。（x-ln(1+x)）

## 利用等价无穷小求极限

+ ![image-20220718230807548](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230807548.png)
  + 尤其是$x-ln(1+x)等价于x^2/2$

+ ![image-20220718230946216](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230946216.png)

+ ![image-20220718231002677](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718231002677.png)
  + **有了这个，我们就求极限的时候不一定要用洛必达了**（在趋向于0时）。可**以将不好积分的式子换成好积分的式子**。例如$ln(1+t)和t 、(1+t)^{1/t} 和e$在[0,x]上的积分。

+ 等价无穷小的加减关系在**一定条件下**可以换
  + 相减的话，其比极限不为1
  + 相加，其比极限不为-1

## 利用洛必达法则求极限

+ **$f(x)$n阶可导，最多只能用（n-1）阶导数**。？？那我到底怎么判断该不该用洛必达呢。基础篇P25 例33
  + 答：本质在于n阶可导最多推出n-1阶导数连续，因为连续，所以函数值等于极限值。二阶导数值存在，并**不意味着在该点二阶函数的极限值等于该二阶导数的值**，因为可导推不出连续。极限值不一定等于函数值。
+ **$f(x)$n阶连续导数，最多可用n阶导数。**
+ n阶可导，不能推出n阶导数连续，也不能推出n阶导数极限存在。（必须得连续）

+ 注意要满足分母（$g'(x)!=0$）
  + 这里就是指分母的值不为0，而不是分母的极限不为0.

+ 只有用完只有才知道对不对。洛必达是由右端存在推左端存在。（这句话怎么理解？）

## 利用泰勒公式求极限

![image-20220721220350041](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220721220350041.png)

![image-20220721214434121](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220721214434121.png)

+ 注意1、2、3、5式子都是**阶乘**,不要把阶乘漏了。
+ 带皮亚诺余项的泰勒就可以了
+ 关于到底要展开到哪一项才足够？
  + 上下同幂
  + 保证同一层的$O(x^n)$相同可消
    + 和最后一项同阶
+ **复合的泰勒公式**

## 利用定积分的定义求极限

+ 提出可爱因子

+ 区间就是自变量x变化的范围
  + [0,1],对应的一般是$k/n$的形式


## 利用夹逼准则求极限

## 利用单调有界准则求极限

+ 单调性
+ 有界性

## 利用中值定理求极限

+ $f(b)-f(a)=f'(\xi)(b-a)$

  + 出现同一函数在两点差的情况

+ $\int_a^bf(x)dx=f(c)(b-a),a<c<b$

+ $\int_a^bf(x)g(x)dx=f(c) \int_a^bg(x)dx,a<=c<=b$  

  注意：对于第三个式子，需要保证$g(x)$在该区间域上是不变号的