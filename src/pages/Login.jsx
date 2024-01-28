import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/app/dashboard", {
      replace: true,
      state: "this is a state from login navigate",
    });
  };
  return (
    <div>
      <h1>Login Form</h1>
      {isAuth && <Navigate to="/app/dashboard" replace="true" />}
      <form onSubmit={handleSubmit}>
        <button>login</button>
        <button onClick={() => setIsAuth(true)}>go dashboard</button>
      </form>
    </div>
  );
}
