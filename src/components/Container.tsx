import React, { FC, useState, useEffect } from 'react'
import Nav from './Nav'
import { SunIcon } from './svgs/SunSvg'
import { MoonIcon } from './svgs/MoonSvg'

interface ContainerProps {}

const Container: FC<ContainerProps> = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [todo, setTodo] = useState(['todo', 'todo2'])


    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const Html = document.documentElement
        Html.style.setProperty(
          'background-image',
          isDarkMode ? 'var(--background-dark)' : 'var(--background-light)'
        );
        Html.style.setProperty(
            'background-color',
            isDarkMode ?  'hsl(235, 21%, 11%)' : 'hsl(0, 0%, 98%)'
          );
      }, [isDarkMode]);

    return (
        <div className='container'>
            <header>
                <h1>Todo</h1>
                <div onClick={toggleDarkMode}>
                    {isDarkMode ? <SunIcon /> : <MoonIcon />}   
                </div>
            </header>
            <Nav todo ={todo}/>

            <p>Drag and drop to reorder list</p>
        </div>
    )
}

export default Container