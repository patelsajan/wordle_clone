const container_div = document.getElementById('container');
let index = Math.ceil(Math.random() * words_list.length);
console.log("selected : ", index, ", out of : ", words_list.length);
console.log("word is : ", words_list[index]);

document.addEventListener('keydown', ev=>keypress(ev));

let input_index = 0;
let current_input = container_div.children[input_index];

const allowed_word_length = 5;
let word = '';
const regex = new RegExp('^[a-zA-Z]$');
function keypress(event) {
    let input = current_input.innerHTML;
    switch(event.key) {
        case 'Backspace':
            input = input.substring(0,input.length-1);
            break;
        case 'Enter':
            input = evaluateWord(input);
            break;
        default:
            if(input.length < allowed_word_length && regex.test(event.key)) {
                input += event.key;
            }
            break;
    }
    current_input.innerHTML = input;
}

function evaluateWord(word) {
    //TODO: logic to evaluate word
    return '';
}
