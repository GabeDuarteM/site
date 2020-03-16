import React from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  ThemeContext,
} from 'styled-components/macro'

import dark from './theme.dark.js'

export const ThemeProvider = ({ children }) => {
  return <StyledThemeProvider theme={dark}>{children}</StyledThemeProvider>
}

const useTheme = () => {
  const context = React.useContext(ThemeContext)

  return context
}

export default useTheme
