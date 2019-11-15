var arrTest = [3, 7, 9, 15, 20, 13]


const mean = (myArray) => {
  let total = 0
  for (let i = 0; i < myArray.length; i++) {
    total = total + myArray[i]
  }
  return (total / (myArray.length))
}

console.log(mean(arrTest))