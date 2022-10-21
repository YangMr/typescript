export default {}

// 定义类型别名

// type  production = "string | 鞋子 | 裤子 | 手套 | 帽子"

// let a:production 

// a = "string"

// 类型别名就是给一个类型起个新名字, 但是它们都代表同一个类型

type muFun = (params1: number , params2 : string) => string

let test1:muFun = (num1, num2)=> {
    return num1 + num2
}
let test2:muFun = (num1, num2) => {
    return num1 + num2
}
let test3:muFun = (num1, num2) => {
    return num1 + num2
}

console.log(test1(1,"12"))
console.log(test2(2,"12"))
console.log(test3(3,"12"))