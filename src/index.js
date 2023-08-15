const MORSE_TABLE = {
    '1011': 'a',
    '11101010': 'b',
    '11101110': 'c',
    '1101010': 'd',
    '10': 'e',
    '10101110': 'f',
    '11011110': 'g',
    '10101010': 'h',
    '1000': 'i',
    '10111111': 'j',
    '1101011': 'k',
    '10111010': 'l',
    '11110': 'm',
    '1110': 'n',
    '11111': 'o',
    '10111110': 'p',
    '11111011': 'q',
    '1001010': 'r',
    '1001010': 's',
    '1000': 't',
    '1001011': 'u',
    '10101011': 'v',
    '1001111': 'w',
    '11101011': 'x',
    '11101111': 'y',
    '11111010': 'z',
    '11111111': ' ',
};

function decode(expr) {
    let decoded = '';

    for (let i = 0; i < expr.length; i += 10) {
        const letterCode = expr.substr(i, 10);
        const morseCode = letterCode.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
        decoded += MORSE_TABLE[morseCode];
    }

    return decoded;
}

module.exports = {
    decode
};
