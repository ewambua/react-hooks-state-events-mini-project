import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS)
  const [categories] = useState(CATEGORIES)
  const [selectedCategoryButton, setSelectedCategoryButton] = useState('All')

  function addNewTask(newTask){
    setTask([...task,newTask])
  }

  function deleteTask(deleteTask){
    setTask(task.filter((item)=>item.text !== deleteTask))
  }


  const renderedTask = task.filter(
    (item)=>{
    if(selectedCategoryButton==='All') return true
    return selectedCategoryButton === item.category
    }
   )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories}
        categoryButton={selectedCategoryButton}
        selectedCategory={setSelectedCategoryButton}
      />
      <NewTaskForm  onTaskFormSubmit={addNewTask} categories={categories}/>
      <TaskList deleteTask={deleteTask} tasks={renderedTask}/>
    </div>
  );
}

export default App;
