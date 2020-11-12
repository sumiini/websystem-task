function edit(){
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
            let response = JSON.parse(xhr.response);
            let movies = response.movies;

            console.log(response);
        }
        else{
            alert("수정 실패");
        }
    }
}