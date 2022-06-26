const container_div = document.getElementById('container');
let index = Math.ceil(Math.random() * words_list.length);
console.log("selected : ", index, ", out of : ", words_list.length);
console.log("word is : ", words_list[index]);
document.addEventListener('keypress', ev => keypress(ev));

let input_index = 0;
let current_input = container_div.children[index];

function keypress(event) {
    console.log('keypress triggered');
}
