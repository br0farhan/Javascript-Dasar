    // Cara 1 keyword new Function
const sum1 =  new Function("x","y","console.log(x+y)")

    // Cara 2 - Standar function
function sum2(x,y){
    console.log(x+y)
}

    // Cara 3 = Arrow function
const sum3 = (x, y) => {
    console.log(x+y)
}
sum1(1,4)
sum3(3,7)