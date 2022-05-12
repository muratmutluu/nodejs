const circleArea = (r) => {
    return Math.PI * (r * r)
}
let arguments = process.argv.slice(2)
let r = arguments[0]
let result = `Yarıçapı ${r} olan dairenin alanı ${circleArea(r)}`
console.log(result)