/*3. numSquare(max)
Create a function called numSquare that will return an array of all perfect square numbers up to and including, but not exceeding a max number. For example:

numSquare(5);
// Prints: 1, 4, 9, 16, 25

*/


const numSquare = (myNum) => {
  let listSquare = ''
	for (let i = 1; i <= myNum; i++) {
		let square = i*i
    console.log(square +", ")
	}
}
numSquare(5)