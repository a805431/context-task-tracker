import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />);