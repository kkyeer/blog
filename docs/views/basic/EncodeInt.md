---
date: 2017-05-14
categories:
  - Basic
tags:
  - Encode
publish: true
---

# 计算机中的位运算与编码

## ~运算符 对一个表达式执行位非运算

- 运算规则为被运算数按位取反，
- 由于实际存储使用的为数字的补码，实际上是补码按位取反
- console.log的时候，打印的为原码

## ~常用于判断字符串是否存在

因为~0=-1 且\~-1=0,所以string.indexOf('str')为-1时，~string.indexOf('str')为0，所以
if(~string.indexOf('str'))等同于if(string.indexOf('str')!=-1)

```js
let whole = 'this is a sample string'
let str = 'sample'
if (~whole.indexOf(str)) {
    console.log(`${whole}包含${str}`);
} else {
    console.log(`${whole}不包含${str}`);
}
// 输出 this is a sample string包含sample
```

## 原码、反码与补码

> 有符号数的最高位仅表示正负，不存储数据
即假设数字使用8bit存储（1Byte)，实际存储数字的为7bit，可表示值-(2^7^-1)~2^7^,即-127\~128

### 正数的原码、反码与补码一致

0
原码：00000000
反码：00000000
补码：00000000

### 负数的原码：最高位1，其他位是绝对值的二进制，反码：原码最高为不变，其他位按位取反，补码：反码+1，即原码的最高位不变，其他位按位取反加1

-1
原码：10000001
反码：11111110
补码：11111111

### ~0的运算过程

0的补码   00000000
按位取反  11111111
获得11111111的原码：
高位为1表示此补码为负数的补码，则获取原码为-1按位取反
即   11111111
-1   11111110
取反 10000001 即为-1
所以console.log(~0) // -1