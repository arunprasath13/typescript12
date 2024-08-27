let unionArray = ['one', 3, true]

unionArray.push("Zero")
unionArray.push(5)
unionArray.push(false)

console.log(unionArray)


// Explicit

let errorCode:(string|number);
errorCode = "401";
errorCode = 400;

// explicit Array

let errorCodes:(string|number|boolean)[] = [];
errorCodes.push("aruna");
errorCodes.push(400);
errorCodes.push(true);

console.log(errorCodes)