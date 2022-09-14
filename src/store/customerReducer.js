const defaultState = {
  customers: [],
};

const Add_Customer = "Add_Customer";
const Remove_Customer = "Remove_Customer";
export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Add_Customer:
      return { ...state, customers: [...state.customers, action.payload] };
    case Remove_Customer:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: Add_Customer, payload });
export const removeCustomerAction = (payload) => ({
  type: Remove_Customer,
  payload,
});
