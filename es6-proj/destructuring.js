const person = {
    firstName: "Josh",
    lastName: "Archer",
    middle: "B",
    address: {
        num: 1001,
        street: "Apple Lane",
        city: "Seattle",
        state: "WA",
        zip: 99999
    }
}

//destructure some of the properties
const { lastName, address } = person;

console.log(`Your last name is ${lastName}`);
console.log(`Your address is ${address}`);

const { firstName: first, lastName: last, address: { zip } } = person;
console.log(`I am ${first} ${last} lives at zip code ${zip}`);
