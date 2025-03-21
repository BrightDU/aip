import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import MyRouts from '../src/routers/routes'
// import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/styles.css'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
     
      {/* <Route exact path="/"> <App /></Route> */}
      <MyRouts/>
    
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister(); 
