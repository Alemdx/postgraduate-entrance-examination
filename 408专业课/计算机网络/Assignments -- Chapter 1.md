**Assignments -- Chapter 1**

1. The performance of a client-server system is influenced by two network factors: the bandwidth of the network (how many bits/sec it can transport) and the latency (how many seconds it takes for the first bit to get from the client to the server). Give an example of a network that exhibits high bandwidth and high latency. Then give an example of one with low bandwidth and low latency. 



2. What are two reasons for using layered protocols?

+ 灵活性好，结构上可以割开
+ 易于实现和维护，能促进标准化工作

3. What is the principal difference between connectionless communication and connection-oriented communication?

+ 后者一直保持链接，直到数据完成传输，按顺序发送，有检错和恢复机制
+ 前者适用于单向传输，不保证传递有序

4. In some networks, the data link layer handles transmission errors by requesting damaged frames to be retransmitted. If the probability of a frame's being damaged is *p*, what is the mean number of transmissions required to send a frame? Assume that acknowledgements are never lost.

   $1/(1-p)$



5. Which of the OSI layers and TCP/IP layers handles each of the following:

(a) Dividing the transmitted bit stream into frames.

(b) Determining which route through the subnet to use.

OSI：网络层、数据链路层

TCP/IP：网络接口层、网际层IP

6. If the unit exchanged at the data link level is called a frame and the unit exchanged at the network level is called a packet, do frames encapsulate packets or do packets encapsulate frames? Explain your answer.

​		frames encapsulate packets。主机A向主机B传送数据，是自顶向下逐个封装，再字底向上逐个解析

7. What is the main difference between TCP and UDP?

参考第三点

8. An image is 1024 x 768 pixels with 3 bytes/pixel. Assume the image is uncompressed. How long does it take to transmit it over a 56-kbps modem channel? Over a 1-Mbps cable modem? Over a 10-Mbps Ethernet? Over 100-Mbps Ethernet?

   1024\*768/(56\*1024)

   1024\*768/(1024\*1024)

   1024\*768/(10*1024\*1024)

   1024\*768/(100*1024\*1024)



9. Try to compare circuit switching and packet switching under the following conditions. The message to be transmitted is *x* (bit) in total. It passes through *K* links from the source station to the destination station. The propagation delay of each link is *d* seconds and the data rate is *b* (bit / s). When the switching circuit is established in *s* seconds. In packet switching, the packet length is *p* (bit), and the queuing waiting time of each node can be ignored. The question is: under what conditions is the delay of packet switching smaller than that of circuit switching?





10. In the packet switching network of the above question, let the message and packet length be *x* and *(p + h)* (bit) respectively, where *p* is the length of the data part of the packet, and *h* is the fixed length of the control information carried by each packet, which is independent of the size of *p*. Both ends of the communication pass through *k* links. The data rate of the link is *b* (bit / s), but the propagation delay and node queuing delay can be ignored. If the total delay is to be minimized, what should be the data part length *p* of the packet?