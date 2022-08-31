import { useContext } from 'react';
import { TaskContext } from '../context/TasksContext';
import Task from './Task';

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h3 className="text-white text-6xl text-center mt-10">No hay tareas</h3>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-3">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
