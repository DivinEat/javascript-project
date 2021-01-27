Object.prototype.prop_access = function (strPath) {
    if (this === "undefined") return this;
    if (typeof strPath !== "string" || strPath === "" || strPath === null) return "";

    const path = strPath.split(".");
    let obj = this;

    path.forEach((key) => {
        if (obj[key] !== undefined || obj[key] !== null) 
            obj = obj[key];
    });

    return obj;
};