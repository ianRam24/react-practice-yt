import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <main className="bg-teal-900 h-screen">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
