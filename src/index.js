import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './App';
import { Provider } from "react-redux";
import store, {persistor} from './redux/store';

import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <BrowserRouter> */}
        <BrowserRouter basename='/goit-react-hw-008-phonebook/'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
  
);