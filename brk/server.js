// Li Xue
// 17-Jul-2021 19:01

var express = require('express');
var path = require('path')
var multer  = require('multer');
var app = express();
var bodyParser = require('body-parser');
var xue = require('ppt-png')
var Pdf2PngConverter = require('@hckrnews/pdf2png')
 
// create application/x-www-form-urlencoded encode 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(multer({ dest: '/tmp/'}).array('file_preach'));
 
app.use(express.static(path.join(__dirname, 'public')));
 
//app.get('/index.html', function (req, res) {
//   res.sendFile( __dirname + "/" + "index.html" );
//})
 
app.get('/Service_Program.html', function (req, res) {
   res.sendFile( __dirname + "/" + "Service_Program.html" );
})
app.post('/process_post', urlencodedParser, function (req, res) {
 
   // output in JSON 
   var response = {
       "song_title_main":req.body.song_title_main,
       "song_title_minor":req.body.song_title_minor,
       "lyrics_main":req.body.lyrics_main,
       "lyrics_minor":req.body.lyrics_minor,
       "preach_slides":req.files[0]
   };
   console.log(response);
   res.end(JSON.stringify(response));

   // start processing

    const converter = Pdf2PngConverter.create({
        file:  response.preach_slides.path,
        output: __dirname + '/' + 'slides/preach/'
    });
   async function firstFunction(){
       const result = converter.convert();
       return;
   }


      //const pythonProcess = spawn('bash', ["scripts/convertSlides.sh", response.preach_slides.path, __dirname + '/' + 'slides/preach/'])
   async function secondFunction(){
     // now wait for firstFunction to finish...
     await firstFunction();
     // then do something else:
   // generate markdown file for the whole service
     const pythonProcess2 = spawn('python',["scripts/autoProgram.py", response.song_title_main, response.song_title_minor, response.lyrics_main, response.lyrics_minor]);
	 console.log('xue')
   };
   secondFunction()

   // split preach slides into images
   //const pythonProcess = spawn('bash', ["scripts/convertSlides.sh", response.preach_slides.path, __dirname + '/' + 'slides/preach/'])

   // generate markdown file for the whole service
   //const pythonProcess2 = spawn('python',["scripts/autoProgram.py", response.song_title_main, response.song_title_minor, response.lyrics_main, response.lyrics_minor]);
})
 

var server = app.listen(8080,"127.0.0.1", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Visit address: http://%s:%s/Service_Program.html", host, port)
 
})

