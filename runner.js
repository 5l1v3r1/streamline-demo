function loadAndRun() {
  $.ajax({
    url: 'app.js',
    dataType: 'text',
    success: function(codeIn) {
      var codeOut = Streamline.transform(codeIn, {
        lines: 'preserve'
      });
      eval(codeOut);
    }
  });
}

$(loadAndRun);