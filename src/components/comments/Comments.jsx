import React from "react";
import useFetch from "../customHooks/useFetch";
import "./comments.css";

function Comments() {
  const { datas, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/albums"
  );
  //console.log(datas.title);
  return (
    <div className="container">
      {error && <p>{error}</p>}
      {isLoading && "loadingggggg hoitase"}
      {datas.map((data) => {
        console.log(data);
        return (
          <div key={data.id} className="comment-card">
            <h1>{data.title}</h1>
            <p>{data.id}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Comments;
