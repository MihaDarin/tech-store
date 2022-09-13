import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);
  const Add_Cash = () => {
    dispatch({ type: "Add_Cash", payload: 5 });
  };
  const Get_Cash = () => {
    dispatch({ type: "Get_Cash", payload: 5 });
  };
  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={Add_Cash}>Add</button>
      <button onClick={Get_Cash}>Get</button>
    </div>
  );
}

export default App;
