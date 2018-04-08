/*
FNS: for name space
*/

/*------------------------------
const声明
在ES6使用const来声明的变量称之为常量。这意味着它们不能再次被赋值。由于这个原因，所有的const声明的变量都必须在声明处初始化。
const声明的常量和let变量一样也是具有块级作用域的特性。

1. const的特性除了声明的是常量为，其他与let一样。
2. 在let和const声明前的这段区域称之为暂存性死区（The Temporal Dead Zone —TDZ)。
3. 使用let和const声明的变量和常量不再是window的属性。 也就是说通过window.a是无法访问到的。

当我们尝试去改变用const声明的常量时，浏览器就会报错。const有一个很好的应用场景，就是当我们引用第三方库的时声明的变量，用const来声明可以避免未来不小心重命名而导致出现bug
--------------------------------*/
document.getElementById("titleId").innerHTML = "Lesson 2: const"

console.log("l002_const start <<<<<<<<")




//*
var a = 20;
if (true) {
    const b = 20;
    b = 30;  //错误! 常量不能重新赋值
    const c; //错误！ 常量声明的同时必须赋值。
}
//*/







console.log("l002_const end >>>>>>>>")















