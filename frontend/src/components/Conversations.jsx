import UseGetConversations from "../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = ({toglleAside}) => {
  const { loading, conversations } = UseGetConversations();

  return (
    <ul className="flex flex-col mt-7 gap-3 max-h-[calc(100vh-130px)] overflow-y-auto">
      
      {conversations.map(conversation => (
         <Conversation toglleAside={toglleAside} key={conversation._id} conversation={conversation} />
      ))}
      
      {loading ? <span className="loading loading-spinner self-center"></span> : null}
      
    </ul>
  );
};

export default Conversations;
