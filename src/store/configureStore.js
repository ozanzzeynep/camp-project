import rootReducer from "./rootReducer";
import { legacy_createStore as createStore } from "redux";


export function configureStore() {
    return createStore(rootReducer);
  }