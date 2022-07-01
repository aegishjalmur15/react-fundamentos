import React, {useState, createContext, useMemo} from "react";
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';
import {useLocalState} from '../hooks/UseLocalState'

export const ThemeContext = createContext();

export default function CustomThemeProvider(props){
    const [theme, setTheme] = useLocalState('theme','dark');

    const currentTheme = useMemo(()=>{
      return themes[theme] || 'dark';
    },[theme]);
  
    function handleToggleTheme(){
      setTheme(prevState=> prevState === 'dark'? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={{handleToggleTheme,theme}}>
            <ThemeProvider theme={currentTheme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
