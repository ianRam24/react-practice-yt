import { useContext } from 'react';
import { TaskContext } from '../context/TasksContext';
export default function Task({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-slate-700 text-white p-5 rounded-md">
      <h3 className="text-xl font-bold capitalize">{task.title}</h3>
      <p className="text-zinc-400 text-sm">{task.description}</p>
      <button
        className="bg-red-500 p-2 rounded-sm mt-3 hover:bg-red-800 cursor-pointer"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}
