import React from 'react'
import Action from './action'
import Stote from './store'


class Dome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: Stote.getState(),
            num:[]
        }
        this.itemchange = this.itemchange.bind(this)
    }

    itemchange() {
        var data = Stote.getState()
        this.setState({arr: data})
    }

    componentDidMount() {
        Stote.subscribe(this.itemchange)
    }

    tap() {
        // console.log();
        // this.setState({arr: this.ipt.value})
        Stote.dispatch(Action.add(this.refs.ipt.value))

    }
    del(i){
        Stote.dispatch(Action.del(i))
        // console.log(i);
    }

    render() {
        console.log(this.state.arr);
        return (
            <div>
                <h1>redux</h1>
                <input type="text" ref='ipt'/>
                <button onClick={this.tap.bind(this)}>添加</button>
                {
                    this.state.arr.map((item, i) => {
                        return (
                            <div key={i}>
                                {i} ================{item}
                                <button onClick={this.del.bind(this,i)}>删除</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default Dome;