var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles ={
   'article-one' :{
     title: 'Article one | Robin ',
     heading: 'Article one',
     date: 'aug 5 2017',
     content: `
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus id risus id hendrerit. Cras in ante sagittis, sollicitudin sapien et, placerat elit. Nunc consectetur tortor lorem, sit amet aliquam quam convallis ut. Praesent sit amet diam vestibulum, pellentesque dui et, lacinia nibh. Curabitur molestie, ligula ut faucibus aliquet, orci odio luctus mauris, ac iaculis lectus risus at eros. Curabitur nec porttitor diam, eget pretium metus. Nullam consequat, nibh in aliquam ornare, velit odio fermentum lectus, at mattis felis lorem sit amet arcu.
    </p>
    <p>
    Donec nibh metus, auctor nec aliquet sed, tincidunt at diam. Pellentesque eu urna eget nisi ullamcorper pulvinar nec eu erat. Aliquam vel luctus quam, ut rhoncus neque. Vivamus ac maximus ligula. Nulla vehicula purus ut lorem laoreet, congue sagittis sem lobortis. Donec id dapibus augue, at ultrices ligula. Fusce porta ipsum vel fringilla ornare. Praesent condimentum tellus et aliquam accumsan. Vivamus mollis erat a dolor fermentum rhoncus. Suspendisse lobortis pellentesque felis in pretium. Ut auctor laoreet purus, quis convallis ipsum 
    </p>
    <p>
    Aliquam nec suscipit dui, non tempor nulla. Aliquam neque justo, mattis et velit nec, imperdiet hendrerit dui. Nunc lacus sapien, aliquet fermentum felis vitae, rutrum bibendum dui. Suspendisse sollicitudin nulla porta ultricies pulvinar. Curabitur ut tincidunt quam. Proin faucibus tristique metus, vel pellentesque lorem auctor nec. Ut sed vehicula eros. Aliquam erat volutpat. Nulla nec dignissim diam, at maximus augue.
    </p>
     `
    },
   'article-two' :{
     title: 'Article two | Robin ',
     heading: 'Article two',
     date: 'aug 5 2017',
     content: `
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus id risus id hendrerit. Cras in ante sagittis, sollicitudin sapien et, placerat elit. Nunc consectetur tortor lorem, sit amet aliquam quam convallis ut. Praesent sit amet diam vestibulum, pellentesque dui et, lacinia nibh. Curabitur molestie, ligula ut faucibus aliquet, orci odio luctus mauris, ac iaculis lectus risus at eros. Curabitur nec porttitor diam, eget pretium metus. Nullam consequat, nibh in aliquam ornare, velit odio fermentum lectus, at mattis felis lorem sit amet arcu.
    </p>
    <p>
    Donec nibh metus, auctor nec aliquet sed, tincidunt at diam. Pellentesque eu urna eget nisi ullamcorper pulvinar nec eu erat. Aliquam vel luctus quam, ut rhoncus neque. Vivamus ac maximus ligula. Nulla vehicula purus ut lorem laoreet, congue sagittis sem lobortis. Donec id dapibus augue, at ultrices ligula. Fusce porta ipsum vel fringilla ornare. Praesent condimentum tellus et aliquam accumsan. Vivamus mollis erat a dolor fermentum rhoncus. Suspendisse lobortis pellentesque felis in pretium. Ut auctor laoreet purus, quis convallis ipsum 
    </p>
    <p>
    Aliquam nec suscipit dui, non tempor nulla. Aliquam neque justo, mattis et velit nec, imperdiet hendrerit dui. Nunc lacus sapien, aliquet fermentum felis vitae, rutrum bibendum dui. Suspendisse sollicitudin nulla porta ultricies pulvinar. Curabitur ut tincidunt quam. Proin faucibus tristique metus, vel pellentesque lorem auctor nec. Ut sed vehicula eros. Aliquam erat volutpat. Nulla nec dignissim diam, at maximus augue.
    </p>
     `
   },
   'article-three' :{
     title: 'Article three | Robin ',
     heading: 'Article three',
     date: 'aug 5 2017',
     content: `
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus id risus id hendrerit. Cras in ante sagittis, sollicitudin sapien et, placerat elit. Nunc consectetur tortor lorem, sit amet aliquam quam convallis ut. Praesent sit amet diam vestibulum, pellentesque dui et, lacinia nibh. Curabitur molestie, ligula ut faucibus aliquet, orci odio luctus mauris, ac iaculis lectus risus at eros. Curabitur nec porttitor diam, eget pretium metus. Nullam consequat, nibh in aliquam ornare, velit odio fermentum lectus, at mattis felis lorem sit amet arcu.
    </p>
    <p>
    Donec nibh metus, auctor nec aliquet sed, tincidunt at diam. Pellentesque eu urna eget nisi ullamcorper pulvinar nec eu erat. Aliquam vel luctus quam, ut rhoncus neque. Vivamus ac maximus ligula. Nulla vehicula purus ut lorem laoreet, congue sagittis sem lobortis. Donec id dapibus augue, at ultrices ligula. Fusce porta ipsum vel fringilla ornare. Praesent condimentum tellus et aliquam accumsan. Vivamus mollis erat a dolor fermentum rhoncus. Suspendisse lobortis pellentesque felis in pretium. Ut auctor laoreet purus, quis convallis ipsum 
    </p>
    <p>
    Aliquam nec suscipit dui, non tempor nulla. Aliquam neque justo, mattis et velit nec, imperdiet hendrerit dui. Nunc lacus sapien, aliquet fermentum felis vitae, rutrum bibendum dui. Suspendisse sollicitudin nulla porta ultricies pulvinar. Curabitur ut tincidunt quam. Proin faucibus tristique metus, vel pellentesque lorem auctor nec. Ut sed vehicula eros. Aliquam erat volutpat. Nulla nec dignissim diam, at maximus augue.
    </p>
     `
   }
}

function createTemplate(data){
  var title = data.title;
  var heading =data.heading;
  var date= data.heading;
  var content= data.content;
  var htmltemplate= `
  <html>
    <head>
      <title>
      ${title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class="container">
          <div>
            <a href="/"> Home </a>
          </div>
        <hr/>
        <h3>
        ${heading}
        </h3>
        <div>
          ${date}
        </div>
        <div>
        ${content}
        </div>
      </div>
    </body>
  </html>
  `
  return htmltemplate;
}

app.get('/:articleName', function(req,res) {
  var articleName= req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
