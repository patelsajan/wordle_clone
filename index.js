const container_div = document.getElementById("container");
let index = Math.ceil(Math.random() * words_list.length);
let selected_word = words_list[index];
console.log("selected index: ", index, ", out of : ", words_list.length);
console.log("word is : ", words_list[index]);

let input_index = 0;
let current_input = container_div.children[input_index];
current_input.classList.add("focus");

const allowed_word_length = 5;
const regex = new RegExp("^[a-zA-Z]{1}$");
const selected_word_array = selected_word.split("");

// handle keypress event for Enter, backSpace and alphabetic characters only.
const keypress = function keypress(event) {
  let input = current_input.innerHTML;
  switch (event.key) {
    case "Backspace":
      current_input.innerHTML = input.substring(0, input.length - 1);
      break;
    case "Enter":
      if (input.length === allowed_word_length) {
        evaluateWord(input);
      }
      break;
    default:
      if (input.length < allowed_word_length && regex.test(event.key)) {
        current_input.innerHTML += event.key;
      }
      break;
  }
};

// check each letter of the input word and assign colors.
// green: letter is in correct position.
// yellow: letter is in the selected word but input is in the wrong position.
// no color: letter is not present in the selected word.
function evaluateWord(word) {
  if (!words_list.includes(word)) {
    alert(word.toUpperCase()+' is not allowed.');
    return;
  }
  let result = "";
  const input_word_array = word.split("");
  let correct_letter_count = 0;
  for (let i = 0; i < input_word_array.length; i++) {
    const letter = input_word_array[i];
    if (letter === selected_word_array[i]) {
      correct_letter_count++;
      result += `<span style="color:#5FD700">${letter}</span>`;
    } else if (selected_word_array.includes(letter)) {
      result += `<span style="color:yellow">${letter}</span>`;
    } else {
      result += letter;
    }
  }
  current_input.innerHTML = result;
  current_input.classList.remove("focus");
  if (correct_letter_count === 5) {
    current_input.classList.add("correct_input");
    document.removeEventListener("keydown", keypress);
    return;
  } else {
    current_input.classList.add("wrong_input");
  }
  // move to the next input div and set the values.stop if 6 wrong inputs
  if (input_index === 5) {
    document.removeEventListener("keydown", keypress);
    return;
  } else {
    input_index++;
    current_input = container_div.children[input_index];
    current_input.innerHTML = "";
  }
  current_input.classList.add("focus");
}

document.addEventListener("keydown", keypress);