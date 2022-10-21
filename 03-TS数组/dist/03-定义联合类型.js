"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 定义联合类型
let dream;
// dream = ["我想好好学习", 1000000]
dream = [1234, "我想好好学习", [1, 2, 3, 4], { name: "jack" }];
const menuList = [
    {
        title: '首页',
        path: '/dashbord'
    },
    {
        title: '首页',
        path: '/dashbord'
    },
    {
        title: '首页',
        path: '/dashbord'
    },
    "hello world",
    0
];
function deep(data) {
    console.log(data);
}
deep(menuList);
