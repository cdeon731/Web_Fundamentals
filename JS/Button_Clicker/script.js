// Login to Logout 
function change(login_button){
    login_button.innerText = 'Logout';
}

// Remove Add Definition Button
function hide(add_definition){
    add_definition.remove();
}

// Add likes & Alert
var countLike1 = 0;
var countLike1Element = document.querySelector('#like_button_1')

var countLike2 = 0;
var countLike2Element = document.querySelector('#like_button_2')

function likeButton1(){
    countLike1++;
    countLike1Element.innerText = countLike1 + ' likes';
    alert('Ninja was liked!');
}
function likeButton2(){
    countLike2++;
    countLike2Element.innerText = countLike2 + ' likes';
    alert('Ninja was liked!')
}