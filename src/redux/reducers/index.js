import { combineReducers } from "redux";
import todoList from "./todoList";
import todoMap from "./todoMap";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({ todoList, todoMap, visibilityFilter });
