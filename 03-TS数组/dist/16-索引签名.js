"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let login = {
    username: "jack",
    password: "!23456",
    age: 10,
    love: "music",
    test: 123
};
let a = login;
console.log(a);
// 解决多传一个或者多个参数的问题 方式一  使用类型断言
const data = ({
    username: 'jack',
    password: '123',
    age: 100,
    love: 'eat',
    id: 1
});
console.log(data);
let t = { username: "jack", password: "123" };
console.log(t);
