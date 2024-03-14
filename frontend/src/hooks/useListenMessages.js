import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store/useConversation";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);
    });

    socket?.on("messageDeleted", (deletedMessageId) => {
      setMessages(
        messages.filter((message) => message._id !== deletedMessageId)
      );
    });

    return () => {
      socket?.off("newMessage");
      socket?.off("messageDeleted");
    };
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
