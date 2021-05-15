import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AboutAsha} from "../about-asha";
import {Game} from "../game";
import {Games} from "../games-history";
import {ProfilePage} from "../profile-page";
import {MainPage} from "./main-page";

/**
 * Корневой роутинг
 */
export const MainPageRouting = React.memo(() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/about-asha" >
                <AboutAsha />
            </Route>
            <Route exact path="/profile/:id" >
                <ProfilePage />
            </Route>
            <Route exact path="/games-history">
                <Games />
            </Route>
            <Route exact path="/game/:id">
                <Game />
            </Route>
            <Route exact path="/">
                <MainPage />
            </Route>
        </Switch>
    </BrowserRouter>
));
