const React = {
    createElement(type, properties, ...children) {
        return new this.Component(type, properties, [...children]);
    },

    render(element, parent) {
        
    },

    Component: class {
        type = null;
        properties = {};
        children = [];

        constructor(type, properties, children) {
            this.type = type;
            this.properties = properties;
            this.children = children;
        }

        display = (newProperties) => {
            
        };

        shouldUpdate = (newProperties) => {

            this.needUpdate = () => JSON.stringify(this.properties) !== JSON.stringify(newProperties);

        };

        render = () => {};
    },
};

const element = React.createElement(
    "div",
    { id: "div1" },
    React.createElement("div", { id: "div2" }),
    React.createElement("div", { id: "div2" }, React.createElement("div", { id: "div21" }))
);

React.render(element, document.getElementById('root'));
console.log(element);