import React from 'react'
export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
})
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () =>{
    setTheme(preTheme=> (preTheme === 'light'? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
