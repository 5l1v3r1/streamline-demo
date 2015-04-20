# Overview

This is a basic demonstration of [Streamline.js](https://github.com/Sage/streamlinejs/tree/e10906d6cd1331cff9963ce9d18f3c6bd3de59bb), a framework which makes it possible to write asynchronous code as if it were synchronous. It implements an asynchronous HTML version of the `prompt()` and `alert()` JavaScript functions.

# Use in Chrome

Since this uses Ajax, it will not work locally in Chrome (i.e. with a file:// url). You will have to put it on a server.

# Sources

 * **index.html** is the homepage of the demo
 * **app.js** is the synchronous application code
 * **jquery-2.1.3.min.js** is the jQuery API
 * **transform-all.js** is the [Streamline.js API](https://github.com/Sage/streamlinejs/blob/e10906d6cd1331cff9963ce9d18f3c6bd3de59bb/lib/callbacks/transform-all.js).
 * **runner.js** loads *app.js*, runs it through Streamline.js and executes it
 * **prompt_alert.js** implements the HTML prompt and alert interface
