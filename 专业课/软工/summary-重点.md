summary
---

[TOC]



# 软件工程基础和发展

## 名词解释

+ 软件工程
  + 应用系统的、规范的、可量化的方法来开发、运行和维护软件，即将工程应用到软件。
  + 对1)中各种方法的研究。

## 简答

五十年代到00年代的特点

1. 1950s：科学计算；以机器为中心进行编程；像生产硬件一样生产软件。
2. 1960s：业务应用(批量数据处理和事物计算)；软件不同于硬件；用软件工艺的方式生产软件。
3. 1970s：结构化方法；瀑布模型；强调规则和纪律。它们奠定了软件工程的基础，是后续年代软件工程发展的支撑。
4. 1980s：追求生产力最大化；现代结构化方法/面向对象编程广泛应用；重视过程的作用。
5. 1990s：企业为中心的大规模软件系统开发；追求快速开发、可变更性和用户价值；web应用出现
6. 2000s：大规模web应用；大量面向大众的web产品；追求快速开发、可变更性、用户价值和创新。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt2/5.png)

# 项目管理基础

## 如何管理团队

### 在实验中采取了哪些办法？有哪些经验

### 团队的结构有哪几种

1. 主程序员团队
2. 民主团队
3. 开放团队

### 团队建设

1. 建立团队章程
2. 持续成功
3. 和谐沟通
4. 不断总结
5. 避免团队杀手
   1. 防范式管理
   2. 官僚主义
   3. 地理分布：异地办公
   4. 时间分割：保证全天候有人在
   5. 产品质量的降低
   6. 虚假的最后期限
   7. 小圈子管理

## 质量保障的措施

**结合实验**能够说明

1. 需求开发：需求评审和需求度量；
2. 体系结构：体系结构评审和集成测试(持续集成)；
3. 详细设计：详细设计评审、设计度量和集成测试(持续集成)；
4. 构造阶段：代码评审、代码度量、测试(测试驱动和持续集成)；
5. 测试阶段：测试、测试度量。
6. 要及时的根据保障计划进行质量验证，质量验证的方法主要有评审、测试和质量度量三种。

## 配置管理有哪些活动

**实验**中是如何进行配置管理的？

1. 标识配置项:确定应该被保留的部分，并且给予他们确定标识，包含配置项的特征，包括生产者、基线建立时间、使用者等。
2. 版本管理：极其重要
3. 变更控制：变更请求表单，教材61页
4. 配置审计:验证配置项的完整性、正确性、一致性和可追踪性。
5. 状态报告:反映当前的配置状态。
6. 软件发布管理:将配置项发布到开发活动之外，例如发布给客户。

#### 示例：（2010）结合实验，说明⼀一个项⽬目的质量量保障包括哪些活动？

# 需求

+ 名词解释

  + 需求

+ 需求的三个层次

  + 给出一个实例，给出其他三个层次的例子

  + 对给定的需求示例，判断其层次
    + 例如课程实验/ATM/图书管理

+ 掌握需求的类型
  + 对给定的实例，给出不同类型的需求的例子
  + 对给定的需求示例例，判定其类型
    + 例如课程实验/ATM/图书管理…

## 什么是需求

1. 用户为了解决问题或达到某些目标所需要的条件或能力；
2. 系统或系统部件为了满足合同、标准、规范或其它正式文档所规定的要求而需要具备的条件或能力；
3. 对1或2中的一个条件或一种能力的一种文档化表述。

## 需求分层

1. 业务需求：
   1. 业务需求是高层次的解决方案和系统特性、系统开发的战略出发点、高层次的需求，描述为什么要开发系统。
   2. Eg.在系统使用3个月后，销售额度应该提高20%(期望，没有从软件角度进行描述，业务需求)
2. 用户需求：
   1. 执行具体任务的用户对系统所能完成任务的期望，描述了系统能帮用户做什么(直接用户、间接用户)
   2. Eg.在系统要帮助收银员完成销售处理
3. 系统级需求
   1. 需求分析模型：用户对**系统行为的期望**，每个系统级需求反映了**一次外界与系统的交互行为**，或者**系统的一个实现细节**(和用户需求有着很大的区别)
   2. Eg.在接到客户经理的请求后，系统应该为客户经理提供所有会员的个⼈信息。

## 需求分类
1. 需求
   1. 项目需求(人的数量、计划成本、时间)
      + R5：项⽬的成本要控制在60万元人民币以下。
      + R6：项⽬要在6个月内完成。
   2. 过程需求(人的分工、合作、方法、工具)
      + R7：在开发中，开发者要提交软件需求规格说明文档、设计描述文档和测试报告。
      + R8：项目要使用持续集成⽅法进行开发。
   3. 系统需求
      1. 软件需求
      2. 硬件需求
      3. 其他需求
   4. 其他需求
      + R9：系统要购买专用服务器，其规格不低于….。
      + R10：系统投⼊使⽤时，需要对⽤户进⾏1个星期的集中培训。
2. 不切实际的需求
   + R11：系统要分析会员的购买记录，预测该会员将来⼀周和⼀个月内、会购买的商品；(技术上不可行)
   + R12：系统要能够对每月的出入库以及销售行为进行标准的财务分析；(在有限的资源条件下可行)
   + R13：在使用系统时，收银员必须要在2个⼩时内完成一个销售处理的所有操作。(超出了软件所影响的问题域范围)

## 软件需求分类
1. 功能需求：和系统主要共作相关的需求，即在不考虑物理约束的情况下，用户希望系统所能够执行的活动，这些活动可以帮助用户完成任务。**功能需求主要表现为系统和环境之间的行为交互**。
   1. Eg.在接到客户经理的请求后，系统应该为客户经理提供所有会员的个人信息。
2. 数据需求(属于功能需求的一种,DR)：**功能需求**的补充：如果在功能需求部分明确定义了**相关的数据结构**，那么就不需要再行定义数据需求。数据需求是需要在数据库、⽂件或者其他介质中存储的数据描述，通常包括下列内容：
   + 各个功能使用的**数据信息**；
   + 使用频率；
   + 可访问性要求；
   + **数据实体及其关系**；
   + 完整性约束；
   + **数据保持**要求。
   + Eg.系统需要存储的数据实体及其关系为图6-14的内容。(数据实体及其关系)
   + Eg.系统需要存储1年内的销售记录和退货记录。(数据保持)
3. 性能需求：系统整体或系统组成部分应该拥有的性能特征，例如CPU使用率、内存使用率等。
   1. 速度：系统完成任务的时间(所有用户查询必须在10s内完成)
   2. 容量：系统能存储的数据量(系统因该能够存储至少100万个销售信息)
   3. 吞吐量：系统在连续的时间内完成的事务数量(解释器每分钟应该能够至少解析5000条没有错误的语句)
   4. 负载：系统可以承载的并发工作量(系统应该允许50个营业服务器同时从集中服务器上进行数据的上传或下载)
   5. 实时性：严格的实时要求(系统监测到异常时，监视器必须在0.5s内发出警报，和故障警报不一样，故障不是系统的正常功能)
4. 质量需求(QA)：系统为了满足**规定的及隐含**的所有要求而需要具备的要素称为质量
   1. 可靠性：在规格时间间隔内和规定条件下，系统或部件执行所要求能力的能力。(在进⾏数据的下载和上传中，如果网络故障，系统不能出现故障。能不能检测网络中断，并且进行恢复)
   1. 可用性：软件系统在投⼊使用时可操作和可访问的程度或能实现其指定系统功能的概率。(系统的可用性要达到98%)
   2. 安全性：软件组织对其程序和数据进⾏未授权访问的能力，未授权的访问可能是有意，也可能是无意的。(VIP顾客只能查看⾃⼰的个⼈信息和购买记录)
   3. 可维护性：软件系统或部件能修改以排除故障、改进性能或其他属性或适应变更了的环境的容易程度，包括可修改性(Modiﬁability)和可扩展性(Extensibility)。(如果系统要增加新的特价类型，要能够在2个人月内完成。)
   4. 可移植性：系统或部件能从⼀种硬件或软件环境转换⾄另外⼀种环境的特性。(集中服务器要能够在1人月内从Window 7操作系统更换到Solaris 10操作系统。)
   5. 易用性：与⽤户使用软件所花费的努力及其对使用的评价相关的特性。(使⽤系统1个月的收银员进⾏销售处理的效率要达到10件商品/分钟。)
   6. 往往会有形容词和副词
