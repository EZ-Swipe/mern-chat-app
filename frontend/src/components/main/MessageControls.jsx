import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

const MessageControls = ({ handleDelete }) => {
  return (
    <div className={`dropdown dropdown-left absolute -top-8 right-2`}>
      <div tabIndex={0} role="button" className="btn btn-xs m-1">
        <BsThreeDots size="1.5em" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a onClick={handleDelete}>
            <MdDeleteOutline size="1.2rem" /> Delete
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MessageControls;
