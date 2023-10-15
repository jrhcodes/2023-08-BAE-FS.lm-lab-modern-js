// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export const add = (...numbers) => numbers.reduce((total, number) => total += number);

add(1, 2, 3, 4, 5);
