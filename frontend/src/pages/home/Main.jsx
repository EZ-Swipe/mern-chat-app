import React, { useState } from "react";

const Main = () => {
  const [isChat, setIsChat] = useState(false);

  return (
    <main className="flex-1 flex flex-col ">

      {isChat ? (
        <div className="justify-end h-full overflow-y-auto relative flex flex-col">
          <div className="text-3xl font-semibold py-5 pl-3 bg-slate-900 absolute w-full top-0 right-0">Dustin Hurengton</div>
          <div className="ml-3 max-h-[calc(100vh-136px)] overflow-y-auto">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div className="chat-bubble">Not leave it in Darkness</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div className="chat-bubble">Not leave it in Darkness</div>
            </div>
          
                </div>
                <div>
          <input
            type="text"
            placeholder="Write a message..."
            className="input input-bordered input-success w-full mt-3 focus:outline-none"
          />
                </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full ">
          <div className="text-center text-emerald-400 text-4xl">
            <p>Welcom Kevin Glo</p>
            <p className="text-xl pt-2 text-emerald-400 opacity-90">Select a chat to start a messaging</p>
          </div>
        </div>
      )}

    </main>
  );
};

export default Main;
