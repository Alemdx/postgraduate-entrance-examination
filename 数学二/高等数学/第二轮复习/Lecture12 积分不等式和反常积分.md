# 积分不等式

## 积分不等式常用的方法

### 定积分不等式的性质

1. 区间一样，被积函数谁大积分谁大
   1. 注意和常用的不等式联系起来。(x sinx tan x)(ln(1+x))

### 变量代换

### 积分中值定理

1. **把定积分不等式的证明转换为证明函数不等式**

   1. 这种题目在用的时候一般题目里面出现了**f单调**（函数）的条件。例如下面这道题目就是。
   2. 一般是把上限设为x，然后证明单调性 （很多题目都可以使用这种办法）

   ![image-20220930211813223](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220930211813223.png)

### 变上限积分

### 柯西积分不等式

1. 乘积积分的平方不超过平方积分的乘积![image-20220930154324685](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220930154324685.png)

**积分里面出现平方的形式**

### 写在后面

函数与导数之间联系起来。想到用积分或者微分的办法。

+ $f(x)=\int_a^x{f'(t)dt}$
+ 微分中值定理
+ 分部积分

积分不方便求的，想到用常用的不等式进行放缩。

# 反常积分（多加练习，很不熟练）

## 无穷区间上的反常积分

### 定义

+  **用变上限定积分取极限来判定，极限值存在则收敛**

![image-20220930221400249](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220930221400249.png)

+ **用变下限定积分取极限来判定，极限值存在则收敛**

![image-20220930221515330](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220930221515330.png)

+ 拆成1+2的形式。**需要满足两个都收敛**
  + **不存在发散+发散=收敛的情况**（就是这样的定义的）

![image-20220930221619651](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220930221619651.png)

使用定义判定只适合原函数好找的情况下，那么使用以下情况：

### 比较判别法

大的收敛，小的就一定收敛（**这里要注意区间**）

小的发散则大的就一定发散

![image-20220930221911808](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220930221911808.png)

**局限性在于一开始不知道是发散还是收敛，就没办法判断是放大还是缩小**

### 比较判别法的极限形式

![image-20220930222359198](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20220930222359198.png)

**往往把需要判断敛散性的函数和P积分进行比较**

## 无界区间上的反常积分 

### 定义

用变上限积分取极限来定义。极限存在就收敛，极限不存在就不收敛。

![image-20221001093519471](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221001093519471.png)

![image-20221001093633041](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221001093633041.png)

注意一个是趋向于左侧，一个是趋向于右侧

![image-20221001093744067](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221001093744067.png)

需要满足都收敛

### 比较判别法

同上。大的收敛小的收敛，小的发散大的发散。

### 比较判别法的极限形式

![image-20221001094050293](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math3/image-20221001094050293.png)

注意这里的P积分和上面的刚好是反过来的。特别注意1这点的取值（无论是哪种情况，等于1的点都是发散的）。

## 反常积分的概念与敛散性

注意：

+ **定积分函数的奇偶性不能在这里使用，使用的前提条件是已知函数收敛**
+ 做好区间拆分
+ 找出无界点很重要
  + 分母为0，ln为0

###  步骤

+ 先判断原函数好不好找。好找的话就用定义来做

+ 否则就用比较判别法。有些函数直接属于P积分的形式，则直接套用公式。

+ 当该函数不是P积分的形式的时候，找出**趋向于某个点时**的等价函数。将等价函数转换成P积分的形式，更具P积分来判断敛散性。

## 反常积分的计算

不一定需要写成极限的形式，直接把无穷点带进去算就行了。

考来考去就两个方法。**换元和分部。**

+ 分部不要犯傻，不要只知道把x拉出来，要灵活点！
+ 不同的分部会导致难易程度不同

## 写在后面

### 法一

**本质上都是找某个函数的等价函数。而这个等价函数是P函数。可以理解为当趋向于某个值的时候，这两个之比为常数。**（注意一定要写成分式的形式）

具体步骤，直接求积分符号里面的等价函数，取导数找出P。

#### 法二

求出原函数。

#### 法三

比较判别的形式。都是fx /gx。lambda=0时，gx收敛，fx收敛。lambda>0时，gx发散，fx发散

#### 注意

这里有一个很容易错的点$ln^{-\alpha}={1 \over {ln^\alpha}}$需要特别注意$\alpha$的正负决定了是0还是无穷。

# 问题

不定积分求三角的时候到底是设sin还是asin?(看前面的系数)