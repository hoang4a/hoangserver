var http = require('http')

var server = http.createServer((req, res) => {
    if (req.url == '/' || req.url == '/index') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Home page</h1>');
        res.write('<a href= "/animal"> Animal page </a>');
        res.write('</body>');
        res.write('</html>');
    } else if (req.url == '/animal') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Animal page</h1>');
        res.write('<a href= "/"> Home page </a>');
        res.write('</body>');
        res.write('</html>');
    } else {
        res.write(' Not found');
    }


    res.end();
})
var PORT = process.env.PORT || 3000;
server.listen(PORT);
console.debug('Server is running on port: ' + PORT);