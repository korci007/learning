var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1
array.shift();
console.log(array);

// 2
array.sort();
console.log(array);

// 3
array.push("Kiwi");
console.log(array);

//4
array.splice(0,1);
console.log(array);

//5
array.reverse();
console.log(array);

//6 
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);