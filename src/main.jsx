import ReactDOM from "react-dom/client";
import "./core/styles/index.css";
import App from "./app/App";
import {SocketContext, socket} from './context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<SocketContext.Provider value={socket}>
    <App />
</SocketContext.Provider>);
