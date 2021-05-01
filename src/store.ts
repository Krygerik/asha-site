import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {SHORT_GAME_INFO_TABLE_NAMESPACE, shortGameInfoTableReducer} from "./modules/short-game-info-table";
import {GAME_INFO_NAMESPACE, gameReducer} from "./pages/game";

const rootReducer = combineReducers({
    [GAME_INFO_NAMESPACE]: gameReducer,
    [SHORT_GAME_INFO_TABLE_NAMESPACE]: shortGameInfoTableReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
