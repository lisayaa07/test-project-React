import { useState } from "react";
import "./App5.css";

export default function ToDoList() {
  const [todo, setTodo] = useState([
    { name: "ทำการบ้าน", status: "doing" },
    { name: "ถูบ้าน", status: "completed" }
  ]);

  const [text, setText] = useState("");


  const addTodo = () => {
    if (text.trim() === "") return;

    setTodo(prev => [
      ...prev,
      { name: text, status: "doing" }
    ]);

    setText("");
  };

  const deleteTodo = (index) => {
    setTodo(prev => prev.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodo(prev =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              status: item.status === "completed" ? "doing" : "completed"
            }
          : item
      )
    );
  };

  return (
    <>
      <header>
        <h1>To Do List</h1>
      </header>

      <section className="section1">
        <input
          placeholder="Enter Your To Do"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn-add" onClick={addTodo}>
          Add
        </button>
      </section>

      <section className="section2">
        {todo.map((item, index) => (
          <p
            key={index}
            style={{
                textDecoration:
                  item.status === "completed" ? "line-through" : "none"
              }}
            onClick={() => toggleTodo(index)}
          >

            <input
              type="checkbox"
              checked={item.status === "completed"}
              readOnly
            />
            {item.name}
            <button
              className="btn-delete"
              onClick={(e) => {
                e.stopPropagation(); 
                deleteTodo(index);
              }}
            >
              delete
            </button>
          </p>
        ))}
      </section>
    </>
  );
}
