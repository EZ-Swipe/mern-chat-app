import { useEffect, useRef } from "react";
import useConversation from "../../store/useConversation";
import MessageInput from "../../components/MessageInput";
import Welcome from "../../components/Welcome";
import useGetMessages from "../../hooks/useGetMessages";

import Message from "../../components/main/Message";
import useListenMessages from "../../hooks/useListenMessages";

const Main = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  useEffect(() => {
    setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <main className="flex-1 flex flex-col">
      {selectedConversation ? (
        <div className="justify-end h-full overflow-y-auto relative flex flex-col sm:pb-0 pb-4">
          <div className="text-3xl font-semibold py-5 text-center bg-slate-900 absolute w-full top-0 right-0">
            {selectedConversation.fullName}
          </div>

          {!loading && messages.length === 0 && (
            <p className="flex items-center justify-center w-full h-full text-emerald-400 text-xl">
              Send a message to start the conversation
            </p>
          )}

          <div className="max-h-[calc(100vh-136px)] overflow-y-auto">
            {!loading &&
              messages.length > 0 &&
              messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                  <Message message={message} />
                </div>
              ))}
          </div>
          <MessageInput />
        </div>
      ) : (
        <Welcome />
      )}
    </main>
  );
};

export default Main;
