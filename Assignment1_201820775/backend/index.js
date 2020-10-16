var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var qs = require('querystring');
var cur_path = path.resolve('../fs');

var de;

var file_name="";
var file_content="";
let state=0;
var old_name="";

var app= http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    var pathname = url.parse(_url,true).pathname;

    if(pathname==='/')
    {

        fs.readFile("../frontend/template.html",function(err,tmp1){
            fs.readdir(cur_path,function(err,data){
                lsinfo="";
                lsinfo+="<table border='1' ><th colspan='3' width='50%' >Name</th><th width='80px' style='padding-right: 40px' >file size</th><th>Modificationdate</th>";
                lsinfo+="<tr bgcolor='gray'><td colspan='5'><p onclick='movedir(this);' value="+".."+">"+".."+"</p></td></tr>"

                data.forEach(function(element) {


                    var stat = fs.statSync(cur_path+"/"+element);
                    var time = stat.mtime.getFullYear() + "-"+Number(stat.mtime.getMonth()+1) + "-"+stat.mtime.getDate();
                    var size = stat.size.toString();

                    if(stat.isDirectory()){
                        lsinfo += "<tr bgcolor='gray'><td width='50%' onclick='movedir(this);'value="+element+">"+element+"</td><td><button onclick='deletedir(this);'value="+element+">";
                        lsinfo+="delete"+"</button></td>";
                        lsinfo+="<td><button style='margin-right: 50px' onclick='renamereq(this);'value="+element+">"+'rename'+"</button></td><td width='70px' >"+size+"B"+"</td><td>"+time+"</td></tr>";

                    }
                    else if(stat.isFile()){
                        lsinfo += "<tr bgcolor='#ffc0cb'><td  width='50%' onclick='readfile(this);'value="+element+" description=>"+element+"</td><td><button onclick='deletefile(this);' value="+element+">";

                        lsinfo+="delete"+"</button></td>";
                        lsinfo+="<td><button style='margin-right: 50px' onclick='renamereq(this);'value="+element+">"+'rename'+"</button></td><td width='70px'>"+size+"B"+"</td><td>"+time+"</td></tr>";

                    }


                });
                lsinfo+="</table>";
                let html = tmp1.toString().replace('%', lsinfo);
                html=html.replace('?',file_name);
                html=html.replace('$',file_content);
                html = html.replace('@',old_name);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(html);
            });


        });

    }

    else if(pathname==='/editfile'){

        var body = '';
        request.on('data',function(data){
            body = body + data;
        });

        request.on('end',function(){
            var post = qs.parse(body);
            var editname = post.editname;
            var editcontent = post.editcontent;

            var editpath = path.join(cur_path,editname);

            fs.readFile(cur_path,'utf8',function(err){
                fs.writeFile(editpath,editcontent,'utf8',function (){
                    response.writeHead(302,{Location:`/`});
                    response.end('success');
                    console.log(post);
                })

            });



        });

    }

    else if(pathname==='/cd'){
        var body = '';
        request.on('data',function(data){
            body = body + data;
        });

        request.on('end',function(){
            var post = qs.parse(body);
            var move_dir =post.move_dir;

            cur_path = path.resolve(cur_path,move_dir);
            fs.readFile(cur_path,'utf8',function(err,data){
                response.writeHead(302,{Location:`/`});
                response.end('success');
            });


        });
    }

    else if(pathname === '/readfile'){
        var body ='';
        request.on('data',function(data){
            body = body + data;
        });

        request.on('end',function(){
            var post = qs.parse(body);
            file_name = post.file_name;
            var description = file_content;

            var file_path = path.join(cur_path,file_name);

            fs.readFile(file_path,'utf8',function(err,data){
                file_content=data;
                response.writeHead(302,{Location:`/`});
                response.end('success');
                console.log(file_name);

            });


        });
    }

    else if(pathname==='/mkdir'){
        var body = '';
        request.on('data',function(data){
            body = body + data;
        });

        request.on('end',function(){
            var post = qs.parse(body);
            var dir_name = post.dirname;
            var file_path = path.join(cur_path,dir_name);

            fs.mkdir(file_path,{recursive:true},function(err){
                response.writeHead(302,{Location:`/`});
                response.end('success');
            });

        });
    }


    else if(pathname==='/rmdir'){
        var body='';
        request.on('data',function(data){
            body = body + data;

        });
        request.on('end',function(){
            var post = qs.parse(body);
            var del_dirname =post.del_dirname;
            var dpath = path.join(cur_path,del_dirname);

            fs.rmdir(dpath+"/",function (err){

                response.writeHead(302,{Location:"http://localhost:3000/"});
                response.end('success');
                console.log(dpath);

            });

        });


    }

    else if(pathname==='/rmFile'){
        var body='';
        request.on('data',function(data){
            body = body + data;

        });
        request.on('end',function(){
            var post = qs.parse(body);
            var del_filename =post.del_filename;
            var rmfilepath = path.join(cur_path,del_filename);
            fs.unlink(rmfilepath,function (err){
                response.writeHead(302,{Location:`/`});
                response.end('success');

            });

        });

    }

    else if(pathname==='/rename'){

        var body='';
        request.on('data',function(data){
            body=body+data;
        });

        request.on('end',function(){

            var post = qs.parse(body);
            old_name = post.old_name;
            var new_name = post.new_name;


            fs.rename(cur_path+"/"+old_name,cur_path+"/"+new_name,function(err){
                    response.writeHead(302,{Location:`/`});
                    response.end('success');
                    console.log(post);


            });
        });

    }

    else if(pathname==='/writefile'){
        var body='';
        request.on('data',function(data){
            body=body+data;
        });
        request.on('end',function(){
            var post = qs.parse(body);
            var title = post.finame;
            var description = post.description;
            var file_path = path.join(cur_path,title);
            de= description;

            fs.writeFile(file_path,description,function(err,data){
                response.writeHead(302,{Location:`/`});
                response.end('success');
                de= description;

            });
        });
    }


});

app.listen(3000);