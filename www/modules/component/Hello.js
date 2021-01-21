import {React} from '../React.js';

export class Hello extends React.Component {
    constructor(properties) {
        super(properties);
    }

    render () {
        const returnValue = React.createElement(
            "div",
            { id: "container", class: "container" },
            React.createElement("div", { id: "div1", class: "divClass" }, "Hello"),
            React.createElement("div", { id: "div2", class: "divClass" }, "Div 2")
        );
        return returnValue;
    }
}