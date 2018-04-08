/*
FNS: for name space
*/

/*------------------------------
class, extends, super

在 ECMAScript 5 或更早的版本中，JavaScript 没有类。
和类这个概念及行为最接近的是创建一个构造函数并在构造函数的原型上添加方法，这种实现也被称为自定义的类型创建。

说明：
1. 自有属性：属性只出现在实例而不是原型上，而且只能由构造函数和方法来创建。
   在本例中(PersonClass)，name 就是自有属性。我建议 尽可能的将所有自有属性创建在构造函数中，这样当查找属性时可以做到一目了然。
2. 类声明只是上例中自定义类型的语法糖。
   PersonClass 声明实际上创建了一个行为和 constructor 方法相同的构造函数，这也是 typeof PersonClass 返回 “function” 的原因。
   sayName() 在本例中作为 PersonClass.prototype 的方法，和上个示例中 sayName() 和 PersonType.prototype 关系一致。
   这些相似度允许你混合使用自定义类型和类而不需要纠结使用方式。

虽然类和以前的使用构造函数+原型的方式很像，但是还是有一些不太相同的地方，而且要牢记
1. 类声明和函数定义不同，类的声明是不会被提升的。
   类声明的行为和 let 比较相似，所以当执行流作用到类声明之前类会存在于暂存性死区（temporal dead zone）内。
2. 类声明中的代码自动运行在严格模式下，同时没有任何办法可以手动切换到非严格模式。
3. 所有的方法都是不可枚举的（non-enumerable），这和自定义类型相比是个显著的差异，因为后者需要使用 Object.defineProperty() 才能定义不可枚举的方法。
4. 所有的方法都不能使用 new 来调用，因为它们没有内部方法 [[Construct]]。
5. 不使用 new 来调用类构造函数会抛出错误。也就是必须使用new 类() 的方式使用
6. 试图在类的方法内部重写类名的行为会抛出错误。（因为在类的内部，类名是作为一个常量存在的）
--------------------------------*/
document.getElementById("titleId").innerHTML="Lesson 3: class";

console.log("l003_class start <<<<<<<<")

//---------------------------------------------------------------

//ES5 prototype sample:
//*
function PersonType(name) {
    this.name = name;
}

PersonType.prototype.sayName = function() {
    console.log(this.name);
};

let person1 = new PersonType("Nicholas");
person1.sayName(); // 输出"Nicholas"

//说明：前面的PersonType我们以前一直叫做构造函数，其实他就是一个类型，因为他确实表示了一种类型。
//*/

//---------------------------------------------------------------

//ES6中基本的class声明
//*
class PersonClass {
    // 等效于PersonType构造函数
    constructor(name) { // constructor：改造函数的关键字
        this.name = name;
    }
    // 等效于PersonType.prototype.sayName。
    sayName() {
        console.log(this.name);
    }
}
let person2 = new PersonClass("John");
person2.sayName(); // 输出"John"

console.log(person2 instanceof PersonClass); // true
console.log(person2 instanceof Object); // true

console.log(typeof PersonClass); // "function"
console.log(typeof PersonClass.prototype.sayName); // "function"
//*/

//---------------------------------------------------------------

//匿名类表达式
//函数有函数表达式，类也有类表达式。
//类表达式的功能和前面的类的声明是一样的。
//*
let PersonClass3 = class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
};

let person3 = new PersonClass3("Tom");
person3.sayName();

console.log(person3 instanceof PersonClass3); // true
console.log(person3 instanceof Object); // true

console.log(typeof PersonClass3); // "function"
console.log(typeof PersonClass3.prototype.sayName); // "function"
//*/

//---------------------------------------------------------------

//具名类表达式
//注意：具名类表达式中PersonClass2这个类名只能在类的内部访问到，在外面是访问不到的。
/*
let PersonClass = class PersonClass2 {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
};

//*/

//---------------------------------------------------------------

//作为一等公民的类型
//在JavaScript中，函数是作为一等公民存在的。（也叫一等函数）。类也是一等公民。
//*
//1. 类可以作为参数传递
function createObject(classDef) {
    return new classDef();
}

let obj = createObject(class {
    sayHi() {
        console.log("Hi!");
    }
});

obj.sayHi(); // "Hi!"

//2. 立即调用类构造函数，创建单例
let person4 = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}("Chris");

person4.sayName(); // "Chris"

//*/

//---------------------------------------------------------------

