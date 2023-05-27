(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{550:function(s,t,a){"use strict";a.r(t);var e=a(2),_=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis数据类型与存储结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis数据类型与存储结构"}},[s._v("#")]),s._v(" Redis数据类型与存储结构")]),s._v(" "),t("p",[s._v("对于Redis来说，Key类似SQL中Table的概念。Key指向某种基本的数据类型。Redis有六种基本的数据类型：Hash, ZSet, Set, String, List, HyperLogLog。其中")]),s._v(" "),t("ol",[t("li",[s._v("存储0元数据的有：String,HyperLogLog")]),s._v(" "),t("li",[s._v("存储一元数据的有：List,Set")]),s._v(" "),t("li",[s._v("存储二元数据的有: Hash[存储K-V对],Zset[Value+分值]")])]),s._v(" "),t("h2",{attrs:{id:"string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[s._v("#")]),s._v(" String")]),s._v(" "),t("p",[s._v("存储字符串,底层采用SDS结构来存储数据，实际上是存储了当前长度和总长度的C Struct.底层存储时有多种不同的策略：")]),s._v(" "),t("ol",[t("li",[s._v("长度小于44时，根据是否能parse成整数来存储为"),t("code",[s._v("OBJ_ENCODING_EMBSTR")]),s._v("或者"),t("code",[s._v("OBJ_ENCODING_INT")]),s._v(";")]),s._v(" "),t("li",[s._v("长度大于44时，内部编码方式改为"),t("code",[s._v("OBJ_ENCODING_RAW")]),s._v(";")])]),s._v(" "),t("h3",{attrs:{id:"为什么是44字节分割"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么是44字节分割"}},[s._v("#")]),s._v(" 为什么是44字节分割")]),s._v(" "),t("p",[s._v("3.2版本前，是用39字节分割的，原因是redis希望对于短的字符串，只需要一次alloc过程。然而内存分配器jemalloc分配的内存如果超出了64个字节就认为是一个大字符串，就会用到raw编码。因此一次性分配内存限制为64字节。")]),s._v(" "),t("p",[s._v("首先RedisObject的定义：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("redisObject")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4bit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4bit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" lru"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("LRU_BITS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 24bit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" refcount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 32bit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 64位系统为64bit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" robj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("总计128bit=16字节")]),s._v(" "),t("p",[s._v("然后看一下SDS占用的字节数")]),s._v(" "),t("p",[s._v("3.2版本前:")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("sdshdr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4字节")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" free"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4字节")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("总计8个字节，算上SDS为了共用glibc的字符串函数在byte[] 数组里强制加入的"),t("code",[s._v("\\0")]),s._v("结束符1个字节，剩下留给内容的空间为64-16-1-8=39字节")]),s._v(" "),t("p",[s._v("3.2版本后:")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("__attribute__")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__packed__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("sdshdr8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint8_t")]),s._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 8bit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint8_t")]),s._v(" alloc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 8bit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//8bit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("总共占用3字节，剩余64-16-1-3=44字节")]),s._v(" "),t("h3",{attrs:{id:"string命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string命令"}},[s._v("#")]),s._v(" String命令")]),s._v(" "),t("ul",[t("li",[s._v("基本操作："),t("code",[s._v("GET")]),s._v(","),t("code",[s._v("SET")]),s._v(","),t("code",[s._v("INCR")]),s._v(","),t("code",[s._v("APPEND")]),s._v(","),t("code",[s._v("SETRANGE")])]),s._v(" "),t("li",[s._v("CAS操作："),t("code",[s._v("SETNX")]),s._v(","),t("code",[s._v("MSETNX")]),s._v(",常用于分布式锁")]),s._v(" "),t("li",[s._v("Bit操作："),t("code",[s._v("BITCOUNT")]),s._v(","),t("code",[s._v("BITFIELD")]),s._v(","),t("code",[s._v("BITOP")]),s._v(","),t("code",[s._v("BITPOS")])])]),s._v(" "),t("h2",{attrs:{id:"list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[s._v("#")]),s._v(" List")]),s._v(" "),t("p",[s._v("List顾名思义，提供有序数组的功能，在整体数据较少或者节点数据不大时，用定长数组zipList存储，在某节点长度超过64字节或整体长度超过512时，采用双向链表存储")]),s._v(" "),t("h3",{attrs:{id:"list命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list命令"}},[s._v("#")]),s._v(" List命令")]),s._v(" "),t("ul",[t("li",[s._v("增："),t("code",[s._v("LPUSH")]),s._v(","),t("code",[s._v("RPUSH")]),s._v(","),t("code",[s._v("LINSERT")]),s._v(",CAS操作："),t("code",[s._v("LPUSHX")]),s._v("，"),t("code",[s._v("RPUSHX")])]),s._v(" "),t("li",[s._v("删: "),t("code",[s._v("LREM")]),s._v(","),t("code",[s._v("LPOP")]),s._v(","),t("code",[s._v("RPOP")]),s._v(","),t("code",[s._v("BLPOP")]),s._v(","),t("code",[s._v("BRPOP")])]),s._v(" "),t("li",[s._v("改："),t("code",[s._v("LSET")])]),s._v(" "),t("li",[s._v("查："),t("code",[s._v("LLEN")]),s._v("，"),t("code",[s._v("LINDEX")])]),s._v(" "),t("li",[s._v("RPOPLPUSH:从数组1的尾部移出元素到数组2的头部")])]),s._v(" "),t("h2",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[s._v("#")]),s._v(" Set")]),s._v(" "),t("p",[s._v("Set存储不重复的数据，底层采用int数组或者hashtable来存储，转换的边界条件一样是节点64字节或者整体长度512个。")]),s._v(" "),t("h3",{attrs:{id:"set基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set基本命令"}},[s._v("#")]),s._v(" Set基本命令")]),s._v(" "),t("ul",[t("li",[s._v("增："),t("code",[s._v("SADD")])]),s._v(" "),t("li",[s._v("删："),t("code",[s._v("SREM")]),s._v(","),t("code",[s._v("SPOP")]),s._v("[随机删除一个],"),t("code",[s._v("SMOVE")]),s._v("[将元素从一个Set转移到另外一个Set]")]),s._v(" "),t("li",[s._v("查："),t("code",[s._v("SMEMBERS")]),s._v(","),t("code",[s._v("SISMEMBER")]),s._v(","),t("code",[s._v("SRANDMEMBER")]),s._v(","),t("code",[s._v("SSCAN")])])]),s._v(" "),t("h3",{attrs:{id:"set集合命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set集合命令"}},[s._v("#")]),s._v(" Set集合命令")]),s._v(" "),t("ul",[t("li",[s._v("DIFF:"),t("code",[s._v("SDIFF")]),s._v(","),t("code",[s._v("SDIFFSTORE")])]),s._v(" "),t("li",[s._v("交："),t("code",[s._v("SINTER")]),s._v(","),t("code",[s._v("SINTERSTORE")])]),s._v(" "),t("li",[s._v("并："),t("code",[s._v("SUNION")]),s._v(","),t("code",[s._v("SUNIONSTORE")])])]),s._v(" "),t("h2",{attrs:{id:"hyperloglog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog"}},[s._v("#")]),s._v(" HyperLogLog")]),s._v(" "),t("p",[s._v("统计集合中不重复元素的个数，底层使用概率算法来计算，不实际存储数据，每个key对应的数据大小为12K左右，错误率0.81%,算法参考"),t("a",{attrs:{href:"http://www.rainybowe.com/blog/2017/07/13/%E7%A5%9E%E5%A5%87%E7%9A%84HyperLogLog%E7%AE%97%E6%B3%95/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("神奇的HyperLogLog算法"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"hyperloglog基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog基本命令"}},[s._v("#")]),s._v(" HyperLogLog基本命令")]),s._v(" "),t("ul",[t("li",[s._v("增："),t("code",[s._v("PFADD")])]),s._v(" "),t("li",[s._v("查："),t("code",[s._v("PFCOUNT")])]),s._v(" "),t("li",[s._v("合并两个HyperLogLog:"),t("code",[s._v("PFMERGE")])])]),s._v(" "),t("h2",{attrs:{id:"hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[s._v("#")]),s._v(" Hash")]),s._v(" "),t("p",[s._v("Hash类似Java中常用的HashMap，存储K-V对，底层使用ZipList或者HashTable来存储")]),s._v(" "),t("h3",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("ul",[t("li",[s._v("增:"),t("code",[s._v("HSET")]),s._v(","),t("code",[s._v("HMSET")]),s._v(","),t("code",[s._v("HSETNX")])]),s._v(" "),t("li",[s._v("删:"),t("code",[s._v("HDEL")])]),s._v(" "),t("li",[s._v("改:"),t("code",[s._v("HINCRBY")]),s._v(","),t("code",[s._v("HINCRBYFLOAT")])]),s._v(" "),t("li",[s._v("查Value:"),t("code",[s._v("HGET")]),s._v(","),t("code",[s._v("HGETALL")]),s._v(","),t("code",[s._v("HMGET")]),s._v(","),t("code",[s._v("HVALS")])]),s._v(" "),t("li",[s._v("查Key:"),t("code",[s._v("HEXISTS")]),s._v(","),t("code",[s._v("HKEYS")])]),s._v(" "),t("li",[s._v("查长度与迭代:"),t("code",[s._v("HLEN")]),s._v(","),t("code",[s._v("HCASN")]),s._v(","),t("code",[s._v("HSTRLEN")])])]),s._v(" "),t("h2",{attrs:{id:"zset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zset"}},[s._v("#")]),s._v(" ZSET")]),s._v(" "),t("p",[s._v("ZSET与SET的区别在于，ZSET中元素是有序的，在ZSET新增元素时，需要指定一个SCORE参数，ZSET内部会根据SCORE进行排序并存储。底层存储使用zipList或者skiplist，转换条件是单元素长度64字节或者总元素个数128个。")]),s._v(" "),t("h3",{attrs:{id:"zset命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zset命令"}},[s._v("#")]),s._v(" ZSET命令")]),s._v(" "),t("ul",[t("li",[s._v("增:"),t("code",[s._v("ZADD")]),s._v(","),t("code",[s._v("ZINCBY")])]),s._v(" "),t("li",[s._v("删:"),t("code",[s._v("ZREM")]),s._v(","),t("code",[s._v("ZREMRANGEBYLEX")]),s._v(","),t("code",[s._v("ZREMRANGEBYRANK")]),s._v(","),t("code",[s._v("ZREMRANGEBYSCORE")]),s._v("以及REV版本")]),s._v(" "),t("li",[s._v("总数:"),t("code",[s._v("ZCARD")]),s._v(","),t("code",[s._v("ZCOUNT")])]),s._v(" "),t("li",[s._v("最值:"),t("code",[s._v("ZPOPMAX")]),s._v(","),t("code",[s._v("BZPOPMAX")]),s._v(","),t("code",[s._v("ZPOPMIN")]),s._v(","),t("code",[s._v("BZPOPMIN")])]),s._v(" "),t("li",[s._v("范围查询:"),t("code",[s._v("ZRANGE")]),s._v(","),t("code",[s._v("ZRANGEBYLEX")]),s._v(","),t("code",[s._v("ZRANGEBYSCORE")]),s._v("以及REV版本")]),s._v(" "),t("li",[s._v("迭代:"),t("code",[s._v("ZSCAN")])]),s._v(" "),t("li",[s._v("带权重交集想加:"),t("code",[s._v("ZINTERSTORE")])]),s._v(" "),t("li",[s._v("并集:"),t("code",[s._v("ZUNIONSTORE")])])]),s._v(" "),t("p",[s._v("解释下查询、删除中不带后缀，BYLEX和BYSCORE的区别：")]),s._v(" "),t("p",[s._v("普通不带后缀代表根据index查询，BYLEX表明根据value比较函数来查询范围，BYSCORE，严格按照SCORE查询范围。其中容易混淆的是不带后缀和BYSCORE后缀，两者的区别是不带后缀的是严格按照index来查询的，而对于同SCORE的两个value，index一定是不一样的，后者则按照Score排序。")])])}),[],!1,null,null,null);t.default=_.exports}}]);