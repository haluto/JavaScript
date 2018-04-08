/*
FNS: for name space
*/

/*------------------------------
arrow function

ECMAScript 6 最有意思的部分之一就是箭头函数。正如其名，箭头函数由 “箭头”（=>）这种新的语法来定义。

其实在别的语言中早就有了这种语法结构，不过他们叫拉姆达表达式。
--------------------------------*/
document.getElementById("titleId").innerHTML = "Lesson 4: function arrow"

console.log("l004_function_arrow start <<<<<<<<")




//*
{//FNS

var f1 = function(i){return i+1;} //ES5
var f2 = (i) => i+1 //ES6

var sum = (num1, num2) => {
    return num1 + num2;
}

var add = function(num1, num2) {
    return num1 + num2;
}

console.log(sum(3,4))
console.log(add(2,4))

}//FNS
//*/


// arrow function另一项功能，解决JavaScript中this对象的问题
//*
{//FNS

// 举例如下：
class Animal {
    constructor() {
        this.type = 'animal'
    }
    says(say) {
        setTimeout(function() {
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
    says2(say){
        var self = this;
        setTimeout(function() {
            console.log(self.type + ' says ' + say)
        }, 1000)
    }
    says3(say) {
        setTimeout(function() {
            console.log(this.type + ' says ' + say)
        }.bind(this), 1000)
    }
}
var animal = new Animal()
animal.says('hi_1') // undefined says hi
animal.says2('hi_2')
animal.says3('hi_3')
//says方法中，setTimeout中的this指向的是全局对象，运行会报错。

//解决方法
//1. 将this传给self，用self来指代this。如上says2的实现。
//2. 用bind(this)。如上say3的实现。

}//FNS
//*/

// 有了箭头函数，不需要如上2种麻烦的方法了：
//*
{//FNS

class Animal {
    constructor() {
        this.type = 'animal'
    }
    says(say) {
        setTimeout( () => {
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
}
var animal = new Animal()
animal.says('hi_arrow_function')

}//FNS
//*/

/*
当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，
它的this是继承外面的，因此内部的this就是外层代码块的this。

1. 箭头函数作为一个使用完就扔的函数，不能作为构造函数使用。也就是不能使用new 的方式来使用箭头函数。
2. 由于箭头函数中的this与函数的作用域相关，所以不能使用call、apply、bind来重新绑定this。
   但是虽然this不能重新绑定，但是还是可以使用call和apply方法去执行箭头函数的。
*/


//如果想直接返回一个js对象，而且还不想添加传统的大括号和return，则必须给整个对象添加一个小括号 ()
//*
{//FNS

var foo = () => ({name:"lisi", age:30});
//var foo = () => {return {name: "lisi", age:30}};
var my = foo();
console.log(my);

}//FNS
//*/


//使用箭头函数实现函数自执行
//*
{//FNS

var person = (namein => {
        return {
            name: namein,
            age: 30
        }
    }

)("zs");
console.log(person);

}//FNS
//*/


//无arguments绑定
//虽然箭头函数没有自己的arguments对象，但是在箭头函数内部还是可以使用它外部函数的arguments对象的。
//*
{//FNS

function foo() {
    //这里的arguments是foo函数的arguments对象。箭头函数自己是没有 arguments 对象的。
    return ()=>arguments[0]; //箭头函数的返回值是foo函数的第一个参数
}
var arrow = foo(4,5)
console.log(arrow()); // 4

}//FNS
//*/


console.log("l004_function_arrow end >>>>>>>>")















