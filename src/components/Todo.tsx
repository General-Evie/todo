import React from 'react'
import { CheckIcon } from './svgs/CheckSvg'

interface TodoProps {}

const Todo: React.FC<TodoProps> = () => {
  return (
    <div>
        <div className='check'><CheckIcon /></div>
        {}
    </div>
  )
}

export default Todo