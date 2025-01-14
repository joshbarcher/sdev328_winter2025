const person = {
    fName: "Josh",
    lName: "Archer",
    middle: "B",
    address: {
        num: 100,
        street: "Apple Lane",
        city: "Seattle",
        state: "WA",
        zip: 99999
    }
}

const { address, lName } = person;
console.log(`Your address is ${address}`);
console.log(`Last name is ${lName}`);

console.log(`Your address is ${person.address}`);
console.log(`Last name is ${person.lName}`);

//destructuring again!
const { fName: first, lName: last } = person;
console.log(`First name is ${first}`);
console.log(`Last name is ${last}`);

//destructuring nested objects
const { city } = person.address;

const { fName, lName, address: { city }} = person
console.log(`${fName} ${lName} lives in ${city}`);