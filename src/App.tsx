import { useState } from "react";
import { tasks } from "./tasks";

function Task({
  title,
  completed,
  onCheck,
  onDelete,
}: {
  title: string;
  completed: boolean;
  onCheck: (checked: boolean) => void;
  onDelete: () => void;
}) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={(e) => onCheck(e.target.checked)}
        />
      </td>
      <td>{title}</td>
      <td>
        <button onClick={() => {onDelete()}}>Usuń</button>
      </td>
    </tr>
  );
}

function App() {
  const [taskList, setTaskList] =
    useState<{ id: number; title: string; completed: boolean }[]>(tasks);

  const [filter, setFilter] = useState<"wszystkie" | "wykonane" | "niewykonane">("wszystkie");
  const [sort, setSort] = useState<"alfabetycznie" | "wgstanu" | "oryginalnie">("oryginalnie");

  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleCheck(checked: boolean, id: number) {
    let newTaskList = [...taskList];
    const taskIndex = newTaskList.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      newTaskList[taskIndex].completed = checked;
      setTaskList(newTaskList);
    }
  }

  function deleteTask(id: number) {
    let newTaskList = [...taskList];
    const taskIndex = newTaskList.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      newTaskList.splice(taskIndex, 1);
      setTaskList(newTaskList);
    }
  }

  function addTask(title: string) {
    if (title.trim() === "") {
      alert("Nie można dodać pustego zadania");
      return;
    }
    const newTask = { id: taskList[taskList.length - 1].id + 1, title, completed: false };
    setTaskList([...taskList, newTask]);
    setNewTaskTitle("");
  }

  const finalTasks = taskList.filter((task) => {
    if (filter === "wykonane") {
      return task.completed;
    }
    if (filter === "niewykonane") {
      return !task.completed;
    }
    return true;
  }).sort((a, b) => {
    if (sort === "alfabetycznie") {
      return a.title.localeCompare(b.title);
    }
    if (sort === "wgstanu") {
      return Number(a.completed) - Number(b.completed);
    }
    return 0;
  });

  return (
    <>
      <h1>Lista zadań</h1>
      <table></table>
      <h3>Filtrowanie: </h3>
        <input type="radio" name="filter" value="wszystkie" checked={filter === "wszystkie"} onChange={() => setFilter("wszystkie")}/> <label>Wszystkie</label><br/>
        <input type="radio" name="filter" value="wykonane" checked={filter === "wykonane"} onChange={() => setFilter("wykonane")}/> <label>Wykonane</label><br/>
        <input type="radio" name="filter" value="niewykonane" checked={filter === "niewykonane"} onChange={() => setFilter("niewykonane")}/> <label>Niewykonane</label><br/>
      <h3>Sortowanie: </h3>
        <input type="radio" name="sort" value="alfabetycznie" checked={sort === "alfabetycznie"} onChange={() => setSort("alfabetycznie")}/> <label>Alfabetycznie</label><br/>
        <input type="radio" name="sort" value="wgstanu" checked={sort === "wgstanu"} onChange={() => setSort("wgstanu")}/> <label>Według stanu</label><br/>
        <input type="radio" name="sort" value="oryginalnie" checked={sort === "oryginalnie"} onChange={() => setSort("oryginalnie")}/> <label>Oryginalnie</label><br/>
        <br/>
      <table>
        <thead>
          <tr>
            <th>Wyk.</th>
            <th>Zadanie</th>
          </tr>
        </thead>
        {finalTasks.map((task) => (
          <Task
            key={task.title}
            title={task.title}
            completed={task.completed}
            onCheck={(checked) => {
              handleCheck(checked, task.id);
            }}
            onDelete={() => {
              deleteTask(task.id);
            }}
          />
        ))}
      </table>
      <input type="text" placeholder="Dodaj zadanie" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} /> 
      <button onClick={() => {addTask(newTaskTitle)}}>Dodaj</button>
      <br />
      <button onClick={() => {taskList.filter((task) => task.completed).forEach((task) => deleteTask(task.id));}}>Usuń wykonane</button>
      <h3>
        Niewykonane zadania: {taskList.filter((task) => !task.completed).length}
      </h3>
    </>
  );
}

export default App;
