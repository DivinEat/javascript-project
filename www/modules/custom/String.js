String.prototype.interpolate = function (props) {
    const regexp = /\{\{ (.*?) \}\}/g;
    let newStr = this;
    const matches = [...newStr.matchAll(regexp)];

    if (matches.length > 0) {
        if (props === null) throw new TypeError();

        for (let key in matches) {
            newStr = newStr.replace(matches[key][0], props.prop_access(matches[key][1]));
        }
    }

    return newStr;
};