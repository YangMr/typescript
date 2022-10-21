function test(msg){
    console.log(msg.length)
}

const arr = [1,2,3,4,5]
const string = "hello world"
const flag = true
const number = 123

test(arr)
test(string)


test(flag) // fail
test(number) // fail
