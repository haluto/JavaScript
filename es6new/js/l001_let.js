/*
FNS: for name space
*/

/*------------------------------
let声明
使用let声明变量的语法和使用var一样，但let声明的变量的作用域会限制在当前的代码块中。这是let跟var的最大区别。

1. 用let声明的变量具有块级作用域，只能在声明的块中访问，在块外面无法访问
2. 用let声明的变量也没有声明提前这一特性。
3. 在同一个块中，let声明的变量也不能重复声明。
4. 在声明变量的时候尽量使用let，慢慢的抛弃var
--------------------------------*/
document.getElementById("titleId").innerHTML = "Lesson 1: let"

console.log("l001_let start <<<<<<<<")



//*
var name = 'zach'
while (true) {
    var name = 'obama'
    console.log(name)  //obama
    break
}
console.log(name)  //obama
//*/


//*
var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
    };
}
arr[0](); // 10
arr[6](); // 10
//*/


/*
let a = 10;
if(a > 5){
    console.log(b); //用let声明的变量没有声明提前这一特性，所以此处也访问不到（报错）
    let b = 20;
    console.log(b);
}
console.log(b); //由于b是在if块中使用let声明的，所以此处无法访问到。（报错）
//*/


//*
//循环中的函数
//看下面的代码，是输出10个10，而不是0,1,2,......
var funcs = [];
for (var k = 0; k < 10; k++) {
    funcs.push(function () {
        console.log(k);
    });
}
funcs.forEach(function (func) {
    func();     // 输出 "10" 共10次
});

//解决办法需要使用函数的自执行特性
var funcs = [];
for (var m = 0; m < 10; m++) {
    funcs.push((function(value) {
        return function() {
            console.log(value);
        }
    }(m)));
}
funcs.forEach(function(func) {
    func();     // 输出 0，1，2 ... 9
});

//如果使用let声明变量，则完全可以避免前面的问题。 
//这是ES6规范中专门定义的特性。在for … in和for … of循环中也适用
var funcs = [];
for (let n = 0; n < 10; n++) {
    funcs.push(function () {
        console.log(n);
    });
}
funcs.forEach(function (func) {
    func();     // 输出 0，1，2 ... 9
})
//说明：let 声明使得每次迭代都会创建一个变量 i，所以循环内部创建的函数会获得各自的变量 i 的拷贝。每份拷贝都会在每次迭代的开始被创建并被赋值。
//*/



console.log("l001_let end >>>>>>>>")






