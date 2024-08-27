"use strict";
// use interface for classes and types for everything else
// but in interface we can't use unions and intersections
function renderShape(shape) {
    console.log("Hello shape");
}
const myCircle = { radius: 10 };
renderShape(myCircle);
