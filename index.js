const franc = require("franc");
const langs = require("langs");
const colors = require('colors');

const input = process.argv[2];

console.log(input);

const inputCode = franc(input);

console.log(inputCode)

if (inputCode === 'und') {
    console.log("Could not identify language. Please try again!".red);
} else {
    const language = langs.where("3", inputCode);

    console.log(language);

    console.log(`Our best guess is: ${language.name}`.green);
}
