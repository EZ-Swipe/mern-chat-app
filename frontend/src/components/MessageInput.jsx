import { useState } from "react";
import useSendMessage from "../hooks/useSendMessage";

const MessageInput = () => {
  const { loading, sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex mt-3 gap-1">
      <input
        type="text"
        placeholder="Write a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input input-bordered input-success w-full focus:outline-none"
      />
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <button type="submit" className="btn btn-success w-20 sm:w-28">
          Send
        </button>
      )}
    </form>
  );
};

export default MessageInput;
