import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

//Recibe como props las tareas  desde app.js

function TaskList() {
  /* traigo las tareas desde taskContext*/
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        /* pasa a taskCard las cada tarea y la funcion para eliminar una  */
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
