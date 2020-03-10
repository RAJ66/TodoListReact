import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? { color: "red" } : { color: "black" }}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
