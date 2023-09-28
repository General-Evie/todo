import React, { useState } from 'react'
import { CheckIcon } from './svgs/CheckSvg'
import TodoList from './TodoList';
import CustomCheckbox from './CustomCheckBox'


interface NavProps {}

const Nav: React.FC<NavProps> = () => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [todo, setTodo] = useState(['todo', 'todo 2'])

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
                    <div className='add-button'></div>
                    <div className='input-text'></div>
                </div>
                <input
                    type='text'
                    className={`${inputClass} main-input`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={inputText} />
            </div>
            <div className='list'>
                <div className='todos'><TodoList todo={todo} /></div>
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