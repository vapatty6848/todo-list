
import rocket from '/src/assets/rocket.svg'
import todo from '/src/assets/todo.svg'
import plus from '/src/assets/plus.svg'
import './Header.css'
import { ChangeEvent, useState } from 'react'

interface Props {
  onAddTask : (todo: string) => void;
}

export function Header({ onAddTask }: Props) {
   const [addTodo, setAddTodo] = useState("")
  function handleAddTodo() {
    if(addTodo === "") return
    onAddTask(addTodo);
    setAddTodo("")
   }

  function onChangeAddTodo(event: ChangeEvent<HTMLInputElement>) {
    setAddTodo(event.target.value);
  }

  return (
     <div className="top">
      <img className="rocket" src={rocket} alt="rocket"/>
      <img className="todo" src={todo}  alt="todo"/>
      <div className="newTask">
        <input className="inputNewTask"
          placeholder='Add a new task'
          type="text"
          value={addTodo}
          onChange={onChangeAddTodo}
        />
        <button  type="submit" className="trash" onClick={handleAddTodo}>
          <p className="add">Add</p>
          <img className="plus" src={plus} alt="plus"/>
        </button>
      </div>
    </div>
  )
}
export default Header;
