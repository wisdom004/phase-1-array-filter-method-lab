// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  const drivers1 = ["Alice", "Benedict", "Ben", "John"];
console.log(findMatching(drivers, "Ben"));



function fuzzyMatch(drivers, searchString) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(searchString.toLowerCase()));
}

console.log= fuzzyMatch;

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

console.log = matchName;
