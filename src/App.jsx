
import { Provider } from "react-redux";
import MyRoutes from "./routes/myRoutes";
import store from "./redux/store/store";

function App() {
    return(
        <Provider store={store}>
            <MyRoutes />
        </Provider>    
    ) 
}

export default App;
