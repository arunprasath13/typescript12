// use interface for classes and types for everything else

interface Circle {
    radius:number
}

interface Square{
    side:number;
}


interface Rectangle{
    width:number;
    height:number
}

type Shape = Rectangle | Circle | Square;

// but in interface we can't use unions and intersections

function renderShape(shape:Shape){
  console.log("Hello shape")
}

const myCircle: Circle = { radius: 10 };

renderShape(myCircle)


