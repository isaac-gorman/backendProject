// Importing Express. We are telling our app that we require Express for this page
const express = require("express");

// Creating a new server.
// This is the same as "const app = express()"
// In Node.js this is the same as .createServer
const server = express();
const visitorRoutes = require("./routes/visitors-routes.js");
const adminRoutes = require("./routes/admin-routes.js");

// In conclusion we are telling the server to use its built-in Express Middleware that will enable me to read the data I send back and forth to the server.
// This Express Middleware is telling our server to expect JSON and it will only parse JSON request.
// This is very important especially when we start passing data to our database.
server.use(express.json());
server.use("/api/visitors", visitorRoutes);
server.use("/api/admin", adminRoutes);

// Intialzing a ".get()" call to send a message to our browser window.
// Breakdown: '/' is where we defined the route to the URL so that everytime I naviagte to the localhost we are firing the get call.
// Q: What are the two arguments (req, res)?
// - Route handlers pass two arguments that are objects when the are called. The request (req) and the response (res). We use "req" object to send info from our client to our server then we can use the "res" object to send info from server to client.
// The utalizatin of the request and response object with the .get() call will become crucial when we start adding user and dogs to our app.
// In the mean time I will use them to pass basic strings to and from the server to the client.
server.get("/", (req, res) => {
  res.send("Hello from the server?");
});
// Above we are actually just passing a string to the client using one of the many built in Express.js methods that streamlines the use of our request and respone objectsd... "send()" res.send() to send our HTTP response. As of now I just hardcoded a response but in the future this will be data that I am pulling form the server.
// In a nutshell that is the logic of our routes: "HTTP request and responses"

// Define our port variable.
// Bellow we are defining two ports.
// - "process.env.PORT" is there for when we deploy our server to a hosting service. The "process.env.PORT" enables the hosting service to configure the server's port based on avialablity. And in the case that we are not deployed, our port will default to whatever we define in our .env file or the value provided in or statement ... for my example its port 5000.
const port = process.env.PORT || 5000;

// Instruct the server to listen for connections on that port
server.listen(port, () => console.log(`\n Running on port ${port}\n`));

// Soon we will be able to wire up the API.
// But before that we need to define what data we want to store.
// Next we will discuss Data Modeling and how we want the data from the project to look.
