/*
FNS: for name space
*/

/*------------------------------
解构
--------------------------------*/
document.getElementById("titleId").innerHTML = "Lesson 6: destructuring"

console.log("l006_destructuring start <<<<<<<<")

/*
解构的实用性
在 ECMAScript 5 或更早的版本中，从对象或数组中获取特定的数据并赋值给本地变量需要书写很多并且相似的代码。例如：
    let options = {
        repeat: true,
        save: false
    };
    // 从对象中提取数据
    let repeat = options.repeat,
        save = options.save;
这段代码反复地提取在 options 上存储地属性值并将它们传递给同名的本地变量。虽然这些看起来不是那么复杂，不过想象一下如果你的一大批变量有着相同的需求，你就只能一个一个地赋值。而且，如果你需要从对象内部嵌套的结构来查找想要的数据，你极有可能为了一小块数据而访问了整个数据结构。

这也是 ECMAScript 6 给对象和数组添加解构的原因。当你想要把数据结构分解为更小的部分时，从这些部分中提取数据会更容易些。很多语言都能使用精简的语法来实现解构操作。ECMAScript 6 解构的实际语法或许你已经非常熟悉：对象和数组字面量。
*/


/*
对象解构的基本形式
对象结构的语法就是在赋值语句的左侧使用类似对象字面量的结构。
*/
//*
{//FNS

let node = {
    type: "Identifier",
    name: "foo"
};
//这里就相当于声明了两个变量： type = node.type;  name:node.name
let {type, name} = node;

console.log(type); // "Identifier"
console.log(name); // "foo"

}//FNS
//*/


/*
解构赋值表达式
如果声明的变量想改变他们的值，也可以使用解构表达式。
*/
//*
{//FNS

let node = {
    type: "Identifier",
    name: "foo"
},
type = "Literal",
name = 5;

//注意：此处必须要在圆括号内才能使用解构表达式
({type, name} = node);

console.log(type); // "Identifier"
console.log(name); // "foo"

}//FNS
//*/


/*
对象解构时的默认值
如果赋值号右边的对象中没有与左边变量同名的属性，则左边的变量会是 undefined
*/
//*
{//FNS

let node = {
    type: "Identifier",
    name: "foo"
};
//因为node中没有叫value的属性，所以valued的值将会是undefined
let {type, name, value} = node;
//不过我们也可以手动指定他的默认值。（这个和函数的参数默认值很像）
//let { type, name, value = 3} = node;

console.log(type);  // "Identifier"
console.log(name);  // "foo"
console.log(value); // undefined

}//FNS
//*/


/*
赋值给不同的变量名
在前面的操作中，都是把对象的属性值，赋值给同名变量。
其实也可以赋值给不同名的变量。
*/
//*
{//FNS

let node = {
    type: "Identifier",
    name: "foo"
};
// localType才是要定义的新的变量。  type是node的属性
let {type: localType, name: localName} = node;

console.log(localType);     // "Identifier"
console.log(localName);     // "foo"

}//FNS
//*/


// 数组解构

/*
数组解构基本语法
数据解构的语法和对象解构看起来类似，只是将对象字面量替换成了数组字面量，而且解构操作的是数组内部的位置（索引）而不是对象中的命名属性
*/
//*
{//FNS

let colors = ["red", "green", "blue"];
let [firstColor, secondColor] = colors;

console.log(firstColor);   // "red"
console.log(secondColor);  // "green"

//如果只想取数组中的某一项，则可以不用命名。
let [ , , thirdColor ] = colors;
console.log(thirdColor);

}//FNS
//*/


/*
解构表达式
你可以想要赋值的情况下使用数组的解构赋值表达式，但是和对象解构不同，没必要将它们包含在圆括号中
*/
//*
{//FNS

let colors = [ "red", "green", "blue" ],
    firstColor = "black",
    secondColor = "purple";

[ firstColor, secondColor ] = colors;  //可以不用加括号。当然添加也不犯法

console.log(firstColor);        // "red"
console.log(secondColor);       // "green"

}//FNS
//*/


/*
数组解构表达式有一个很常用的地方，就是交换两个变量的值。
在以前一般定义一个第三方变量进行交换，
在ES6中完全可以抛弃第三方变量这种方式，使用我们的数组解构表达式。
*/
//*
{//FNS

let a = 3,
    b = 4;
//左侧和前面的案例是一样的，右侧是一个新创建的数组字面量。
[a,b] = [b,a];

console.log(a);
console.log(b);

}//FNS
//*/

console.log("l006_destructuring end >>>>>>>>")














