import "./App.css";
import { Route, Routes } from "react-router-dom";
import Preview from "./pages/Preview";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EditProfilePage from "./pages/EditProfilePage";
import Main from "./pages/Main";
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Preview />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit" element={<EditProfilePage />} />
      <Route path="/main" element={<Main />} />
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
