const defaultState = {
  cash: 0,
};

export const Add_Cash = "Add_Cash";
export const Get_Cash = "Get_Cash";
export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Add_Cash:
      return { ...state, cash: state.cash + action.payload };
    case Get_Cash:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAction = () => ({ type: Add_Cash });
export const getCashAction = () => ({ type: Get_Cash });