//动态计算类成员的命名
//类的成员，也可以像对象的属性一样可以动态计算。（使用[]来计算）
//*
{//FNS

let methodName = "sayName";
class PersonClass {
    constructor(name) {
        this.name =name;
    }

    [methodName]() {
        console.log(this.name);
    }
};
let me = new PersonClass("Leon");
me.sayName();

}//FNS
//*/

//---------------------------------------------------------------

//静态成员
//在ES5中，我们可以直接给构造函数添加属性或方法来模拟静态成员。
//*
{//FNS

function PersonType(name) {
    this.name = name;
}
//静态方法。直接添加到构造方法上。（其实是把构造函数当做一个普通的对象来用）
PersonType.create = function(name) {
    return new PersonType(name);
};

//实例方法
PersonType.prototype.sayName = function() {
    console.log(this.name);
};
var person = PersonType.create("Barry");
//在上面的create方法在其他语言中一般都是作为静态方法来使用的。
person.sayName();

}//FNS
//*/

//ECMAScript 6 的类通过在方法之前使用正式的 static 关键字简化了静态方法的创建。
//*
{//FNS

class PersonClass {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

    static create(name) {
        return new PersonClass(name);
    }
};

let person = PersonClass.create("Rebbeca");
person.sayName();
//注意：静态成员通过实例对象不能访问，只能通过类名访问！！！

}//FNS
//*/

//---------------------------------------------------------------

//ES6中的继承

//---------------------------------------------------------------

//*
class Animal {
    constructor() {
        this.type = 'animal'
    }
    says(say) {
        console.log(this.type + ' says ' + say)
    }
}

let animal = new Animal()
animal.says('hello') // animal says hello

class Cat extends Animal {
    constructor() {
        super()
        this.type = 'cat'
    }
}

let cat = new Cat()
cat.says('hithere') // cat says hithere
//*/

//---------------------------------------------------------------

//*
//在ES6之前要完成继承，需要写很多的代码。看下面的继承的例子：
function Father(name) {
    this.name = name;
}
Father.prototype.sayName = function() {
    console.log(this.name);
}

function Son(name, age) {
    Father.call(this, name);
    this.age = age;
}
Son.prototype = new Father();
Son.prototype.constructor = Son;
Son.prototype.sayAge = function() {
    console.log(this.age);
}

var son1 = new Son("儿子", 20);
son1.sayAge();
son1.sayName();
//*/

//---------------------------------------------------------------

//*
//ES6通过类的方式完成继承
{//FNS

class Father {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}
class Son extends Father {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    //子类独有的方法
    sayAge() {
        console.log(this.age);
    }
}

var son1 = new Son("李四", 30);
son1.sayAge();
son1.sayName();
console.log(son1 instanceof Son); // true
console.log(son1 instanceof Father); // true

}//FNS
//*/

/*
关于super的使用，有几点需要注意：

1. 你只能在派生类中使用 super()，否则（没有使用 extends 的类或函数中使用）一个错误会被抛出。
2. 你必须在构造函数的起始位置调用 super()，因为它会初始化 this。任何在 super() 之前访问 this 的行为都会造成错误。
   也即是说super()必须放在构造函数的首行。
3. 在类构造函数中，唯一能避免调用 super() 的办法是返回一个对象。
*/

//---------------------------------------------------------------

//在子类中屏蔽父类的方法
//如果在子类中声明与父类中的同名的方法，则会覆盖父类的方法。(这种情况在其他语言中称之为 方法的覆写、重写 )
//*
{//FNS

class Father {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log("父类的方法：" + this.name);
    }
}
class Son extends Father {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    //子类独有的方法
    sayAge() {
        console.log(this.age);
    }
    //子类中的方法会屏蔽掉父类中的同名方法
    sayName() {
        //super.sayName();//调用被覆盖的父类中的方法
        console.log("我是子类的方法，我屏蔽了父类：" + this.name);
    }
}

var son1 = new Son("张三", 31);
son1.sayAge();
son1.sayName();

}//FNS
//*/

/*
如果在子类中又确实需要调用父类中被覆盖的方法，可以通过super.方法()来完成。

注意：

1. 如果是调用构造方法，则super不要加点，而且必须是在子类构造方法的第一行调用父类的构造方法
2. 普通方法调用需要使用super.父类的方法() 来调用。
*/

//---------------------------------------------------------------

//静态方法也可以继承
//*
{//FNS

class Father {
    static foo() {
        console.log("这是父类的静态方法");
    }
}
class Son extends Father {
}
Son.foo(); //子类也继承了父类的静态方法。这种方式调用和直接通过父类名调用是一样的。

}//FNS
//*/


//---------------------------------------------------------------

console.log("l003_class end >>>>>>>>")















