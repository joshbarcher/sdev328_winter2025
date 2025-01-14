const colors = ["red", "cyan", "brown", "beige", "blue", "white", "gray", "black"]

colors.forEach(elem => console.log(elem));

const shortColors = colors.filter(color => color.length <= 4);
console.log(shortColors);

const colorsThatStartWithB = colors
    .filter(color => color.startsWith("b"))
    .sort((colorOne, colorTwo) => colorOne < colorTwo ? -1 : 1)
    .forEach(color => console.log(color.toUpperCase()));

//map converts elements in the array into a new array of elements
const newColors = colors.map(color => color.length);
console.log(newColors);

const bigColors = colors.map(color => color.toUpperCase());
console.log(bigColors);

const htmlArray = colors.map(color => {
    return `
        <div class="color">
            <p>${color}</p>
        </div>
    `
})
console.log(htmlArray);