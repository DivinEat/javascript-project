import {React} from "../React.js";
import {Counter} from "./Counter.js";
import {Hello} from "./Hello.js";

export class Router extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            path: window.location.pathname
        };
    }

    render() {
        return React.createElement(
            "div",
            { id: "nav", class: "nav" },
            React.createElement(
                "button",
                {
                    onClick: () => this.setState({ path: "/home" })
                },
                "Home"
            ),
            React.createElement(
                "button",
                {
                    onClick: () => this.setState({ path: "/counter" })
                },
                "Counter"
            ),
            React.createElement(
                "button",
                {
                    class: "rigth",
                    onClick: () => this.setState({ path: "/about" })
                },
                "About"
            ),
            this.findRoute()
        );
    }

    findRoute() {
        switch (this.state.path) {
            case "/counter" :
                return React.createElement(Counter, {});
                break;
            default:
                return React.createElement(Hello, {});
        }
    }

    setState(newState) {
        if (newState.path)
            window.history.pushState(null, null, newState.path);
        
        super.setState(newState);
    }
}