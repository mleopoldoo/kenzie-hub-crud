import { RouterMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div>
      <RouterMain />
      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
