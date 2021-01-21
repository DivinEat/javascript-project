export {type_check_v1, type_check_v2, type_check};

function type_check_v1(variable, type) {
    const typeOfVariable = typeof variable;

    switch (typeOfVariable) {
        case "object":
            switch (type) {
                case "null":
                    return variable === null;
                case "array":
                    return Array.isArray(variable);
                case "object":
                    return variable !== null && !Array.isArray(variable);
                default:
                    return false;
            }
        default:
            return typeOfVariable === type;
    }
}

function type_check_v2(variable, conf) {
    for (key in conf) {
        switch (key) {
            case "type":
                if (!type_check_v1(variable, conf.type)) return false;
                break;
            case "value":
                if (JSON.stringify(variable) !== JSON.stringify(conf.value)) return false;
                break;
            case "enum":
                enum_loop: {
                    for (subValue of conf.enum) {
                        if (type_check_v2(variable, { value: subValue })) {
                            break enum_loop;
                        }
                    }
                    return false;
                }
        }
    }

    return true;
}

function type_check(variable, conf) {
    const check = type_check_v2(variable, conf)
    if (!check) return false; // si !check péter une exception

    for (key in conf) {

        const propsConf = conf.key.properties;

        if (propsConf == null) {
            // péter une exception;
            return false;
        }
            
        for (propKey in propsConf) {
            const propVariable = variable.propKey;
            if (propVariable == null) {
                // péter une exception;
                return false;
            }
        }
        const checkProp = type_check(propVariable, propsConf.propKey);
        // péter un truc si checkProp est null;
    }
    return true;
}