更小的时钟周期就意味着更高的工作频率

一个时钟周期就相当于一个时间片，周期越短，速率越高**。但是速率越高并不意味着程序执行的速度更快（因为有可能在一个时间片内无法完成）**

![image-20220115004914374](/home/jackson/snap/typora/46/.config/Typora/typora-user-images/image-20220115004914374.png)



1. 参数注解:f是周期个数，t是时钟周期时间。
2. CPI:平均每条指令所需要的时钟周期的**数量**。
3. CPIi就是每一个具体指令的。
4. 在一个计算机，如果知道CPI,还知道Ic(指令个数),周期时间个数
5. 根据f可以得到t，而p是这个操作需要的数字。传输k次数据，每次需要m条指令。
6. 单条指令时间:CPIi*t。
7. 指令条数Ic
8. 题目中是**指令周期时间**。
9. **T是指一条指令实际执行所需要的时间**
