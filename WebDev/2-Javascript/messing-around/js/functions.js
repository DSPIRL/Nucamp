const firstNamesArray = ['Violet', 'Charlie', 'Veruca', 'Mike', 'Augustus'];
const lastNamesArray = ['Beauregarde', 'Bucket', 'Salt', 'Teavee', 'Gloop'];
firstNamesArray.reverse();
lastNamesArray.reverse();

let length = firstNamesArray.length;

for (let i = 0; i < length; i++) {
    console.log(`${firstNamesArray[i]} ${lastNamesArray[i]}`);
}
let something = Number(prompt("Who are you?"));