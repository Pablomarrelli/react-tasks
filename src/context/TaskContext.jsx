import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

/* 
Este archivo va a ser el general que contenga a todos los demas archivos de manera global.
es necesario cargar el import de este archivo en el archivo main.jsx  */

/* creo un porovider para almacenar los datos y que todos los components puedan acceder directamente al arreglo de task directamente */
export const TaskContext = createContext();

/* componente que engloba a todos los demas componentes */
export function TaskContextProvider(props) {
  let x = 20;

  const [tasks, setTasks] = useState([]);

  /* funcion para crear nuevas tareas */
  function createTask(task) {
    /* copio el arreglo con ... de tareas y le agrego la nueva tarea*/
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length + 1,
        description: task.description,
      },
    ]);
  }

  /* elimina una terea */
  function deleteTask(taskId) {
    /*  Filtro y elimino el task con el id seleccionado y seteo el arreglo de tareas */
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  //defino el useEffect para que cuando cargue el componente cree el state con las tareas del archivo tasks.js
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
