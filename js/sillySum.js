const sillySum = (arr) => {
    
    var count = 0;

    for (i = 0; i < arr.length; i++) {
        count += (arr[i] * i);
    }

    return count;
}

//tests
sillySum([]);
sillySum([0]);
sillySum([1]);
sillySum([5]);
sillySum([0,1,2,3]);