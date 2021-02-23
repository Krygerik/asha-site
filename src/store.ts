import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {gamesReducer, GAMES_NAMESPACE} from "./components/games";

const rootReducer = combineReducers({
    [GAMES_NAMESPACE]: gamesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
