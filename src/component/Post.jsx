import axios from "axios";
import React, { useEffect, useState } from "react";

const PostMethod = () => {
  const [PostMthod, setPostMthod] = useState([]);
  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((respo) => {
      setPostMthod(respo.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-info fw-bold text-center"> Post Method </h1>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {UserData?.title}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{UserData?.id}</div>
            <div class="modal-body">{UserData?.body}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <table class="table table-info">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Check data</th>
          </tr>
        </thead>
        <tbody>
          {PostMthod.map((post) => {
            return (
              <tr key={post.id}>
                <td> {post.id} </td>
                <td> {post.title}</td>
                <td> {post.body}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setUserData(post);
                    }}
                  >
                    View Data
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

export default PostMethod;
