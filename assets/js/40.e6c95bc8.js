(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{476:function(e,r,v){"use strict";v.r(r);var o=v(2),i=Object(o.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"dubbo源码-rpc调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dubbo源码-rpc调用"}},[e._v("#")]),e._v(" Dubbo源码-RPC调用")]),e._v(" "),r("h2",{attrs:{id:"_1-provider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-provider"}},[e._v("#")]),e._v(" 1. Provider")]),e._v(" "),r("p",[e._v("Dubbo调用中，Provider方提供监听程序，在监听到某个Service的调用后，通过内部的代理来调用对应实例的相应方法，将结果或异常序列化后通过socket连接返回给调用方")]),e._v(" "),r("h3",{attrs:{id:"_1-1-init-export"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-init-export"}},[e._v("#")]),e._v(" 1.1 Init & export")]),e._v(" "),r("ol",[r("li",[e._v("Spring扫描"),r("code",[e._v("BeanDefinition")]),e._v("的过程中，Dubbo通过"),r("code",[e._v("ServiceAnnotationBeanPostProcessor")]),e._v("介入，来将带有Dubbo自定义注解"),r("code",[e._v("@Service")]),e._v("的类注册成"),r("code",[e._v("BeanDefinition")])]),e._v(" "),r("li",[e._v("在Bean实例初始化过程中，上述"),r("code",[e._v("BeanDefinition")]),e._v("被初始化成"),r("code",[e._v("ServiceBean")]),e._v("实例，内部存储Service的所有配置信息，包括URL")]),e._v(" "),r("li",[e._v("Spring发布ContextRefreshed事件后，DubboBootstrap的start方法被触发，在初始化相关环境后，开始exportService")]),e._v(" "),r("li",[e._v("export:遍历所有的ServiceBean，调用其export方法(实际上是父类ServiceConfig类的实现):\n"),r("ol",[r("li",[e._v("初始化serviceMetadata对象")]),e._v(" "),r("li",[e._v("注册Service到ServiceRepository")]),e._v(" "),r("li",[e._v("解析HostIp,顺序：环境变量(DUBBO_IP_TO_BIND) -> Java System Properties(DUBBO_IP_TO_BIND) -> 配置文件配置(单独配置或全局配置) -> /etc/hosts -> InetAddress类获取到的第一个可用IP")]),e._v(" "),r("li",[e._v("解析HostPort,顺序:环境变量(DUBBO_PORT_TO_BIND) -> Java system properties -> 配置文件配置 -> 传输协议默认端口 -> 随机端口")]),e._v(" "),r("li",[e._v("创建Invoker：ProxyFactory的getInvoker将代理包装成Invoker对象")]),e._v(" "),r("li",[e._v("调用Wrapper方法，启动qos，进行filter")]),e._v(" "),r("li",[e._v("Invoker包装成InvokerDelegate")]),e._v(" "),r("li",[e._v("构建InvokerChain，Invoker包装成匿名内部类")]),e._v(" "),r("li",[e._v("调用到DubboProtocol的invoke方法")]),e._v(" "),r("li",[e._v("启动监听服务器:层层包装：NettyServer->HeaderExchangeServer->ExchangeServer->DubboProtocolServer")]),e._v(" "),r("li",[e._v("优化序列化过程")]),e._v(" "),r("li",[e._v("向注册中心注册provider url")]),e._v(" "),r("li",[e._v("发布ServiceDefinition")])])])]),e._v(" "),r("h3",{attrs:{id:"_1-2-provider-invoker调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-provider-invoker调用"}},[e._v("#")]),e._v(" 1.2 Provider Invoker调用")]),e._v(" "),r("p",[e._v("Provider被调用的入口"),r("code",[e._v("DecodeHandler.received")]),e._v("方法，此方法顺序调用"),r("code",[e._v("ChannelHandler.received")]),e._v("-> "),r("code",[e._v("HeaderExchangeHandler.handleRequest")]),e._v(" -> "),r("code",[e._v("DubboProtocol匿名内部类的reply")]),e._v("方法，开始调用链：")]),e._v(" "),r("ol",[r("li",[e._v("Invoker的包装链")])]),e._v(" "),r("p",[e._v("Invoker -> ProxyFactory匿名Wrapper -> AbstractProxyInvoker -> DelegateProviderMetaDataInvoker -> InvokerWrapper -> ProtocolFilterWrapper")]),e._v(" "),r("p",[e._v("调用与包装链相反，即先调用ProtocolFilterWrapper，顺序调用到实际实现类\n2. ProtocolFilterWrapper内部存储了大量Filter实现，调用时会根据注解的Order来顺序调用\n- EchoFilter：处理echo协议\n- ClassLoaderFilter：更换ClassLoader为Proxy Target的ClassLoader\n- GenericFilter：处理泛型调用,即"),r("code",[e._v('$invoke("xxxMethod",[paramtypes],[params])')]),e._v("类型的调用\n- ContextFilter：处理上下文\n- TraceFilter：跟踪处理时间等\n- TimeoutFilter：处理超时\n- MonitorFilter：处理监控数据上报\n- ExceptionFilter：异常处理")]),e._v(" "),r("h2",{attrs:{id:"_2-consumer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-consumer"}},[e._v("#")]),e._v(" 2. Consumer")]),e._v(" "),r("p",[e._v("参与Consumer的rpc调用的主要插件有：")]),e._v(" "),r("ul",[r("li",[e._v("ServiceRepository：存储所有的Service,Consumer和Provider")]),e._v(" "),r("li",[e._v("ConsumerModel：")]),e._v(" "),r("li",[e._v("RouterFactory：创建Router对象")]),e._v(" "),r("li",[e._v("Router：负责处理路由策略")]),e._v(" "),r("li",[e._v("RouterChain: 顾名思义，路由链")]),e._v(" "),r("li",[e._v("RegistryDirectory：处理注册中心的url转换与存储，注册与订阅逻辑")]),e._v(" "),r("li",[e._v("MetadataService：存储ServiceDefinition")]),e._v(" "),r("li",[e._v("Invoker：实际执行调用")])]),e._v(" "),r("h3",{attrs:{id:"_2-1-init-refer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-init-refer"}},[e._v("#")]),e._v(" 2.1 Init & refer")]),e._v(" "),r("p",[e._v("Spring初始化单例Bean过程中，对@Reference注解的Field，初始化并注入一个ReferenceBean。然后创建代理类，连接Transporter和实际执行逻辑的Bean，代理创建流程如下")]),e._v(" "),r("ol",[r("li",[e._v("初始化、升级Config\n"),r("ol",[r("li",[e._v("初始化、从注册中心拉取、校验ConsumerConfig")]),e._v(" "),r("li",[e._v("读取可能的dubbo resolve 文件：dubbo-resolve.properties")])])]),e._v(" "),r("li",[e._v("初始化serivceMetadata")]),e._v(" "),r("li",[e._v("校验Stub实现")]),e._v(" "),r("li",[e._v("获取ServiceRepository并注册Consumer")]),e._v(" "),r("li",[e._v("ServiceRepository创建Proxy：\n"),r("ol",[r("li",[e._v('判断是否走本地Jvm代理：主要是判断Service的scope属性是否是"local"')]),e._v(" "),r("li",[e._v("获取并校验注册中心列表")]),e._v(" "),r("li",[e._v("调用RegistryProtocol.refer方法获取Invoker\n"),r("ol",[r("li",[e._v("生成RegistryDirectory")]),e._v(" "),r("li",[e._v("参数处理，URL处理，构建成Consumer URL，即:consumer://192.168.1.1/some.interface?的形式")]),e._v(" "),r("li",[e._v("注册Consumer：将上面构建的ConsumerUrl转换成文件路径，调用RegistryDirectory的register方法尝试注册到注册中心，consumer注册完成")]),e._v(" "),r("li",[e._v("构建RouterChain：调用所有的RouterFactory来获取Router列表并排序")]),e._v(" "),r("li",[e._v("订阅Provider：调用RegistryDirectory的subscribe方法，获取下列路径的文件\n"),r("ul",[r("li",[e._v("/dubbo/name.of.service/providers")]),e._v(" "),r("li",[e._v("/dubbo/name.of.service/configurators")]),e._v(" "),r("li",[e._v("/dubbo/name.of.service/routers")])])]),e._v(" "),r("li",[e._v("根据获取到的Provider的URL列表，构建InvokerChain，Invoker的构造过程见[Invoker构造](### 2.3),构建InvokerChain即获取所有的Filter并链式调用Invoker")]),e._v(" "),r("li",[e._v("上面构建成InvokerChain后的Invoker包装成InvokerDelegate")]),e._v(" "),r("li",[e._v("cluster.join后，上面的Invoker再包装成MockClusterInvoker")])])]),e._v(" "),r("li",[e._v("检测Invoker是否连接，如果Service的所有Invoker都无法连接，报错退出")]),e._v(" "),r("li",[e._v("PublishServiceDefinition:把对应接口的ServiceDefinition放到MetadataService里")]),e._v(" "),r("li",[e._v("使用ProxyFactory把Invoker对象代理成对应接口，底层实现为JavaassistProxyFactory，Dubbo在JDK自带Proxy的基础上进行了代码的二次编译")])])]),e._v(" "),r("li",[e._v("发布事件:ReferenceConfigInitializedEvent")])]),e._v(" "),r("h3",{attrs:{id:"_2-2-referencebean的主要属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-referencebean的主要属性"}},[e._v("#")]),e._v(" 2.2 ReferenceBean的主要属性")]),e._v(" "),r("ol",[r("li",[e._v("ServiceMetadata:Service的元信息：接口名，Group，version等信息")]),e._v(" "),r("li",[e._v("ConsumerConfig:保存Consumer配置信息，包括代理相关的策略name，调度相关的线程池参数，RPC相关的客户端类型等")]),e._v(" "),r("li",[e._v("ServiceDescriptor：Service描述符，跟ServiceMeta属性重复，这部分有很多冗余代码")]),e._v(" "),r("li",[e._v("RegistryConfig:注册中心配置")]),e._v(" "),r("li",[e._v("MetadataService：存储与发布Service元数据")]),e._v(" "),r("li",[e._v("RegistryDirectory：存储到注册中心的文件夹")])]),e._v(" "),r("h3",{attrs:{id:"_2-3-invoker构造过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-invoker构造过程"}},[e._v("#")]),e._v(" 2.3 Invoker构造过程")]),e._v(" "),r("ol",[r("li",[e._v("根据URL,获取ExchangeClient数组")]),e._v(" "),r("li",[e._v("初始化Exchanger，默认使用HeaderExchanger，ExchangeHandler使用Dubbo内部类")]),e._v(" "),r("li",[e._v("初始化DubboClient，设置代理目标Interface,url,ExchangeClient数组,invoker数组")]),e._v(" "),r("li",[e._v("构造->DubboInvoker组件构成\n"),r("ol",[r("li",[e._v("列表-DubboClient：\n"),r("ol",[r("li",[e._v("url")]),e._v(" "),r("li",[e._v("interface")]),e._v(" "),r("li",[e._v("ExchangeClient\n"),r("ol",[r("li",[e._v("ExchangeChannel")]),e._v(" "),r("li",[e._v("Handler")])])]),e._v(" "),r("li",[e._v("Invokers")])])]),e._v(" "),r("li",[e._v("version")]),e._v(" "),r("li",[e._v("invokers->指向Protocol的Invoker列表")])])]),e._v(" "),r("li",[e._v("层层包装:DubboInvoker->AsyncToSyncInvoker->ListenerInvokerWrapper")])]),e._v(" "),r("p",[e._v("附：Invoker千层饼层层包装：")]),e._v(" "),r("p",[e._v("DubboInvoker -> AsysncToSyncInvoker -> ListenerInvokerWrapper -> ProtocolFilterWrapper -> InvokerDelegate ->  AbstractClusterInvoker -> AbstractCluster.InterceptorInvokerNode ->  MockClusterInvoker")]),e._v(" "),r("h3",{attrs:{id:"_2-4-invoker调用过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-invoker调用过程"}},[e._v("#")]),e._v(" 2.4 Invoker调用过程")]),e._v(" "),r("p",[e._v("逆向沿Invoker对应的包装过程一路调用下去")]),e._v(" "),r("ol",[r("li",[e._v("MockClusterInvoker:创建RpcInvocation对象，判断是否Mock，非Mock继续调用")]),e._v(" "),r("li",[e._v("AbstractCluster.InterceptorInvokerNode:\n"),r("ol",[r("li",[e._v("before:创建RpcContext")]),e._v(" "),r("li",[e._v("调用内部的Invoker")]),e._v(" "),r("li",[e._v("after:清理RpcContext")])])]),e._v(" "),r("li",[e._v("AbstractClusterInvoker:\n"),r("ol",[r("li",[e._v("顺序调用Router获取Invoker列表")]),e._v(" "),r("li",[e._v("初始化LoadBalance:未指定的话是Random")]),e._v(" "),r("li",[e._v("获取默认重试次数")]),e._v(" "),r("li",[e._v("带重试，选取并调用使用的Invoker\n"),r("ol",[r("li",[e._v("有sticky Invoker直接返回它")]),e._v(" "),r("li",[e._v("调用策略选取一个Invoker，但是在下面的情况下会触发reselect\n"),r("ol",[r("li",[e._v("本次调用在重试，且前面已经调用过这个Invoker，表明这个Invoker很可能有问题")]),e._v(" "),r("li",[e._v("选取的Invoker不可用")])])]),e._v(" "),r("li",[e._v("调用Invoker")])])])])]),e._v(" "),r("li",[e._v("ProtocolFilterWrapper:")]),e._v(" "),r("li",[e._v("AsyncToSyncInvoker:\n"),r("ol",[r("li",[e._v("上下文属性处理")]),e._v(" "),r("li",[e._v("调用DubboInvoker的Invoke方法")]),e._v(" "),r("li",[e._v("阻塞直到拿到result或抛出异常")])])]),e._v(" "),r("li",[e._v("DubboInvoker:调用ExchangeClient的send(不需要获取响应的情况)或者request方法(需要获取响应的情况)，返回CompletableFuture给上层\n"),r("ol",[r("li",[e._v("底层调用HeaderExchangeChannel的send/request方法")]),e._v(" "),r("li",[e._v("返回Future对象")])])])]),e._v(" "),r("p",[e._v("总结：Router->LoadBalance->reTry->Invoke")])])}),[],!1,null,null,null);r.default=i.exports}}]);