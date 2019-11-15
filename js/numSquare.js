const numSquare = (num) => {
    
    var squares = [];
    
    for (c = 1; c <= num; c++) {
        squares.push(c*c);
    }

    return squares;
}

numSquare(10);