document.addEventListener('keypress', ev => {
    console.log('keypress: ', ev);
    if (ev.key === 'Enter') {

    }
});

let index = Math.ceil(Math.random()*words_list.length);
console.log('selected : ', index, ', out of : ', words_list.length);
console.log('word is : ', words_list[index]);


