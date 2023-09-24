"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserData() {
  const [userPost, setUserPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUserPosts(response.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-info text-center fw-bold"> User Data Method</h1>

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
                {" "}
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  {selectedPost?.id}
                </h1>
                <h2>{selectedPost?.name}</h2>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-body">{selectedPost?.username}</div>
              <div class="modal-body">{selectedPost?.email}</div>
              <div class="modal-body">
                {selectedPost?.address?.street}, {selectedPost?.address?.suite},{" "}
                {selectedPost?.address?.city}, {selectedPost?.address?.zipcode}
              </div>
              <div class="modal-body">
                Lat: {selectedPost?.address?.geo?.lat}, Lng:{" "}
                {selectedPost?.address?.geo?.lng}
              </div>
            </div>
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

      <table class="table table-success table-striped-columns">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">adress</th>
            <th scope="col">geo</th>
            <th scope="col"> get the data </th>
          </tr>
        </thead>
        <tbody>
          {userPost.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.address?.street}, {user.address?.suite},{" "}
                  {user.address?.city}, {user.address?.zipcode}
                </td>
                <td>
                  {" "}
                  <b className="text-success"> Lat: </b>{" "}
                  {user.address?.geo?.lat}, <b className="text-info"> Lng: </b>{" "}
                  {user.address?.geo?.lng}
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary
                    btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setSelectedPost(user);
                    }}
                  >
                    click to check
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

export default UserData;
