import { w as writable } from "./index3.js";
const defaultValue = "";
const initialValue = defaultValue;
const authToken = writable(initialValue);
authToken.subscribe((value) => {
});
export {
  authToken as a
};
