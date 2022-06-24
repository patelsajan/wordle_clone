let word = "";
let selected_word;
let div1 = document.getElementById("div1");
console.log(document);
console.log(div1);
document.addEventListener("keypress", (ev) => {
  console.log("keypress: ", ev);
  if (ev.key === "Enter") {
    console.log("check word");
    checkWord();
  } else if (div1.innerHTML.length >= 5) {
  } else {
    div1.innerHTML = div1.innerHTML + ev.key;
  }
});

let index = Math.ceil(Math.random() * words_list.length);
selected_word = words_list[index];
console.log("selected : ", index, ", out of : ", words_list.length);
console.log("word is : ", words_list[index]);

function checkWord() {
  let entered_word = div1.innerHTML;
  let selected_word_array = selected_word.split("");
  console.log(entered_word_array);
  for (let i = 0; i < entered_word.length; i++) {
    let entered_char = entered_word.charAt(i);
    let selected_char = selected_word.charAt(i);
    if (entered_char === selected_char) {
      word += `<span style="color:green">${entered_char}</span>`;
    } else if (selected_word_array.includes(entered_char)) {
      word += `<span style="color:yellow">${entered_char}</span>`;
    } else {
      word += entered_char;
    }
  }
  div1.innerHTML = word;
}
