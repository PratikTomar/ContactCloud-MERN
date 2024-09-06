import MainRoutes from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "../src/styles/Form.css";

function App() {
  return (
    <>
      <ToastContainer />
      <MainRoutes />
    </>
  );
}

export default App;
