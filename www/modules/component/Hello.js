import {React} from '../React.js';

export class Hello extends React.Component {
    constructor(properties) {
        super(properties);
    }

    render () {
        return React.createElement(
            "div",
            { id: "container", class: "container" },
            React.createElement("div", { id: "div1", class: "divClass", project: "Mini React"}, "Project : {{ project }}")
        );
    }
}