5. 对外接口：系统和环境中其他系统之间需要建立的接口，包括硬件接口、软件接口、数据库接口等等。
   1. 接口的用途
   2. 接口的输⼊输出
   3. 数据格式
   4. 命令格式
   5. 异常处理要求
   6. Eg.注册使用Google Maps API
6. 约束：进⾏系统构造时需要遵守的约束，例如**编程语言、硬件设施**等
   1. 系统开发及运行的环境(包括目标机器、操作系统、网络环境、编程语⾔、数据库管理系统等,Eg.系统使用Java语言进行开发)
   2. 问题域内的相关标准(包括法律法规、行业协定、企业规章等。)
   3. 商业规则:(用户在任务执⾏中的一些潜在规则也会限制开发⼈员设计和构建系统的选择范围)
   4. Eg. 已过保质期的食品不能销售
   5. Eg. 顾客可以使用美元付款
7. 注:需求的灵活性

# 需求分析方法

+ 为给定的描述 
  + **建⽴ ⽤例图**（很重要）
  + **建立 分析类图**
  + **建立 系统顺序图**
  + 建立 状态图

这里的图一定要和设计阶段的图相区别

## 数据流图 非重点
1. 图例:
   1. 外部实体(长方形)
   2. 过程(圆形)
   3. 数据流(实心箭头)
   4. 数据存储

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/41.png)

2. 上下文图、0层图和N层图
   1. 上下文图是DFD的最高层次的图，是系统功能的最高抽象。上下文将整个系统看做一个过程，这个过程实现系统的所有功能。
   2. 0层图通常被用作整个系统的功能概图。
   3. 1层图分析以确定下一级转换
   4. N层图不断降解

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/56.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/57.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/59.png)

3. 过程分解的平衡原则

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/60.png)

## 实体关系图 不重要
1. 图例：
   1. 传统实体:实体是需要在系统中收集和存储的现实世界事物的类别描述
   2. 属性:数据对象包含的一组作为对象的方面、质量、特征或描述符的属性
   3. 关系:传统实体之间的关系

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/37.png)

2. 建立步骤
   1. 对所有数据对象(实体)及其相互之间的"连接"建模
   2. 对所有实体和关系建模
   3. 对所有实体、关系和属性建模，以提供进一步的深度

## 用例图
1. 用例:用例是"在系统(或者子系统或者类)和外部对象的**交互**当中所执行的行为序列的描述,包括**各种不同的序列和错误的序列**,它们能够联合提供⼀种**有价值的服务**"[Rumbaugh2004]。
2. 图例:
   1. ⽤例:椭圆
   2. 参与者:小人，是系统或其他系统对要开发的系统所扮演的角色。
   3. 关系:简单的就是一条直线，包括相关、泛化关系、包含关系和继承关系。
   4. 系统边界:是一个框

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/8.png)

3. 用例图的建立步骤
   1. 目标分析与解决方向的确定:需要实现什么，属于需求
   2. 寻找参与者:
   3. 寻找用例:
   4. 细化用例:判断标准是用例描述了为应对**一个业务事件**，由**一个用户**发起，并在**一个连续时间段**内完成，可以**增加业务价值**的任务。
4. 注意:
   1. 不要将用例细化为没有独立业务价值的单个操作:例如,不要将用户管理细化为增加、修改和删除三个更⼩的用例,因为它们要联合起来才能体现出业务价值。 
   2. 不要将同⼀个业务目标细化为不同用例:例如**特价策略制定和赠送策略制定**。
   3. 不要将没有业务价值(而是技术实现需要)的内容作为用例:常见的错误有**登录**(应该描述为安全性质量需求)、"数据验证/输入/输出数据检查"(应该描述为数据需求或者业务规则)、"连接数据库"(属性软件内部实现⽽不是需求)、网络传输等。 
   4. 不要将单个步骤细化为用例
   5. 不要将片面的一个方面细化为用例

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/summary/1.png)

## 概念类图(分析类图)
1. 图例:
   1. 对象
      + 标识符:对象自治、对象请求写作
      + 状态:存储数据，如密码、名称
      + 行为:利用数据做什么
   2. 类:对象集合的抽象
   3. 链接(link)(dependency)
      + 对象之间的互相协作的关系
      + 描述了对象之间的物理或业务联系
   4. 关联
      + 对象之间链接的抽象
      + 聚合与组合，聚合集合可以为空
   5. 继承:泛化关系

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/18.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/19.png)

2. 建立步骤
   1. 对每个用例文本描述，尤其是场景描述，建⽴**局部**的概念类图
      + 根据用例的⽂本描述，**识别候选类**(名词分析法)
      + **筛选候选类**，确定概念类(状态和行为)
        + 状态和行为:概念类
        + 状态:其他概念类的行为
        + 行为:需求是否遗漏
        + 无状态无行为:完全剔除
      + **识别关联**
      + **识别重要属性**
   2. 将所有用例产⽣的局部概念类图进⾏合并，建⽴软件系统的整体概念类图
   3. 自己注:先画关联关系，再添加类的属性
3. 候选类识别(行为 + 状态)
   1. 行为分析
   2. 名词分析
   3. CRC

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/summary/2.png)

## 顺序图(交互图)
1. 图例：

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/26.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/27.png)

2. 系统顺序图图例:
   1. alt一定要选(多选一):**注意，每一种可选分支之间要用虚线分割，而且在表示执行态的圆柱上面要写监护条件，放在[]里面。**
   2. opt一定要选(选择0或者1)
   3. loop:表示循环，在旁边使用[]书写循环条件

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/28.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/29.png)

3. 步骤:
   1. 确定上下文环境
   2. 根据用例描述找到交互对象
   3. 按照用例描述中的流程顺序逐步添加消息s

## 状态图
1. 图例:
   1. 状态：一组可观察的情况，描述了一个系统在给定时间的行为
   2. 状态转换：从一个状态到另一个状态的转换
   3. 事件：使系统表现出某种可预测的行为形式的事件
   4. 行为：由于过渡而发生的过程

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt6/31.png)

2. 步骤:
   1. 确定上下文环境，明确状态主体和状态主题对应的上下文环境
   2. 识别状态：状态的主体表现出的一些稳定状态
   3. 建立状态转换：建立状态之间的转换。
   4. 补充详细信息，完善状态图

# 需求文档化与验证

+ 为什什么需要需求规格说明？结合实验进行说明
+ **对给定的需求示例，判定并修正其错误**
  + 对给定的需求规格说明⽚段，找出并修正其错误
+ **对给定的需求示例，设计功能测试用例**
  + 结合测试方法

## 为什么要建立需求规格说明?
1. 方便交流：软件开发过程中，**子任务与人员**之间存在错综复杂的关系，存在大量的沟通和交流，所以要编写软件开发中要编写不同类型的文档，每种文档都是针对项目中需要广泛交流的内容。因为**软件需求**需要进行**广泛交流**，所以要把需求文档化。
2. 跟踪和度量：需求规格说明是在**软件产品的角度以系统级需求列表的方式**描述软件系统解决方案，书写需求规格说明，可以建立管理控制的基线，方便任务分配，制定工作计划，进行跟踪和度量。
3. 过程管理：在实验中，需求规格的重要性不只体现在结果上，还包括中间过程，在书写需求规格过程中，才真正把问题域的问题和分析模型的成果转化为系统级需求，方便小组成员真正明确需求，个人认为在这个阶段包含一部分的需求在发现和完整化。

## 给定的用例，指出错误，并修正
1. 技术文档写作要点(简洁，精确，易读，易修改)；
   1. 简洁:动词名词+辅助词，不要使用复杂长句、形容词和副词。
   2. 精确:不能产生起义或无法理解。
   3. 易读(查询)：有效使⽤引言、目录、索引等能够增强⽂档易读性的⽅法，使⽤系统化的方式组织内容信息，提供⽂档内容的可读性。
   4. 易修改：使用相同的语句格式组织相关联或相似的信息；使用列表组织独立、并列的信息；使用编号表达繁杂信息之间的关系。引用而不是重复
2. 需求书写要点(使用用户术语，可验证，可行性)；
3. 需求规格说明文档书写要点(充分利用标准的文档模板，保持所以内容位置得当；保持文档内的需求集具有完备性和一致性；为需求划分优先级)

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt7/4.png)

