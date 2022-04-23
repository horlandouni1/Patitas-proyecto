const initialState = {
  productsBuyed: [],
};

function tiendaReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_PRODUCT": {
      const position = state.productsBuyed.findIndex(
        (product) => product.id === action.payload
      );
      state.productsBuyed[position].quantity =
        state.productsBuyed[position].quantity + 1;

      return { ...state, productsBuyed: [...state.productsBuyed] };
    }

    case "DECREMENT_PRODUCT": {
      const position = state.productsBuyed.findIndex(
        (product) => product.id === action.payload
      );

      state.productsBuyed[position].quantity =
        state.productsBuyed[position].quantity - 1;

      return { ...state, productsBuyed: [...state.productsBuyed] };
    }

    case "ADD_PRODUCT": {
      return {
        ...state,
        productsBuyed: [
          ...state.productsBuyed,
          { ...action.payload, quantity: 1 },
        ],
      };
    }

    case "REMOVE_PRODUCT": {
      return {
        ...state,
        productsBuyed: state.productsBuyed.filter(
          (product) => product.id !== action.payload
        ),
      };
    }

    case "RESET": {
      return initialState;
    }
    default:
      return state;
  }
}

export { tiendaReducer };
