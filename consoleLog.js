const consoleLog = (vars, names, fn, file, isError) => {
    const available = true;
    const endOf = (() => { if(isError) { return ".js, either of vars is wrong." } else { return ".js is ... " }})();
    if(available) {
        const message = names + " at " + fn + "() in " + file + endOf;
        console.log(message);
        for(let v of vars) {
            console.log(v);
        }
    } else {
        console.log("errorLog is error. vars or names or fn or file at errorLog() in errorLog.js are ... ");
        console.log(vars);
        console.log(names);
        console.log(fn);
        console.log(file);
    }
}

// export default errorLog;