import { document, console } from "global";
import { storiesOf } from "@storybook/html";

import button from "./button.html";
import "./index.css";

storiesOf("Button", module).add("button", () => {
    return button;
});
