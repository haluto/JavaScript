/*
FNS: for name space
*/

/*------------------------------
模板标签
--------------------------------*/
document.getElementById("titleId").innerHTML = "Lesson 5: template string"

console.log("l005_template_string start <<<<<<<<")

/*
什么是模板标签
模板字面量真正的强大之处来源于模板标签。一个模板标签可以被转换为模板字面量并作为最终值返回。
标签在模板的头部，即左 ` 字符之前指定，如下所示：
let message = myTag`Hello world`;
在上面的代码中，myTag就是模板标签。
myTag其实是一个函数，这个函数会被调用来处理这个模板字符串。
*/


/*
定义模板标签
一个标签仅代表一个函数，他接受需要处理的模板字面量。标签分别接收模板字面量中的片段，且必须将它们组合以得出结果。函数的首个参数为包含普通 JavaScript 字符串的数组。余下的参数为每次置换的对应值。

标签函数一般使用剩余参数来定义，以便轻松地处理数据。
*/
//*
{//FNS

let name = '张三',
    age = 20,
    message = show`我来给大家介绍${name}的年龄是${age}.`;

//应该定义一个函数show：
//参数1：一个字符串数组。在本例中包含3个元素。
//      0: "我来给大家介绍"
//      1: "的年龄是"
//      2: "."
//参数2和参数3：表示需要置换的字符串的值。
function show1(stringArr, value1, value2) {
    console.log(stringArr);
    console.log(value1);
    console.log(value2);
    return "abc";
}

//为简化书写，一般把value1和value2写成剩余字符串的形式：
function show(stringArr, ...values) {
    console.log(stringArr);
    console.log(values[0]);
    console.log(values[1]);
    return "abc";
}

console.log(message);

}//FNS
//*/





console.log("l005_template_string end >>>>>>>>")










