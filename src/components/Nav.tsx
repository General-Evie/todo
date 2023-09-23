import React, { useState } from 'react'
import { CheckIcon } from './svgs/CheckSvg'

interface NavProps {
    todo: string[];
}

const Nav: React.FC<NavProps> = ({ todo }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const inputText = isFocused ? 'Currently typing' : 'Create a new todo...';

    const inputClass = isFocused ? 'focused-input' : 'blurred-input';

    return (
        <div>
            <div className='input'>
                <div className='check-column'>
                    <div className='check'><CheckIcon /></div>
                    <div className='input-text'></div>
                </div>
                <input
                    type='text'
                    className={inputClass}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={inputText} />
            </div>
            <div className='list'>
                <div className='todos'></div>
                <div className='nav'>
                    <div className='left'>items left </div>
                    <ul>
                        <li>All</li>
                        <li>Active</li>
                        <li>Completed</li>
                    </ul>
                    <div className='clear '>Clear Completed</div>
                </div>
            </div>
        </div>
    )
}

export default Nav