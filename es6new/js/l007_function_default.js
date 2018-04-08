/*
FNS: for name space
*/

/*------------------------------
default:默认值
--------------------------------*/
document.getElementById("titleId").innerHTML = "Lesson 7: default"

console.log("l007_function_default start <<<<<<<<")

/*
带默认参数的函数
*/
//*
{//FNS

//ES5及之前的用法
function animal_old(type) {
    type = type || 'cat';
    console.log("old " + type);
}
animal_old()

//ES6用法
function animal_new(type = 'cat') {
    console.log("new " + type);
}
animal_new()

}//FNS
//*/


/*
JavaScript函数的最大的一个特点就是在传递参数的时候，参数的个数不受限制的。
为了健壮性考虑，一般在函数内部需要做一些默认值的处理。
*/
//*
{//FNS

function makeRequest(url, timeout, callback) {
    timeout = timeout || 2000;
    callback = callback || function() {};
}
//其实上面的默认值方法有个bug：当timeout是0的时候也会当做假值来处理，从而给赋值默认值2000.

//ES6从语言层面面上增加了 默认值的 支持。
//这个函数如果只传入第一个参数，后面两个不传入，则会使用默认值。如果后面两个也传入了参数，则不会使用默认值。
//function makeRequest(url, timeout = 2000, callback = function() {}) {
    // 其余代码
//}
}//FNS
//*/


/*
默认参数对 arguments 对象的影响
*/

//*
{//FNS

//在非严格模式下，arguments总是能反映出命名参数的变化。
function foo1(a,b) {
    //非严格模式
    console.log(arguments[0] === a); //true
    console.log(arguments[1] === b); //true
    a = 10;
    b = 20;
    console.log(arguments[0] === a); //true
    console.log(arguments[1] === b); //true
}
foo1(1,2);

//在ES5的严格模式下，arguments只反映参数的初始值，而不再反映命名参数的变化！
function foo2(a,b) {
    //严格模式
    "use strict"
    console.log(arguments[0] === a); //true
    console.log(arguments[1] === b); //true
    a = 10;
    b = 20;
    console.log(arguments[0] === a); //false 修改a的值不会影响到arguments[0]的值
    console.log(arguments[1] === b); //false
}
foo2(1,2);

//当使用ES6参数默认值的时候，不管是否是在严格模式下，都和ES5的严格模式相同。
function foo3(a, b=30) {
    console.log("a = " + a + "; b = " + b);
    console.log(arguments[0] === a); //true
    console.log(arguments[1] === b); //true
    a = 10;
    b = 20;
    console.log(arguments[0]  === a); //false。  由于b使用了默认值。虽然a没有使用默认值，但是仍然表现的和严格模式一样。
    console.log(arguments[1] === b); //false。  b使用了默认值，所以表现的和严格模式一样。
}
foo3(1,2);
//如果这样调用foo(1),则 a == 1， b == 30， arguments[0] == 1, arguments[1] == undefined。
//也就是说默认值并不会赋值给arguments参数。

}//FNS
//*/


/*
默认参数表达式 (Default Parameter Expressions)
*/
//*
{//FNS

//参数的默认值，也可以是一个表达式或者函数调用等。
function getValue() {
    return 5;
}

function add(first, second = getValue()) {
    return first + second;
}
console.log(add(1,1)); // 2
console.log(add(1));   // 6

}//FNS
//*/

/*
有一点需要要注意：getValue()只会在调用add且不传入第二个参数的时候才会去调用。不是在解析阶段调用的。
*/
//*
{//FNS

let value = 5;
function getValue() {
    return value++;
}

function add(first, second = getValue()) {
    return first + second;
}

console.log(add(1,1));  // 2
console.log(add(1));    // 6
console.log(add(1));    // 7
console.log(add(1));    // 8

}//FNS
//*/

/*
由于默认值可以表达式，所以我们甚至可以使用前面的参数作为后面参数的默认值。

注意：可以把前面的参数作为后面参数的默认值，但是不能把后面的参数作为第一个参数的默认值。
这可以前面说的let和const的暂存性死区一个意思。

function add(first, second = first) {     // OK
function add(first = second, second)) {   // NOK
*/


console.log("l007_function_default end >>>>>>>>")



















