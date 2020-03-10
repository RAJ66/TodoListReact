import React from "react";

export default function TodoItem(props) {
  function handleClick() {
    console.log("click");
    props.item.completed = true;
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={handleClick}
      />
      <p style={props.item.completed ? { color: "red" } : { color: "black" }}>
        {props.item.text}
      </p>
    </div>
  );
}
