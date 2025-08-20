import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  showSections?: boolean;
  authPage?: "login" | "register" | "forgot-password" | null;
}

const Navbar = ({ showSections = true, authPage = null }: NavbarProps) => {
  const location = useLocation();

  // Auto-detect auth pages if not explicitly provided
  const currentAuthPage =
    authPage ||
    (location.pathname.includes("/auth/login")
      ? "login"
      : location.pathname.includes("/auth/register")
      ? "register"
      : location.pathname.includes("/auth/forgot-password")
      ? "forgot-password"
      : null);

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 border-b border-gray-100">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-slate-900 border border-gray-100 p-2"
      >
        <span
          className={`${
            currentAuthPage?.length ? "bg-green-500" : "bg-slate-900"
          } text-white text-xl font-bold pl-4`}
        >
          Zip<span className="bg-white text-black">Chat</span>
        </span>
      </Link>

      {showSections && (
        <nav className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
          <a
            className="hover:text-slate-900 transition-colors"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:text-slate-900 transition-colors"
            href="#services"
          >
            Advanced
          </a>
          <a
            className="hover:text-slate-900 transition-colors"
            href="#community"
          >
            Creative
          </a>
          <Link className="hover:text-slate-900 transition-colors" to="/terms">
            Terms
          </Link>
        </nav>
      )}

      <div className="flex items-center gap-4">
        {currentAuthPage === "login" ? (
          <>
            <Link
              to="/auth/login"
              className=" bg-green-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-green-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="hidden text-sm font-medium text-gray-600 hover:text-slate-900 transition-colors md:inline"
            >
              Sign up
            </Link>
          </>
        ) : currentAuthPage === "register" ? (
          <>
            <Link
              to="/auth/login"
              className="hidden text-sm font-medium text-gray-600 hover:text-slate-900 transition-colors md:inline"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className=" bg-green-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-green-600 transition-colors"
            >
              Sign up
            </Link>
          </>
        ) : currentAuthPage === "forgot-password" ? null : ( // No auth buttons on forgot password page
          // Default navbar for landing page
          <>
            <Link
              to="/auth/login"
              className="hidden text-sm font-medium text-gray-600 hover:text-slate-900 transition-colors md:inline"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className=" bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
