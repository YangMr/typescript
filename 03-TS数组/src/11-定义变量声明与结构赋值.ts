export default {}

let goods : string[] = ["张三", "里斯"]

let a : string = goods[0]
let b : string = goods[1]

// 采用数组解构的方式 一
let [x, y] = goods

console.log(a)
console.log(b)

console.log("X", x)
console.log("y", y)


// 采用数组解构的方式 二

let list : string[] = ["hello", "word", "jack", "rose"]

let [q, ...w] = list

let [, n , , m] = list

// let t = list[list.length - 1]


console.log("q", q)
console.log("w", w)

console.log("n", n)
console.log("m", m)


// 对象的解构赋值
let  beauty = {
    name : "黄渤",
    age : 20, 
    love : "music"
}


let {name : username, age : userAge, love : userLove} = beauty

console.log("name", username)
console.log("age", userAge)
console.log("love", userLove)