import React, { useState } from 'react'


// 用接口表示数组
interface INumberArray {
    [index: number]: string
}
// 原始数据的类型限制 + 元素渲染
export default class App extends React.Component {
    public state = {
        name: 'bobo',
        age: 30
    }
    private init: () => string = () => {
        let name: string = this.state.name
        return name
    }
    render() {
        // 这是联合类型 可以使number变量处于这两种类型任意一种
        let number: string | number = this.state.age
        // 这里指定 数组必须全部是string
        let numberArray: INumberArray = ['sss']
        const result: string= this.init()
        return (
            <div>
                {result}
            </div>
        )
    }
}
// 限制App函数必须返回ReactNode
const App2: React.FC = () => {
    let [n, setN] = useState(0)
    // 限制result的类型为number
    let result: number = n
    return (
        <div>
            {result}
        </div>
    )
}