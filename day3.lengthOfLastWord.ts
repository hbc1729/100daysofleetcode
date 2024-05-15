function lengthOfLastWord(s: string): number {
    let count = 0;
    let isCountGoingOn = false;

    for (let i = s.length - 1; i >= 0; i--) {
        if (isCountGoingOn && s[i] === " ") break;
        if (s[i] !== " ") {
            isCountGoingOn = true;
            count = count + 1;
        }
    }

    return count;
};

// function lengthOfLastWord(s: string): number {
//     const stringArray = s.split(" ");
//     const tempArray = stringArray.filter(e => e != "");
//     return tempArray[tempArray.length - 1].length
// };
