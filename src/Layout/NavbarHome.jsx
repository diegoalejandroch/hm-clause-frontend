import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useState, useEffect } from "react";

function NabvarHome() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'forest' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">HM Clause</a>
      </div>
      <div className="flex-none gap-2">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
        >
          {theme === 'light' ? (
            <CiDark className="w-5 h-5 transition-all duration-300" />
          ) : (
            <CiLight className="w-5 h-5 transition-all duration-300" />
          )}
        </button>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div 
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar placeholder online placeholder-paragraph"
          >
            <div className="bg-neutral text-neutral-content w-10 rounded-full">
              <span className="text-2xl">E</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NabvarHome;
