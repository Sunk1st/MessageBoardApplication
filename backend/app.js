const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const Post = require('./models/post')

app.use(cors()) //Cross Orgin
app.use(bodyParser.json()) //Body Parser Middleware

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post)
  res.status(201).json({
    message: "post added"
  });
})

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'adsadsa',
      title: 'First server post',
      content: 'First Content'
    },
    {
      id: 'adfdfdfds',
      title: 'second server post',
      content: 'Second Content'
    },
  ];
  res.status(200).json({
    message: 'Posts Fetched Successfully',
    posts: posts
  })
})

module.export = app
