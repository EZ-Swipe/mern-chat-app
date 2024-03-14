import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";
import MessageControls from "./MessageControls";
import useDeleteMessage from "../../hooks/useDeleteMessage";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formattedTime = extractTime(message.createdAt);
  const [showControls, setShowControls] = useState(false);


  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end hover:bg-gray-900" : "chat-start";

  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgColor = fromMe ? "bg-emerald-900" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  const handleMouseEnter = () => {
    if (fromMe) {
      setShowControls(true);
    }
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const { deleteMessage } = useDeleteMessage();

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteMessage(message._id);
  };



  return (
    <div
      className={`chat md:chat-start relative pl-3 ease-linear duration-75 ${chatClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showControls && (
        <MessageControls
          handleDelete={handleDelete}
        />
      )}
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Profile Pic" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
