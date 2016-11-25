Daplie is Taking Back the Internet!
--------------

[![](https://daplie.github.com/igg/images/ad-developer-rpi-white-890x275.jpg?v2)](https://daplie.com/preorder/)

Stop serving the empire and join the rebel alliance!

* [Invest in Daplie on Wefunder](https://daplie.com/invest/)
* [Pre-order Cloud](https://daplie.com/preorder/), The World's First Home Server for Everyone

jailbait
========

Use `jailbait` to protect your browser users from Self-XSS phishing attacks by
displaying a clear warning message in the console (as seen in the console on Facebook, etc).

```
Stop!

This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or “hack” someone’s account, it is a scam and will give them access to your account.
```

## Usage

```html
<script src="jailbait.js"></script>
```

## Manual

Since most of the fancy ways of detecting whether or not the browser console has been opened no longer work,
you could just add this script directly instead of including this module as a dependency.

```js
console.log("%cStop!", "font: 2em sans-serif; color: yellow; background-color: red;");
console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or “hack” someone’s account, it is a scam and will give them access to your account.", "font: 1.5em sans-serif; color: grey;");
```
