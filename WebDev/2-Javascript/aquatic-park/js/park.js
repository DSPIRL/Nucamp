const WAVE_POOL_MIN_HEIGHT = 42; // in inches
const WATERSLIDE_MIN_HEIGHT = 48; // in inches
const LAZY_RIVER_MIN_HEIGHT = 36; // in inches

function buyTicket() {
    const attractionType = prompt('Which attraction do you want to visit: type "wave" for wave pool, "water" for waterslide, or "river" for lazy river?');
    const userHeight = prompt('What is your height in inches?');

    const isAllowed = checkHeight(attractionType, userHeight);

    console.log("User's selected attraction is " + attractionType);
    console.log("User's height is " + userHeight);
    console.log(isAllowed);
    alert(isAllowed)
}

function checkHeight(attraction, height) {
    console.log("entered function")
    switch (attraction) {
        case "wave":
            console.log("entered case")
            return height >= WAVE_POOL_MIN_HEIGHT;
        case "water":
            return height >= WATERSLIDE_MIN_HEIGHT;
        case "river":
            return height >= LAZY_RIVER_MIN_HEIGHT;
    }
}