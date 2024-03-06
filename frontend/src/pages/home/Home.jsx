import Aside from "./Aside";
import Main from "./Main";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default Home;
