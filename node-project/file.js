//var, let or const
const name = "Josh";
const message = `Hello, ${name}`;

const printMe = () => {
    console.log("Hello, you!");
}
printMe();

const printName = name => console.log(`Hello, ${name}`);
const unknown = printName("Jared");
console.log(unknown);

const add = (one, two) => one + two;
const result = add(1, 4);
console.log(`Result is ${result}`);