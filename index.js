
var ejs = require('ejs');
var express = require('express');

var app = express();

var allVideos = [
  { id: 'v1eVWnjUd-0', title: 'Epic RC car drive' },
  { id: 'glA5Rcueiqc', title: 'Life of Steve' },
  { id: 'QN529fyiP4Y', title: 'Pool dilemma' },
  { id: 'b4QAy1nQYvw', title: 'Stopwatch' },
  { id: 'lX-xc-do03E', title: '3DJakob\'s airsoft game' },
  { id: 'wnO6IX-M84w', title: 'Real life Tower Defence before and after' },
  { id: '-W_jD1sV8rg', title: 'Real life Tower Defence' },
  { id: 'x6MJ6wseP24', title: 'Don\'t mess with the admin' },
  { id: 'uJOTVfPsw2s', title: 'Courage overflow' },
  { id: 'HaHPjS13qPg', title: 'The last candy piece' },
  { id: 'PEY7vQftbwU', title: 'Left 4 dead just got real' },
  { id: 'rxR_ghPOtWo', title: 'Operation cold storm' },
  { id: '8N3ZTw4gr6Q', title: 'Scooter turbo boost VFX' },
  { id: 'nKr0Mtq-cvU', title: 'Vegetable warfare' },
  { id: 'H1j1vMMrX5Y', title: 'Aimbot' },
  { id: 'NWeDSYPEVAQ', title: 'Real Life First Person Shooter' },
  { id: '9tn6YsrcYyI', title: 'Real life FPS training' },
  { id: '4gtqRomESG4', title: 'The force IRL' },
  { id: 'mNpEcVMPtK4', title: 'Real life wand' },
  { id: 'oZfORU9EY0c', title: 'Slowmotion ballon smashing' },
  { id: 'AtR0BpDC3wc', title: 'Infiltrate - Short action movie' },
  { id: 'T4_rrkqHHt8', title: 'The snatch' },
  { id: 'MlF3ChfWQi0', title: 'Knife throw' },
  { id: '4Z6YBL0YCX8', title: 'Unnatural powers! VFX' },
  { id: '2YdZOZ0FbXY', title: 'I hate water!' },
  { id: 'rZA54KJCisA', title: 'Epic gun fight' },
  { id: 'Pefc7sCBkCo', title: 'Real life Invisible cloak!' },
  { id: 'u4I7Moqsp8E', title: 'NXT LEGO alarm clock' },
  { id: 'uoF_uZ9NWYg', title: 'Huge LEGO Skyscraper time lapse' },
  { id: 'FW4iCJEml3w', title: 'LEGO Plane Crash' },
  { id: 'FMFC62tt1v4', title: 'Night Spy' },
  { id: 'H2CTzkQYJWE', title: 'Real life fps capture the flag' }
];

app.set('views', __dirname + '/views');
app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('page_videos.ejs', {
    page: 'videos',
    videos: allVideos
  });
});

app.get('/video/:id', function (req, res, next) {

  var arr = allVideos.filter(function (video) {
    return (video.id === req.params.id);
  });

  if (arr.length === 0) {
    return next();
  }

  res.render('page_video.ejs', {
    page: 'video',
    video: arr[0]
  });
});

app.get('/faq', function (req, res) {
  res.render('page_faq.ejs', {
    page: 'faq'
  });
});

app.listen(4200, function () {
  console.log('http://localhost:4200');
});
