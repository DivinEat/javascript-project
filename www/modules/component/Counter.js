import { React } from "../React.js";

export class Counter extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            counter: properties.defaultValue || 0,
            isLaunch: false,
            time: 10,
            buttonLabel: "Cliquez-ici",
            counterLabel: "clics"
        };
    }

    render () {
        return React.createElement(
            "div",
            { id: "counter", class: "counter" },
            React.createElement("span", { counter: this.state.counter, counterLabel: this.state.counterLabel}, "{{ counter }} {{ counterLabel }}"),
            React.createElement(
                "div",
                {
                    id: "counterArea",
                    class: "counterArea",
                    onClick: () => this.setState({counter: this.state.counter + 1}),
                    buttonLabel: this.state.buttonLabel
                },
                "{{ buttonLabel }}"
            ),
            React.createElement("span", { time: this.state.time }, "{{ time }} secondes"),
        );
    }

    setState(newState) {
        if (this.state.isLaunch == false) {
            this.state.isLaunch = true;
            this.state.buttonLabel = "Cliquez-ici";
            this.state.counterLabel = "clics";
            newState.counter = 1;

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

            this.setState({
                counter: this.state.counter / 10,
                time: 10,
                isLaunch: false,
                buttonLabel: "Recommencer",
                counterLabel: "CPS"
            });
        }
    }
}
