import './App.css';
import {useState} from 'react'
import NewTask from './NewTask/NewTask'
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  const [list,setList] = useState([]);
  const [task, setTask] = useState("");

  const newTaskHandler = (e) => {
    setTask(e.target.value);
  }

  const SubmitTasksHandler = (e) => {
    e.preventDefault();
    if(task){
      setList([...list, task]);
      setList([...list, {task: task, id: Date.now()}]);
      setTask('');
    }
  }

  const deleteHandler = (itemIndex) => {
    const array = [...list];
    array.splice(itemIndex, 1);
    setList(array);
    console.log(list);
  }

  const deleteAllHandler = () => {
    setList([]);
  }

  let remaningTasks = '';
  let length = list.length;

  if(length > 0){
   remaningTasks = `You have ${length} remaining tasks`;
  }

  let clearAll = '';

  if(length>0){
    clearAll = (
      <div className="remainingTasks">
        <button className="clearAll-btn" onClick={deleteAllHandler}>
          <p>Clear All</p>
        </button>   
    </div>
    )
  }

  return (
    <div className="App" id="App">
      <div className="main">
        <NewTask newTask={newTaskHandler} submitTasks={SubmitTasksHandler} currentTask={task}/>
        {list.map((item,index) => {
          return <div className="list">        
            <p>{item.task}</p>
            <button className="delete-btn far fa-address-card" type="submit" onClick={() => deleteHandler(index)}>
              <DeleteIcon className="DeleteIcon"/>
            </button>
          </div>
        })}
        <div className="remainingTasks">
          {remaningTasks}
          {clearAll}
        </div>
      </div>
    </div>  
  );
}

export default App;
