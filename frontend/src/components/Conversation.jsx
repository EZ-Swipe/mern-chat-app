import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store/useConversation";

const Conversation = ({ conversation, toglleAside }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const handleClick = () => {
    setSelectedConversation(conversation);
    toglleAside();
  };
  return (
    <li
      className={`flex items-center gap-4 cursor-pointer px-2 py-2 transition hover:bg-gray-700 ${
        isSelected ? "bg-gray-700" : ""
      }`}
      onClick={handleClick}
    >
      <div className={`w-12 avatar ${isOnline ? "online" : ""} `}>
        <img src={conversation.profilePic} alt="" />
      </div>
      <span className="text-2xl text-gray-200">{conversation.fullName}</span>
    </li>
  );
};

export default Conversation;
