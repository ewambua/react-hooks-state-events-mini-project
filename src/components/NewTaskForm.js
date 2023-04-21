import React,{ useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code",
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setNewTask({
      ...newTask,
      [name]: value,
    });
  }



  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      onTaskFormSubmit(newTask)}
      }
      className="new-task-form">
      <label>
        Details
        <input value={newTask.text}onChange={handleChange} type="text" name="text"/>
      </label>
      <label>
        Category
        <select value={newTask.category} onChange={handleChange} name="category">
        {categories.map((category)=>(
            <option key={category.id}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
