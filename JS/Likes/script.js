var countLike_1 = 0;
var countLike_1Element = document.querySelector('#like_1_id');

var countLike_2 = 0;
var countLike_2Element = document.querySelector('#like_2_id');

var countLike_3 = 0;
var countLike_3Element = document.querySelector('#like_3_id');

function like_1() {
    countLike_1++;
    countLike_1Element.innerText = countLike_1 + ' like(s)';
}

function like_2() {
    countLike_2++;
    countLike_2Element.innerText = countLike_2 + ' like(s)';
}

function like_3() {
    countLike_3++;
    countLike_3Element.innerText = countLike_3 + ' like(s)';
}