import { React } from "../React.js";

export class Counter extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            counter: properties.defaultValue || 0
        };
    }

    render () {
        return React.createElement(
            "div",
            { id: "counterContainer", class: "counter" },
            React.createElement(
                "button",
                {
                    id: "addBtn",
                    onClick: () => this.setState({counter: this.state.counter + 1})
                },
                "Add"
            ),
            React.createElement("span", { counter: this.state.counter }, "{{ counter }}")
        );
    }
}