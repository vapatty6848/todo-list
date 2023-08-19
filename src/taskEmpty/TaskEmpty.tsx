
import './TaskEmpty.css';
import clipboard from '/src/assets/Clipboard.svg';
function TaskEmpty() {
  return (
    <div >

      <div className="empty">
        <img src={clipboard}  alt="Clipboard" className="clipboard"/>
        <div className="textEmpty">
          You still don't have tasks . Create your tasks and  organize your items to do.
        </div>
        </div>
      </div>
  )
}
export default TaskEmpty
