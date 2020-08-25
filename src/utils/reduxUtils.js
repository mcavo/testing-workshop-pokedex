// TODO: Add TS to this file
export const onPagination = () => (state, action) =>
  state.merge({
    [action.target]: {
      results: action.payload?.previous
        ? [...(state[action.target]?.results || []), ...(action.payload?.results || [])]
        : action.payload.results,
      next: action.payload?.next,
      count: action.payload?.count
    },
    [`${action.target}Loading`]: false,
    [`${action.target}Error`]: null
  });
