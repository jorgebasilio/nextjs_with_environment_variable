function reducer(state = {tasks: []}, action) {
  switch (action.type) {
    case 'ADD_TASK':
      // return { ...state, tasks: action.payload.data };
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case 'CHANGE_STATUS':
      // return { ...state, tasks: action.payload.data };
      return state.tasks.map(task =>
        task.id === action.id ?
          { ...task, status: action.payload.status } :
          task
      )
    default:
      return state;
  }
}

export default reducer;
