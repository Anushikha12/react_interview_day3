import Axios from "./components/axios_fetch";
import UseEffect from "./components/UseEffect";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import UseState from "./components/UseState";


function App() {
  return (
    <div className="App">
    <Axios/>
    <UseState/>
    <UseReducer/>
    <UseEffect/>
    <UseMemo/>
    </div>
  );
}

export default App;
