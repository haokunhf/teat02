//数据处理纯函数

const Reducer = function (state, action) {
    if (typeof state === 'undefined') {
        return []
    }
    switch (action.type) {
        case 'AA':
            return [...state, action.text]
            break;
        case 'BB':
            var arr =state
            arr.splice(action.i,1)
            return arr
        default:
            return state
            break
    }
}


export default Reducer