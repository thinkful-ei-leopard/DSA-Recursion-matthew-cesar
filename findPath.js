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

function findPath(maze, x, y) {
  console.log(x, y);

  // Check if x,y outside of maze
  if(maze[x] === undefined || maze[0][y] === undefined) {
    return false;
  }

  // Check if x,y is goal
  if(maze[x][y] === 'e') {
    return ' ';
  }

  // Check if x,y is wall
  if(maze[x][y] === '*') {
    return false;
  }

  // Check if space has already been moved to
  if(maze[x][y] === '+' || maze[x][y] === 'x') {
    return false;
  }

  // Mark as part of solution path
  maze[x][y] = '+';
  console.table(maze);

  // Check north of x,y
  if(findPath(maze, x - 1, y) === ' ') {
    return 'U' + findPath(maze, x - 1, y);
  }
  else
  // Check east of x,y
  if(findPath(maze, x, y + 1) === ' ') {
    return 'R' + findPath(maze, x, y + 1);
  }
  else
  // Check south of x,y
  if(findPath(maze, x + 1, y) === ' ') {
    return 'D' + findPath(maze, x + 1, y);
  }
  else
  // Check west of x,y
  if(findPath(maze, x, y - 1) === ' ') {
    return 'L' + findPath(maze, x, y - 1);
  }
  else {
    maze[x][y] = 'x';
    console.table(maze);
    return false;
  }
}
console.log(findPath(mySmallMaze, 0, 0));