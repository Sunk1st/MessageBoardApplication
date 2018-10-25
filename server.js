//Install express server
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const http = require('http')
const postsRoutes = require('./backend/routes/posts')

//Port Number
const port = process.env.port || 8080

mongoose.connect("mongodb+srv://Stephen:IC2FR9x60QugWZSY@cluster0-uohh3.mongodb.net/stephenhackprojects?retryWrites=true", { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(() => {
    console.log('connection failed')
  })

app.use(cors())
app.use(bodyParser.json()) //Body Parser Middleware
app.use("/images", express.static(path.join("backend/images")))
app.use("/api/posts", postsRoutes);

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/webscraping-app'));

// //Index Route
// app.get('/*', function(req,res) {
//   res.sendFile(path.join(__dirname+'/dist/webscraping-app/index.html'));
// });

app.set('port', port)
const server = http.createServer(app)
server.listen(port) // Start Server
