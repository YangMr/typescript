export default {}

function errorMessage(message : string):never{
    throw new Error("do some thing..")
}

function fail(){
    return errorMessage("123")
}

function loop():never{
    while(true){

    }
}


