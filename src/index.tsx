import * as React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {DictionaryProvider} from "./modules/dictionary/dictionary-context";
import {SimpleModalProvider} from "./modules/simple-modal";
import {MainPage} from "./pages/main-page";
import {store} from "./store";
import "semantic-ui-css/semantic.min.css"
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
      <SimpleModalProvider>
          <DictionaryProvider>
              <MainPage />
          </DictionaryProvider>
      </SimpleModalProvider>
  </Provider>,
  document.getElementById('root')
);
