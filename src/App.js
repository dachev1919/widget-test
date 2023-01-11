import Widget from "./components/Widget";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
        <Provider store={ store }>
          <Widget />
        </Provider>
    </div>
  );
}

export default App;
