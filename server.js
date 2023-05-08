console.log("Hello!")
console.log()
function random (min, max) {
    return Math.floor(Math.random()*(max-min))+min;
//
}
console.log(process.argv)
const randomNum = random(process.argv[2], process.argv[3])
console.log(randomNum)
