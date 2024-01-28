import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

function Layout() {
  return (
    <div>
      <AppNav />
      <Outlet />
      <footer>
        <h3
          style={{
            borderTop: "1px solid",
            margin: "20px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          this is Footer
        </h3>
      </footer>
    </div>
  );
}

export default Layout;
