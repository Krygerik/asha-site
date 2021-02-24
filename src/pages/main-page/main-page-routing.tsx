import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Games} from "../games-history";
import {MainPage} from "./main-page";

/**
 * Корневой роутинг
 */
export const MainPageRouting = React.memo(() => (
    <BrowserRouter>
        <Switch>
            <Route path="/games-history">
                <Games />
            </Route>
            <Route path="/">
                <MainPage />
            </Route>
        </Switch>
    </BrowserRouter>
));
