// This is JS helper with useful functions

// inject jQuery to DOM
function jQuerify() {
  if (typeof jQuery == 'undefined') {
    var s = document.createElement('script');
    s.setAttribute('src','http://code.jquery.com/jquery.js');
    document.getElementsByTagName('body')[0].appendChild(s);
  }
}
