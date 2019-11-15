const mean = (arr) => {
    var sum = 0;

    if (arr.length == 0) {
        var mean = 0;
        
    } else {
        for (i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        var mean = sum/arr.length;
    }

    return mean;
}

//tests
mean([]);
mean([0]);
mean([1]);
mean([2,2]);
mean([1,2,3,4,5,6,8]);