```
1. "After the payment process is complete, the relevant information should be appended to a log ﬁle."模糊的
2. "The system should be constructed so that it will be easy to add new functionality in the future."(b)
模糊的
3. "The price of a gasoline purchase is computed as the price per gallon for the type of gas purchased, multiplied by the number of gallons purchased (use two decimal points for representing fractions of gallons)." 合格的
4. "The system should be available 24 hours a day, 7 days a week. 不现实的
```

## 对给定的需求示例，设计功能测试用例
1. 以需求为线索，开发测试用例套件，确定输入/输出，开发测试用例。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt7/6.png)

2. 制定测试用例

## 度量 不重要
1. 用例的数量
    + 平均每个用例中的场景数量
    + 平均用例行数
    + 在一个尺度下进行分析
2. 软件需求数量
3. ⾮功能需求数量
4. 功能点数量

### 功能点度量
1. 输入数量
2. 输出数量
3. 查询数量
4. 逻辑文件数量
5. 对外接口数量

# 软件设计基础

+ 名词解释
  + 软件设计
+ 软件设计的核心思想是什什么？
+ 软件工程设计有哪三个层次？各层的主要思想是什什么？

## 软件设计

1. 软件设计是指关于软件对象的设计，是一种设计活动。软件设计既指软件对象实现的规格说明，又指这个规格说明产生的过程。
2. 软件设计活动以需求开发的制品(需求规格说明和分析模型)为基础，构建软件设计方案描述和原型，为后期的构造活动提供规划或蓝图。
3. 软件设计兼具工程性和艺术性，由于软件系统的可变性，软件设计具有演化性，也因为软件设计的过程实际上就是一系列决策发生的过程，软件设计具有决策性。

## 软件设计的核心思想
1. 分解:横向上将系统分割为几个相对简单的子系统与子系统之间的关系
2. 抽象:在纵向上聚焦个子系统的接口(这里的接口与实现相对)，可以分离接口和实现，使得人们更好的关注软件系统本质，降低复杂度。

## 软件设计的核心层次
1. 高层设计：基于反映软件高层抽象的构件设计，描述系统的高层结构、关注点和设计决策。
   1. **部件**承载了系统主要的**计算与状态**
   2. **连接件**承载部件之间的**交互**
   3. 部件与连接件都是抽象的类型定义(就像类定义)，它们的实例(就像类的对象实例)组织构成软件系统的整体结构，**配置**将它们的实例连接起来
2. 中层设计：更加关注组成构件的模块的设计、导入/导出、过程之间调用关系或者类之间的协作，模块划分**隐藏**⼀些程序片段(数据结构+算法)的细节，暴露接口于外界
3. 低层设计：深入模块和类的内部，关注具体的数据结构、算法、类型、语句和控制结构等。

# 软件体系结构基础&软件体系结构设计与构建

+ 体系结构的概念
+ **体系结构的风格的优缺点**
+ **体系结构设计的过程？**
+ 包的原则
+ **体系结构构建之间接⼝口的定义（*）**
+ 体系结构开发集成测试⽤例
  + **Stub和Driver**

## 体系结构概念
1. 软件体系结构是由部件，连接件，配置组成的。
   1. **部件**是软件体系结构的基本组成单位之⼀,承载系统的主要功能,包括处理与数据;
      1. 原始部件
      2. 复合部件
   2. **连接件**是软件体系结构的另一个基本组成单位,定义了部件间的交互,是连接的抽象表示;
      1. 原始连接件
      2. 复合连接件:是由更细粒度的部件和连接件组成。
   3. **配置**是对"形式"的发展,定义了"部件"以及"连接件"之间的关联方式,将它们组织成系统的总体结构。 

## 体系结构风格的优缺点
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt9/12.png)

1. 主程序子程序风格
   1. 优点:
      1. 流程清晰，易于理解
      2. 强控制性
   2. 缺点:
      1. 程序调用是一种强耦合的连接方式，难以修改和复用。
      2. 程序调用的连接方式**限制了部件之间的数据交互**，可能会导致不必要的公共耦合。
   3. 适用：可以将系统功能依层次分解为**多个顺序执行步骤的系统**

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt9/20.png)

2. 面向对象风格
   1. 优点:
      1. 内部实现的可修改性(隐藏内部实现)
      2. 易开发、易理解、易复用的结构组织(契合模块化思想)
   2. 缺点:
      1. 接口的耦合性(由于方法调用机制，接口的耦合性无法消除)
      2. 标识的耦合性(一个对象要和其他对象交互，必须知道标识符)
      3. 副作用(难以理解、高耦合性以及数据的不一致视图)
   3. 适用：适用于那些能够**基于数据信息分解和组织的软件系统。**

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt9/21.png)

3. 分层风格
   1. 优点:
      1. 设计机制清晰，易于理解(抽象层次分离，隔离复杂度)
      2. 支持并行开发(层次之间遵守程序稳定的接口)
      3. 更好的可复用性与内部可修改性(接口的稳定性，不同层次的部件能够互相替代)
   2. 缺点：
      1. 交互协议难以修改(可能需要改变所有的层次，接口具有强耦合性)
      2. 性能损失(禁止跨层调用)
      3. 难以确定层次数量和粒度
   3. 应用：适用于主要功能是在不同抽象层次上进行任务分解的复杂处理，能建立稳定的不同抽象层次之间的稳定交互协议，没有很高的实时性能要求的系统

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt9/22.png)

4. MVC风格:
   1. 优点:
      1. 易开发性:抽象了业务逻辑，表现和控制机制清晰，易于开发
      2. 视图和控制的可修改性
      3. 适宜于网络系统开发的特征(MVC 不仅允许视图和控制的可修改性,⽽且其对业务逻辑、表现和控制的分离使得⼀个模型可以同时建⽴并保持**多个视图**,这⾮常适⽤于⽹络系统开发)
   2. 缺点:
      1. 复杂性：MVC将用户的任务分解成了表现、控制和模型三个部分，这会增加系统的复杂性，不利于理解任务实现。
      2. 模型修改困难，视图和控制都要依赖于模型

## 软件体系结构设计过程
1. 分析关键需求和项目约束：分析用例文档和需求规格说明书(包含需求规格和项目约束)。注意既要考虑功能性需求，又要考虑非功能性需求，甚至很大意义上体系结构设计是为了满足**非功能性需求**。
2. 通过选择体系结构风格：选择分层风格(信息系统、并行开发、非web应用)，进行评审。
3. 进⾏软件体系结构逻辑(抽象)设计：产生逻辑包图
4. 依赖逻辑设计进行软件体系结构(实现)设计：产生物理类图
5. 完善体系结构设计：关键类图，持久化数据格式的定义等
6. 添加构件接口：包、重要文件的创建，定义接口
7. 迭代过程3-6

## 包设计原则
1. 重用发布等价原则(REP):重用的粒度就是发布的粒度
   1. 为重用器分组组件(类)
   2. 单个类通常是不可重用的：几个协作类组成一个包
   3. 包中的类应构成可重用和可释放的模块：模块提供一致的功能
   4. 减少重新使用者的工作
   5. 和相关联的类一起发布，而不是单独进行发布
2. 共同封闭原则(CCP):包中所有类对于同一类性质的变化应该是共同封闭的，**一个变化若对一个包产生影响，则对该包中的所有类产生影响，而对于其他包不造成任何影响。**
   1. 最小化修改都程序员的影响
   2. 包尽可能大，和CRP互斥
   3. 方法
      1. 将具有相似闭包的类分组
      2. 面向可以预期的变更封闭包
      3. 将更改限制为几个软件包
      4. 降低包装释放频率
      5. 减少程序员的工作量
      6. 只对可预测的变更有作用，不可预测的变更会为系统带来极大的破坏能力，并且无法进行预测。
3. 共同重用原理(CRP):**一个包中的所有类应该是能够共同重用的。**
   1. s根据常见重用对类进行分组：避免给用户不必要的依赖
   2. 遵循CRP通常会导致软件包拆分：获得更多，更小，更专注的包
   3. 减少重新使用者的工作
   4. 包尽可能小，和CCP互斥
4. 无环依赖原则(ADP):在包的依赖关系图中不能存在环。必须是有向无环图。
   1. 第一种单环，DIP依赖倒置即可解决
   2. 第二种互环，A依赖B，且B依赖A

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/summary/3.png)

