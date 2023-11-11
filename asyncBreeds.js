// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function (breed, functionToRunWhenThingsAreDone) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    functionToRunWhenThingsAreDone(data);
    // if (!error) return functionToRunWhenThingsAreDone(data);
  });
};

// const printOutCatBreed = (breed) => {
//   console.log(`Return value: ${breed}`);
// };

// const bombay = breedDetailsFromFile("Bombay", printOutCatBreed);
// console.log("Return Value: ", bombay);

module.exports = breedDetailsFromFile;
