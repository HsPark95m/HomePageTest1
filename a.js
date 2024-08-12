var id;
var pw;
var tagId;
var tagPw;
var tagResult;

window.onload = function(){
    tagId = document.getElementById("id");
    tagPw = document.getElementById("pw");
    tagResult = document.getElementById("result");
}

function login(){
    id = tagId.value;
    pw = tagPw.value;

    if(id=="cat" && pw == "1234"){
        tagResult.innerHTML = id + "회원님 반갑습니다."
    } else{
        alert("로그인 실패");
    };
}