5. 稳定依赖原则(SDP):朝着稳定(别人的修改不影响我)的方向进行依赖
   1. Ca:输入耦合度，包外部依赖本包的类个数
   2. Ce:输出耦合度，包内部依赖于包外部的类的个数
   3. 不稳定性: $I = \frac{Ce}{Ce + Ca}$, I越小越稳定

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt10/16.png)

6. 稳定抽象原则(SAP):包的抽象程度应该和其稳定程度一致
   1. 稳定的包应该是抽象的包
   2. 不稳定的包应该是具体的包
   3. Na:包中抽象类个数
   4. Nc:包中所有类个数
   5. 抽象度$A = \frac{Na}{Nc}$
7. 前三条描述的是依赖性，后三条描述的是耦合性
8. 包设计过程:
   1. 开发包(构件)设计
   2. 运⾏时的进程
   3. 物理部署

## 了解的图片
1. 进程图
2. 部署图

## POJO和VO
1. POJO：Java实体
2. VO：值对象，逻辑层向展示层传递

## 体系中构建的之间的接口的定义 重要
1. 首先确定模块对外接口
2. 然后确定接口的规范

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt10/32.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt10/33.png)

## 集成的策略 不重要
1. 大爆炸式集成
2. 增量式
   1. 自顶向下式
   2. 自底向上式
   3. 三明治式
   4. 持续集成

## 体系结构开发集成测试用例
1. Stub：为了完成程序的编译和连接而使用的暂时代码
2. Driver：驱动一个测试,就是驱动一个Service的行为

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt10/42.png)

3. 例子

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt10/40.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt10/41.png)

# 人机交互设计

+ **名词解释**
  + **可⽤用性**
+ **能够列列出⾄少5个界面设计的注意事项，并加以解释**
  + **例子违反了了哪些条界⾯面设计原则**
+  精神模型、差异性
+ **导航、反馈、协作式设计**

## 可用性
1. 可用性不是用户界面的单一一维属性，它包含以下维度。
   1. 易学性：新手用户容易学习，能够很快使用系统。
   2. 效率：熟练的用户可以高效使用它
   3. 易记性：使用过软件系统的用户，能够有效记忆或快速重新学会使用该系统。(超市可以缓存之前的信息)
   4. 出错率：几乎没有错误，可以从错误中快速恢复
   5. 主观满意度：让用户有良好的体验。

## 人机交互设计原则
1. 简洁设计(7±2原则)：文字不如图形
2. 一致性设计(实际模型和人的精神模型一致)，如下是一个不一致的例子(cancel和ok的位置问题)

![image-20220902145802861](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220902145802861.png)

3. 低出错率设计(包括不适当的菜单功能灰色屏蔽、检查输入，出现错误的时候帮助用户修正错误，而不是重新填写，每一个输入都尽快的显示问题)
4. 易记性设计
   1. 减少短期记忆的负担
   2. 使用逐层递进的方式展示信息
   3. 使用直观的快捷方式
   4. 设置有意义的默认值
5. 可视化设计
   1. 按照任务模型设计界面隐喻，同时不要把软件系统的内部构造机制暴露给用户
   2. 可视化设计还应该基于界面隐喻，尽可能地把功能和任务细节表现出来。

![image-20220902145825066](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220902145825066.png)

## 精神模型

1. **精神模型**就是用户进行人机交互时头脑中的任务模型。依据精神模型可以进行**隐喻**(Metaphor)设计：
   1. 隐喻又被称为视觉隐喻，是视觉上的图像，但会被用户映射为业务事物。用户在识别图像时，会依据隐喻将控件功能与已知的熟悉事物联系起来，形成任务模型；
   2. 隐喻本质上是在用户已有知识的基础上建立一组新的知识，实现界面视觉提示和系统功能之间的知觉联系。

## 差异性
1. 新手用户
   1. 是对业务不熟悉的⼈
   2. 例如新员工或者新接触系统的⼈。为新手用户设计系统时要关注易学性，进⾏业务导航，尽量避免出错。如果⼀个系统的⼤多数⽤户都是新手用户，整个系统的⼈机交互设计都要侧重**易学性**。
2. 专家用户
   1. 是能够熟练操作计算机完成业务任务的⼈，⼀般都是⻓时间使⽤软件系统并且计算机操作技能熟练的人。
   2. 为专家用户设计系统时，要关注效率。如果⼀个系统的大多数用户都是专家⽤户，整个系统的⼈机交互设计都要侧重效率。
3. 熟练用户：是介于新手用户和专家用户之间的⼈。为熟练用户设计⼈机交互系统要在易学性和效率之间进行折中。
4. 好的人机交互应该为不同的用户群体提供差异化的交互机制。
   1. 既为新⼿用户提供易学性高的⼈机交互机制(图形界面)
   2. ⼜为专家用户提供效率高的⼈机交互机制(命令行、快捷方式、热键)

## 导航
1. 导航是为了给用户提供一个很好的完成任务的入口，好的导航保证这个入口很符合人的精神模型。
2. 全局导航控件包括窗口、菜单、列表、快捷方式、热键等等。
3. 局部导航通过安排布局细节，制造视觉上的线索来提供导航。

## 反馈
1. 反馈能够避免用户进行错误的操作，让用户明确自己的等待过程的长度。
2. 时间情况
   1. 打字、光标移动、⿏标定位：50～150毫秒
   2. 简单频繁的任务：1秒
   3. 普通的任务：2～4秒
   4. 复杂的任务：8～12秒

## 协作式设计
1. 人和计算机是人机交互的方法，其中人的因素是比较固定的，一定时期内不会发生大的变化，所以要让两者交互顺畅，就需要让计算机更多地适应人地因素，这也是人机交互设计以用户为中心的根本原因
2. **这种调整计算机因素以更好地适应并帮助用户的设计方式被称为协作式设计。**

## 小问题
1. 不要暴露内部结构:ZIP

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt11/6.png)

2. 菜单系统
   1. 下拉式菜单：需要空间，可预测
   2. 弹出式菜单：灵活，定制，让用户惊讶
   3. 减少用户需要知道的命令，打字少，避免用户错误，提供上下文参考。
3. 黄金法则
   1. 让用户掌控一切
   2. 减少用户的内存负载
   3. 始终如一

# 详细设计的基础

+ 详细设计的出发点
+ **控制⻛格**
+ **职责分配**
+ **协作**
+ 给定分析类图、系统顺序图和设计因素描述
  + **建⽴立设计类图**
  + **或者详细顺序图**
+ 协作的测试
  + MockObject

## 详细设计的出发点
1. 软件详细设计是在软件体系结构设计之后进行，以需求开发的结果(需求规格说明和需求分析模型)和软件体系结构的结果(软件体系结构设计方案与原型)为出发点。

## 职责
1. 职责是执行任务(操作职责)或维护某些数据(数据职责)的义务。
   1. 行为职责通常由行为来履行。
   2. 数据职责通常由属性来完成。
   3. 可能会涉及到类之间的协作。
2. 职责分类
   1. 属性职责:对象的状态
   2. 行为职责:对象的行为
3. 通过职责建立静态设计模型

## 职责分配
1. 将比较大的职责给很多对象。

### GRASP原则(一般职责分配软件模式)
1. 特点:
   1. 低耦合：分配一个职责要保证低耦合度
   2. 高耦合：分配一个职责的时候要保持类的高聚合度
   3. 信息专家：将一个职责分配给专家-履行职责所必须的信息的类
   4. 创建者：创建规则在后面
   5. 控制者：控制规则在后面(避免大多数信息由一个类发出、组件相对较小、行为职责和数据绑定、职责单一)
2. 拇指原则:研究出来良好内聚性、耦合性和稳定性的替代方案。
3. 信息专家:统一提供对外的接口，而不是某一个具体的接口，数据和行为不要分开
4. 创建规则:如果有以下情况，则由创建者分配B类创建A类实例的职责：
   1. B 聚集了 A 对象
   2. B 包含了 A 对象
   3. B 记录了 A 的实例
   4. B 要经常使用 A 对象
   5. 当 A 的实例被创建，B具有传递给A的初始化数据(也就是 B 是创建 A 的实例这项任务的信息专家)
   6. 在有选择的地方，更喜欢B聚合或包含A对象

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt12/19.png)

