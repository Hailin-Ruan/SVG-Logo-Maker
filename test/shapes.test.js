const { Shapes, Circle, Triangle, Square } = require('../lib/shapes');

describe('Shapes', () => {
  test('should create a shape with the correct color', () => {
    const shape = new Shapes('blue');
    expect(shape.colour).toBe('blue');
  });
});

describe('Circle', () => {
  test('should create a circle with the correct radius and color', () => {
    const circle = new Circle(50, 'pink');
    expect(circle.radius).toBe(50);
    expect(circle.colour).toBe('pink');
  });

  test('should generate SVG content for the circle', () => {
    const circle = new Circle(50, 'pink');
    const svgContent = circle.getSVGContent();
    expect(svgContent).toContain('<circle');
    expect(svgContent).toContain('cx="150"');
    expect(svgContent).toContain('cy="100"');
    expect(svgContent).toContain('r="50"');
    expect(svgContent).toContain('fill="pink"');
  });
});

describe('Triangle', () => {
    test('should create a triangle with the correct length and color', () => {
        const triangle = new Triangle(100, 'green');
        expect(triangle.length).toBe(100);
        expect(triangle.colour).toBe('green');
    });
    test('should generate SVG content for the triangle', () => {
        const triangle = new Triangle(100, 'green');
        const svgContent = triangle.getSVGContent();
        expect(svgContent).toContain('<polygon');
        expect(svgContent).toContain('points="150,50 100,150 200,150"');
        expect(svgContent).toContain('fill="green"');
      });
});

describe('Square', () => {
    test('should create a square with the correct length and color', () => {
        const square = new Square(80, 'purple');
        expect(square.length).toBe(80);
        expect(square.colour).toBe('purple');
      });
    
      test('should generate SVG content for the square', () => {
        const square = new Square(80, 'purple');
        const svgContent = square.getSVGContent();
        expect(svgContent).toContain('<rect');
        expect(svgContent).toContain('x="110"');
        expect(svgContent).toContain('y="60"');
        expect(svgContent).toContain('width="80"');
        expect(svgContent).toContain('height="80"');
        expect(svgContent).toContain('fill="purple"');
      });
});
