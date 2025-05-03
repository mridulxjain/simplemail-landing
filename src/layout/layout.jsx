import { Outlet } from "react-router-dom";
import Dock from "../components/dock";

const Layout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-y-auto">
      
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
        <div>
            <Outlet />
            <Dock />
        </div>
    </div>
  );
};

export default Layout;