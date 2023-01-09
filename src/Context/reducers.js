export default function (state, action) {
  switch (action.type) {
    case 'SEND_COMPLETED':
      return {
        completedTask: [...state.completedTask, action.payload.task],
      };
    case 'REMOVE_ALL_COMPLETED_TASKS':
      return {
        completedTask: [],
      };

    default:
      return state;
  }
}
