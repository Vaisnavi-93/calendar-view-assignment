import React from "react";
import ReactDOM from "react-dom/client";
import { CalendarView } from "./components/Calendar/CalendarView";
import "./styles/globals.css";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CalendarView />
  </React.StrictMode>
);
