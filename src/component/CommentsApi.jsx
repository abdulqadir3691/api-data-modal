"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function CommentsMethod() {
  const [allComments, setAllComments] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setAllComments(response.data);
      })
  }, []);

  return (
    <>
    <h1 className="text-secondary fw-bold text-center"> Comments Method Api Call</h1>
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
                {selectedComments?.id}
                <h2>  </h2>
               
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{selectedComments?.email}</div>
            <div class="modal-body">{selectedComments?.body}</div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
               Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-warning">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col"> name</th>
            <th scope="col">email</th>
            <th scope="col">body</th>
            <th scope="col">check data </th>
          </tr>
        </thead>
        <tbody>
          {allComments.map((post) => {
            return (
              <tr>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => {
                      setSelectedComments(post);
                    }}
                  >
                    Show Comments
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CommentsMethod;