const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    //const cats = ["Milo", "Otis", "Garfield"];
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    // cats.length = 0;
    // cats.push("Milo", "Otis", "Garfield");
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.shift();
    return cats;
}

function appendCat(name) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const cats2 = [...cats,name];
    return cats2;
}

function prependCat(name) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    let cats3 = [name,...cats];
    return cats3;
}

function removeLastCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const cats2 = cats.slice(0,-1);
    return cats2;

}
function removeFirstCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const cats2 = cats.slice(1);
    return cats2;

}

console.log(destructivelyAppendCat("Philip"));
console.log(destructivelyPrependCat("Helsinki"));
console.log(destructivelyRemoveLastCat());
console.log(destructivelyRemoveFirstCat());
console.log(appendCat("Brian"));
console.log(PrependCat("Arnold"));
console.log(removeLastCat());
console.log(removeFirstCat());




// console.log(destructivelyAppendCat("Ralph"));
// console.log(destructivelyPrependCat("Helsinki"));
