import { legacy_createStore } from "redux";
import ProductsReducer from "./Reducers/ProductsReducer";

const store = legacy_createStore(ProductsReducer);

export default store;
