const initialState = 'home'; // Initial state for the current view

const currentViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return action.payload; // Update state based on action
    default:
      return state; // Return current state if no matching action
  }
};

export default currentViewReducer;
