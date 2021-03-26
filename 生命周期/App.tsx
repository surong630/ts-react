import React, { setState } from 'react'

// 生命周期
export default class App extends React.Component {
    state = {
        number: 10
    }
    // 判断组件数据没有变化时不更新
    shouldComponentUpdate() {
        return false
    }
    // 挂载后
    componentDidMount() {
        console.log('已经挂载上了');
    }
    // 更新时
    componentDidUpdate() {
        console.log('已经更新完毕');
    }
    // 即将销毁
    componentWillUnmount() {
        console.log('即将卸载了');
    }
    addTen: () => void = () => {
        // 修改状态
        this.setState({number: this.state.number + 10})
        // 这个函数可以强制刷新
        // this.forceUpdate()
    }
    render() { 
        const { number } = this.state
        return (
            <div>
                <button 
                onClick={() => {this.addTen()}}
                >+10</button>
                number: {number}
            </div>
        )
    }
}
