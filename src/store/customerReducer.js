const defaultState = {
    customers: [],
    customer:{

    }
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "Add_Customer":
      case "Get_Customer":
  
      default:
        return state;
    }
  };