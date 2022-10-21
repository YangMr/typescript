export default {}

// 解决多传一个或者多个参数的问题 方式一
interface User{
    username : string,
    password : string,
    age : number,
    love : string,
}

let login = {
    username : "jack",
    password : "!23456",
    age : 10,
    love: "music",
    test : 123
}

let a : User = login

console.log(a)


// 解决多传一个或者多个参数的问题 方式一  使用类型断言

const data: User  = ({
    username : 'jack',
    password : '123',
    age : 100,
    love : 'eat',
    id : 1
}) as User

console.log(data)


// 索引签名

interface Test{
    [props : string] : string
}

interface Age{
    [props: string] : number
}

let t: Test = {username : "jack", password : "123"}
let g: Age = {age : 20}

console.log(t)