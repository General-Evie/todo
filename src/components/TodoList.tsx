import React from 'react'
import Todo from './Todo';

interface TodoListProps {
  todo: string[];
}

const TodoList: React.FC<TodoListProps> = ({ todo }) => {
  return (
    <>
      {todo.map(todo => {
        return <Todo key={todo} todo={todo} />
      })}
    </>
  )
}

export default TodoList