import { useState, useContext } from 'react';
import { TaskContext } from '../context/TasksContext';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescrption] = useState('');
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle('');
    setDescrption('');
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-400 p-10">
        <h2 className="font-bold text-white text-2xl">TODO</h2>
        <label htmlFor="task">Add a new task</label>
        <input
          className="fill-orange-50 p-2 w-full mb-3"
          type="text"
          id="task"
          placeholder="Do the homework"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="fill-orange-50 p-2 w-full mb-3 max-h-20"
          placeholder="Do the math homework and deliver it before 10"
          onChange={(e) => setDescrption(e.target.value)}
          value={description}
        ></textarea>
        <button type="submit" className="bg-cyan-900 rounded-sm p-2 text-white">
          Add Task
        </button>
      </form>
    </div>
  );
}
