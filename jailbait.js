(function () {
  'use strict';

  // After much trial, it seems that the best way to show this message
  // is simply to print it, regardless of whether or not the console is open.
  //
  // Another solution would be to listen to the 'resize' event and see if the
  // window became a different size instantly (as opposed to gradually, like a normal drag)
  //
  // Other attempts:
  // http://stackoverflow.com/a/21795086/151312
  // https://jsfiddle.net/jLinux/4upy0oga/5/
  //
  console.log("%cStop!", "font: 2em sans-serif; color: yellow; background-color: red;");
  console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or “hack” someone’s account, it is a scam and will give them access to your account.", "font: 1.5em sans-serif; color: grey;");
})();
