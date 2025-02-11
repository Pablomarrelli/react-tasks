import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  /* traigo el create context desde TaskContext */
  const { createTask } = useContext(TaskContext);

  /* funcion para capturar y guardar tareas del input */
  const handleSubmit = (e) => {
    e.preventDefault();
    /* llamo a la funcion para guardar la nueva tarea que esta en app */
    createTask({ title, description });

    //vacio el formulario
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu Tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          autoFocus
        />
        <textarea
          name="Escribe la descripcion de la tarea"
          placeholder="Escribe una descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}
