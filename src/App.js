import "./App.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import PostMethod from "./component/Post";
import CommentsMethod from "./component/CommentsApi";
import ToDoData from "./component/Todo";
import UserData from "./component/userData";

function App() {
  return (
    <div>
      <PostMethod />
      <CommentsMethod />
      <ToDoData />
      <UserData />
    </div>
  );
}

export default App;
