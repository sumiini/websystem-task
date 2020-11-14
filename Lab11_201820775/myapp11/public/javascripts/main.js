
function edit(id, title,year,url){
    let edititle =  document.getElementById("edittitle");
    let ediyear = document.getElementById("edityear");
    let ediurl = document.getElementById("editimage");

    let edit_id = document.getElementById("edit_id");

    edit_id.value = id;
    edititle.value = title;
    ediyear.value = year;
    ediurl.value = url;

}

function ajaxEdit(){
    var xhr = new XMLHttpRequest();
    var etitle = document.getElementById("edittitle");
    var eyear = document.getElementById("edityear");
    var eurl = document.getElementById("editurl");
    var edit_id = document.getElementById("edit_id");
    var data={
        _id:edit_id,
        title:etitle.value,
        year:eyear.value,
        url : eurl.value
    }

    xhr.onload = function(){
        alert("수정");
        if(xhr.status==200||xhr.status===201){
            alert("수정 완료");

        }
        else{
            alert("수정 실패");
        }
    }

    xhr.open("POST", "/update/"+ edit_id.value);
    xhr.responseType = 'json';
    xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.send(JSON.stringify(data));
}

// function deletedata(id){
//     var xhr = new XMLHttpRequest();
//
//     //요청의 상태가 DONE일 경우 프론트엔드 측에서 요청을 처리하는 방식을 정의
//     xhr.onload = function (){
//         alert("삭제");
//         if(xhr.status===200 || xhr.status ===201){
//             let deleteMovie = document.getElementById("movies"+id);
//             deleteMovie.remove();
//             alert("삭제 성공 !");
//         }
//         else{
//             alert("삭제 실패");
//         }
//
//     }
//
//     xhr.open("POST", "/delete/"+ id);
//     xhr.setRequestHeader("Content-Type", 'application/json');
//     xhr.send();
//
// }

function ajaxDelete(id){
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){
        alert("삭제");
        if(xhr.status === 200 || xhr.status === 201){
            let deletedMovie = document.getElementById("movie"+id);
            deletedMovie.remove();
            alert("삭제 성공!");
        }else {
            alert("삭제 실패");
        }
    }

    xhr.open("POST", "/delete/"+ id);
    xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.send();
}