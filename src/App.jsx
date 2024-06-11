import { useDispatch } from "react-redux";
import MyRoutes from "./routes/myRoutes";
import axios from "axios";
import { useEffect } from "react";
import { LOGIN_SUCCESS } from "./redux/actions/actionsType";

axios.defaults.baseURL =
  "https://back-no-country-c18-03-m-node.fly.dev/api/v1/";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearear ${token}`;
}
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (token && userString) {
      const userObject = JSON.stringify(userString);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: userObject,
      });
    }
  }, [dispatch]);

  return (
    <div>
      <MyRoutes />;
    </div>
  );
}

export default App;
