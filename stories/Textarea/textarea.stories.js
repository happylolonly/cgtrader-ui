import { document, console } from "global";
import { storiesOf } from "@storybook/html";

import textarea from "./index.html";
import "./index.css";

storiesOf("Textarea", module).add("textarea", () => {
  return textarea;
});
