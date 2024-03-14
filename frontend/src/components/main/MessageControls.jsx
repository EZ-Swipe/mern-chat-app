import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

const MessageControls = ({ handleDelete }) => {
  return (
    <div className='dropdown md:dropdown-left absolute md:-top-8 top-4 dropdown-top left-2 md:right-2 md:left-auto'>
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
