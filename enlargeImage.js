function enlargeImage(e) {
  var src = e.toElement.src;
  $('#bigImage')[0].src = src;
}

function changeClick() {
  $.each( $('img'), function(i,img) { 
    img.onclick = enlargeImage; 
  });
}

var width = $(window).width();
var height = $(window).height(); 
var left = (width-542)/2;

var newDiv = document.createElement('div');
newDiv.id = 'newDiv';

$(newDiv).css({
  'width': width + 'px',
  'height': height + 'px',
  'opacity': '0.9',
  'visibility': 'visible',
  'z-index': '15',
  'background-color': '#000000',
  'top': '0px',
  'left': '0px'
});

$('body').append(newDiv);

$('#newDiv').append($('<div id="imageBox" style="display: block; visibility: visible; top: 20%; left:'+ left +'px ; position:absolute; width: 542px; height: 479px; opacity: 1; cursor: auto; z-index:16"></div>'));
$('#imageBox').append($('<img id="bigImage" width="100%" height="100%">'));

changeClick();
