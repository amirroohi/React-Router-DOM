import { NavLink, Outlet, useLocation } from "react-router-dom";

function Dashboard() {
  // const location = useLocation();
  // console.log(location);
  return (
    <div id="dashboard">
      <div id="sidebar">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="payments">Payment</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
