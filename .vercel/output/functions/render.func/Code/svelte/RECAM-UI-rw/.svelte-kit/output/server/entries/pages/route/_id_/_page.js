import { e as error } from "../../../../chunks/index2.js";
let id = "";
function load({ params }) {
  if (params.id === void 0) {
    throw error(404, "Not found");
  } else {
    id = params.id;
  }
}
export {
  id,
  load
};