- 第一个(组合关系)
- 第二个(单向被关联):比如访问数据库，你要访问的时候，我就给一个访问对象来使用，不用的时候归还就行。
- 第三个(持有必要数据):根据业务的情况决定什么时候被创建，有时候B可以创建但是不知道什么时机来创建，如果C知道，那么我们可能让C创建对象，然后B进行初始化
- 第四个(聚合关系):关系比较多，要看时机等什么时候合适


## 协作
1. 程序中的对象互相协作，完成一个较大的职责。
2. 通过协作建立动态设计模型

### 协作的测试:Mock Object
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt12/51.png)

1. Mock Object类似于Stub，但是更加简单

### 集成测试
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt12/36.png)

## 控制风格
1. 集中式控制风格：一个额外的控制器记录系统行为的所有逻辑，容易找到做出决定的位置，但是控制器比较庞大，复杂且难以理解，都是控制器调用他者
2. 委托式控制风格：做出决策的对象不知有一个，职责的分解决定了控制对象的层次。
3. 分散式控制风格：系统行为的逻辑通过对象网络**广泛传播**，隐藏信息很难，内聚性比较差

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt12/27.png)

## 部分题目
1. 给定分析类图(概念类图)、系统顺序图和设计因素描述，建立设计类图(设计类图就是满足这三种控制风格的类图)/系统顺序图

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/summary/4.png)

# 详细设计中的模块化与信息隐藏

+ 名词解释
  + 耦合与内聚
+ 内聚与耦合
  + 对例子，**说明它们之间的耦合程度与内聚，给出理由**
+ **信息隐藏**
  + **基本思想**
  + 两种常⻅见的信息隐藏决策
  + **对例子**，说明其信息隐藏程度好坏

## 内聚和耦合

1. 内聚：表达的是一个模块内部的联系的紧密性：包括信息内聚、功能内聚、通信内聚、过程内聚、时间内聚、逻辑内聚和偶然内聚。
2. 耦合：描述的是两个模块之间关系的复杂程度：包括内容耦合，公共耦合，重复耦合，控制耦合，印记耦合，数据耦合

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/16.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/15.png)


## 结构化内聚
1. 偶然内聚:完全不相关

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/36.png)

2. 逻辑内聚:执行一系列操作，具体操作交给具体模块(如swtich)，解决控制耦合的方法

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/36.png)

3. 时间内聚:执行一系列和时间有关的操作，比如构造方法和析构方法

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/37.png)

4. 过程内聚:执行一系列与步骤顺序有关的操作

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/38.png)

5. 通信内聚:执行一系列与步骤顺序有关的操作，并且这些操作是在相同的数据结构上。

[](img/cpt13/29.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/39.png)

6. 功能内聚:模块只执行一个操作或达到一个单一目的

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/40.png)

7. 信息内聚:模块进行许多操作，各自有各自的入口，相互独立，且在相同的数据结构上完成操作。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/41.png)

8. 偶然内聚和逻辑内聚不可以接受。。。。补充

## 结构化耦合
1. 数据耦合:两个模块的所有参数是同类型的数据项(发送正好)

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/45.png)

2. 印记耦合:两个模块共享一个数据结构，但是只用了其中一个部分(发送多了)

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/29.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/30.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/44.png)

3. 控制耦合:一个模块给另一个模块传递了控制信息(除了数据还有控制信号，并且违反了单一职责原则)
   1. 主要是case中不应该出现具体实现的代码，应该抽象成方法

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/31.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/43.png)

4. 重复耦合:一个模块有逻辑上相同的重复代码

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/34.png)

5. 公共耦合:模块之间共享全局数据结构

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/32.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/46.png)

6. 内容耦合:一个模块直接修改另一个模块的内容(成员变量、函数等)
7. 控制耦合及以上可以接受

- 隐式耦合(面向对象耦合)

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/33.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt13/42.png)

## 面向对象耦合：
1. 隐式耦合：不设置局部变量，级联调用
2. 显示耦合：可以通过委托方式完成
3. 继承耦合

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt14/11.png)

## 这部分区分需要解释

## 信息隐藏
每一个模块都隐藏了这个模块中关于重要设计决策的实现，以至于只有这个模块的每一个组成部分才能知道具体的细节

### 基本思想
每个模块都隐藏了重要设计决策的实现，因此只有该模块的组成部分才知道详细信息：特别是如果存在所有可能的设计更改的列表-隐藏假设列表

### 秘密
1. 主要秘密：主要秘密描述的是这个模块所要实现的**用户需求**。是设计者对⽤户需求的实现的⼀次职责分配。有了这个描述以后，我们可以利⽤它检查我们是否完成所有的⽤户需求，还可以利⽤它和需求优先级来决定开发的次序。
2. 次要秘密：次要秘密描述的是这个模块在实现职责时候所涉及的具体的**实现细节**。包括数据结构，算法，硬件平台等信息。

### 两种常见的信息隐藏
1. 根据需求分配的职责，因为实践表明，需求是经常变化的，频率和幅度都很大；
2. 内部实现机制，常见的变化主题包括硬件依赖，输入输出形式，非标准语言特征和库，负责的设计和实现，复杂的数据结构，复杂的逻辑，全局变量。数据大小限制等。

# 详细设计中面向对象方法下的模块化（重点）

![image-20220902151339143](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220902151339143.png)

有可能是几个原则融合在一起。

## 设计原则汇总

1. 原则一:全局变量是被认为是有害的
   1. 公共耦合是有风险，而且会增加潜在连接数量
2. 原则二:如果没有特殊要求，让代码清晰一点:
   1. 让代码兼顾明确和可修改性
3. 原则三:避免重复
   1. 面向接口编程，而不是重复地写逻辑上一致的代码
4. 原则四:面向接口编程
5. 原则五:迪米特法则
   1. 你可以自己玩。(this)
   2. 你可以玩自己的玩具，但不能拆开它们(自己的成员变量)
   3. 你可以玩送给你的玩具。(方法)
   4. 你可以玩自己制作的玩具。(自己创建的对象)
   5. 强调的是不能出现a.b.Methods这类情况，不能人去动狗的腿，而是人命令狗，狗动腿
6. 原则六:接口隔离原则(ISP)/也叫接口最小化原则
   1. 将大的接口拆解成几个小的接口。
   2. 这样可以有效避免出现不必要的依赖。
7. 原则七:里氏替换原则(LSP)
   1. 所有派生类都必须可以替代其基类
   2. 派生类的前置条件更弱，后置条件更强
   3. 解决方案:在父类中添加方法或者函数，或者拆分接口

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt14/30.png)

- 应该分为Door和Alerm两个接口，第一个CommonDoor不应该实现alerm

8. 原则八:组合代替继承
   1. MyStack 组合 Vector
9.  原则九:单一职责原则:一个类只能有一个改变的理由
10. 原则十:最小化类和成员的可访问性(x是可见)
    - 是不是需要public
    - 类声明前没有public，则包内可见
    - 方法生命前没有public，则包内可见
    - public修饰是全局可见

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt15/11.png)

11. 原则十一:开放/封闭原则(OCP)
    1.  对扩展开放：模块的行为可以被扩展，比如新添加一个子类
    2.  对修改关闭：模块中的源代码不应该被修改
    3.  RTTI(运行时类型信息违反了开闭原则LSP)，就是如果都有的话则抽象成基类的方法。
12. 原则十二:依赖倒置原则(DIP):高级模块不应依赖于低级模块：两者都应依赖抽象。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/summary/5.png)

## 内聚耦合度量(了解)
1. 对象类之间的耦合：CBO = 该类访问其他类的成员方法的数量 + 其他类的成员访问该类的成员方法的数量
2. 数据抽象耦合：DAC = 统计一类包含的其他类的其他类的实例的数量，不包括继承关系带来的实例引用
3. 输入耦合度 Ca:在此类之外依赖于这类内部的类的数量
4. 输出耦合度 Ce:这个类中依赖于这个类的外部的类的数量
5. 继承树的深度：DIT = 从节点到根的继承树
6. 子类的数量：NOC = 一个类的直接子类的数量
7. 类凝聚力 LCOM

# 详细设计中面向对象方法下的信息隐藏（重点）

+ 信息隐藏的含义
+ 封装
+ OCP
+ DIP

什么是封装，封装是为了什么，封装什么样的内容，怎么做封装

## 信息隐藏的含义



## 封装

