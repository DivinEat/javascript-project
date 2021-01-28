import { React } from "../React.js";

export class About extends React.Component {
    constructor(properties) {
        super(properties);
    }

    render () {
        return React.createElement(
            "div",
            { id: "about", class: "about" },
            React.createElement("p", {}, "1) Créer un mini-react"),
            React.createElement("p", {}, "- Gestion du routage"),
            React.createElement("p", {}, "- Validation des propriétés passées au composant"),
            React.createElement("p", {}, "- Algorithme => se rapproche de l'algo de l'exercice *HereWeGo!*"),
            React.createElement("p", {}, "-- Chaque composant hérite d'un object `Component` ayant une méthode `display(newProps)`"),
            React.createElement("p", {}, "-- display appelle la méthode `shouldUpdate()` du composant courant => compare newProps avec les oldProps"),
            React.createElement("p", {}, "-- si shouldUpdate"),
            React.createElement("p", {}, "--- appelle la fonction `render` du composant"),
            React.createElement("p", {}, "--- si `render` invoque d'autres composants, le composant courant appelle la fonction `display (compProps)` des sous-composants"),
            React.createElement("p", {}, "--- le résultat de `display` est ajouté au DOM sous le noeud parent"),
        );
    }
}