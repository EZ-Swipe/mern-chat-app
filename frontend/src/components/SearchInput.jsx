import { useState } from "react";
import useConversation from "../store/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search tern must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLocaleLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-auto bg-zinc-800/[0.5] text-gray-400 border-gray-700"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
