const initialState = {
  cartData: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "adding":
      return {
        cartData: [...state.cartData, action.payload],
      };

    case "removed":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      break;
  }
};

export { cartReducer, initialState };
