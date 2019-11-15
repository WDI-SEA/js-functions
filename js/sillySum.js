var arrTest = [3, 7, 9, 15, 20, 13]


const sillySum = (array) => {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total = total + array[i]*i
  }
  console.log(total)
}

sillySum(arrTest)