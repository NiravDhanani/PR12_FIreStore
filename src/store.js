import { applyMiddleware, createStore } from "redux";
import { RootUser } from "./reducer";
import { thunk } from "redux-thunk";

export const store = createStore(RootUser, applyMiddleware(thunk));
