(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{432:function(t,a,s){"use strict";s.r(a);var n=s(23),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("数据库是软件开发中必不可少的组件，无论是关系型数据库MySQL、Oracle，还是NoSQL数据库Redis、MongoDB，都针对不同的应用场景解决不同的问题。")]),t._v(" "),s("h2",{attrs:{id:"存储引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[t._v("#")]),t._v(" 存储引擎")]),t._v(" "),s("p",[t._v("数据库的存储引擎是数据库的底层软件组织，数据库管理系统（DBMS）使用存储引擎创建、查询、更新和删除数据。")]),t._v(" "),s("p",[t._v("常用的存储引擎主要有MyISAM、InnoDB、Memory。")]),t._v(" "),s("p",[s("strong",[t._v("MyIASM")])]),t._v(" "),s("p",[t._v("MyIASM是MySQL默认的存储引擎，不支持数据库事务、行级锁和外键，因此在INSERT（插入）或UPDATE（更新）数据即写操作时需要锁定整个表，效率较低。")]),t._v(" "),s("p",[t._v("MyIASM的特点是执行读取操作的速度快，且占用的内存和存储资源较少。")]),t._v(" "),s("p",[t._v("总体来说，MyIASM的缺点是更新数据慢且不支持事务处理，优点是查询速度快。")]),t._v(" "),s("p",[s("strong",[t._v("InnoDB")])]),t._v(" "),s("p",[t._v("InnoDB 为 MySQL 提 供 了 事 务 （ Transaction ） 支 持 、 回 滚（Rollback）、崩溃修复能力（Crash Recovery Capabilities）、事务安全\n（Transaction-safe）的操作。InnoDB的底层存储结构为B+树，B+树的每个节点都对应InnoDB的一个Page，Page大小是固定的，一般被设为16KB。其中，非叶子节点只有键值，叶子节点包含完整的数据，")]),t._v(" "),s("imgv",{attrs:{v:"/img/mysql/innodb.png"}}),t._v(" "),s("p",[s("strong",[t._v("Memory")])]),t._v(" "),s("p",[t._v("Memory表使用内存空间创建。每个Memory表实际上都对应一个磁盘文件用于持久化。Memory表因为数据是存放在内存中的，因此访问速度非常快，通常使用Hash索引来实现数据索引。Memory表的缺点是一旦服务关闭，表中的数据就会丢失。")]),t._v(" "),s("h2",{attrs:{id:"创建索引的原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建索引的原则"}},[t._v("#")]),t._v(" 创建索引的原则")]),t._v(" "),s("imgv",{attrs:{v:"/img/mysql/index.png"}}),t._v(" "),s("h2",{attrs:{id:"数据库三范式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库三范式"}},[t._v("#")]),t._v(" 数据库三范式")]),t._v(" "),s("imgv",{attrs:{v:"/img/mysql/pattern1.png"}}),t._v(" "),s("imgv",{attrs:{v:"/img/mysql/pattern2.png"}}),t._v(" "),s("h2",{attrs:{id:"数据库事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库事务"}},[t._v("#")]),t._v(" 数据库事务")]),t._v(" "),s("imgv",{attrs:{v:"/img/mysql/tx.png"}}),t._v(" "),s("h2",{attrs:{id:"存储过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储过程"}},[t._v("#")]),t._v(" 存储过程")]),t._v(" "),s("p",[t._v("存储过程指一组用于完成特定功能的SQL语句集，它被存储在数据 库中，经过第一次编译后再次调用时不需要被再次编译，用户通过指定存储过程的名字并给出参数（如果该存储过程带有参数）来执行 它。")]),t._v(" "),s("p",[t._v("存储过程是数据库中的一个重要对象，我们可以基于存储过程快 速完成复杂的计算操作。")]),t._v(" "),s("h2",{attrs:{id:"应对并发的策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应对并发的策略"}},[t._v("#")]),t._v(" 应对并发的策略")]),t._v(" "),s("p",[t._v("数据库的并发控制一般采用三种方法实现，分别是乐观锁、悲观锁及时间戳。")]),t._v(" "),s("ol",[s("li",[t._v("乐观锁 乐观锁在读数据时，认为别人不会去写其所读的数据；悲观锁就 刚好相反，觉得自己读数据时，别人可能刚好在写自己刚读的数据， 态度比较保守；时间戳在操作数据时不加锁，而是通过时间戳来控制并发出现的问题。")]),t._v(" "),s("li",[t._v("悲观锁 悲观锁指在其修改某条数据时，不允许别人读取该数据，直到自 己的整个事务都提交并释放锁，其他用户才能访问该数据。悲观锁又可分为排它锁（写锁）和共享锁（读锁）。")]),t._v(" "),s("li",[t._v("时间戳 时间戳指在数据库表中额外加一个时间戳列TimeStamp。每次读数 据时，都把时间戳也读出来，在更新数据时把时间戳加 1，在提交之 前跟数据库的该字段比较一次，如果比数据库的值大，就允许保存，\n否则不允许保存。这种处理方法虽然不使用数据库系统提供的锁机 制，但是可以大大提高数据库处理的并发量。")])]),t._v(" "),s("h2",{attrs:{id:"数据库锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库锁"}},[t._v("#")]),t._v(" 数据库锁")]),t._v(" "),s("ol",[s("li",[t._v("行级锁")])]),t._v(" "),s("p",[t._v("行级锁指对某行数据加锁，是一种排他锁，防止其他事务修改此行。在执行以下数据库操作时，数据库会自动应用行级锁。")]),t._v(" "),s("p",[t._v("◎ INSERT 、 UPDATE 、 DELETE 、 SELECT … FOR UPDATE [OF columns] [WAIT n|NOWAIT]。")]),t._v(" "),s("p",[t._v("◎ SELECT … FOR UPDATE语句允许用户一次针对多条记录执行更新。")]),t._v(" "),s("p",[t._v("◎ 使用COMMIT或ROLLBACK语句释放锁。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("表级锁")])]),t._v(" "),s("p",[t._v("表级锁指对当前操作的整张表加锁，它的实现简单，资源消耗较 少，被大部分存储引擎支持。最常使用的MyISAM与InnoDB都支持表级 锁定。表级锁定分为表共享读锁（共享锁）与表独占写锁（排他锁）。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("页级锁")])]),t._v(" "),s("p",[t._v("页级锁的锁定粒度介于行级锁和表级锁之间。表级锁的加锁速度 快，但冲突多，行级冲突少，但加锁速度慢。页级锁在二者之间做了平衡，一次锁定相邻的一组记录。")]),t._v(" "),s("p",[t._v("4.基于Redis的分布式锁（锁超时的时间不容易确定）")]),t._v(" "),s("p",[t._v("数据库锁是基于单个数据库实现的，在我们的业务跨多个数据库 时，就要使用分布式锁来保证数据的一致性。")]),t._v(" "),s("p",[t._v("下面介绍使用Redis实现 一个分布式锁的流程。 Redis实现的分布式锁以Redis setnx命令为中心实现 ， setnx 是 Redis 的 写 入 操 作 命 令 ， 具 体 语 法 为 setnx(key val)。\n在且仅在key不存在时，则插入一个key为val的字符串，返回1；若key存在，则什么都不做，返回0。通过setnx实现分布式锁的思路如下。")]),t._v(" "),s("p",[t._v("◎ 获取锁：在获取锁时调用setnx，如果返回 0，则该锁正在被别人使用；如果返回1，则成功获取锁。")]),t._v(" "),s("p",[t._v("◎ 释放锁：在释放锁时，判断锁是否存在，如果存在，则执行Redis的delete操作释放锁。")]),t._v(" "),s("p",[t._v("简单的Redis实现分布式锁的代码如下，注意，如果锁并发比较 大，则可以设置一个锁的超时时间，在超时时间到后，Redis会自动释放锁给其他线程使用：")]),t._v(" "),s("imgv",{attrs:{v:"/img/mysql/redis_lock.png"}}),t._v(" "),s("h2",{attrs:{id:"数据库分表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库分表"}},[t._v("#")]),t._v(" 数据库分表")]),t._v(" "),s("imgv",{attrs:{v:"/img/mysql/sub.png"}}),t._v(" "),s("h2",{attrs:{id:"druid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#druid"}},[t._v("#")]),t._v(" Druid")]),t._v(" "),s("p",[t._v("Druid（发音：丢的）是阿里巴巴开源的一款性能优秀的数据库连接池，同时扩展了SQL监控的相关功能。")]),t._v(" "),s("h3",{attrs:{id:"依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--mysql--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mysql-connector-java"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("runtime"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--    连接池--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alibaba"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("druid"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--   或者druid与springboot整合--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alibaba"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("druid-spring-boot-starter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("h4",{attrs:{id:"jdbc-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdbc-properties"}},[t._v("#")]),t._v(" jdbc.properties")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# JDBC\n# MySQL 8.x com.mysql.cj.jdbc.Driver\njdbc.driverClass=com.mysql.jdbc.Driver\njdbc.connectionURL=jdbc:mysql://xxxx\njdbc.username=root\njdbc.password=123456\n\n# JDBC Pool\njdbc.pool.init=1\njdbc.pool.minIdle=3\njdbc.pool.maxActive=20\n\n# JDBC Test\njdbc.testSql=SELECT 'x' FROM DUAL \n")])])]),s("h4",{attrs:{id:"yml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yml"}},[t._v("#")]),t._v(" .yml")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.alibaba.druid.pool.DruidDataSource\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driverClassName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.cj.jdbc.Driver\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("druid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//aaa.bbb.ccc.ddd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/qcsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("useUnicode=true"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&characterEncoding=utf-8&serverTimezone=UTC&useSSL=false")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxx\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化大小")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("initial-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pool 最大值")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-active")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pool 最小值")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("min-idle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置获取连接等待超时的时间")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开PSCache，并且指定每个连接上PSCache的大小")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pool-prepared-statements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-pool-prepared-statement-per-connection-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("time-between-eviction-runs-millis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置一个连接在池中最小生存的时间，单位是毫秒")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("min-evictable-idle-time-millis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300000")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#validation-query: SELECT 1 FROM DUAL")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test-while-idle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test-on-borrow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test-on-return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stat-view-servlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /druid/*\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("login-username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxx\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("login-password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yyy\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-slow-sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("slow-sql-millis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("merge-sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("multi-statement-allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("h3",{attrs:{id:"datasource注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datasource注入"}},[t._v("#")]),t._v(" DataSource注入")]),t._v(" "),s("p",[t._v("如果使用SpringBoot的AutoConfigure的话，这一步就可以省了。")]),t._v(" "),s("p",[t._v("否则需要给SpringBoot容器中注入"),s("code",[t._v("DataSource")])]),t._v(" "),s("h3",{attrs:{id:"监控中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控中心"}},[t._v("#")]),t._v(" 监控中心")]),t._v(" "),s("p",[t._v("Druid提供了大量的监控数据，只需要在"),s("code",[t._v("web.xml")]),t._v("中配置一个"),s("code",[t._v("Servlet")]),t._v("就可以方便地查看这些信息。")]),t._v(" "),s("p",[t._v("修改"),s("code",[t._v("web.xml")]),t._v("配置文件，增加Druid提供的"),s("code",[t._v("Servlet")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("DruidStatView"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alibaba.druid.support.http.StatViewServlet"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("DruidStatView"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/druid/*"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servlet-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("打开浏览器，输入： "),s("code",[t._v("http://192.168.3.110:30999/base/druid/login.html")]),t._v(" 浏览器显示效果如下：")]),t._v(" "),s("imgv",{attrs:{v:"/img/mysql/druid-stat.png"}}),t._v(" "),s("h2",{attrs:{id:"进入mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入mysql"}},[t._v("#")]),t._v(" 进入mysql")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql -hlocalhsot -uroot -p\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看数据库 以分号结尾")]),t._v("\nshow databases"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"最大连接数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最大连接数"}},[t._v("#")]),t._v(" 最大连接数")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改最大连接数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereis")]),t._v(" my.cnf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/my.cnf\n")])])]),s("imgv",{attrs:{v:"/img/mysql/mysql-max-connections.png"}}),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h3",{attrs:{id:"navicat-报错-1030-get-error-28-from-storage-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navicat-报错-1030-get-error-28-from-storage-engine"}},[t._v("#")]),t._v(" navicat 报错：1030 get error 28 from storage engine")]),t._v(" "),s("p",[t._v("解决方案：磁盘不够，使用"),s("code",[t._v("docker system prune")]),t._v("清理镜像即可。")]),t._v(" "),s("h3",{attrs:{id:"_1040-is-blocked-because-of-many-connection-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1040-is-blocked-because-of-many-connection-errors"}},[t._v("#")]),t._v(" 1040 is blocked because of many connection errors")]),t._v(" "),s("p",[t._v("连接数过多，解决方案：增加连接数/重启mysql")]),t._v(" "),s("h3",{attrs:{id:"unknown-variable-max-connections-75-when-trying-to-start-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unknown-variable-max-connections-75-when-trying-to-start-mysql"}},[t._v("#")]),t._v(" \"unknown variable 'max_connections=75'\" when trying to start mysql")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereis")]),t._v(" my.cnf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/my.cnf\n")])])]),s("p",[t._v("Please edit [mysql] to [mysqld] and start mysql")]),t._v(" "),s("h3",{attrs:{id:"com-alibaba-druid-pool-getconnectiontimeoutexception-wait-millis-60000-active-20-maxactive-20"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#com-alibaba-druid-pool-getconnectiontimeoutexception-wait-millis-60000-active-20-maxactive-20"}},[t._v("#")]),t._v(" com.alibaba.druid.pool.GetConnectionTimeoutException: wait millis 60000, active 20, maxActive 20")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_44299027/article/details/104339164",target:"_blank",rel:"noopener noreferrer"}},[t._v("修改druid的最大连接数，并进行超时回收"),s("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=e.exports}}]);