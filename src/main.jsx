import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MainProvider } from "./Context/MainContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MainProvider>
      <App />
    </MainProvider>
  </>
);
