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
// console.log(toArray(1, 4, 5))
// console.log(toArray(8,9,10))	

var startsWithA = function(word) {
	if (word.charAt(0) === 'a') {
		return ('true');
	}
	else {
		return('false');
	}
}
// console.log(startsWithA('aardvark'))
// console.log(startsWithA('bear'))

var excite = function(word) {
	return word + '!!!';
}
// console.log(excite('yes'))
// console.log(excite('go'))

var sun = function(words) {
	if (words.indexOf() === words.indexOf('sun')) {
		return 'false'
	}
	else {
		return 'true'
	}
}
// console.log(sun('sundries'))
// console.log(sun('asunder'))
// console.log(sun('catapult'))


// I have no idea how this worked, but it did 

var tiny = function(number){
	if (number < 1 && number > 0) {
		return 'true';
	}
	else {
		return 'false';
	}
}
// console.log(tiny(0.3))
// console.log(tiny(14))
// console.log(tiny(-5))

var getSeconds = function( MM, SS ) {

	return (MM * 60) + SS;
}
// console.log(getSeconds(01, 30))
// console.log(getSeconds(10, 25))

// This works just not the right syntax. Can't get it to work.