import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customerReducer.customers);
  const Add_Cash = () => {
    dispatch({ type: "Add_Cash", payload: 5 });
  };
  const Get_Cash = () => {
    dispatch({ type: "Get_Cash", payload: 5 });
  };
  const Add_Customer = (customerName) => {
    const customer = {
      customerName,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };
  const Remove_Customer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={Add_Cash}>Add Cash</button>
      <button onClick={Get_Cash}>Get Cash</button>
      <button onClick={() => Add_Customer(prompt("Введите имя", ""))}>
        Add Customer
      </button>
      <div>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => {
              return (
                <div
                  onClick={() => Remove_Customer(customer)}
                  key={customer.id}
                >
                  {customer.customerName}{" "}
                </div>
              );
            })}
          </div>
        ) : (
          "Пользователей нет"
        )}
      </div>
    </div>
  );
}

export default App;
