var largestAltitude = function(gain) {
    let alts =[0];
    let count = 0;
    gain.forEach((g) => {
        alts.push(count + g);
        count = count + g;
    })

    return Math.max(...alts)
};
