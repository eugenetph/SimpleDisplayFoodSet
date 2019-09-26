const FoodReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FOOD_SET':
      return action.payload
    default:
      return state
  }
}

export default FoodReducer