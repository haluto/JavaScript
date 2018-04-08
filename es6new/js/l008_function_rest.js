/*
FNS: for name space
*/

/*------------------------------
I. 未命名参数问题

Javascript并不限制传入的参数的数量。
在调用函数的时候，传入的实参的个数超过形参的个数的时候，超过的部分就成为了未命名参数。
在ES5之前，我们一般可以通过arguments对象来获取到未命名参数的值。

ES6，提供了一种更加优雅处理未命名参数的问题：剩余参数( Rest Parameters )
语法：function a(a, … b){ }
剩余参数使用三个点( … )和变量名来表示。

注意：
1. 函数最多只能有一个剩余参数b。而且这个剩余参数必须位于参数列表的最后位置。
2. 虽然有了剩余参数，但是arguments仍然存在，但是arguments完全无视了剩余参数的存在。
3. 剩余参数是在函数声明的时候出现的。


II. 函数中的扩展运算符

注意：剩余参数和扩展运算符都是 使用三个点作为前缀。但是他们使用的位置是不一样的。

1. **剩余参数是用在函数的声明的时候的参数列表中，而且必须在参数列表的后面
2. 扩展运算符是用在函数调用的时候作为实参来传递的，在实参中的位置没有限制。
--------------------------------*/
document.getElementById("titleId").innerHTML = "Lesson 8: rest"

console.log("l008_function_rest start <<<<<<<<")

/*
未命名参数问题
*/
//*
{//FNS

//ES6
function animals(...types) {
    console.log(types)
}
animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]

function foo(a, ...b) {
    console.log(a);
    console.log(b instanceof Array); //true
}
foo(2,3,4,6);

//ES5
function foo_old(a) {
    console.log(a);
    console.log(arguments[1])//取得传入的多余的参数。
}
foo_old(2,3);

}//FNS
//*/


/*
函数中的扩展运算符
*/
//*
{//FNS

//例如:Math中的max函数可以返回任意多个参数中的最大值。但是如果这些参数在一个数组中，则没有办法直接传入。
//以前通用的做法是使用apply方法。
let values = [25, 50, 75, 100];
console.log("Max is " + Math.max.apply(Math, values));

//使用ES6提供的扩展运算符可以很容易的解决这个问题。在数组前加前缀 … (三个点)。
let vals = [25, 50, 75, 100];
console.log(...vals);
console.log(Math.max(...vals));//使用扩展运算符。相当于拆解了数组了。
console.log(Math.max(...values, 200));  //也可以使用扩展运算符和参数的混用，则这个时候就有 5 个数参与比较了。

}//FNS
//*/

console.log("l008_function_rest end >>>>>>>>")




















