var reverseVowels = function (s) {
    let vowels = []
    let result = ''

    for (let i = 0; i < s?.length; i++) {
        if (['a', 'e', 'i', 'u', 'o', 'A', 'E', 'I', 'U', 'O'].includes(s[i])) vowels.push(s[i])
    }

    let j = vowels?.length - 1;
    for (let i = 0; i < s?.length; i++) {
        if (['a', 'e', 'i', 'u', 'o', 'A', 'E', 'I', 'U', 'O'].includes(s[i])) {
            result += vowels[j];
            j--;
        } else {
            result += s[i]
        }
    }

    return result;

};