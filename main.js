var times = ["Five!", "Five!", "Five!"]
var tripleFive = function(word) {
	for (var i = 0; i < 4; i++){
		return word + word + word;
		}
}
// console.log(tripleFive("Five!"))

// Not right but I succeeded woo hoo. 

var lastLetter = function(string) {
	return string.charAt(string.length -1)
}
// console.log(lastLetter('hello'))
// console.log(lastLetter('island'))

var square = function(number) {
	return number * number;
}
// console.log(square(3))
// console.log(square(5))


var negate = function(number) {
	return -number;

}
// console.log(negate(5))
// console.log(negate(-8))

var toArray = function(number1, number2, number3){
	return [number1, number2, number3]
}
console.log(toArray(1, 4, 5))
console.log(toArray(8,9,10))