import React, { useState } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = () => {
  const [list, setList] = useState([]);
  const handleAddItem = addItem => {
    setList([...list, addItem]);
    console.log(list);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (response.ok) {
        const data = await response.json();
        // Elegimos 5 al azar
        const filteredData = data.sort(() => Math.random() - Math.random()).slice(0, 5);
        // Parseamos los datos
        const parsedData = parseData(filteredData);
        
        setList(parsedData);
      } else {
        throw new Error("Something went wrong while fetching data");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const parseData = data => {
    return data.map(item => ({
      id: item.id.toString(),
      description: item.title,
      done: item.completed
    }));
  }

  return (
    <div>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
      <button 
        onClick={fetchData}
        className="button blue"
      >Call API</button>
    </div>
  );
};

export default Container;