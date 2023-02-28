function subtract (){
    var b = 10;
    var c = 08;
    console.log(b-c);
}
subtract()

const shape = {
    radius: 10, 
    diameter (){
        return this.radius *2     
    },
    perimeter: ()=> 2*Math.PI*this.radius,

};
console.log(shape.diameter());
console.log(shape.perimeter());


