
$(function () {

  var $article = $('article');

  $('a').each(function () {

    var $a = $(this);
    var href = $a.attr('href');

    var m = href.match(/watch\?v\=([A-Za-z0-9]+)/);

    if(m) {
      $a.on('click', function (e) {
        e.preventDefault();
        $('.nav li.active').removeClass('active');
        $a.parent('li').addClass('active');
        $article.html(
          '<h2>' + $a.text() + '</h2>' +
          '<iframe width="700" height="394" src="http://www.youtube.com/embed/' + m[1] + '" frameborder="0" allowfullscreen></iframe>'
        );
      });
    }

  });

});
