let memoBtn = document.querySelector("button");
let seTag = document.querySelector("section");
let arTag = document.getElementById("arc");
let cnt =0;
let cntObj = document.createElement("div");

function myFunction(){
    cnt ++;
    let newMemo = document.createElement("article");
    let txtarea = document.querySelector("textarea");
    newMemo.innerHTML=document.getElementById("txt").value;
    seTag.appendChild(newMemo);


    cntObj.innerHTML=cnt;
    arTag.appendChild(cntObj);

};

memoBtn.addEventListener('click',myFunction);