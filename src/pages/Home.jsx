import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h3>
        <Link to="/posts">see latest posts</Link>
      </h3>
      <h3>
        <Link to="/dashboard">see your dashboard</Link>
      </h3>
    </div>
  );
}

export default Home;
