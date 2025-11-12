import React,{useRef,useEffect} from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems.jsx'

const Todo = () => {

  const [todolist, setTodolist] = React.useState(JSON.parse(localStorage.getItem('todolist')) || []);
  const inputRef = useRef();

const add = () => {
  const value = inputRef.current.value.trim();
         if (value === '') return;
     const newTodo = { id: Date.now(), text: value, completed: false };

     setTodolist((prev)=>[...prev,newTodo]);
         inputRef.current.value = '';
   };

   const deletetodo = (id) => {
    setTodolist((prev) => { return prev.filter((todo) => todo.id !== id) });
  };
     const completetodo = (id) => {
      setTodolist((prev) => {
        return prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
      });
    };
  useEffect(() => { 
    localStorage.setItem('todolist',JSON.stringify(todolist));
    
    
  }, [todolist]);
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md  flex flex-col py-7 min-h-[500px]'>
         <div className='flex ml-25 items-center  '>
            <img src={todo_icon} alt=""  className='w-10'/>
            <h1 className='text-3xl font-extrabold text-black underline '>TO-DO List  </h1>  
         </div>
                       {/* Input Section */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input  ref={inputRef}   className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-500 text-black' type="text" placeholder='Add your Task ' />
            <button onClick={add} className='bg-orange-600 rounded-md text-white border  px-4 py-2 cursor-pointer'
            > ADD +</button>
        </div>
        {/* Todo List*/}
        <div>
           {todolist.map((item)=>(
            <TodoItems key={item.id} id={item.id} text={item.text} isCompleted={item.completed} deletetodo={deletetodo} completetodo={completetodo} />
           ))}
           
        </div>
    </div>
  )
}

export default Todo     