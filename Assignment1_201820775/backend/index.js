var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var qs = require('querystring');
var cur_path = path.resolve('../fs');

var file_name="";
var file_content="";
let state=0;

var app= http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    var pathname = url.parse(_url,true).pathname;

    if(pathname==='/')
    {

        fs.readFile("../frontend/template.html",function(err,tmp1){
            fs.readdir(cur_path,function(err,data){
                lsinfo="";
                lsinfo+="<td><p onclick='movedir(this);' value="+".."+">"+".."+"</p></td>"

                data.forEach(function(element) {


                    var stat = fs.statSync(cur_path+"/"+element);
                    var time = stat.ctime.getFullYear() + "/"+stat.ctime.getMonth() + "/"+stat.ctime.getDate();
                    var size = stat.size.toString();

                    if(stat.isDirectory()){
                        lsinfo += "<table><td onclick='movedir(this);'value="+element+">"+element+"</td><td><button onclick='deletedir(this);'value="+element+">";
                        lsinfo+="deletefile"+"</button><button onclick='renamereq(this);'value="+element+">"+'rename'+"</button>"+'__'+size+'__'+time+"</td></table>";



                    }
                    else if(stat.isFile()){
                        lsinfo += "<table><td onclick='editf(this);'value="+element+">"+element+"</td><td><button onclick='deletefile(this);' value="+element+">";

                        lsinfo+="deletefile"+"</button><button onclick='renamereq(this);'value="+element+">"+'rename'+"</button>"+'__'+size+'__'+time+"</td></table>";


                    }


                });
                let html = tmp1.toString().replace('%', lsinfo);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(html);
            });


        });

    }

    else if(pathname==='/editfile'){

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
            console.log(file_name);
            var file_path = path.join(cur_path,file_name);

            fs.readFile(file_path,'utf8',function(err,data){
                console.log(file_path);
                file_content=data;
                response.writeHead(302,{Location:`/`});
                response.end('success');
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
            var rmdirpath = path.join(cur_path,del_dirname);

            fs.rmdir(rmdirpath,function (err){

                response.writeHead(302,{Location:"http://localhost:3000/"});
                response.end('success');



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
                console.log(post);

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
            var old_name = post.old_name;
            var new_name = post.new_name;
            console.log(post);
            fs.rename(old_name,new_name,function(err){
                response.writeHead(302,{Location:`/`});
                response.end('success');

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
            fs.writeFile(file_path,description,function(err,data){
                response.writeHead(302,{Location:`/`});
                response.end('success');
            });
        });
    }

});

app.listen(3000);
