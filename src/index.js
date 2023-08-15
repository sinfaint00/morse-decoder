function decodeMorse(encoded) {
    const morseDictionary = {
        '0000001111': 'm', '0000000010': 'e', // and so on, add the entire dictionary
    };

    const words = encoded.split('**********');
    const decodedWords = [];

    for (const word of words) {
        const letters = word.match(/.{1,10}/g);
        const decodedWord = letters.map(letter => morseDictionary[letter]).join('');
        decodedWords.push(decodedWord);
    }

    return decodedWords.join(' ');
}

module.exports = decodeMorse;
