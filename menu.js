//  Create an array that contains six types of unique meats.
// Create a second array that contains four types of unique vegetables.
// Create a third array that contains five types of unique desserts.
// Remove the last element from the meats array created in Step 1.
// Remove the last element from the vegetables array created in Step 2.
// Create a string variable that contains one item from the dessert array.
// Combine the meat array, the vegetable array, and dessert value into a new array named "mondayMenu."
// Output the contents of the mondayMenu array.

let meats = ['dog' , 'cat' , 'fish', 'beef', 'horse' , 'snail'];

let veggies = ['greens' , 'beans' , 'potatoes' , 'string'] ;

let desserts = ['apple pie', 'banana pie' , 'cherry pie', 'peach pie' , 'shepards pie'];

meats.pop();
veggies.pop();
let apple = 'apple pie';

let mondayMenu = meats.concat(veggies(apple));

console.log(mondayMenu);