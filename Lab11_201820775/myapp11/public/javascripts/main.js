
function edit(id, title,year,url){


    let ff = document.createElement("form");
    ff.setAttribute("method","GET");
    ff.setAttribute("action","/routes/movie/read/"+id);


    document.body.appendChild(ff);
    ff.submit();




}

function trendo(id){

    let trendof = document.createElement("form");
    trendof.setAttribute("method","POST");
    trendof.setAttribute("action","/routes/movie/update/"+id);



    let trendoinput = document.createElement("input");
    trendoinput.setAttribute("type","hidden");
    trendoinput.setAttribute("name","trending");
    trendoinput.value = "true";

    trendof.appendChild(trendoinput);

    document.body.appendChild(trendof);
    trendof.submit();

}

function trendx(id){

    let trendxf = document.createElement("form");
    trendxf.setAttribute("method","POST");
    trendxf.setAttribute("action","/routes/movie/update/"+id);



    let trendxinput = document.createElement("input");
    trendxinput.setAttribute("type","hidden");
    trendxinput.setAttribute("name","trending");
    trendxinput.value = "false";

    trendxf.appendChild(trendxinput);
    document.body.appendChild(trendxf);
    trendxf.submit();

}




function deletemovie(id){
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

    xhr.open("POST", "/routes/movie/delete/"+ id);
    xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.send();
}

// function deletemovie(id){
//     let df = document.createElement("form");
//     df.setAttribute("method","POST");
//     df.setAttribute("action","/routes/movie/delete/"+id);
//
//
//     document.body.appendChild(df);
//     df.submit();
// }