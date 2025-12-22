import NavMenu from "./components/NavMenu";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <NavMenu />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
