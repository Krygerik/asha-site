import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {SHORT_GAME_INFO_TABLE_NAMESPACE, shortGameInfoTableReducer} from "./modules/short-game-info-table";
import {PROFILE_NAMESPACE, profileReducer} from "./modules/profile";
import {PROFILE_PAGE_NAMESPACE, profilePageReducer} from "./pages/profile-page";
import {GAME_INFO_NAMESPACE, gameReducer} from "./pages/game";
import {STATISTICS_PAGE_NAMESPACE, statisticsPageReducer} from "./pages/statistics";
import {TOURNAMENT_LIST_NAMESPACE, tournamentListReducer} from "./pages/tournament-list/tournament-list";

const rootReducer = combineReducers({
    [GAME_INFO_NAMESPACE]: gameReducer,
    [PROFILE_NAMESPACE]: profileReducer,
    [PROFILE_PAGE_NAMESPACE]: profilePageReducer,
    [SHORT_GAME_INFO_TABLE_NAMESPACE]: shortGameInfoTableReducer,
    [STATISTICS_PAGE_NAMESPACE]: statisticsPageReducer,
    [TOURNAMENT_LIST_NAMESPACE]: tournamentListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
