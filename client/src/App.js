import { Route, Routes } from "react-router-dom";
import Header from "./componenet/Header/Header";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import SearchUser from "./pages/SearchUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/search" element={<SearchUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
