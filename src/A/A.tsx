import React, { Component } from 'react'

export default class A extends Component {
    constructor(props) {
        super(props)
    }
    back = () => {
        // 由于是路由组件 可以拿到路由的方法 返回上一个路由
        this.props.history.goBack()
    }
    render() {
        console.log(this.props);
        return (
            <div>
                这是A组件
                <button onClick={this.back}>返回</button>
            </div>
        )
    }
}
