import { useAuthContext } from "../context/AuthContext";

const Welcome = () => {
  const { authUser } = useAuthContext();
  
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="text-center text-emerald-400 text-4xl">
        <p>{`Welcom ${authUser.fullName}`}</p>
        <p className="text-xl pt-2 text-emerald-400 opacity-90">
          Select a chat to start a messaging
        </p>
      </div>
    </div>
  );
};

export default Welcome;
