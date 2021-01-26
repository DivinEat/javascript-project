import {React} from '../React.js';

export class Hello extends React.Component {
    constructor(properties) {
        super(properties);
    }

    render () {
        return React.createElement(
            "div",
            { id: "container", class: "container" },
            React.createElement("div", { id: "div1", class: "divClass", age: "22 ans"}, "Je m'appelle {{ age }}"),
            React.createElement("button", { id: "div2", class: "divClass" }, "Div 2")
        );
    }
}