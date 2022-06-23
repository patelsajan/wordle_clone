let word = '';
let div1 = document.getElementById('div1');
console.log(document);
console.log(div1);
document.addEventListener('keypress', ev => {
    console.log('keypress: ', ev);
    if (ev.key === 'Enter') {
        console.log('check word');
        checkWord();
    } else {
        div1.innerHTML = div1.innerHTML+ev.key;
    }
});

let index = Math.ceil(Math.random()*words_list.length);
console.log('selected : ', index, ', out of : ', words_list.length);
console.log('word is : ', words_list[index]);

function checkWord() {

}
