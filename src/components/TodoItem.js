import React from "react";

export default function TodoItem(props) {
  console.log(props);
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} />
      <p style={props.item.completed ? { color: "red" } : { color: "black" }}>
        {props.item.text}
      </p>
    </div>
  );
}
