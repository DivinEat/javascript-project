import {React} from '../React.js';

export class Hello extends React.Component {
    constructor(properties) {
        super(properties);
    }

    render () {
        return React.createElement(
            "div",
            { id: "home", class: "container home" },
            React.createElement("h1", { project: "Mini React" }, "Project : {{ project }}"),
            React.createElement(
                "div",
                { id: "authors", class: "authors" },
                React.createElement("div", { name: "Thibault Dargent"}, "Developer : {{ name }}"),
                React.createElement("div", { name: "Ludovic Collignon"}, "Developer : {{ name }}"),
                React.createElement("div", { name: "Tao Berquer"}, "Developer : {{ name }}"),
                React.createElement("div", { name: "Rémi Brat"}, "Developer : {{ name }}"),
            ),
            React.createElement(
                "div",
                { id: "school", class: "school" },
                React.createElement("div", { name: "ESGI"}, "{{ name }} - ESGI, École Supérieure de Génie Informatique"),
                React.createElement("div", {}, "242 Rue du Faubourg Saint-Antoine, 75012 Paris"),
            )
        );
    }
}