import {createContext, useState} from 'react';


export const ContextApi = createContext();

export const AppContext=(props)=>{
    const[imageSearch, setImageSearch] = useState(false);
    const Theme = localStorage.getItem('theme');
    const[darkTheme, setDarkTheme] = useState(!!Theme);

    const ThemeChangeHandler=()=>{
        setDarkTheme((prev) => !prev);
    }

    const ContextValue={
        theme:darkTheme,
        changeTheme : ThemeChangeHandler,
        imageSearch:imageSearch,
        setImageSearch,
    }
    return (
        <ContextApi.Provider value={ContextValue}>
            {props.children}
        </ContextApi.Provider>
    )
}
