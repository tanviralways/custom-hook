import useFetch from "../customHooks/useFetch";
import("./post.css");

function Posts() {
  const { datas, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return (
    <div className="container">
      {error && <p>{error}</p>}
      {isLoading && "loadingggggg"}
      {datas.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <h1>{post.id}</h1>
            <h3>{post.name}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
