const { reverseString } = require('./reverseString');

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let allPaths = [];
let possiblePath = '';

function findPath(maze, x, y) {
  console.log(x, y);
  // Check if x,y outside of maze
  if(maze[x] === undefined || maze[0][y] === undefined) {
    return false;
  }
  // Check if x,y is goal
  if(maze[x][y] === 'e') {
    return true;
  }
  // Check if x,y is wall
  if(maze[x][y] === '*') {
    return false;
  }
  // Check if space has already been moved to
  if(maze[x][y] === '+') {
    return false;
  }
  // Mark as part of solution path
  maze[x][y] = '+';
  console.table(maze);
  // Check north of x,y
  if(findPath(maze, x - 1, y) !== false) {
    possiblePath += 'U';
    return reverseString(possiblePath);
  }
  // Check east of x,y
  if(findPath(maze, x, y + 1) !== false) {
    possiblePath += 'R';
    return reverseString(possiblePath);
  }
  // Check south of x,y
  if(findPath(maze, x + 1, y) !== false) {
    possiblePath += 'D';
    return reverseString(possiblePath);
  }
  // Check west of x,y
  if(findPath(maze, x, y - 1) !== false) { 
    possiblePath += 'L';
    return reverseString(possiblePath);
  }
  // Unmark x,y as part of solution path
  maze[x][y] = 'x';
  console.table(maze);
  return 'Unsolvable';
}

console.log(findPath(maze, 0, 0));