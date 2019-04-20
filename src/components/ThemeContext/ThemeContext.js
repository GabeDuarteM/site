import React from 'react'
import { createGlobalStyle } from 'styled-components/macro'

const DarkTheme = createGlobalStyle`
  html, body {
    background-color: #282c34;
    color: white;
  }

  a {
    color: white;
  }
`

const LightTheme = createGlobalStyle`
  html, body {
    color: #282c34;
  }

  a {
    color: #282c34;
  }
`

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('dark')

  const Theme = theme === 'dark' ? DarkTheme : LightTheme

  const toggleTheme = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme />
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  return React.useContext(ThemeContext)
}

export default useTheme
