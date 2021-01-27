import * as Utils from './utils.js';

export const React = {
    domElements: {},

    createElement(type, properties, ...children) {
        children = [...children];

        if (typeof type === 'string') {
            const element = document.createElement(type);

            for (const attribute of Object.keys(properties)) {
                if (/^on[A-Z]/.test(attribute)) {
                    element.addEventListener(attribute.replace("on", "").toLowerCase(), properties[attribute]);
                } else {
                    element.setAttribute(attribute, properties[attribute]);
                }
            }

            for (let child of children) {
                if (typeof child === "string") child = document.createTextNode(child.interpolate(properties));
                element.appendChild(child);
            }

            return element;

        } else {
            const typeInstance = new type(properties);
            if (!Utils.type_check(properties, typeInstance.propTypes)) throw new TypeError();
            return typeInstance.display(properties);
        }
    },

    Component: class {
        state = {};
        prevState = {};
        prevRender = null;

        constructor (properties) {
            this.properties = properties;
        }

        display (newProperties) {
            if (this.shouldUpdate(newProperties) || this.prevRender === null)
                this.prevRender = this.render();    
            return this.prevRender;
        };

        shouldUpdate (newProperties) {
            const compProps = JSON.stringify(this.properties) !== JSON.stringify(newProperties);
            const compState = JSON.stringify(this.state) !== JSON.stringify(this.prevState);

            return compProps || compState;
        };

        setState(newState) {    
            this.prevState = Object.assign({}, this.state);

            this.state = Object.assign(this.state, newState);
            
            const parentNode = this.prevRender.parentNode;
            const prevRender = this.prevRender;

            parentNode.replaceChild(this.display(this.properties), prevRender);
        }

        render() {}
    },
};