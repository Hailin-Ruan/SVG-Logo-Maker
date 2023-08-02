const inquirer = require('inquirer');
const { createSVG } = require('./svg-generator'); 

async function generateLogo() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal number):',
    },
  ]);

  const svgContent = createSVG(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);

  const fs = require('fs');
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

module.exports = generateLogo;