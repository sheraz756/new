import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Landingpage from "./Landingpage";
import Login from "./components/Login/Login";
import Demo from "./Pages/Demo";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
}
export default App;