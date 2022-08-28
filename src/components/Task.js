import React from "react";

function Task({ category, text, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => onDeleteTask(text)} className="delete"></button>
    </div>
  );
}

export default Task;
