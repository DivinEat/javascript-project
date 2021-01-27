import { React } from "../React.js";

export class Counter extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            counter: properties.defaultValue || 0,
            isLaunch: false,
            time: 10,
        };
    }

    render () {
        return React.createElement(
            "div",
            { id: "counterContainer", class: "counter" },
            React.createElement("span", { counter: this.state.counter }, "{{ counter }} clics"),
            React.createElement(
                "div",
                {
                    id: "addBtn",
                    class: "countArea",
                    onClick: () => this.setState({counter: this.state.counter + 1})
                },
                "Cliquez ici"
            ),
            React.createElement("span", { time: this.state.time }, "{{ time }} secondes"),
        );
    }

    setState(newState) {
        if (this.state.isLaunch == false) {
            this.state.isLaunch = true;

            this.state.timer = setInterval(() => {
                this.timer();
            }, 1000);
        }
        
        super.setState(newState);
    }

    timer() {
        this.setState({time: this.state.time - 1});

        if(this.state.time == 0 ) {
            clearInterval(this.state.timer);

            // Affiche le nombre de clic par seconde et le bouton restart
            this.setState({counter: this.state.counter / 10});
        }
    }
}