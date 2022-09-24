import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RecoilRoot } from "recoil";
import { DebugObserver } from "./context/DebugObserver";
import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
      <DebugObserver />
    </RecoilRoot>
  </React.StrictMode>
);
