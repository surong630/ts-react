import React from 'react'
import { Link, HashRouter, Route, BrowserRouter, NavLink, Switch } from 'react-router-dom'
import A from './A/A'
import B from './B/b'
import './index.css'
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
                    <HashRouter>
                        {/* 使用Link不会自动添加class */}
                        <Link to="/a">go to a</Link>
                        <NavLink to="/b">go to b</NavLink>
                        {/* 用Switch将路由包起来 不会重复匹配 */}
                        <Switch>
                            <Route path="/a" component={A}></Route>
                            <Route path="/b" component={B}></Route>
                        </Switch>
                    </HashRouter>
                <button onClick={this.back}>back</button>
            </div>
        )
    }
}