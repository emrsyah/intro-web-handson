import { useState } from "react";
import "./App.css";

const todoSaya = [
  {
    id: "1",
    todo: "Olahraga Pagi",
  },
  {
    id: "2",
    todo: "Belajar buat UAS",
  },
  {
    id: "3",
    todo: "Mengerjakan Tugas",
  },
  {
    id: "4",
    todo: "Ulangan Kalkulus",
  },
];

function App() {
  const [todos, setTodos] = useState(todoSaya);
  const [input, setInput] = useState("")

  const addTodo = () => {
    const id = crypto.randomUUID()
    const newTodo = {
      id: id,
      todo: input
    }
    setTodos((cur) => [...cur, newTodo])
    setInput("")
  }

  const deleteTodo = (hapusId) => {
    // console.log(hapusId)
    const copyTodos = todos
    const news = copyTodos.filter((todo) => todo.id !== hapusId)
    setTodos(news)
  }

  return (
    <div>
      <div>
        <input type="text" value={input} onChange={(ev) => setInput(ev.target.value)} />
        <button onClick={addTodo} >Tambah</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h5>{todo.todo}</h5>
            <button onClick={() => deleteTodo(todo.id)}>Hapus</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
