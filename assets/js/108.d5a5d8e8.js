(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{545:function(e,t,n){"use strict";n.r(t);var a=n(2),v=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"netty-基本组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#netty-基本组件"}},[e._v("#")]),e._v(" Netty 基本组件")]),e._v(" "),t("ul",[t("li",[e._v("Channel: 抽象的IO事件处理接口，read/write")]),e._v(" "),t("li",[e._v("ChannelHandler: 数据处理接口")]),e._v(" "),t("li",[e._v("ChannelPipeline: 串联ChannelHandler")]),e._v(" "),t("li",[e._v("EventLoop:")]),e._v(" "),t("li",[e._v("ChannelFuture: 配合ChannelFutureListener实现异步回调")]),e._v(" "),t("li",[e._v("Bootstrap: 用来初始化，分为ServerBootstrap和Bootstrap(客户端用)")])]),e._v(" "),t("h2",{attrs:{id:"为什么netty管理channel不需要多线程同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么netty管理channel不需要多线程同步"}},[e._v("#")]),e._v(" 为什么Netty管理Channel不需要多线程同步")]),e._v(" "),t("p",[e._v("Channel-EventLoop是一一对应的，而EventLoop会绑定唯一的Thread")]),e._v(" "),t("h2",{attrs:{id:"channelhandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channelhandler"}},[e._v("#")]),e._v(" ChannelHandler")]),e._v(" "),t("h3",{attrs:{id:"分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[e._v("#")]),e._v(" 分类")]),e._v(" "),t("p",[e._v("分为ChannelInboundHandler和ChannelOutboundHanlder两种，Netty对此有一系列包装，提供了"),t("code",[e._v("ChannelInboundHandlerAdapter")]),e._v("和"),t("code",[e._v("ChannelOutboundHandlerAdapter")]),e._v("两套抽象类，实际使用时，可以继承两种实现或其子类来进行进一步的扩展。")]),e._v(" "),t("blockquote",[t("p",[e._v("Inbound: Client -> Server\nOutbound: Server -> Client")])]),e._v(" "),t("h3",{attrs:{id:"encoder-decoder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encoder-decoder"}},[e._v("#")]),e._v(" Encoder/Decoder")]),e._v(" "),t("p",[e._v("Encoder和Decoder是特殊的ChannelHandler，分别对应Outbound和Inbound的情况，Netty自带某些实现，其中"),t("code",[e._v("ByteToMessageDecoder")]),e._v("将byte流解析成对象(Message)，典型的如"),t("code",[e._v("ProtobufDecoder")])]),e._v(" "),t("p",[e._v("注意，"),t("strong",[e._v("使用EventExecutorGroup来管理阻塞式的逻辑")])]),e._v(" "),t("h2",{attrs:{id:"channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[e._v("#")]),e._v(" Channel")]),e._v(" "),t("h3",{attrs:{id:"功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[e._v("#")]),e._v(" 功能")]),e._v(" "),t("ul",[t("li",[e._v("消息格式转换")]),e._v(" "),t("li",[e._v("异常通知")]),e._v(" "),t("li",[e._v("Channel状态变更(Active,Inactive)通知")]),e._v(" "),t("li",[e._v("Channel从EventLoop中注册/注销通知")]),e._v(" "),t("li",[e._v("自定义事件通知")])]),e._v(" "),t("h3",{attrs:{id:"多线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[e._v("#")]),e._v(" 多线程")]),e._v(" "),t("h3",{attrs:{id:"channel分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channel分类"}},[e._v("#")]),e._v(" Channel分类")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Package")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("NIO")]),e._v(" "),t("td",[e._v("io.netty.channel.socket.nio")]),e._v(" "),t("td",[e._v("使用java.nio.channel")])]),e._v(" "),t("tr",[t("td",[e._v("OIO")]),e._v(" "),t("td",[e._v("io.netty.channel.socket.oio")]),e._v(" "),t("td",[e._v("使用java.net包")])]),e._v(" "),t("tr",[t("td",[e._v("Local")]),e._v(" "),t("td",[e._v("io.netty.channel.local")]),e._v(" "),t("td",[e._v("vm内部通信")])]),e._v(" "),t("tr",[t("td",[e._v("Embedded")]),e._v(" "),t("td",[e._v("io.netty.channel.embedded")]),e._v(" "),t("td",[e._v("嵌入式，不依赖网络通信，适合测试")])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);