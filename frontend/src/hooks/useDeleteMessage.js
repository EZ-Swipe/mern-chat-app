import toast from "react-hot-toast";
import useConversation from "../store/useConversation";

const useDeleteMessage = () => {
  const { messages, setMessages } = useConversation();

  const deleteMessage = async (messageId) => {
    try {
      const res = await fetch(`/api/messages/delete/${messageId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages(messages.filter((message) => message._id !== messageId));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { deleteMessage };
};

export default useDeleteMessage;
