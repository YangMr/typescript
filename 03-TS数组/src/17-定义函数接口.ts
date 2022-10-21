export default {}

interface deepType{
    (a: object[]) : object []
}

const deep : deepType = (num1:object[])=> {
    return num1
}

deep([{
    id : 1
}])