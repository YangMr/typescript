"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
function errorMessage(message) {
    throw new Error("do some thing..");
}
function fail() {
    return errorMessage("123");
}
function loop() {
    while (true) {
    }
}
