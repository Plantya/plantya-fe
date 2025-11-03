import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactSession } from "react-client-session";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App"
import 'bootstrap/dist/css/bootstrap.min.css'

ReactSession.setStoreType("localStorage");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
