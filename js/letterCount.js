const letterCount = (str) => {

    var charCount = {};

    for (i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (!(c in charCount)) {
            charCount[c] = 0;
        } 
        charCount[c]++;
    }

    console.log(charCount);

}

letterCount("tapple");
letterCount("mississippi");
