import './Info.css'
interface Props {
  taskQuantity: number;
  completedTask: number;
}


function Info({ taskQuantity, completedTask }: Props) {

  return (

      <div className="infoTask">
          <div className="create">
            <p className="createTask">Create Task</p>
            <p className="createCount"><span className="count">{taskQuantity} </span></p>
          </div>
          <div className="done">
            <p className="doneTask">Done</p>
        <p className="doneCount"><span className="countDone">{completedTask} de {taskQuantity} </span></p>
          </div>
      </div>

)
}
export default Info
