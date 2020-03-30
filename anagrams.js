function anagrams(prefix, str) {
  if(str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i + 1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}

anagrams(' ', 'puppy');