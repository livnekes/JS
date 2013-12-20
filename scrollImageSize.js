(function(){
  if(window.addEventListener)
    document.addEventListener('DOMMouseScroll',moveObject,false);
  document.onmousewheel=moveObject;
  unloadScrollBars()

  function moveObject(event) {
    var delta=0;
    var img=$('img')[0];
    if(!event)
      event=window.event;
    if (event.wheelDelta > 0) {
      img.width*=1.1;
      img.height*=1.1;
    }
    else {
      img.width*=0.9;
      img.height*=0.9;
    }
  }

  function reloadScrollBars() {
      document.documentElement.style.overflow = 'auto';  // firefox, chrome
      document.body.scroll = "yes"; // ie only
  }

  function unloadScrollBars() {
      document.documentElement.style.overflow = 'hidden';  // firefox, chrome
      document.body.scroll = "no"; // ie only
  }
})();

