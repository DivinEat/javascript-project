import * as Utils from './utils.js';

export const React = {
    domElements: {},

    createElement(type, properties, ...children) {
        children = [...children];

        if (type === "div") {
            const element = document.createElement(type);
            console.log(Object.keys(properties));
            for (const attribute of Object.keys(properties)) {
                console.log(attribute);
                element.setAttribute(attribute, properties[attribute]);
            }

            for (let child of children) {
                if (typeof child === "string") child = document.createTextNode(child.interpolate(properties));
                element.appendChild(child);
            }

            return element;

        } else {
            const typeInstance = new type;
            if (!Utils.type_check(properties, typeInstance.propTypes)) throw new TypeError();
            return typeInstance.display(properties);
        }
    },

    Component: class {
        state = {};

        constructor(properties) {
            this.properties = properties;
        }

        display (newProperties) {
            // this.shouldUpdate();
            return this.render();
        };

        shouldUpdate (newProperties) {
            return JSON.stringify(this.properties) !== JSON.stringify(newProperties);
        };
    },
};
