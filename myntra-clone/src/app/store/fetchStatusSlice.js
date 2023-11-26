const { createSlice } = require("@reduxjs/toolkit");

const FetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markFetchingStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchingEnded: (state) => {
      return (state.currentlyFetching = false);
    },
  },
});
export const FetchStatusActions = FetchStatusSlice.actions;
export default FetchStatusSlice;
