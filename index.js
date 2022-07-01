const container_div = document.getElementById("container");
let index = Math.ceil(Math.random() * words_list.length);
let selected_word = words_list[index];
console.log("selected index: ", index, ", out of : ", words_list.length);
console.log("word is : ", words_list[index]);

document.addEventListener("keydown", (ev) => keypress(ev));

let input_index = 0;
let current_input = container_div.children[input_index];

const allowed_word_length = 5;
const regex = new RegExp("^[a-zA-Z]{1}$");

// handle keypress event for Enter, backSpace and alphabetic characters only.
function keypress(event) {
  let input = current_input.innerHTML;
  switch (event.key) {
    case "Backspace":
      input = input.substring(0, input.length - 1);
      break;
    case "Enter":
      if (input.length === allowed_word_length) {
        input = evaluateWord(input);
      }
      break;
    default:
      if (input.length < allowed_word_length && regex.test(event.key)) {
        input += event.key;
      }
      break;
  }
  current_input.innerHTML = input;
}

const selected_word_array = selected_word.split('');
function evaluateWord(word) {
  let result = '';
  const input_word_array = word.split('');
  input_word_array.forEach(letter => {
    if(letter === selected_word_array[input_word_array.indexOf(letter)]) {
        result += `<span style="color:green">${letter}</span>`;
    } else if(selected_word_array.includes(letter)) {
        result += `<span style="color:yellow">${letter}</span>`;
    }else {
        result += letter;
    }
  });
  return result;
}
