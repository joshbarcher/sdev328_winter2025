const colors = ["red", "orange", "blue", "blue", "white", "brown"];

//forEach() is a loop
colors.forEach(color => console.log(color.toUpperCase()));

//map() transforms the array
const colorLengthsArray = colors.map(color => color.length);
console.log(colors);
console.log(colorLengthsArray);

const printerReadyColors = colors.map(color => `Color: ${color}`);
console.log(printerReadyColors);