import * as Utils from './utils.js';
import {React} from './React.js';
import {ReactDOM} from './ReactDOM.js';
import './custom/String.js';
import './custom/Object.js';
import * as component from './component/index.js';

const root = document.getElementById("root");
const element = React.createElement(component.CounterBis, {});

ReactDOM.render(element, root);