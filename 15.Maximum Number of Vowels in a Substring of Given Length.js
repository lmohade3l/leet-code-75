var maxVowels = function (s , k) {
    let m =0;
    let n =k-1;
    let count = 0;

    for (let i=0; i<k; i++) {
        if(["a" , "e" , "i" , "u" , "o"].includes(s[i])) count++;
    }

    m++;
    n++;
    let temp = count;

    while(n < s.length) {
        if(["a" , "e" , "i" , "u" , "o"].includes(s[m-1])) temp--;
        if(["a" , "e" , "i" , "u" , "o"].includes(s[n])) temp++;

        count = Math.max(temp , count);

        m++;
        n++;
    }

    return count;
}