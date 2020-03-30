function splitter(string, separator = '/') {
  let index = string.indexOf(separator);
  if (index === -1) {
    return [string];
  }
  return [string.substring(0, index), ...splitter(string.substring(index + 1), separator)];
}


console.log(splitter('02/20/2020/'));