var express = require ('express');
var uc = require('upper-case');
var app = express();
var path = require('path');
var router = express.Router();

const port = 3001;

app.listen(port, ()=>{
    console.log(`port running at ${port}`);
});

router.get('/', (req, res)=> {
    
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

router.get('/gallery.html', (req, res)=> {
    res.sendFile(path.join(__dirname + '/html/gallery.html'));
});

router.get('/email.html', (req, res)=> {
    res.sendFile(path.join(__dirname + '/html/email.html'));
});

app.use('/', router);
app.use(express.static(__dirname + '/images'));