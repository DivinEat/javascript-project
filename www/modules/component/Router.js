import {React} from "../React.js";

export class Router extends React.Component {
    state = {
        path: "/",
    };

    constructor() {
        // this.setState({ path: window.location.pathname });
        super();
    }

    render() {
        return React.createElement("div", {}, [
            React.createElement(
                "button",
                { onClick: () => this.setState({ path: "/home" }) },
                ["Home"]
            ),
            React.createElement(
                "button",
                { onClick: () => this.setState({ path: "/about" }) },
                ["About"]
            ),
            path === "/home" && React.createElement(Home),
            path === "/about" && React.createElement(About)
        ]);
    }

    setState(properies) {
        window.history.pushState(null, null, this.root + properies);
        parent.setState(properies);
    }

    previous() {
        history.back();
    }

    next() {
        history.forward();
    }

    go(url) {
        location.assign(url);
    }
}