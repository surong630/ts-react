import React from 'react'

// 函数类型判断 + 条件渲染
interface IFind {
    (name:string, age: number): string
}
export default class App extends React.Component {
    public state = {
        name: 'bobo',
        age: 30
    }
    // 这里声明了一个函数 这个函数参数必须按照要求来写 返回值为字符串, 同时还允许只有一个参数
    // public hi:(name: string, age?: number) => string = (name,age) => {
    //     return `${age}岁的${name}打了个招呼`
    // }
    // 这和上面的结果一样，也是将hi函数的类型限制在接口IFind上
    public hi:IFind = (name,age) => {
        return `${age}岁的${name}打了个招呼`
    }
    // 函数重载, 当name为字符串时 返回字符串数组 当为number时 直接返回number
    public reverse: (name:string | number) => string[] | number = (name) => {
        if(typeof name === 'string') {
            return name.split('')
        }else if(typeof name === 'number') {
            return name
        }
    }
    render() {
        const result = this.reverse(20)
        const notNumber = this.reverse('good')
        return (
            <div>
                {typeof result === 'number'? result: '这不是数字啊'}
                <hr/>
                {typeof notNumber === 'number'? result: '这不是数字啊'}
            </div>
        )
    }
}