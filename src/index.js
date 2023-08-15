function decodeMorseCode(input) {
    // Define a dictionary for Morse code mapping
    const morseCodeMap = {
        '0000001011': 'a',
        '0011101010': 'b',
        '0011101110': 'c',
        '0000111010': 'd',
        '0000000010': 'e',
        '0010101110': 'f',
        '0000111110': 'g',
        '0010101010': 'h',
        '0000001010': 'i',
        '0010111111': 'j',
        '0000111011': 'k',
        '0010111010': 'l',
        '0000001111': 'm',
        '0000001110': 'n',
        '0000111111': 'o',
        '0010111110': 'p',
        '0011111011': 'q',
        '0000101010': 'r',
        '0000101010': 's',
        '0000001000': 't',
        '0000101011': 'u',
        '0010101011': 'v',
        '0000101111': 'w',
        '0011101011': 'x',
        '0011101111': 'y',
        '0011111010': 'z',
        '1011111111': ' ',
    };
  
    const encodedLetters = input.match(/.{10}/g);

    // Decode each letter and store the results in an array
    const decodedLetters = encodedLetters.map(encodedLetter => {
      if (encodedLetter === '**********') {
        return ' ';
      } else {
        const decodedChar = morseCodeMap[encodedLetter];
        return decodedChar || '?'; // Handle unknown characters
      }
    });
  
    // Join the decoded letters to form the final decoded string
    const decodedString = decodedLetters.join('');
  
    return decodedString;
  }
  
  // Test the function with an example input
  const input = "00000011110000000010"; // Encoded "me"
  const decodedOutput = decodeMorseCode(input);
  console.log(decodedOutput); // Output: "me"