export default {}

// any类型
// any表示任意类型, 当我们不清楚某个值的具体类型的时候我们就可以使用any
// 在TS中任何数据类型的值都可以赋值给any类型

// 使用场景一
// 变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查

let salary: any

salary = 28000

salary = "28k"


// 使用场景二
// 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查
let x : any = 4

x.isProxy()
x.actions()


// 使用场景三
// 定义存储各种类型数据的数组时
let beautyList: any[] = [1, false, 'fine'];
beautyList[1] = 100;


// void类型
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
// 在TS中只有undefined可以赋值给void类型

function result():void{
    console.log("123")
}
result()

let value: void

value = undefined

// value = null


// let a: void

// a = null

// let beautyList1: (number|string|boolean)[] = [1, false, 'fine'];
// beautyList[1] = 100;

