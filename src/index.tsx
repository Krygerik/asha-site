import * as React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Games} from "./components/games";
import {store} from "./store";
import "semantic-ui-css/semantic.min.css"
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Games />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
