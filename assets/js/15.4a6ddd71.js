(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{521:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"计算机中的位运算与编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机中的位运算与编码"}},[t._v("#")]),t._v(" 计算机中的位运算与编码")]),t._v(" "),a("h2",{attrs:{id:"运算符-对一个表达式执行位非运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符-对一个表达式执行位非运算"}},[t._v("#")]),t._v(" ~运算符 对一个表达式执行位非运算")]),t._v(" "),a("ul",[a("li",[t._v("运算规则为被运算数按位取反，")]),t._v(" "),a("li",[t._v("由于实际存储使用的为数字的补码，实际上是补码按位取反")]),t._v(" "),a("li",[t._v("console.log的时候，打印的为原码")])]),t._v(" "),a("h2",{attrs:{id:"常用于判断字符串是否存在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用于判断字符串是否存在"}},[t._v("#")]),t._v(" ~常用于判断字符串是否存在")]),t._v(" "),a("p",[t._v("因为~0=-1 且~-1=0,所以string.indexOf('str')为-1时，~string.indexOf('str')为0，所以\nif(~string.indexOf('str'))等同于if(string.indexOf('str')!=-1)")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" whole "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is a sample string'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sample'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("whole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("whole"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("包含")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("whole"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("不包含")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出 this is a sample string包含sample")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"原码、反码与补码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原码、反码与补码"}},[t._v("#")]),t._v(" 原码、反码与补码")]),t._v(" "),a("blockquote",[a("p",[t._v("有符号数的最高位仅表示正负，不存储数据\n即假设数字使用8bit存储（1Byte)，实际存储数字的为7bit，可表示值-(2^7^-1)~2^7^,即-127~128")])]),t._v(" "),a("h3",{attrs:{id:"正数的原码、反码与补码一致"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正数的原码、反码与补码一致"}},[t._v("#")]),t._v(" 正数的原码、反码与补码一致")]),t._v(" "),a("p",[t._v("0\n原码：00000000\n反码：00000000\n补码：00000000")]),t._v(" "),a("h3",{attrs:{id:"负数的原码-最高位1-其他位是绝对值的二进制-反码-原码最高为不变-其他位按位取反-补码-反码-1-即原码的最高位不变-其他位按位取反加1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负数的原码-最高位1-其他位是绝对值的二进制-反码-原码最高为不变-其他位按位取反-补码-反码-1-即原码的最高位不变-其他位按位取反加1"}},[t._v("#")]),t._v(" 负数的原码：最高位1，其他位是绝对值的二进制，反码：原码最高为不变，其他位按位取反，补码：反码+1，即原码的最高位不变，其他位按位取反加1")]),t._v(" "),a("p",[t._v("-1\n原码：10000001\n反码：11111110\n补码：11111111")]),t._v(" "),a("h3",{attrs:{id:"_0的运算过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0的运算过程"}},[t._v("#")]),t._v(" ~0的运算过程")]),t._v(" "),a("p",[t._v("0的补码   00000000\n按位取反  11111111\n获得11111111的原码：\n高位为1表示此补码为负数的补码，则获取原码为-1按位取反\n即   11111111\n-1   11111110\n取反 10000001 即为-1\n所以console.log(~0) // -1")])])}),[],!1,null,null,null);s.default=e.exports}}]);