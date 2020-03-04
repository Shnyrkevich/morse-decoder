const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let mas = [];
    let decStr = "";

    for(let i = 0, j = 0; i < expr.length; i+=10, j++){
        mas[j] = expr.slice(i, i+10).replace(/00/g, ' ').replace(/10/g, '.').replace(/11/g, '-');
    }

    for(let i = 0; i < mas.length; i++){
        let subst = "";
        for(let j = 0; j < mas[i].length; j++){
            if(mas[i][j] != ' '){
                subst += mas[i][j];
            }
        }
        mas[i] = subst;
        if(mas[i] == "**********"){
            decStr += " ";
        } else {
            decStr += MORSE_TABLE[mas[i]];
        }
    }
    
    return decStr;
}

module.exports = {
    decode
}