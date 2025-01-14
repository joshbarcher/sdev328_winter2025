import express from 'express';

const app = express();

console.log(process.env);
console.log(process.env.HOSTNAME);
console.log(process.env.JAVA_HOME);
console.log(process.env.OS);

const { HOSTNAME, JAVA_HOME, OS } = process.env;
console.log(HOSTNAME);
console.log(JAVA_HOME);
console.log(OS);

app.listen(3000);