# Lecture3 极限（方法）

[TOC]

## 利用有理运算求极限

+ **极限都存在的情况下**，和差积商的极限等于极限的和差积商。
+ ![image-20220718225956147](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718225956147.png)
  +  这里有两个要求。必须要满足是非0。必须要满足是因子，即是相乘的形式
+ ![image-20220718230150689](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230150689.png)
  + 第二点，不然的话就是无穷了，极限就不存在，所以必定为0。
+ ![image-20220718230314650](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230314650.png)
  + 存在+不存在=**一定不存在**
  + 不存在+不存在=**不一定存在**
    + 存在=存在+存在 是必要不充分条件
    + 故，**极限存在的时候，有两种可能。要么都存在，要么都不存在。**

## 利用基本极限求极限

+ ![image-20220718230554786](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230554786.png)

+ ![image-20220718230626843](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230626843.png)
  + $n \rightarrow \infin$一般都默认为是趋向正无穷，即负无穷不考虑。

## 利用等价无穷小求极限

+ ![image-20220718230807548](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230807548.png)
  + 尤其是$x-ln(1+x)等价于x^2/2$

+ ![image-20220718230946216](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718230946216.png)

+ ![image-20220718231002677](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220718231002677.png)
  + 有了这个，我们就求极限的时候不一定要用洛必达了（在趋向于0时）。可以将不好积分的式子换成好积分的式子。例如$ln(1+t)和t 、(1+t)^{1/t} 和e$在[0,x]上的积分。

+ 等价无穷小的加减关系在**一定条件下**可以换
  + 相减的话，其比极限不为1
  + 相加，其比极限不为-1

## 利用洛必达法则求极限

+ 只有用完只有才知道对不对。洛必达是由右端存在推左端存在。

## 利用定积分的定义求极限

+ 区间就是自变量x变化的范围

## 利用单调有界准则求极限



## 利用中值定理求极限

+ $f(b)-f(a)=f'(\xi)(b-a)$

  + 出现同一函数在两点差的情况

+ $\int_a^bf(x)dx=f(c)(b-a),a<c<b$

+ $\int_a^bf(x)g(x)dx=f(c) \int_a^bg(x)dx,a<=c<=b$  

  注意：对于第三个式子，需要保证$g(x)$在该区间域上是不变号的