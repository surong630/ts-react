import React  from 'react'

// 循环遍历 + 数组类型
export default class App extends React.Component {
    state = {
        numbers: ['6','8','9','7','4','5','6']
    }
    render() {
        // 这里限制了mynumber 必须是字符串数组
        const mynumber: string[] = this.state.numbers
        return (
            <div>
                {
                    mynumber.map((item, index) => {
                        return (
                            // 这里循环的时候必须加上key
                            <h2 key={index}>{item}</h2>
                        )
                    })
                }
            </div>
        )
    }
}