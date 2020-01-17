import React, { useState } from "react";
import "./Todo.css";

export default function Todo() {
  const [task, setAddTask] = useState({ getTask: [] });

  const onChange = event => {
    setAddTask({
      ...task,
      [event.target.name]: event.target.value
    });
  };
  const addTaks = () => {
    let tempArr = task.getTask;
    tempArr.push(task.inputValue);
    setAddTask({
      ...task,
      getTask: tempArr,
      inputValue: ""
    });
  };
  const getValue = event => {
    if (event.key === "Enter") {
      let tempArr = task.getTask;
      tempArr.push(task.inputValue);
      setAddTask({
        ...task,
        getTask: tempArr,
        inputValue: ""
      });
    }
  };
  const removeTasks = id => {
    let tempArr = task.getTask;
    tempArr.splice(id, 1);
    setAddTask({
      ...task,
      getTask: tempArr
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 padding-top">
          <input
            class="form-control form-control-sm"
            type="text"
            name="inputValue"
            placeholder="Enter Task"
            onChange={onChange}
            value={task.inputValue}
            onKeyDown={getValue}
          />
        </div>
        <div className="col-6 padding-top">
          <button
            type="button"
            //   id="add"
            class="btn btn-primary"
            onClick={addTaks}
            value="Reset form"
          >
            Add
          </button>
        </div>
      </div>

      <div className="row">
        {task.getTask.map((each, i) => {
          return (
            <>
              <div className="col-6">
                <ul className="list-group padding">
                  <li className="list-group-item">{each}</li>
                </ul>
              </div>
              <div className="col-6 padding-top">
                <button
                  type="button"
                  //   id="add"
                  class="btn btn-primary"
                  onClick={() => removeTasks(i)}
                  value="Reset form"
                >
                  Remove
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
