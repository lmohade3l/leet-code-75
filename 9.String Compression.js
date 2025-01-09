/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function (chars) {
//     const result = [];
//     let counter = 1;
//     for (let i = 0; i < chars.length - 1; i++) {
//       if (i === 0) {
//         result.push(chars[i]);
//       } else {
//         if (chars[i] === chars[i - 1]) {
//           counter++;
//         } else if (chars[i] !== chars[i - 1] || i === chars.length - 1) {
//           result.push(chars[i - 1])
//           if (counter >= 10) {
//             result.push("1")
//             result.push((counter % 10).toString())
//           } else {
//             counter > 1 && result.push(counter)

//           }
//           counter = 1;
//         }
//       }
//     }

//     return result
//   };

var compress = function(chars) {
    const result = [];
    let counter = 1;
    let currentChar = chars[0];
    
    for (let i = 1; i <= chars.length; i++) {
        if (i < chars.length && chars[i] === currentChar) {
            counter++;
        } else {
            result.push(currentChar);
            if (counter > 1) {
                result.push(...counter.toString());
            }
            currentChar = chars[i];
            counter = 1;
        }
    }
    
    chars.splice(0, chars.length, ...result);
    return result.length;
};
