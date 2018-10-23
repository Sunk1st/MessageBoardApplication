//Install express server
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const http = require('http')
const Post = require('./backend/models/post')
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

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/webscraping-app'));

// //Index Route
// app.get('/*', function(req,res) {
//   res.sendFile(path.join(__dirname+'/dist/webscraping-app/index.html'));
// });

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "post added",
      postId: createdPost._id
    });
  })
})

app.put("/api/posts/:id", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  Post.updateOne({_id: req.params.id}, post).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Update Successful"
    })
  })
});

app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Posts Fetched Successfully',
      posts: documents
    })
  })
})

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    res.status(200).json({ message: "Post Deleted"});
  })
})

app.set('port', port)
const server = http.createServer(app)
server.listen(port) // Start Server
