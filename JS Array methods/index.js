import fetch from "node-fetch";

const getTheData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/?_limit=10")
    .then((response) => response.json())
    .then((json) => json);
};

const data = await getTheData();

// console.log(data);

//Filter data in array or object
const filtered = data.filter((item) => {
  return !item.completed;
});

// console.log(filtered);

const mapped = data.map((item) => {
  return item.title;
});

// console.log(mapped);

// Finds first item in list that matches argument
const findItem = data.find((item) => {
  return (item.id = 3);
});

// console.log(findItem);

//Loop through each item in object
data.forEach((item) => {
  //   console.log(item.title);
});

//Checks if object contains items with condition returns true or false (condition only has to match for one item in object)
const containsCompletedItem = data.some((item) => {
  return item.completed;
});

// console.log(containsCompletedItem);

//Checks if object contains items with condition returns true or false (has to match for all items in object)
const containsCompletedItems = data.every((item) => {
  return item.completed;
});

// console.log(containsCompletedItems);

//loops throug all items in object and returns sum of all iD's
//total id's starts at 0 (default value given) and adds all the items id's
const reduced = data.reduce((totalIds, item) => {
  console.log(totalIds);
  console.log(item.id);
  return (totalIds += item.id);
}, 0);

// console.log(reduced);

const arr = [1, 2, 3, 4, 5, 6];

const includes = arr.includes(6);
console.log(includes);

// sort by int
const byID = data.sort((a, b) => {
  return b.id - a.id;
});

// console.log(byID);

//Sort by string
const byTitle = data.sort((a, b) => {
  if (a.title < b.title) return -1;
  return 1;
});

console.log(byTitle);
