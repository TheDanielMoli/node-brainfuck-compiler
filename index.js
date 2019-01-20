const fs = require('fs');

// if no input provided, executes hello world brainfuck program
let input = '+[-[<<[+[--->]-[<<<]]]>>>-]>-.---.>..>.<<<<-.<+.>>>>>.>.<<.<-.';
let output = '';

let out = 'now';

let last = '';
process.argv.forEach((val, index) => {
    if (index > 1) {
        if (val === '-i' || val === '-o') {
            last = val;
        }
        else if (last === '-i') {
            input = fs.readFileSync(__dirname + '/' + val, 'utf-8');
        }
        else if (last === '-o') {
            out = val;
        }
    }
});

if (input.includes(',')) {
    output = 'let prompt = require(\'prompt-sync\')(); ';
}
output += 'let pointer = 0; let memory = {}; ';

// check new & init zero
const check = 'memory[pointer] === undefined && (memory[pointer] = 0); ';

// op >
const OP1 = '++pointer; ';

// op <
const OP2 = '--pointer; ';

// op +
const OP3 = check + '++memory[pointer]; memory[pointer] > 255 && (memory[pointer] = 0); ';

// op -
const OP4 = check + '--memory[pointer]; memory[pointer] < 0 && (memory[pointer] = 255); ';

// op .
const OP5 = 'process.stdout.write(String.fromCharCode(memory[pointer])); ';

// op ,
const OP6 = 'console.log(); memory[pointer] = prompt(\'Please type one more character: \', \'0\').charCodeAt(0);';

// op [
const OP7 = 'while (memory[pointer]) { ';

// op ]
const OP8 = ' }';

for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
        case '>':
            output += OP1;
            break;
        case '<':
            output += OP2;
            break;
        case '+':
            output += OP3;
            break;
        case '-':
            output += OP4;
            break;
        case '.':
            output += OP5;
            break;
        case ',':
            output += OP6;
            break;
        case '[':
            output += OP7;
            break;
        case ']':
            output += OP8;
            break;
        default:
    }
}

if (out === 'now') {
    eval(output);
}
else {
    fs.writeFileSync(__dirname + '/' + out, output, 'utf-8');
}