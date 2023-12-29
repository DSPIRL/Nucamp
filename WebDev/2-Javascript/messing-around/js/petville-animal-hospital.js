const pet = {
    //add properties here
    name: 'Don',
    age: 5,
    type: 'cat'
};

function describePet(pet) {
    //return a string that uses a template literal to string together all of a pet's properties into one descriptive sentence.
    return `${pet.name} is an adorable ${pet.age} year old ${pet.type} that enjoys fighting windmills with his trustee companion, Sancho.`;
}

console.clear();
console.log(describePet(pet));
