import React, { useState } from 'react'
import { CheckIcon } from './svgs/CheckSvg'
import CustomCheckbox from './CustomCheckBox';

interface TodoProps {
  todo: string;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label className='checkbox'>
        <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
        <span className='checkmark'>
          {isChecked && 
          <div className='check-bg'>
            <CheckIcon />
          </div>}
        </span>
        <div className='todo'>{todo}</div>
      </label>
    </div>
  )
}

export default Todo