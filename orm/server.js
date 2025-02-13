import express from 'express';
import PetSchema from './model/PetSchema.js';

const app = express();

//this is a promise as well
await PetSchema.create({
    name: "buddy",
    type: "dog",
    age: 4,
    adoptable: false,
    bio: "A maltipoo dog, with multiple colors",
    birthDate: new Date()
})

await PetSchema.bulkCreate([
    {
        name: "momo",
        type: "cat",
        age: 1,
        adoptable: false,
        bio: "Striped cat...",
        birthDate: new Date()
    },
    {
        name: "mikey",
        type: "axoltol",
        age: 3,
        adoptable: false,
        bio: "Pale albino pink lizard thing...",
        birthDate: new Date()
    }
])

await PetSchema.bulkCreate([
    {
      "name": "Charlie",
      "type": "Dog",
      "age": 3,
      "adoptable": true,
      "bio": "A friendly and playful golden retriever who loves fetch.",
      "birthDate": "2021-05-14"
    },
    {
      "name": "Mittens",
      "type": "Cat",
      "age": 2,
      "adoptable": false,
      "bio": "A shy but affectionate tabby who enjoys warm spots by the window.",
      "birthDate": "2022-07-09"
    },
    {
      "name": "Rocky",
      "type": "Dog",
      "age": 5,
      "adoptable": true,
      "bio": "An energetic border collie mix with a knack for herding everything.",
      "birthDate": "2019-03-27"
    },
    {
      "name": "Luna",
      "type": "Cat",
      "age": 1,
      "adoptable": true,
      "bio": "A curious kitten who loves climbing and exploring.",
      "birthDate": "2023-06-15"
    },
    {
      "name": "Buddy",
      "type": "Dog",
      "age": 6,
      "adoptable": false,
      "bio": "A senior Labrador with a heart of gold, enjoys naps and belly rubs.",
      "birthDate": "2018-02-10"
    },
    {
      "name": "Oreo",
      "type": "Rabbit",
      "age": 3,
      "adoptable": true,
      "bio": "A black and white bunny who loves carrots and cuddles.",
      "birthDate": "2021-11-22"
    },
    {
      "name": "Bella",
      "type": "Dog",
      "age": 4,
      "adoptable": true,
      "bio": "A gentle dachshund who enjoys sunbathing and long walks.",
      "birthDate": "2020-08-03"
    },
    {
      "name": "Coco",
      "type": "Parrot",
      "age": 10,
      "adoptable": false,
      "bio": "A talkative African grey who knows over 50 words.",
      "birthDate": "2015-12-30"
    },
    {
      "name": "Shadow",
      "type": "Cat",
      "age": 7,
      "adoptable": true,
      "bio": "A mysterious black cat who enjoys the night and quiet company.",
      "birthDate": "2017-05-05"
    },
    {
      "name": "Bubbles",
      "type": "Fish",
      "age": 2,
      "adoptable": true,
      "bio": "A bright blue betta fish that loves swimming in circles.",
      "birthDate": "2022-10-19"
    }
])

const pets = await PetSchema.findAll();
console.log(pets);

const PORT = 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));