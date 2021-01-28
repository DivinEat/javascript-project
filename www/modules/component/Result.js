import {React} from '../React.js';

export class Result extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            result: properties.defaultValue || 0
        };
    }

    render () {
        return React.createElement(
            "div",
            { id: "result", class: "result" },
            React.createElement("span", { counter: this.state.result }, "{{ result }} CPS")
        );
    }
}