class Shapes{
    constructor(colour){
       this.colour = colour;
    }
}

class Circle extends Shapes{
    constructor(radius, colour){
        super(colour);
        this.radius = radius;
    }
    getSVGContent(){   
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.colour}" />`;
    }
}

class Triangle extends Shapes{
    constructor(length, colour){
        super(colour);
        this.length = length;
    }
    getSVGContent(){ 
        const halfLength = this.length / 2;
    const trianglePoints = `150,${100 - halfLength} ${150 - halfLength},${100 + halfLength} ${150 + halfLength},${100 + halfLength}`;
    return `<polygon points="${trianglePoints}" fill="${this.colour}" />`;     
    }
}

class Square extends Shapes{
    constructor(length, colour){
        super(colour);
        this.length = length;
    }
    getSVGContent(){
        const halfLength = this.length / 2;
    return `<rect x="${150 - halfLength}" y="${100 - halfLength}" width="${this.length}" height="${this.length}" fill="${this.colour}" />`;
    }
}

module.exports = {Shapes, Circle, Triangle, Square};