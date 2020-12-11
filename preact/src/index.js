import "./style/index.css";
import App from "./components/app.tsx";
import { render, h } from "preact";

const widgets = document.querySelectorAll(".nn-widget");
widgets.forEach((widget) => render(<App />, widget)); //eslint-disable-line
