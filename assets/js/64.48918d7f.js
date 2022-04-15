(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{477:function(t,a,s){"use strict";s.r(a);var n=s(23),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("设计模式")]),t._v(" "),s("p",[t._v("设计模式的目的是解耦，为了程序的灵活性。")])]),t._v(" "),s("bannerv",{attrs:{v:"/img/java/design-pattern.webp"}}),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("设计模式能有效提高代码的可读性、可重用性和可靠性，便于后续维护。")]),t._v(" "),s("p",[t._v("但设计模式也不是万能仙丹，对于简单的功能，使用设计模式反倒增加了代码的复杂性。")]),t._v(" "),s("h2",{attrs:{id:"七原则-高内聚、低耦合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七原则-高内聚、低耦合"}},[t._v("#")]),t._v(" 七原则（高内聚、低耦合）")]),t._v(" "),s("p",[t._v("设计模式有 7个原则：单一职责原则、开闭原则、里氏代换原 则、依赖倒转原则、接口隔离原则、合成/聚合复用原则、迪米特法则")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("单一职责原则 单一职责原则又称单一功能原则，它规定一个类只有一个职责。 如果有多个职责（功能）被设计在一个类中，这个类就违反了单一职责原则。")])]),t._v(" "),s("li",[s("p",[t._v("开闭原则 开闭原则规定软件中的对象（类、模块、函数等）对扩展开放， 对修改封闭，这意味着一个实体允许在不改变其源代码的前提下改变 其行为，该特性在产品化的环境下是特别有价值的，在这种环境下， 改变源代码需要经过代码审查、单元测试等过程，以确保产品的使用 质量。遵循这个原则的代码在扩展时并不发生改变，因此不需要经历上述过程。")])]),t._v(" "),s("li",[s("p",[t._v("里氏代换原则 里氏代换原则是对开闭原则的补充，规定了在任意父类可以出现 的地方，子类都一定可以出现。实现开闭原则的关键就是抽象化，父 类与子类的继承关系就是抽象化的具体表现，所以里氏代换原则是对实现抽象化的具体步骤的规范。")])]),t._v(" "),s("li",[s("p",[t._v("依赖倒置原则 依赖倒转原则指程序要依赖于抽象（Java中的抽象类和接口）， 而不依赖于具体的实现（Java中的实现类）。简单地说，就是要求对抽象进行编程，不要求对实现进行编程，这就降低了用户与实现模块之间的耦合度。")])]),t._v(" "),s("li",[s("p",[t._v("接口隔离原则 接口隔离原则指通过将不同的功能定义在不同的接口中来实现接 口的隔离，这样就避免了其他类在依赖该接口（接口上定义的功能）时依赖其不需要的接口，可减少接口之间依赖的冗余性和复杂性。")])]),t._v(" "),s("li",[s("p",[t._v("合成/聚合复用原则 合成/聚合复用原则指通过在一个新的对象中引入（注入）已有的 对象以达到类的功能复用和扩展的目的。它的设计原则是要尽量使用合成或聚合而不要使用继承来扩展类的功能。")])]),t._v(" "),s("li",[s("p",[t._v("迪米特法则（最小知识原则） 迪米特法则指一个对象尽可能少地与其他对象发生相互作用，即 一个对象对其他对象应该有尽可能少的了解或依赖。其核心思想在于 降低模块之间的耦合度，提高模块的内聚性。迪米特法则规定每个模 块对其他模块都要有尽可能少的了解和依赖，因此很容易使系统模块 之间功能独立，这使得各个模块的独立运行变得更简单，同时使得各个模块之间的组合变得更容易")])])]),t._v(" "),s("h2",{attrs:{id:"_23中设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_23中设计模式"}},[t._v("#")]),t._v(" 23中设计模式")]),t._v(" "),s("p",[t._v("设计模式按照其功能和使用场景可以分为三大类：创建型模式 （Creational Pattern）、结构型模式（Structural Pattern）和行为型模式（Behavioral Pattern）。")]),t._v(" "),s("imgv",{attrs:{v:"/img/java/designPattern.png"}}),t._v(" "),s("h2",{attrs:{id:"工厂模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[t._v("#")]),t._v(" 工厂模式")]),t._v(" "),s("p",[t._v("工厂模式输出的对象，可以是类的实例，也可以是接口的实例。")]),t._v(" "),s("p",[t._v("Spring Cloud Gateway 中的 "),s("code",[t._v("RequestRateLimiterGatewayFilterFactory")]),t._v("，就使用了工厂模式，并且输出结果的类型是接口。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.cloud.gateway.filter.request-rate-limiter"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestRateLimiterGatewayFilterFactory")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractGatewayFilterFactory")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestRateLimiterGatewayFilterFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * GatewayFilter是一个接口，而非一个类\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GatewayFilter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以匿名内部类的方式返回了所需的对象（使用Java8的Lambda表达式简化）")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exchange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" resolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exchange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultIfEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EMPTY_KEY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flatMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" limiter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAllowed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routeId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flatMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" exchange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setComplete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);