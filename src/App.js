import "./App.scss";
import Header from "./Components/Header";
import { useLoaderData } from "react-router";
import Sidebar from "./Components/Sidebar";

function App() {
  const data = useLoaderData();

  return (
    <div className="App">
      <div className="shade">
        <Header />
        <div className="content">
          <Sidebar usersData={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
