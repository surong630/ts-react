import React  from 'react'

// 类型断言 + 事件处理
interface Cat {
    name: string;
    miao: () => string;
}
interface Dog {
    name: string;
    wang: () => string;
}
export default class App extends React.Component {
    Animal = (animal: Cat | Dog) => {
        // 告诉他 我知道animal就是Dog类型,否则将不会通过验证
        // return (animal as Dog).wang()
        return animal.wang()
    }
    render() {
        const tugou: Dog = {
            name: '土狗',
            wang() {
                return `这是一只狗`
            }
        }
        return (
            <div>
                {this.Animal(tugou)}
            </div>
        )
    }
}
