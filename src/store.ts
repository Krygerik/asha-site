import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {SHORT_GAME_INFO_TABLE_NAMESPACE, shortGameInfoTableReducer} from "./modules/short-game-info-table";

const rootReducer = combineReducers({
    [SHORT_GAME_INFO_TABLE_NAMESPACE]: shortGameInfoTableReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
