import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addList = (value) => {
    const data = {
      id: Math.floor(Math.random() * 1000),
      name: value,
      isComplete: false,
    };
    setList([...list, data]);
  };

  const addTodo = () => {
    addList(value);
    setValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
  };

  const completeTodo = (id) => {
    const done = list.find((e) => e.id === id);
    done.isComplete = !done.isComplete;
    setList([...list]);
  };

  const removeTodo = (id) => {
    const newList = list.filter((e) => e.id !== id);
    setList([...newList]);
  };

  return (
    <div className='container'>
      <div>
        <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
          <input
            className='form-control col-4'
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className='btn btn-primary col-1' onClick={addTodo}>
            Hozzáadás
          </button>
        </form>

        {list.map((e) => (
          <div key={e.id}>
            <div className='row justify-content-center'>
              <div className='col-4'>{e.name}</div>
              <div className='col-4'>
                <input
                  class={`form-check-input ${e.isComplete ? "checked" : ""}`}
                  type='checkbox'
                  onClick={() => completeTodo(e.id)}
                />
                <label className='m-2'>Kész!</label>

                <button
                  className={`btn btn-danger ${
                    !e.isComplete ? "disabled" : ""
                  }`} //hidden nem sikerült, igy disabled-re raktam
                  onClick={() => removeTodo(e.id)}
                >
                  Törlés
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
