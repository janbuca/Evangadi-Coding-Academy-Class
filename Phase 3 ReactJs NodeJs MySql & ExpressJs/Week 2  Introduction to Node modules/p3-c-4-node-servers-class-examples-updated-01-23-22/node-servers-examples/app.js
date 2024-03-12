// // 1: Creating basic Web Server
// const http = require("http");
// // Create the Server Object
// const server = http.createServer();
// // Call the listen method to tell the server which port to listen to
// server.listen(7777, function () {
//   console.log("Listening to port 7777");
// });
// // That is it!! You have now created a server using Node's http Module

// // 2: Serving simple message using the http module by handling request and response
// const http = require("http");
// // Create the Server Object
// const server = http.createServer(function (req, res) {
//   // Let's send an object that we created by querying the data from the Database. Don't worry about the querying part for now. Just understand that this is what we get from the DB (Lets use the same json object we used to create Apple's iPhone page)
//   var data = "Some data to be sent"; // We will prepare the actual data object later after we learn about APIs

//   // Now let's send this data to the browser when request is sent to port 7766

//   // res.setHeader("Access-Control-Allow-Origin", "*");
//   res.writeHead(200, { "Content-Type": "text/html" });
//   // res.writeHead(200);
//   res.end(data);
// });

// // Call the listen method to tell the server which port to listen to
// server.listen(7766, function () {
//   console.log("Listening to port 7766");
// });

// // 3. Serving static page with http module
// const http = require("http");
// const url = require("url");
// const fs = require("fs");
// // Install mime-types to get access called lookup
// const mimetypelookup = require("mime-types").lookup;

// // Create the Server Object
// const server = http.createServer(function (req, res) {
//   // console.log(req);
//   const parsedUrl = url.parse(req.url, true);
//   // console.log(parsedUrl);

//   // // Requested file name
//   let filePath = parsedUrl.path;
//   // console.log(filePath);
//   if (filePath == "/") {
//     filePath = "/index.html";
//   }
//   var requestedFile = __dirname + "/public/" + filePath;
//   // console.log(requestedFile);
//   const readFile = fs.readFile(requestedFile, function (err, content) {
//     if (err) {
//       res.writeHead(404);
//       res.end();
//     } else {
//       let mime = mimetypelookup(filePath);
//       res.writeHead(200, { "content-type": mime });
//       res.end(content);
//     }
//   });
// });

// // Call the listen method to tell the server which port to listen to
// server.listen(7777, function () {
//   console.log("Listening to port 7777");
// });

// // 4: Serving simple message with Express
// const express = require("express");

// // Lets now create our Server Object
// // We used createServer() when we used http module
// // That is what the main express() method does for us
// const app = express();

// // The app object now has access to all of the methods defined in the express module
// // One of the methods is the listen() method
// // This is what makes it listen to the port

// app.listen(3000, (err) => {
//   if (err) {
//     console.log("Error found" + err);
//   }
//   console.log("Listening to port 3000");
// });

// // The next thing we need to do is set up routes
// // Home page route
// // Returning "Hello Express"

// app.get("/", (req, res) => {
//   console.log(req.url);
//   res.send("<h1>Hello Express!!</h1>");
//   // It determines and includes the content header for us
//   // It also includes all the other headers
//   // Like status code, etag etc
//   // We had to do this manually when we used http
// });

// // 5: Serving static page using Express
// const express = require("express");

// // Lets now create our Server Object
// const app = express();

// app.listen(3000, (err) => {
//   if (err) {
//     console.log("Error found" + err);
//   }
//   console.log("Listening to port 3000");
// });

// // All we have to do in here is use the middleware function and provide the location where all the static files are located. Express searches the file inside the provided directory and serves the requested file

// app.use(express.static("apple"));
