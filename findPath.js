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

function findPath(maze, position=0, x, y, direction='S', path) {
  if(y < 0 || x < 0) {
    return;
  }
  if(y >= maze[0].length || x >= maze.length) {
    return;
  }

  path[position] = direction;
  position++;

  if(maze[x][y] === 'e') {
    console.table(maze);
    printPath(path, 1, position - 1);
    return;
  }

  if(maze[x][y] === ' ') {
    maze[x][y] = 's';

    findPath(maze, position, x, y - 1, 'L', path);
    findPath(maze, position, x - 1, y, 'U', path);
    findPath(maze, position, x, y + 1, 'R', path);
    findPath(maze, position, x + 1, y, 'D', path);
  }

  position --;
}

function findAllPaths(maze, position=0, x, y, direction='S', path) {
  if(y < 0 || x < 0) {
    return;
  }
  if(y >= maze[0].length || x >= maze.length) {
    return;
  }

  path[position] = direction;
  position++;

  if(maze[x][y] === 'e') {
    console.table(maze);
    printPath(path, 1, position - 1);
    return;
  }

  if(maze[x][y] === ' ') {
    maze[x][y] = 's';

    findPath(maze, position, x, y - 1, 'L', path);
    findPath(maze, position, x - 1, y, 'U', path);
    findPath(maze, position, x, y + 1, 'R', path);
    findPath(maze, position, x + 1, y, 'D', path);

    maze[x][y] = ' ';
  }

  position --;
}

function printPath(path, startPos, endPos) {
  console.log('Found path to the exit: ');
  console.log(path);
}

//findPath(maze, 0, 0, 0, 'S', []);
findAllPaths(maze, 0, 0, 0, 'S', []);