
var likeCount = 9;
var likeCount1 = 12;
var likeCount2 = 9;
var span = document.querySelector("#text-1");
var span1 = document.querySelector("#text-2");
var span2 = document.querySelector("#text-3");



function like() {
    likeCount ++;
    span.innerText = likeCount + " like(s)";

}

function like1() {
    likeCount1 ++;
    span1.innerText = likeCount1 + " like(s)";

}

function like2() {
    likeCount2 ++;
    span2.innerText = likeCount2 + " like(s)";

}

