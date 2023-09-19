import React from 'react'

function List() {
  return (
    <div>
         <input type='text' />
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

export default List