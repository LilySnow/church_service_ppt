// Li Xue
// 17-Jul-2021 19:01

var express = require('express');
var path = require('path');
var multer  = require('multer');
var app = express();
//var Pdf2PngConverter = require('@hckrnews/pdf2png')
const spawn = require("child_process").spawn;
 
//Parse incoming form data
var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.urlencoded({ extended: true }));

//
app.use(multer({ dest: '/tmp/'}).array('file_preach'));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/public/css", express.static('./public/css'));
app.use("/scripts", express.static('./scripts/'));
app.use("/js", express.static('./js/'));
app.use("/vendor/jquery", express.static('./vendor/jquery'));
 
// Load Service_Program.html
app.get('/Service_Program.html', function (req, res) {
   res.sendFile( __dirname + "/" + "Service_Program.html" );
   console.log("Service_Program.html loaded");
})
app.post('/process_post',  (req, res) => {
 
    // print form content 
    console.log(JSON.stringify(req.body));

    // generate markdown file for the whole service
    const pythonProcess = spawn('python',["scripts/main.py",JSON.stringify(req.body)]);

    // Listen to the stdout stream to read output from Python
    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python output: ${data}`);
    });

    // Listen to the stderr stream to read any errors from Python
    pythonProcess.stderr.on('data', (data) => {
        console.error(`Python stderr:\n${data}`);
    });

    // Listen to the exit event to know when the Python process has finished
    pythonProcess.on('exit', (code) => {
      console.log(`Python process exited with code ${code}`);
    });


    // Send a response to the client
    res.send('Form submitted successfully');

})


var server = app.listen(8080,"127.0.0.1", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Visit address: http://%s:%s/Service_Program.html", host, port)
 
})

