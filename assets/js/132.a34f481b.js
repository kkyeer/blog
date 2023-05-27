(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{566:function(e,t,i){"use strict";i.r(t);var r=i(2),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"springboot源码-上下文annotationconfigservletwebserverapplicationcontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot源码-上下文annotationconfigservletwebserverapplicationcontext"}},[e._v("#")]),e._v(" SpringBoot源码-上下文AnnotationConfigServletWebServerApplicationContext")]),e._v(" "),t("h2",{attrs:{id:"_1-uml图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-uml图"}},[e._v("#")]),e._v(" 1. UML图")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/kkyeer/picbed/AnnotationConfigServletWebServerApplicationContext.svg",alt:"AnnotationConfigServletWebServerApplicationContext.png"}})]),e._v(" "),t("h2",{attrs:{id:"_2-初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化"}},[e._v("#")]),e._v(" 2. 初始化")]),e._v(" "),t("ol",[t("li",[e._v("BeanFactory初始化为DefaultListableBeanFactory实例")]),e._v(" "),t("li",[e._v("初始化AnnotatedBeanDefinitionReader实例")]),e._v(" "),t("li",[e._v("初始化lassPathBeanDefinitionScanner实例")]),e._v(" "),t("li",[e._v("Environment初始化为StandardServletEnvironment实例")])]),e._v(" "),t("h2",{attrs:{id:"_3-springapplication中prepare上下文过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-springapplication中prepare上下文过程"}},[e._v("#")]),e._v(" 3. SpringApplication中prepare上下文过程")]),e._v(" "),t("ol",[t("li",[e._v("setEnvironment，注意，此时把初始化给的默认Environment替换掉，包括reader和scanner中")]),e._v(" "),t("li",[e._v("postProcess过程：\n"),t("ol",[t("li",[e._v("beanFactory中放入非空的beanNameGenerator实例，注意默认为空")]),e._v(" "),t("li",[e._v("接收非空的resourceLoader及其classLoader，注意默认为空")]),e._v(" "),t("li",[e._v("接收非空，注意默认为空")]),e._v(" "),t("li",[e._v("beanFactory实例setConvertionService，取的是共享的单例")])])]),e._v(" "),t("li",[e._v("调用ApplicationContextInitializer实例的initialize方法，这些实例是在SpringApplication初始化过程中从spring.factory中加载的\n"),t("ul",[t("li",[e._v('DelegatingApplicationContextInitializer:调用"context.initializer.classes"属性定义的所有类的initialize方法')]),e._v(" "),t("li",[e._v("SharedMetadataReaderFactoryContextInitializer:注册BeanFactoryPostProcessor：CachingMetadataReaderFactoryPostProcessor")]),e._v(" "),t("li",[e._v('ContextIdApplicationContextInitializer:初始ApplicationContextId，优先取spring.application.name定义的值，没有默认"application",并把对应的ContextId对象注册到BeanFactory')]),e._v(" "),t("li",[e._v('ConfigurationWarningsApplicationContextInitializer:注册BeanFactoryPostProcessor:ConfigurationWarningsPostProcessor,其不允许@ComponentScan对应的值为"org"或"org.springframework"')]),e._v(" "),t("li",[e._v("ServerPortInfoApplicationContextInitializer:注册ApplicationListener:自己，其处理"),t("code",[e._v("local.server.port")]),e._v("属性，中间的server可能被ServerNamespace指定的值替代")]),e._v(" "),t("li",[e._v("ConditionEvaluationReportLoggingListener：新增一个ApplicationListener:ConditionEvaluationReportListener")])])]),e._v(" "),t("li",[e._v("发布contextPrepared事件到所有的ApplicationListener:\n"),t("ul",[t("li",[e._v("BackgroundPreinitializer:无操作")]),e._v(" "),t("li",[e._v("DelegatingApplicationListener：无操作")])])]),e._v(" "),t("li",[e._v("打印Start Up Log，打印Profile")]),e._v(" "),t("li",[e._v("beanFacotry注册Bean"),t("code",[e._v("springApplicationArguments：ApplicationArguments")])]),e._v(" "),t("li",[e._v("beanFacotry注册Bean"),t("code",[e._v("springBootBanner")])]),e._v(" "),t("li",[e._v("根据先前读取的值设置beanFactory的allowBeanDefinitionOverriding属性，Dubbo会默认将其设为true")]),e._v(" "),t("li",[e._v("根据SpringApplication.run()中的参数列表，读取主source，一般来说就是run方法的Class变量")]),e._v(" "),t("li",[e._v("解析上一步配置的resource为BeanDefinition，并放入BeanFactory，详情见"),t("RouterLink",{attrs:{to:"/views/spring/2020/ReadBeanDefinition.html"}},[e._v("Bean读取")])],1),e._v(" "),t("li",[e._v("广播ApplicationPreparedEvent事件:\n"),t("ul",[t("li",[e._v("ConfigFileApplicationListener:注册BeanFactoryPostProcessor：PropertySourceOrderingPostProcessor")]),e._v(" "),t("li",[e._v("LoggingApplicationListener：注册Bean："),t("code",[e._v("springBootLoggingSystem:this.loggerSystem")])])])])]),e._v(" "),t("h2",{attrs:{id:"_4-springapplication中refresh上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-springapplication中refresh上下文"}},[e._v("#")]),e._v(" 4. SpringApplication中refresh上下文")]),e._v(" "),t("ol",[t("li",[e._v("prepare:处理PropertySource")]),e._v(" "),t("li",[e._v("obtainFreshBeanFactory")]),e._v(" "),t("li",[e._v("prepareBeanFactory:\n"),t("ol",[t("li",[e._v("初始化ClassLoader")]),e._v(" "),t("li",[e._v("注册BeanPostProcessor：ApplicationContextAwareProcessor，并将各种Aware添加到忽略列表")]),e._v(" "),t("li",[e._v("注册BeanFactory，ResourceLoader，ApplicationEventPublisher，ApplicationContext为可Autowire的Bean，指向BeanFactory本身")]),e._v(" "),t("li",[e._v("注册BeanPostProcessor：ApplicationListenerDetector")]),e._v(" "),t("li",[e._v("注册Bean:"),t("code",[e._v("environment")]),e._v(","),t("code",[e._v("systemProperties")]),e._v(","),t("code",[e._v("systemEnvironment")]),e._v("，这些在Environment的准备过程中已经OK")])])]),e._v(" "),t("li",[e._v("postProcessBeanFactory：\n"),t("ol",[t("li",[e._v("注册BeanPostProcessor：WebApplicationContextServletContextAwareProcessor")]),e._v(" "),t("li",[e._v("忽略ServletContextAware")]),e._v(" "),t("li",[e._v("scanBasePackage，这里扫描的是直接手动初始化上下文时给定的basePackage")])])]),e._v(" "),t("li",[e._v("调用BeanFactoryPostProcessor,"),t("strong",[e._v("注意这里的Factory")]),e._v(":\n"),t("ol",[t("li",[e._v("调用所有的BeanDefinitionRegistryPostProcessor：\n"),t("ol",[t("li",[e._v("SharedMetadataReaderFactoryContextInitializer:注册SharedMetadataReaderFactoryBean，name为"),t("code",[e._v("org.springframework.boot.autoconfigure.internalCachingMetadataReaderFactory")]),e._v("，并将这个对象放入"),t("code",[e._v("org.springframework.context.annotation.internalConfigurationAnnotationProcessor")]),e._v("这个Bean的Property列表中")]),e._v(" "),t("li",[e._v("ConfigurationWarningsApplicationContextInitializer：检查basePackage是否非法")])])]),e._v(" "),t("li",[e._v("调用上面这一步处理后新加入的BeanDefinitionRegistryPostProcessor：\n"),t("ol",[t("li",[e._v("先调用@PriorityOrdered\n"),t("ol",[t("li",[e._v("ConfigurationClassPostProcessor：读取所有@Configuration注解的BeanDefinition，见[Spring处理@Configuration]")])])]),e._v(" "),t("li",[e._v("再调用@Ordered")]),e._v(" "),t("li",[e._v("最后调用剩余的")])])]),e._v(" "),t("li",[e._v("调用一遍上面拿到的BeanFactoryPostProcessor的postProcessBeanFactory方法，这里有个Spring默认的，会把Property列表中默认的defaultProperties放到最后")]),e._v(" "),t("li",[e._v("遍历扫出来的所有的Bean，找到新加入的BeanFactoryPostProcessor，调用postProcessBeanFactory方法：\n"),t("ol",[t("li",[e._v("PropertySourcesPlaceholderConfigurer:处理@Value和其他的${key:defaultValue}")])])]),e._v(" "),t("li",[e._v("加载loadTimeWeaver")])])]),e._v(" "),t("li",[e._v("注册BeanPostProcessor，顺序同样@PriorityOrdered>@Ordered>其他，调用beanFactory的getBean方法来初始化实例，并放入beanFactory的BeanPostProcessor列表中，其中有一类非常特殊，实现了MergedBeanDefinitionPostProcessor接口，标明这些类会在beanDefinition生成后，实例化BeanPostProcessor之前被调用")]),e._v(" "),t("li",[e._v("初始化MessageSource")]),e._v(" "),t("li",[e._v("初始化applicationEventMulticaster")]),e._v(" "),t("li",[e._v("onRefresh方法：\n"),t("ol",[t("li",[e._v("初始化themeSource")]),e._v(" "),t("li",[e._v("初始化webServer:调用ServletWebServerFactory，见"),t("code",[e._v("org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext#createWebServer")])])])]),e._v(" "),t("li",[e._v("把原来的pplicationListener注册到上面初始化的applicationEventMulticaster里，并广播暂存的earlyApplicationEvents事件")]),e._v(" "),t("li",[e._v("完成BeanFactory初始化，提前初始化所有非懒加载的Bean：\n"),t("ol",[t("li",[e._v("初始化conversionService")]),e._v(" "),t("li",[e._v("初始化LoadTimeWeaverAware")]),e._v(" "),t("li",[e._v("初始化Spring内置的辅助工具类：注解辅助类等")]),e._v(" "),t("li",[e._v("调用所有SmartInitializingSingleton类型的Bean的afterSingletonsInstantiated方法")])])]),e._v(" "),t("li",[e._v("收尾，清理缓存，调用LifecycleProcessor,广播ContextRefreshedEvent:\n"),t("ol",[t("li",[e._v("清理缓存")]),e._v(" "),t("li",[e._v("发布ContextRefreshedEvent事件")]),e._v(" "),t("li",[e._v("LiveBeansView注册Mbean")]),e._v(" "),t("li",[e._v("启动WebServer")]),e._v(" "),t("li",[e._v("发布ServletWebServerInitializedEvent事件\n"),t("ul",[t("li",[e._v("ServerPortInfoApplicationContextInitializer：注册端口信息到Property")])])])])])]),e._v(" "),t("p",[e._v("Refresh完成")])])}),[],!1,null,null,null);t.default=n.exports}}]);