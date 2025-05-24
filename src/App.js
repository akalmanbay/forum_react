import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./Components/Menu";
import Trends from "./Components/Trends";
import Feed from "./Components/Feed";

function App() {
  return (
    <div className="App d-flex mx-5 my-3 justify-content-center">
      <Menu />
      <Feed />
      <Trends />
    </div>
  );
}

export default App;
