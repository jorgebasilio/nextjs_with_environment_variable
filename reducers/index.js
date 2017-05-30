function reducer(state = {tasks: []}, action) {
  switch (action.type) {
    case 'ADD_TASK':
      // return { ...state, tasks: action.payload.data };
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    default:
      return state;
  }
}

export default reducer;
