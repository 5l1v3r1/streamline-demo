while (true) {
  var expr = promptAsync(_, 'Type a mathematical expression (e.g. 3+2)');
  try {
    alertAsync('<strong>The answer is ' + eval(expr) + '</strong>.');
  } catch (e) {
    alertAsync("<strong>Sorry, I didn't catch that.</strong>");
  }
}