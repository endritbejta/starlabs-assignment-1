import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import axios from "axios";

function App() {
  const [users, setUsers] = useState();
  const usersApiUrl = "https://jsonplaceholder.typicode.com/users";
  const [activeUser, setActiveUser] = useState(1);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(usersApiUrl);
        setUsers(response.data);
      } catch (err) {
        console.log("error: ", err);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <div className="shade">
        <Header />
        <div className="content">
          <Sidebar
            activeUser={activeUser}
            setActiveUser={setActiveUser}
            users={users}
          />
          <Main id={activeUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
