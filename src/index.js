// 1) import the react and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";
import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Kelvin"
          timeAgo="Today at 4:00pm"
          text="You did well"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Godwin"
          timeAgo="Today at 1:00pm"
          text="Nice post"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Nwabor"
          timeAgo="yesterday at 12:00pm"
          text="You are amazing"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Ogonnaya"
          timeAgo="last week at 11:00pm"
          text="Praise jah"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
