import Header from './Header/Header';
import './App.css';
import Todolist from './Todolist/Todolist';
import Todoform from './Todoform/Todoform';

function App() {
  return (
    <div >
        <Header />
        <Todoform />
        <Todolist />
    </div>
  );
}

export default App;
