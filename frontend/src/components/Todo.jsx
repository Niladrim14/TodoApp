import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems.jsx'

const Todo = () => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md  flex flex-col py-7 min-h-[500px]'>
         <div className='flex ml-25 items-center  '>
            <img src={todo_icon} alt=""  className='w-10'/>
            <h1 className='text-3xl font-extrabold text-black underline '>TO-DO List  </h1>  
         </div>
                       {/* Input Section */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-500 text-black' type="text" placeholder='Add your Task ' />
            <button className='bg-orange-600 rounded-md text-white border  px-4 py-2 cursor-pointer'> ADD +</button>
        </div>
        {/* Todo List*/}
        <div>
            <TodoItems text="Learn Coding" />
            <TodoItems text="Learn Coding from YouTube" />
        </div>
    </div>
  )
}

export default Todo     