1. 封装将数据和行为同时包含在类中，分离对外接口与内部是实现。

### 封装实现的细节
1. 封装数据和行为：Getter-Setter,不是单单将方法和类成员关联
   - getPositionsArray()不好，应该是getPostion()
2. 封装内部结构：迭代器模式
3. 封装其他对象的引用：不要返回内部的对象，新建一个返回
4. 封装类型信息：LSP
5. 封装潜在变更

## OCP



## DIP



![image-20220902151909283](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220902151909283.png)

# 详细设计中的设计模式

+ 如何实现可修改性、可扩展性、灵活性

+ **策略模式**

+ **单件模式**

+ **抽象⼯厂模式**
+ **迭代器模式**
+ 给定场景，应⽤设计模式并写出代码
+ 给出代码，要求⽤设计模式改写

+ 给你个模式，给你个方案，问有什么不合适的地方，如何进行改进

## 可修改性、可扩展性、灵活性

1. 实现的**可修改性**:涉及到大的场景的修改
   1. 对已有实现的修改
   2. 例如：修改现有促销策略
2. 实现的**可扩展性**(DIP & OCP)
   1. 对新的实现的扩展
   2. 例如：增加一条新的促销策略(策略模式)
3. 实现的**灵活性**
   1. 对实现的动态配置
   2. 例如：动态修改更改某商品对应促销策略

## 几个设计模式
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt16/7.png)

1. 策略模式:减少耦合、依赖倒置。
2. 抽象工厂模式:职责抽象、接口重用。
3. 单件模式:信息隐藏、职责抽象。
4. 迭代器模式:减少耦合、依赖倒置。

## 策略模式

1. 在策略模式中，一个类的行为或其算法都可以在运行时改变。属**行为型模式**。
2. 在策略模式中，我们创建表示各种策略的对象和一个行为随着策略对象改变而改变的context对象。策略独享改变context对象的执行算法.

## 抽象工厂模式

## 迭代器模式

## 单件模式

# 软件构造&代码设计

+ 软件构造包含的活动
+ 名词解释
  + 重构
  + 测试驱动开发
  + 结对编程
+ **给定代码段示例，对其进⾏改进或者发现其中的问题**
  + 简洁性/可维护性
  + 使⽤用数据结构消减复杂判定
  + 控制结构
  + 变量使用
  + 语句处理
  + How to write unmaintainable code
  +  防御与错误处理
+ **单元测试⽤例的设计**
+ **防御式编程**
+ **契约式设计**
+ **表驱动**

## 软件构造
1. 软件构造除了核心的编程任务之外，还涉及详细设计(数据结构与算法设计)、单元测试、集成与集成测试、以及其他活动。
2. 重构：修改软件系统的严谨方法，它在不改变代码外部表现的情况下改进其内部结构。
3. 测试驱动开发：测试驱动开发要求程序员在编写一段代码之前，优先完成该段代码的测试代码。并在编程中重复执行测试代码，以验证程序的正确性。
4. 结对编程：两个程序员挨着坐在一起，共同协作进行软件构造活动。

## 重构

## 测试驱动开发

## 结对编程

## 代码改进

1. 简洁性/可维护性
2. 使⽤数据结构消减复杂判定
3. 控制结构
4. 变量使⽤
5. 语句处理
6. How to write unmaintainable code
7. 防御与错误处理

## 测试

## 单元测试构造

1. 按照输入输出测试构造

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt18/27.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt18/30.png)

2. 单元测试用例：输入，方法，预期输出

## 契约式编程

定义

1. 使用异常或断言的方式检查
2. 检查中间的过程

## 防御式编程

定义

1. 前置和后置方法
   

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt18/23.png)

## 表驱动

定义

1. 决策表辅助

## 代码复杂度度量
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt18/33.png)

- 重要:这里涉及到两种计算方法

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt18/34.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt18/35.png)

# 软件测试

![image-20220902153139756](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220902153139756.png)

# 白盒测试和黑盒测试

## 黑盒测试
1. 黑盒测试是将测试对象作为一个黑盒子，完全基于输入和输出数据来判断测试对象的正确性。

### 黑盒测试方法-等价类划分
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/14.png)

- 把所有可能的输入数据，即程序的输入域划分为若干部分(子集)，从每个子集中选取少量具有代表性的数据作为测试用例。
- 例子

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/15.png)

### 黑盒测试方法-边界值分析
1. 边界值分析是等价类划分方法的补充，实践证明，错误最容易发生在各等价类的边界，而不是等价类的内部。
2. 对定价类划分的补充，错误容易发生在各个等价类的边界上，而不是等价类的内部，因此针对边界情况设计测试用例，可以发现更多的缺陷。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/16.png)

### 黑盒测试方法-决策表
- 决策表是为复杂逻辑判断设计测试用例的技术。决策表示由条件声明、行动声明、规则选项和行动选项等四个象限组成的表格。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/17.png)

### 黑盒测试方法-状态转换
- 状态转换是针对复杂测试对象的测试技术。该类复杂测试对象对输入数据的反映是多样的，还需要依赖自身的状态才能决定。
- 状态转换包含有效转换和无效转换，只有在复杂情况和可靠性要求较高的情况下才会为无效转换设计测试用例。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/18.png)

- 例子

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/25.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/26.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/27.png)

## 白盒测试
1. 白盒测试是将测试对象看做透明的，不关心测试对象的规格，而是按照测试对象内部的程序结构来设计测试用例进行测试工作。

### 白盒测试方法-语句覆盖
1. 语句覆盖设计测试用例的标注是保证被测试的对象的每一行代码都至少执行了一次。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/19.png)
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/20.png)

- 所有的路径都覆盖一遍，路径覆盖

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/21.png)

### 白盒测试方法-条件覆盖
1. 条件覆盖设计测试用例的标准是确保程序中每个判断的每个结果都至少满足一次。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt19/22.png)

### 白盒测试方法-路径覆盖
1. 路径覆盖测试用例的标准是确保程序中每一条独立执行的路径都至少执行一次。

## 白盒测试和黑盒测试优缺点比较

## 测试

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/summary/6.png)

- 单元测试用例
- 功能测试用例：完整有价值的序列

- 测试的度量
  - 需求覆盖率=被测试的需求数量/需求总数
  - 模块覆盖率=被测试的模块数量/模块总数
  - 代码覆盖率=被测试的代码行/代码行数

# 软件交付&软件维护与演化

+ 如何理解软件维护的重要性？
+ **开发可维护软件的方法**
+ **演化式生命周期模型**
+ ⽤户文档、系统文档
+ 逆向工程、再⼯工程

## 软件维护

1. 软件维护是在交付之后修改软件系统或其部件的活动过程，以修正缺陷、提高性能或其他属性、适应变化的环境。

## 软件维护的重要性
1. 主要是为了保证产品的正常运转而进行使用帮助、故障解决和磨损处理等工作。
2. 软件维护是在交付之后修改软件系统或其部件的活动过程，以修正缺陷、提高性能或其他属性、适应变化的环境。问题、环境发生了改变，软件产品中存在缺陷。
3. 软件的维护主要是"修改"。软件不会磨损，软件维护只需要完成少量的使用帮助、故障解决和磨损处理等工作，软件特性上是易于修改的，软件只有持续修改才能保持价值。

## 开发可维护软件的方法
1. 前期(开发阶段)更充分的准备可以减轻后期维护的压力与困难
2. 考虑到软件的可变更性进行开发

## 软件维护的过程
1. 问题/修改的标识、分类与划分优先级
2. 分析
3. 设计
4. 实现
5. 回归测试：修改后不会影响
6. 验收测试
7. 移交

## 用户文档和系统文档

### 用户文档
1. 用户文档是指为用户编写参考指南或者操作教程，常见的如用户使用手册、联机帮助文档等，统称为用户文档。
2. 文档内容的组织应当支持其使用模式，常见的是指导模式和参考模式两种。

### 用户文档的要素
1. 标识信息
   1. 包括文档标题、文档产生的版本和日期、相关的软件 产品和版本
   2. 标识信息应该放在包装袋或者封面，用户可以不用翻阅文档就能看到
2. 引言
   1. 正文的第一部分，描述文档的预期读者、描述范围，以及对文档目的、功能和操作环境的概要描述
3. 文档使用信息
   1. 文档使用信息描述了关于文档的使用信息，例如，解释各种图示的含义、介绍如何使用帮助等。
