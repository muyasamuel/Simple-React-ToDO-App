import Header from './Header/Header';
import './App.css';
import Todolist from './Todolist/Todolist';
import Todoform from './Todoform/Todoform';
import { TodoProvider } from './Todo-context/TodoContext';


function App() {
  return (
    <TodoProvider>
        <Header />
        <Todoform />
        <Todolist />

    </TodoProvider>
        
   
  );
}

export default App;
