export default {}

interface User{
   readonly page : string | number,
   readonly size : string,
   queryForm? : object
}

let loginForn: User = {
    page : "1",
    size : "10"
}


// loginForn.page = 10

console.log(loginForn)