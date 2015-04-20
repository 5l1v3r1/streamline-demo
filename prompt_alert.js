var asyncPromptHandler = null;
var ENTER_KEY_CODE = 13;

function PromptHandler() {
  this.$okay = $('#okay');
  this.$cancel = $('#cancel');
  this.$input = $('#response');
  this.$backlog = $('#backlog');
  this.$all = $('#okay, #cancel, #message');
  this.currentCallback = null;
  
  this._reset();
  this._setupCallbacks();
}

PromptHandler.prototype.appendBacklog = function(message) {
  var element = $('<p>' + message + '</p>');
  this.$backlog.append(element);
  this.$backlog.scrollTop(this.$backlog[0].scrollHeight);
};

PromptHandler.prototype.prompt = function(cb, message, defaultText) {
  if (this.currentCallback) {
    throw new Error('prompt already waiting');
  }
  
  this.appendBacklog(message);
  
  this.$all.prop('disabled', false);
  this.currentCallback = cb;
  if ('undefined' === typeof defaultText) {
    this.$input.val('');
  } else {
    this.$input.val(defaultText);
  }
  this.$input.select();
};

PromptHandler.prototype._cancelClicked = function() {
  if (!this.currentCallback) {
    return;
  }
  
  var cb = this.currentCallback;
  this._reset();
  cb(null, null);
};

PromptHandler.prototype._okayClicked = function() {
  if (!this.currentCallback) {
    return;
  }
  
  var value = this.$input.val();
  var cb = this.currentCallback;
  this._reset();
  cb(null, value);
};

PromptHandler.prototype._reset = function() {
  this.$all.prop('disabled', true);
  this.$input.val('');
  this.currentCallback = null;
};

PromptHandler.prototype._setupCallbacks = function() {
  this.$cancel.click(this._cancelClicked.bind(this));
  this.$okay.click(this._okayClicked.bind(this));
  this.$input.keypress(function (e) {
    if (e.which == ENTER_KEY_CODE) {
      this._okayClicked();
    }
  }.bind(this));
};

function alertAsync(message) {
  asyncPromptHandler.appendBacklog(message);
}

function initializePromptHandler() {
  asyncPromptHandler = new PromptHandler();
}

function promptAsync(callback, message, defaultText) {
  asyncPromptHandler.prompt(callback, message, defaultText);
}

$(initializePromptHandler);
