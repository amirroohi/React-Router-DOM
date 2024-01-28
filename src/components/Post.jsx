import { Link, useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "Post 1", body: "show the body of the post 1 was released" },
  { id: 2, title: "Post 2", body: "show the body of the post 2 was released" },
  { id: 3, title: "Post 3", body: "show the body of the post 3 was released" },
];

function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  return (
    <div
      style={{
        border: "1px solid",
        margin: "20px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Posts</h1>
      <h2> post id: {id}</h2>
      <h3>{post.title}</h3>
      <h3>{post.body}</h3>
      <Link to="/app/posts">previuos page</Link>
    </div>
  );
}

export default Post;
