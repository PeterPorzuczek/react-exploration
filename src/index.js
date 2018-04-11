import ReactDOM from "react-dom";
import createRoutes from "./app/services/router";

const routes = createRoutes();

ReactDOM.render(routes, document.getElementById("root"));
