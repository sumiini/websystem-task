var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var qs = require('querystring');
var cur_path = path.resolve('../fs');

var file_name="";
var file_content="";
var dir_name="";
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

                data.forEach(function(element) {
                    lsinfo+="<li>"+element;

                    var stat = fs.statSync(cur_path+"/"+element);

                    if(stat.isDirectory()){
                        lsinfo += "<button onclick='deletedir(this)'>deletedir</button><button onclick='renamereq()'>rename</button></li>";
                        console.log(element+"hi dir");
                        console.log(stat);


                    }
                    else if(stat.isFile()){
                        lsinfo += "<button onclick='deletefile(this)'>deletefile</button><button onclick='renamereq()'>rename</button></li>";
                        console.log(element+"hi file");
                        console.log(stat);


                    }


                });
                let html = tmp1.toString().replace('%', lsinfo);
                html = html.replace('?', file_name);
                html = html.replace('$', file_content);
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
            dir_name = post.dir_name;
            cur_path = path.join(cur_path,dir_name);

            fs.move(dir_name,cur_path,function(err,data){
                response.writeHead(302,{Location:`http://localhost:3000/{dir_name}`});
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
                response.writeHead(302,{Location:`http://localhost:3000/`});
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
                response.writeHead(302,{Location:`http://localhost:3000/`});
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
            var dir_name = post.dirname;

            fs.rmdir('dir_name',function(err){
                response.writeHead(302,{Location:`http://localhost:3000/`});
                response.end('success');
            });
        });

    }

    else if(pathname==='/rmFile'){

    }

    else if(pathname==='/rename'){

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
                response.writeHead(302,{Location:`http://localhost:3000/`});
                response.end('success');
            });
        });
    }

});

app.listen(3000);
