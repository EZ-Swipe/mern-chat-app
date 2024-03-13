import { useEffect, useRef, useState } from "react";
import Conversations from "../../components/Conversations";
import Navbar from "../../components/Navbar";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const toglleAside = () => {
    setIsOpen(!isOpen);
  }

  return (
    <aside
      ref={ref}
      className={`bg-gray-900 aside-bg flex-shrink-0 custom-aside ${
        isOpen ? "aside-visible" : ""
      }`}
    >
      <div>
        <div className="relative">
          {!isOpen ? (
            <CgMenuLeft
              size="2rem"
              className="aside-toggle-icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <IoMdClose
              size="2rem"
              className="aside-toggle-icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      <Navbar />
      <Conversations toglleAside={toglleAside} />
    </aside>
  );
};

export default Aside;
