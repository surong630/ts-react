import React, { ButtonHTMLAttributes, createRef } from 'react'

// 获取节点之ref
interface ICur {
    current: any;
}
export default class App extends React.Component {
    buttonNode:HTMLButtonElement;
    cur: ICur;
    getInput: () => void = () => {
        // 通过字符串获取ref
        console.log((this.refs.name as HTMLInputElement).value);
        // 通过函数获取ref
        console.log(this.buttonNode);
        // 通过createRef获取
        console.log(this.cur.current.value);
    }
    render() {
        this.cur = createRef()
        return (
            <div>
                <button onClick={() => {this.getInput()}}>+10</button>
                {/* 这里使用的是字符串形式的ref */}
                <input ref="name" type="text"/>
                {/* 这里使用的是函数形式的ref */}
                <button ref={ref => this.buttonNode = ref}>+1</button>
                {/* 使用createRef */}
                <input ref={this.cur} type="text"/>
            </div>
        )
    }
}