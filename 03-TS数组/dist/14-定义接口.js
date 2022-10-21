"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 定义接口
// 给声明变量指定类型 基本数据类型 给数组指定具体的类型
// 我们如何给对象的内容去定义具体的类型
// interface objType {
//     name : string,
//     age : number, 
//     salar : number
// }
// const obj: objType = {
//     name : "123",
//     age : 100,
//     salar : 1000
// }
const request = (obj) => { };
const login = (data) => {
    return request({
        url: "/api/user/login",
        method: "POST",
        data
    });
};
login({
    username: "jack",
    password: "123456",
    type: 0 // number
});
const getUserList = (params) => {
    return request({
        url: '/api/user/list',
        method: "GET",
        params
    });
};
getUserList({
    page: 1,
    size: 10,
    username: "jack"
});
