import React, { FC, useState } from 'react'
import List from './List'
import { SunIcon } from './svgs/SunSvg'
import { MoonIcon } from './svgs/MoonSvg'

interface ContainerProps {}

const Container: FC<ContainerProps> = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);


    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <header>
                <h1>Todo</h1>
                <div onClick={toggleDarkMode}>
                    {isDarkMode ? <SunIcon /> : <MoonIcon />}   
                </div>
            </header>
            <List />

            <p>Drag and drop to reorder list</p>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/General-Evie" target="_blank">Evie Dickman</a>.
            </div>
        </div>
    )
}

export default Container