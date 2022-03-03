const http = require('http');
const fs = require('fs');
const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) =>{
        if (err) {
            res.writeHead(404);
            res.write('Eror: File Not Found');
        } else{
            res.write(data);
        }
        res.end();
    });
}

const server = http.createServer((req, res) =>{
    
    res.writeHead(200,{
        "Content-Type" : "text/html"
    });

    const url = req.url;

    if (url === "/" || url === "/home") {
        renderHTML('./home.html', res)
    } else if (url === "/about"){
        renderHTML('./about.html', res)
    } else if (url === "/login") {
        renderHTML ('./login.html', res)
    } else if (url === "/gambar") {
        renderHTML('./gambar.html', res)
    } else{
        renderHTML('./error.html', res)
    }

});
server.listen(3000);