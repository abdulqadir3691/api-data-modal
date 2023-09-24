import axios from "axios";
import React, { useEffect, useState } from "react";

const ToDoData = () => {
  const [ToDoMathod, setToDoMathod] = useState([]);
  const [DataUser, setDataUser] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((respon) => {
      setToDoMathod(respon.data);
    });
  }, []);
  return (
    <div>
        <h1 className="text-danger fw-bold text-center">  To Do Method </h1>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                {DataUser.id}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body"> {DataUser.title}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                save
              </button>
            </div>
          </div>
        </div>
      </div>

      <table class="table table-danger">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">    Data check </th>
          </tr>
        </thead>
        <tbody>
          {ToDoMathod.map((todo) => {
            return (
              <tr>
                <td> {todo.id}</td>
                <td> {todo.title} </td>

                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => {
                      setDataUser(todo);
                    }}
                  >
                    check out the data
                  </button>
                </td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoData;
