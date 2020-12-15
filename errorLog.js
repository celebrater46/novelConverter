const errorLog = (vars, names, fn, file) => {
    const i = 0;
    if(i === 0) {
        const message = names + " at " + fn + "() in " + file + ".js, either of vars is wrong.";
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

export default errorLog;