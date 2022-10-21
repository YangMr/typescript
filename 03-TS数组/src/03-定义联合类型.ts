export default {}

// 定义联合类型
let dream : (string|number|number[]|object)[]

// dream = ["我想好好学习", 1000000]
dream = [1234, "我想好好学习", [1,2,3,4], {name : "jack"}]


const menuList:(object|string|number)[]= [
    {
        title : '首页',
        path : '/dashbord'
    },
    {
        title : '首页',
        path : '/dashbord'
    },
    {
        title : '首页',
        path : '/dashbord'
    },
    "hello world",
    0
]

function deep(data:(string|number|object)[]){
    console.log(data)

}

deep(menuList)

