
import './Task.css'
import trash from '/src/assets/trash.svg';
import check from '/src/assets/checked.svg';

interface Props {
  id: string;
  todo: string;
  isCompleted: (taskId: string) => void;
  onDeleted: (taskId: string) => void;
  checked: boolean;
}

function Task({ id, todo, isCompleted, onDeleted,checked} : Props) {
  //const task = 'Integer a interim massa libero actor not turned turned semper. Duo vel sed fames integer '

  return (
       <div className="taskOfList">
      <button type="button" className={checked ? "btn": "checkBtn" }onClick={() => isCompleted(id)}>
        {checked ?
          <img src={check} alt={check} width="24"  height="24" /> : <></>
         }
      </button>
        <p className="integerTask" >
          <span className={checked ?" textCompleted " : ""}  >{todo}</span>
        </p>
        <button type="button" className="trashTask"  onClick={() => onDeleted(id)}>
          <img src={trash} alt="trash" className="remove" />
        </button>
        </div>

  )
}
export default Task
