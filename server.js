// Li Xue
// 17-Jul-2021 19:01
// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

const express = require('express');
const path = require('path');
const multer  = require('multer');
const bodyParser = require('body-parser');
//const Pdf2PngConverter = require('@hckrnews/pdf2png')
//import Converter from '@hckrnews/pdf2png';
const spawn = require("child_process").spawn;
const app = express();
 
// create application/x-www-form-urlencoded encode 
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(multer({ dest: '/tmp/'}).array('file_preach'));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/public/css", express.static('./public/css'));
app.use("/scripts", express.static('./scripts/'));
app.use("/js", express.static('./js/'));
app.use("/vendor/jquery", express.static('./vendor/jquery'));

// Body Parse middleware
app.use(express.json());
//app.use(express.urlencoded({extended: false}));  

// load the website
app.get('/Service_Program.html',  (req, res) => {
   res.sendFile( __dirname + "/" + "Service_Program.html" );
   console.log("Service_Program.html loaded");
})


// parse the user's input
app.post('/process_post', urlencodedParser, (req, res) => {
 
   // form content into JSON 
   var response = {
       "song_title_main":req.body.song1_title_main,
       "song_title_minor":req.body.song1_title_minor,
       "lyrics_main":req.body.song1_lyrics_main,
       "lyrics_minor":req.body.song1_lyrics_minor,
       "preach_slides":req.files[0]
   };
   console.log(response);
   //res.send(response);
    res.send("Slides can be viewed at: http://0.0.0.0:8000/")
    
   //res.end(JSON.stringify(response));

   // start processing
   async function secondFunction(){
     // now wait for firstFunction to finish...
     //await firstFunction();
     // then do something else:
   // generate markdown file for the whole service
     const py = spawn('python',["scripts/song2md.py",JSON.stringify(response)]);
	py.stdout.on('data', (data) => {
        //console.log(`stdout: ${data}`);
        console.log("Slides can be viewed at: http://0.0.0.0:8000/")
	});

    py.stderr.on('data', (data) => {
        console.error(`child stderr:\n${data}`);
    });
	py.on('close', (code) => {
	console.log(`child process close all stdio with code ${code}`);
	});

	py.on('exit', (code) => {
	console.log(`child process exited with code ${code}`);
	});

   };
   secondFunction();

   // split preach slides into images
   //const pythonProcess = spawn('bash', ["scripts/convertSlides.sh", response.preach_slides.path, __dirname + '/' + 'slides/preach/'])

   // generate markdown file for the whole service
   //const pythonProcess2 = spawn('python',["scripts/autoProgram.py", response.song_title_main, response.song_title_minor, response.lyrics_main, response.lyrics_minor]);
})

const PORT = 8080;
var server = app.listen(PORT, () => {
 
  //var host = server.address().address;
  var port = server.address().port;
 
  console.log("Visit address: http://localhost:%s/Service_Program.html",  port);
 
})

