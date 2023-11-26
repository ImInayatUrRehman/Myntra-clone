import { DEFAULT_ITEMS } from "@/data/items";
const { createSlice } = require("@reduxjs/toolkit");
const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItem: (state, action) => {
      return state;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
