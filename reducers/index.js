function reducer(state = {tasks: []}, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case 'CHANGE_STATUS_TASK':
      let tasks = state.tasks.map(task => {
        return task.task_id === action.payload.task_id ?
          { ...task, status: action.payload.status } : task;
      })
      return {...state, tasks: tasks}
    default:
      return state;
  }
}

export default reducer;
