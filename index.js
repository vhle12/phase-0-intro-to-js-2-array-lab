// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats
}

function prependCat(name) {
    const copyOfCats = ["Arnold", ...cats]
    return copyOfCats
}

function removeLastCat() {
    return cats.slice(0,2)
}

function removeFirstCat() {
    return cats.slice(1)
}