import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-slate-900 text-white px-6 py-4">
      <Link to="/" className="text-2xl font-bold text-blue-500">
        GigFlow
      </Link>
    </nav>
  );
};

export default NavBar;
