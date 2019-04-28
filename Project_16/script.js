const array = [1, 2, 10, 16];
const double = [];

const newArray = array.forEach((num) =>{
    double.push(num * 2);
});

console.log('forEach', double);

const mapArray = array.map((num) => {
    return num * 2;
});

console.log('map', mapArray);

string = ['Aki', 'másnak', 'vermet', 'ás'];

const reduceArray = string.reduce((accumulator, item) => {
    return accumulator + item + ' ';
}, ' '); 

console.log('reduce', reduceArray);

// Exercise 5
// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

// newArray = [];

// array.forEach(item => {
//     newArray.push(item.username+'!');
// });

// console.log('!', newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
// const nextArray = array.map(item => item.username + '?');

// console.log('?', nextArray)

//Filter the array to only include users who are on team: red
// const filterArray = array.filter(item => item.team === "red" );

// console.log('filter', filterArray);

//Find out the total score of all users using reduce
const sum = array.reduce((acc, item) => {
    return acc + item.score;
}, 0);

console.log('sum', sum);

// (1), what is the value of i? index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

const newArray = arrayNum.map(num => num *2);


  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
