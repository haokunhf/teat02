/*const Action=function (text) {
    return{
        type:"AA",
        text:text,
    }
}*/
const Action={
    add(text) {
        return{
            type:"AA",
            text:text
        }
    },
    del(i) {
        return{
            type:"BB",
            num:i
        }
    }
}


export default Action

