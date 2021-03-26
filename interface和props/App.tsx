import React from 'react'

// 组件传值 + interface
export default class App extends React.Component {
    state = {
        name: 'bobo'
    }
    render() {
        const {name} = this.state
        return (
            <div>
                这是父组件{name}
                <hr/>
                这是子组件
                <App2 
                name={name} 
                age={33}/>
            </div>
        )
    }
}
// interface IProps {
//     name: string;
//     age: number;
// }
// 这里对props对象的类型进行了声明,必须遵守IProps 才能通过验证
interface IProps {
    // 这里的问号指的是可选可不选
    name?: string;
    age: number;
}
class App2 extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }
    render() {
        const { name, age } = this.props
        return (
            <div>
                name:{name}
                <hr></hr>
                age: {age}
            </div>
        )
    }
}