function reverseWords(sentence) {
  let reversedSentence = '';
  let word = '';
  let isWord = false;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === ' ' || i === sentence.length - 1) {
      if (i === sentence.length - 1) {
        word += char;
      }
      for (let j = word.length - 1; j >= 0; j--) {
        reversedSentence += word[j];
      }
      if (i !== sentence.length - 1) {
        reversedSentence += ' ';
      }
      word = '';
      isWord = false;
    } else {
      word += char;
      isWord = true;
    }
  }

  return reversedSentence;
}

const inputSentence = prompt("Enter a sentence:"); 

if (inputSentence !== null) {
  const reversedSentence = reverseWords(inputSentence);
  console.log("Reversed Sentence:", reversedSentence);
}
