import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AboutAsha} from "../about-asha";
import {Calculators} from "../calculators";
import {Game} from "../game";
import {Games} from "../games-history";
import {ProfilePage} from "../profile-page";
import {RatingPage} from "../rating-page";
import {StatisticPage} from "../statistics";
import {TournamentPage} from "../tournament";
import {TournamentListPage} from "../tournament-list";
import {MainPage} from "./main-page";

/**
 * Корневой роутинг
 */
export const MainPageRouting = React.memo(() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/statistics" >
                <StatisticPage />
            </Route>
            <Route exact path="/tournaments" >
                <TournamentListPage />
            </Route>
            <Route exact path="/tournament/:id" >
                <TournamentPage />
            </Route>
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
            <Route exact path="/calculators">
                <Calculators />
            </Route>
            <Route exact path="/rating">
                <RatingPage />
            </Route>
            <Route exact path="/">
                <MainPage />
            </Route>
        </Switch>
    </BrowserRouter>
));
