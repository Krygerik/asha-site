import * as React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {DictionaryProvider} from "./modules/dictionary/dictionary-context";
import {MainPage} from "./pages/main-page";
import {store} from "./store";
import "semantic-ui-css/semantic.min.css"
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <DictionaryProvider>
              <MainPage />
          </DictionaryProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
