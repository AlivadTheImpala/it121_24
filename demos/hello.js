// // console.log("Hello, World!");
// //start demo1
// let http = require("node:http");
// listener = function (request, response) {
//   // Send the HTTP header
//   // HTTP Status: 200 : OK
//   // Content Type: text/html
//   response.writeHead(200, { "Content-Type": "text/html" });

//   // Send the response body as "Hello World"
//   response.end('<h2 style="text-align: center;">Hello World</h2>');
// };

// server = http.createServer(listener);
// server.listen(3000);

// // Console will print the message

// console.log("Server running at http://127.0.0.1:3000/");
// //end demo1

// //start demo2
// const args = process.argv; //process.argv returns an array of the process that initiated the code

// console.log(args);

// const firstName = args[2];
// const lastName = args[3];

// console.log("Hello,", firstName, lastName);
// //end demo 2

//start demo3
//imports the Node.js readline module to the readline variable.
const readline = require("readline").createInterface({
  input: process.stdin, //creates an input that will take in information
  output: process.stdout, //allows for the question method to display the query Whats your name? to the terminal and waits for input.
});

readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
});
//end demo 3