4. 操作模式
   1. 操作模式是使用用户文档的模式，例如对操作流程的图示或者文字性描述，再例如解释操作的理论、原因、算法或者通用概念。
5. 操作规程
   1. 指导模式文档应该包括很多软件功能都会涉及的常见活动规程：
      1. 需要由用户执行的软件安装与卸载
      2. 图形用户界面特性的使用指导
      3. 访问、登录或者关闭软件
      4. 通过软件的导航，访问和退出相关功能
      5. 数据操作(输入、保存、读取、打印、更新和删除)
      6. 取消、中断和重启操作的方法
   2. 对于完成用户任务的操作流程，指导模式文档应该从基本信息、指导步骤和结束信息三个方面来描述
   3. 基本信息：
      1. 简要概述操作规程的目的，定义或解释必要的概念
      2. 标明执行任务前需要完成的技术活动
      3. 列举用户完成任务所需要的资源情况，例如数据、文档、密码等
   4. 对于完成用户任务的操作流程，指导模式文档应该从基本信息、指导步骤和结束信息三个方面来描述
   5. 指导步骤：使用祈使语句描述用户行为，并指出预期的结果。指导步骤要说明：
      1. 用户输入数据的域值范围、最大长度和格式
      2. 相应的错误消息和恢复办法
      3. 其它可选的步骤和重复步骤
   6. 对于完成用户任务的操作流程，指导模式文档应该从基本信息、指导步骤和结束信息三个方面来描述
   7. 结束信息：标明操作规程的最后步骤，让用户知道怎样判断整个操作规程的成功完成，告诉用户如何退出操作规程
6. 软件命令信息
   1. 解释用户输入命令的格式和操作规程，包括必要参数、可选参数、缺省值等，要示例说明命令的使用，说明怎样判断命令是成功完成还是异常中止
7. 错误信息与问题解决
   1. 文档要详细描述软件使用中的已知问题，让用户清楚如何自行解决问题或者怎样向技术支持人员报告准确的信息
8. 导航特征
   1. 包括章节、主题、页码、链接、图标等
   2. 提高导航特征和效率

### 系统文档
1. 与用户文档注重系统使用细节不同，系统管理员文档更注重系统维护方面的内容，例如系统性能调整、访问权限控制、常见故障解决等等。因此，系统管理员文档需要详细介绍软硬件的配置方式、网络连接方式、安全验证与访问授权方法、备份与容灾方法、部件替换方法等等。

## 软件演化生命周期模型
1. 人们将软件从**生产到报废**的生命周期分割为不同阶段，每段阶段有明确的典型输入/输出、主要活动和执行人，各个阶段形成明确、连续的顺次过程，这些阶段划分就被称为软件生命周期模型。

### 步骤
1. 初始开发
2. 演化
3. 服务
4. 逐步淘汰
5. 停止

### 优缺点
1. 优点：
   - 使用了迭代式开发，具有更好的适用性、尤其是其演化式迭代安排能够适用于那些需求变更比较频繁或不确定性较多的软件系统的开发
   - 并行开发可以帮助缩短软件产品的开发时间
   - 渐进交互可以加强用户反馈，降低开发风险
2. 缺点：
   - 无法在项目早期阶段确定项目范围，所以项目的整体计划、进度调度、尤其是商务协商事宜无法准确把握
   - 后续迭代的开发活动是在前导迭代的基础上进行修改和扩展的，这容易让后续迭代忽略分析与设计工作，蜕变为构建——修复方式
   - 如果缺乏过程管理，可能会陷入试——错——改的循环

### 实际模型
![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt22/5.png)

1. 构建-修补模型
   1. 最早也是最自然产生的软件开发模型，对软件开发活动没有任何规划和组织，是完全依靠开发人员个人能力进行软件开发的方式。
   2. 缺点：
      1. 在这种模型中，没有对开发工作进行规范和组织，所以随着软件系统的**复杂度提升**，开发活动会超出个人的直接控制能力，构建-修复模型就会导致开发活动无法有效进行而失败；
      2. 没有分析**需求的真实性**，给软件开发带来很大的风险；
      3. 没有考虑**软件结构的质量**，使得软件结构在不断的修改中变得质量越来越糟，直至无法修改；
      4. 没有考虑测试和程序的可维护性，也没有任何文档，软件的维护十分困难。
   3. 适用：软件规模很小的软件

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt22/6.png)

2. 瀑布模型
   1. 瀑布模型是按照软件生命周期模型将软件开发活动组织为需求开发、软件设计、软件**实现**、软件测试、软件交付和软件维护等活动，并且规定了它们自上而下、相互邻接的次序。
   2. 优点：为软件开发活动定义了清晰的阶段划分(包括输入/输出、主要工作及其关注点)，这让开发者能够以关注点分离的方式更好地进行那些复杂度超越个人能力的软件项目的开发活动。
   3. 缺点：
      1. 对文档的过高的期望具有局限性
      2. 对开发活动的线性顺序假设具有局限性
      3. 客户、用户的参与具有局限性：成功的项目开发需要客户、用户从始至终的参与，而不仅仅是一个阶段。
      4. 里程碑粒度具有局限性：里程碑粒度过粗，基本丧失了"早发现缺陷早修复"这一思想
   4. 适用：
      1. 适用于比较成熟，没有技术难点的软件

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt22/7.png)

3. 增量迭代模型(需求驱动)
   1. 增量迭代模型是在项目开始时，通过系统需求开发和核心体系结构设计活动完成项目对前景和范围的界定，然后再将后续开发活动组织为多个迭代、并行的瀑布式开发模型。需求驱动。
   2. 少量的不确定性和影响不大的需求变更通过迭代的方式加以解决 
   3. 优点:
      1. 迭代式开发更加符合软件开发的实践情况，具有更好的适用性；
      2. 并行开发可以帮助缩短软件产品的开发时间；
      3. 渐进交付可以加强用户反馈，降低开发风险。
   4. 缺点：
      1. 由于各个构件是逐渐并入已有的软件体系结构中的，所以加入构件必须不破坏已构造好的系统部分，这需要软件具备开放式的体系结构。
      2. 增量交付模型需要一个完备、清晰的项目前景和范围以进行并发开发规划，但是在一些不稳定的领域，不确定性太多或者需求变化非常频繁，很难在项目开始就确定前景和范围。
   5. 适用范围：适用于大规模软件系统的开发

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt22/8.png)

4. 演化模型
   1. 演化模型将软件开发活动组织为多个迭代、并行的瀑布式开发活动。演化模型能够更好地应对需求变更，更适用于需求变更比较频繁或不确定性较多的领域
   2. 优点：
      1. **使用了迭代式开发，具有更好的适用性**，尤其是其演化式迭代安排能够适用于那些需求变更比较频繁或不确定性较多的软件系统的开发；
      2. 并行开发可以帮助**缩短**软件产品的开发时间；
      3. 渐进交付可以**加强用户反馈**，降低开发风险。
   3. 缺点：
      1. 无法在项目早期阶段建立项目范围，所以项目的整体计划、进度调度、尤其是商务协商事宜无法准确把握；
      2. 后续迭代的开发活动是在前导迭代基础上进行修改和扩展的，这容易让后续迭代忽略设分析与设计工作，蜕变为构建-修复方式。
   4. 适用与不稳定领域的大规模软件系统开发

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt22/9.png)

5. 原型模型
   1. 原型模型将需求开发活动展开为抛弃式原型开发活动和演化式原型开发活动。原型模型在整体安排迭代的情况下，强调"**抛弃式原型**"的演化模型。抛弃式原型解决对未来知识的局限性产生的**不确定性**，将未来置于现在进行推敲。
   2. 抛弃式原型
      1. 它通过模拟"未来"的产品，将"未来"的知识置于"现在" 进行推敲，解决不确定性。
      2. 存在的原因是"不确定的"，这一类原型在后续的开发过程中会被抛弃
   3. 演化式原型
      1. 在迭代中构建，是系统的核心，并不断扩充，最终成为真正的软件产品。
      2. 它将作为真正产品的一部分，所以必须有很好的质量。在迭代式开发中，通常会在第一个迭代中构建一个核心的体系结构演化式原型，并且在后续迭代中不断扩充，成为真正的软件产品。
   4. 优点：
      1. 对原型方法的使用加强了与客户、用户的交流，可以让最终产品取得更好的满意度；
      2. 适用于非常新颖的领域，这些领域因为新颖所以有着大量的不确定性。
   5. 缺点
      1. 原型方法能够解决风险，但是自身也能带来新的风险，例如原型开发的成本较高，可能会耗尽项目的费用和时间；
      2. 实践中，很多项目负责人不舍得抛弃"抛弃式原型"，使得质量较差的代码进入了最终产品，导致了最终产品的低质量。
   6. 适用性：适用于具有大量不确定的新颖领域进行开发活动组织。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt22/10.png)

