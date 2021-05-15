import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {SHORT_GAME_INFO_TABLE_NAMESPACE, shortGameInfoTableReducer} from "./modules/short-game-info-table";
import {PROFILE_NAMESPACE, profileReducer} from "./modules/profile";
import {PROFILE_PAGE_NAMESPACE, profilePageReducer} from "./pages/profile-page";
import {GAME_INFO_NAMESPACE, gameReducer} from "./pages/game";

const rootReducer = combineReducers({
    [GAME_INFO_NAMESPACE]: gameReducer,
    [PROFILE_NAMESPACE]: profileReducer,
    [PROFILE_PAGE_NAMESPACE]: profilePageReducer,
    [SHORT_GAME_INFO_TABLE_NAMESPACE]: shortGameInfoTableReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
