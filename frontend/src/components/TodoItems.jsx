import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({ text }) => {
  return (
    <div className='flex items-center my-3 gap-2 '>
     <div className='flex flex-1 items-center cursor-pointer'>
        <img src={tick} alt="Tick" />
        <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
     </div>
     <img src={delete_icon} alt="Delete" className='w-5 h-5 cursor-pointer' />
    </div>
  )
}

export default TodoItems