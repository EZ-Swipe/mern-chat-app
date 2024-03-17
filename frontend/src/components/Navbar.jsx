import { useAuthContext } from "../context/AuthContext";
import Logout from "./Logout";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="navbar justify-around py-6 pb-0">
      <SearchInput />
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={authUser.profilePic}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 bg-gray-800 text-gray-400"
        >
          <Logout />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
