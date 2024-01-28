import { Link } from "react-router-dom";

function Posts() {
  return (
    <div
      style={{
        border: "1px solid",
        margin: "20px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Posts Page</h1>
      <ul>
        <li>
          <Link to="1">Post 1</Link>
        </li>
        <li>
          <Link to="2">Post 2</Link>
        </li>
        <li>
          <Link to="3">Post 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
