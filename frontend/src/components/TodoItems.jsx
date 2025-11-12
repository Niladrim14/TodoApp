
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({ text , isCompleted, deletetodo,id,completetodo }) => {
  return (
    <div className='flex items-center my-3 gap-2 '>
     <div className='flex flex-1 items-center cursor-pointer'>
        <img onClick={()=>{completetodo(id)}} src={isCompleted ? tick : not_tick} alt="Tick" className='w-5 h-5 cursor-pointer' />

        <p className={`text-slate-600 ml-4 text-[17px] decoration-slate-900 ${isCompleted ? 'line-through' : ''}`}>{text}</p>
     </div>
     <img onClick={() => {deletetodo(id)}} src={delete_icon} alt="Delete" className='w-5 h-5 cursor-pointer' />
    </div>
  )
}

export default TodoItems