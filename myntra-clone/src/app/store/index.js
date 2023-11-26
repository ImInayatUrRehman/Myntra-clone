const { configureStore } = require("@reduxjs/toolkit");
import FetchStatusSlice from "./fetchStatusSlice";
import itemsSlice from "./itemsSlice";

const myntrStore = configureStore({
  reducer: { items: itemsSlice.reducer, fetchStatus: FetchStatusSlice.reducer },
});
export default myntrStore;
