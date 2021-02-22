import * as React from 'react';
import ReactDOM from 'react-dom';
import {Games} from "./components/games";
import 'semantic-ui-css/semantic.min.css'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Games />
  </React.StrictMode>,
  document.getElementById('root')
);
