import { document, console } from "global";
import { storiesOf } from "@storybook/html";

import input from "./input.html";
import "./index.css";

storiesOf("Input", module).add("input", () => {
  return input;
});