6. 螺旋模型
   1. 螺旋模型是风险驱动的，完全按照风险解决的方式组织软件开发活动。
      1. 确定目标、解决方案和约束
      2. 评估方案，发现风险
      3. 寻找风险解决方法
      4. 落实风险解决方案
      5. 计划下一个迭代
   2. 自内向外，螺旋模型有4次风险解决迭代，分别解决了几个高风险的阶段的问题
      1. 解决系统需求开发中的风险，尤其是产品概念设计风险，得到一个确定的产品前景和范围。
      2. 解决软件需求开发中的风险，得到清晰的软件需求
      3. 解决软件体系结构设计中的技术风险，构建高质量的核心体系结构原型。
      4. 解决详细设计和实现中的关键技术风险，建立一个可实现的高质量软件结构。
   3. 优点：可以降低风险，减少项目因风险造成的损失
   4. 缺点：
      1. 风险解决需要使用原型手段，也就会存在原型自身带来的风险，这一点与原型模型相同；
      2. 模型过于复杂，不利于管理者依据其组织软件开发活动
   5. 适用于高风险的大规模软件系统开发

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt22/11.png)

7. RUP模型
   1. 统一过程(Rational Unified Process，RUP)总结和借鉴传统上的各种有效经验，建立最佳实践方法的集合，并提供有效的过程定制手段，允许开发者根据特定的需要定制一个有效的过程模型。
   2. 实践方法：
      1. 迭代式开发，这是过去被反复证明的最佳实践方法；
      2. 管理需求，重视需求工程中除了需求开发之外的需求管理活动；
      3. 使用基于组件的体系结构，它帮助建立一个可维护、易开发、易复用的软件体系结构；
      4. 可视化建模，利用UML进行建模；
      5. 验证软件质量，尽早和持续地开展验证，以尽早发现缺陷，降低风险和成本；
      6. 控制软件变更，适应1990s以后需求变更越来越重要的事实。
   3. 优点：
      1. 吸收和借鉴了传统上的最佳实践方法，尤其是其核心的6个实践方法，能够保证软件开发过程的组织是基本有效和合理的。
      2. RUP依据其定制机制的不同，可以适用于小型项目，也可以适用于大型项目的开发，适用面广泛。
      3. RUP有一套软件工程工具的支持，这可以帮助RUP的有效实施。
   4. 缺点：
      1. 没有考虑交付之后的软件维护问题
      2. 裁剪和配置工作不是一个简单的任务，无法保证每个项目都能定制一个有效的RUP过程。
   5. 适用：RUP是重量级过程，能够胜任大型软件团队开发大型项目时的活动组织。但RUP经过裁剪和定制，也可以变为轻量级过程，也能够胜任小团队的开发活动组织。
8.  敏捷模型(XP)
   6.  最为重要的敏捷思想是敏捷联盟宣言所声明的价值观：
      1. 个体和互动 高于 流程和工具
      2. 工作的软件 高于 详尽的文档
      3. 客户合作 高于 合同谈判
      4. 响应变化 高于 遵循计划
   7.  极限编程，就是什么最有效果就做什么
   8.  适用于快速变化或者时间压力较大的项目。

## 逆向工程
1. 处理遗留软件时，维护人员接受的维护对象可能是一个没有任何文档也没有程序源代码的软件程序，此时，维护人员需要使用逆向工程技术
2. 逆向工程技术是指："分析目标系统，标识系统的部件及其交互关系，并且使用其它形式或者更高层的抽象创建系统表现的过程[Chikofsky1990]"。
3. 逆向工程的基本原理是抽取软件系统的需求与设计而隐藏实现细节，然后在需求与设计的层次上描述软件系统，以建立对系统更加准确和清晰的理解。

![](https://spricoder.oss-cn-shanghai.aliyuncs.com/2020-Software-Engineering-and-Computing-II/img/cpt21/6.png)

## 再工程
1. [Arnold1993]认为再工程主要是下列两类活动：
   1. 改进人们对软件的理解
   2. 改进软件自身，通常是提高其可维护性、可复用性和可演化性
2. 常见的具体活动有
   1. 重新文档化
   2. 重组系统的结构
   3. 将系统转换为更新的编程语言
   4. 修改数据的结构组织。
3. 是抽象出来一个视图，然后完全重新开始开发，而不是基于逆向工程得到的结果进行再工程

# 软件开发过程模型&软件工程职业基础

![image-20220902160015646](https://raw.githubusercontent.com/Alemdx/pic-bed/master/math2/image-20220902160015646.png)

# 部分题目

```
1. 为了有效地捕获系统需求,应采用(C) 。
A.瀑布模型
B.V 模型
C.原型模型
D.螺旋模型

2. 软件开发过程中，需求分析阶段的输出不包括(D)
A.数据流图
B.实体联系图
C.数据字典
D.软件体系结构图

3. "软件产品必须能够在 3 秒内对用户请求作出响应"属于软件需求中的(B)
A.功能需求
B.非功能需求
C.设计约束
D.逻辑需求

4. 按照功能分解的方式进行模块分割能够实现高内聚的软件设计: √

5. 软件系统设计的主要目的是为系统制定蓝图, (D)并不是软件设计模型所关注的。
   1. 系统总体结构
   2. 数据结构
   3. 界面模型
   4. 项目范围(这个是在需求部分已经完成)

6. 体系结构设计是软件非功能性的实现，而详细设计主要是软件功能性的实现。√
```

# 说明以下需求属于哪种类型
需求描述|需求类别|备注
--|--|--
系统**需要**存储一年内的销售记录|数据需求|-
系统**应该能够**存储3年的交易数据|性能需求|-
系统使用之前，需要对收银员进行10天的专门培训|其他需求(包括硬件需求、人力需求。)|在交付之前
经过10天培训的收银员就能够熟练使用系统|软件需求(中的质量需求)|-
反映了用户与系统的**交互细节**|系统需求|-
反映了用户与系统的**交互**|用户需求|-
在存储设备发生故障时，系统要在10秒内发现|质量需求(可靠性需求)|故障是非正常状态，还一种系统需求。
在存储设备发生故障时，系统要在0.5秒内向用户发出**警报**|功能需求|故障不是系统的正常状态
检测到病人异常后，监控器必须在0.5秒内发出警报|性能需求|-
该软件管理工具的开发过程**自身**必须符合CMMI-4的评估|过程需求|是软件自身
该软件管理工具软件必须**帮助**项目管理者进行开发管理工作，以通过CMMI-4的评估|用户需求|-
系统能够为用户提供库存分析报告、商品/利润报告和过期商品报告|用户需求|-
产品在发布1年之后内，必须在出版的A、B、C三个产品评论刊物中被评为最可靠产品。|业务需求|相当与一个目的
系统必须能够与Oracle数据库交互。|约束|Oracle是系统的一个环境，环境本身在约束部分，比如Tomcat等等
开发团队需要给出SRS文档。|过程需求|-
使用扫描仪扫描文件，传递回的数据为pdf格式 文件。|对外接口|软件和扫描仪之间的交互
商品的标识由0-24位字母、数字混合组成的字符串。|数据需求|-
商品标识的类型要能够在0.5个人月内更改为长整型。|质量需求|可移植性|

1. 其他描述用例是需求的一种组织和表达形式。√

# 判断需求的正确性或者问题
需求描述|需求正确与否|问题
--|--|--
After the payment process is complete, the relevant information should be appended to a log ﬁle.|错误|模糊
The system should be constructed so that it will be easy to add new functionality in the future.|错误|模糊
The price of a gasoline purchase is computed as the price per gallon for the type of gas purchased, multiplied by the number of gallons purchased (use two decimal points for representing fractions of gallons).|正确|-
The system should be available 24 hours a day, 7 days a week.|错误|不切实际

1. 对象之间的关系：系统顺序图