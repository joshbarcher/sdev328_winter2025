import express from 'express';

const app = express();

const validator = (req, res, next) => {
    //check if the ops are there
    if (!req.query.op1 || !req.query.op2) {
        const err = new Error("Missing operands!");
        err.status = 400; //bad format for request
        err.middleware = "validator";
        return next(err); //skip to error handling middleware
    }

    //check if oper is there
    const operators = ['add', 'sub', 'mult', 'div'];
    if (!operators.includes(req.query.oper)) {
        const err = new Error("Missing the operator!");
        err.status = 400; //bad format for request
        err.middleware = "validator";
        return next(err); //skip to error handling middleware
    }

    //validation is successful, move on to next middleware!
    next();
}

const errorHandler = (err, req, res, next) => {
    res.status(err.status).send(`Error: ${err.message}`);
}

const calculatorHandler = (req, res) => {
    let { op1, op2, oper } = req.query;
    
    op1 = parseInt(op1);
    op2 = parseInt(op2);

    let result = 0;
    switch(oper) {
        case "add": result = op1 + op2; break;
        case "sub": result = op1 - op2; break;
        case "mult": result = op1 * op2; break;
        case "div": result = op1 / op2; break;
    }

    res.status(200).send(`Result of ${op1} ${oper} ${op2} is ${result}`);
}

//build the middleware stack
app.use(validator);
app.get("/calculator", calculatorHandler);
app.use(errorHandler);

const PORT = 3100;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));