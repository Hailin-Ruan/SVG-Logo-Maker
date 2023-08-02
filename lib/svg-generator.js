const { Circle, Triangle, Square } = require('./shapes');

function createSVG(text, textColor, shape, shapeColor) {
  let svgContent = '';

  switch (shape) {
    case 'circle':
      const circle = new Circle(50, shapeColor); 
      svgContent = circle.getSVGContent();
      break;

    case 'triangle':
      const triangle = new Triangle(100, shapeColor); 
      svgContent = triangle.getSVGContent();
      break;

    case 'square':
      const square = new Square(80, shapeColor); 
      svgContent = square.getSVGContent();
      break;

    default:
      console.log('Invalid shape selected.');
      break;
  }

  svgContent += `<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="24" fill="${textColor}">${text}</text>`;

  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;

  return svg;
}

module.exports = { createSVG };
