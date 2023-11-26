"use client";
const { Provider } = require("react-redux");
import myntrStore from "./index";
const Providers = ({ children }) => {
  return <Provider store={myntrStore}>{children}</Provider>;
};
export default Providers;
