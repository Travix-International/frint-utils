export default function createReducer(initialState, actionHandlers) {
  return function reducer(state = initialState, action) {
    if (typeof actionHandlers[action.type] === 'function') {
      return actionHandlers[action.type](state, action);
    }
    return state;
  }
}
