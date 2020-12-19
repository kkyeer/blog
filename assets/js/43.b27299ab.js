(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{550:function(a,t,e){"use strict";e.r(t);var s=e(5),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"hashmap源码-增删与扩容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashmap源码-增删与扩容"}},[a._v("#")]),a._v(" HashMap源码-增删与扩容")]),a._v(" "),e("h2",{attrs:{id:"_1-构造方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-构造方法"}},[a._v("#")]),a._v(" 1. 构造方法")]),a._v(" "),e("p",[a._v("public HashMap(int initialCapacity, float loadFactor)")]),a._v(" "),e("ul",[e("li",[a._v("initialCapacity:初始容量，传入时，threshold(下次扩容阈值)为tableSizeFor(initialCapacity)即向上找最接近的2的整数次幂，不传入默认为0，在这种情况下，在第一次put元素时，table为空不够用导致resize()，resise后capacity为默认值16，threshold为16*loadFactor;")]),a._v(" "),e("li",[a._v("loadFactor:负载因子，当table内存储数据达到此比例后，经验推断hash碰撞的可能性会大大提高，因此需要进行扩容，默认0.75，此属性为protect变量，修改需要新写HashMap的子类")])]),a._v(" "),e("h2",{attrs:{id:"_2-增删改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-增删改"}},[a._v("#")]),a._v(" 2. 增删改")]),a._v(" "),e("h3",{attrs:{id:"_2-1-增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-增"}},[a._v("#")]),a._v(" 2.1. 增")]),a._v(" "),e("p",[a._v("实际调用putVal方法来进行新增操作：")]),a._v(" "),e("h4",{attrs:{id:"_2-1-1-流程图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-流程图"}},[a._v("#")]),a._v(" 2.1.1 流程图")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/kkyeer/picbed/hashmap_put.png",alt:"hashmap_put"}})]),a._v(" "),e("ol",[e("li",[a._v("内部table的初始化：调用resize方法来进行table初始化及相关threshold计算")]),a._v(" "),e("li",[a._v("key已存在：返回值为原value")]),a._v(" "),e("li",[a._v("key不存在：返回值为null")]),a._v(" "),e("li",[a._v("Node转换成TreeNode：单个Node链长大于TREEIFY_THRESHOLD（默认为8）时进行尝试，当table大于MIN_TREEIFY_CAPACITY（默认64）时转换为树，否则仅仅进行扩容")])]),a._v(" "),e("h3",{attrs:{id:"_2-2-删"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-删"}},[a._v("#")]),a._v(" 2.2 删")]),a._v(" "),e("p",[a._v("删除的过程跟put大同小异，区别只在于，如果删除一个TreeNode，可能会造成树转化为BinNode，阈值根据树的形状为2或6，具体见红黑树部分")]),a._v(" "),e("h2",{attrs:{id:"_3-扩容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-扩容"}},[a._v("#")]),a._v(" 3. 扩容")]),a._v(" "),e("p",[a._v("扩容一共分为两步，第一步确定新的table大小和下次扩容阈值，第二步，重新将现有的table中的所有node存入新table(中间可能涉及TreeNode转链表Node)")]),a._v(" "),e("h3",{attrs:{id:"_3-1-计算table大小和下次扩容阈值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-计算table大小和下次扩容阈值"}},[a._v("#")]),a._v(" 3.1 计算table大小和下次扩容阈值")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/kkyeer/picbed/hashmap_resize.png",alt:"hashmap_resize"}})]),a._v(" "),e("h3",{attrs:{id:"_3-2-原table中的node元素拷贝到新table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-原table中的node元素拷贝到新table"}},[a._v("#")]),a._v(" 3.2 原table中的Node元素拷贝到新table")]),a._v(" "),e("p",[a._v("按新的容量初始化新table后，遍历原table的每一个Node，对于非null的Node，根据其Node类型，执行下列操作来复制到新的table")]),a._v(" "),e("h4",{attrs:{id:"_3-2-1-普通链表node的复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-普通链表node的复制"}},[a._v("#")]),a._v(" 3.2.1 普通链表Node的复制")]),a._v(" "),e("p",[a._v("链表中的元素仅会发生下面两种情况:")]),a._v(" "),e("ol",[e("li",[a._v("向右移动{原table大小(oldCap)}")])]),a._v(" "),e("div",{staticClass:"language-textile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-textile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token phrase"}},[a._v("hash                   0000000010101\n&cap-1                 0000000001111\nold_pos                0000000000101")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token phrase"}},[a._v("hash                   0000000010101\n&newcap-1              0000000011111\nnew_pos                0000000010101 => 右移了"),e("span",{pre:!0,attrs:{class:"token acronym"}},[a._v("16"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("等于oldCap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")])]),a._v("位\n")])])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("原地不动")])]),a._v(" "),e("div",{staticClass:"language-textile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-textile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token phrase"}},[a._v("hash                   0000000001101\n&cap-1                 0000000001111\nold_pos                0000000001101")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token phrase"}},[a._v("hash                   0000000001101\n&newcap-1              0000000011111\nnew_pos                0000000001101 => 位置不动\n")])])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("分别将上述两种Node按原顺序串成新链表，存入新table的对应位置")]),a._v(" "),e("h4",{attrs:{id:"_3-2-2-treenode的复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-treenode的复制"}},[a._v("#")]),a._v(" 3.2.2 TreeNode的复制")]),a._v(" "),e("p",[a._v("通过调用 ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);方法放入新的两个位置")])])}),[],!1,null,null,null);t.default=r.exports}}]);