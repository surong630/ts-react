import React, { FC, useContext } from 'react'

interface Theme {
    primary: string;
    secondary: string;
}

interface ThemeContextValue {
    theme: Theme;
}

const ThemeContext = React.createContext<ThemeContextValue>({
    theme: {
        primary: 'red',
        secondary: 'blue'
    }
})
const App: FC<{theme: Theme;}> = props => {
    console.log(props);
    return (
    <ThemeContext.Provider value={{theme: {
        primary: 'red',
        secondary: 'blue'
    }}}>
        <Bpp></Bpp>
        <Cpp></Cpp>
    </ThemeContext.Provider>
    )
}
const Bpp: FC = () => {
    const result = useContext(ThemeContext)
    return (
        <div>
            B组件
            <hr></hr>
            这祖先元素穿过来的东西
            <hr/>
            {result.theme.primary}
            <hr/>
            {result.theme.secondary}
        </div>
    )
}
const Cpp: FC = () => {
    const result = useContext(ThemeContext)
    return (
        <div>
            C组件
            <hr></hr>
            这祖先元素穿过来的东西
            <hr/>
            {result.theme.primary}
            <hr/>
            {result.theme.secondary}
        </div>
    )
}
export default App