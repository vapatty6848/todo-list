import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header/Header"
import TaskEmpty from "./taskEmpty/TaskEmpty";

import Info from "./info/Info";
import Task from "./task/Task";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export interface ITask {
  id: string;
  todo: string;
  isCompleted?:(taskId: string) => void ;
  onDelete?: (taskId: string) => void;
  checked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function setTaskItems(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
   }

  function loadTaskItems() {
    const savedItemsStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedItemsStorage) {
      setTasks(JSON.parse(savedItemsStorage))
    }
  }

  useEffect(() => {
    loadTaskItems()
  }, []);
  console.log(loadTaskItems)
  function addTask(taskTodo: string) {
    setTaskItems([
      ...tasks,
      {
        id: crypto.randomUUID(),
        todo: taskTodo,
        checked: false,
      }
    ])
  }
  const taskQuantity = tasks.length;
  const completedTask = tasks.filter((task) => task.checked === true).length;

  function onDeleted(taskId:string) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTaskItems([...newTask])
  }

  function isCompleted(taskId: string) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          checked: !task.checked,
        };
      }
      return task;
    });
    setTaskItems(newTask)
  }


  return (
    <>
      <div className="container-task-empty">
        <Header onAddTask={addTask} />
        <div className="container-task-empty-todo">
          <Info
            taskQuantity={taskQuantity}
            completedTask={completedTask}
          />
                <div className="listTask">
                    {tasks.length <= 0 ? <TaskEmpty /> :
                        <div>
                                {tasks.map((task) => (
                                  <Task
                                      id={task.id}
                                      key={task.id}
                                      todo={task.todo}
                                      isCompleted={ () => isCompleted(task.id)}
                                      onDeleted={() => onDeleted(task.id)}
                                      checked={task.checked}
                                  />
                                ))}
                            </div>
                    }
                  </div>
                </div>
          </div>
      </>
      )
}

export default App
