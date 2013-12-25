var lastText = '';
var form = $('input[type="text"]')[0];

document.onkeypress = function(evt) {
   evt = evt || window.event;
   //console.log(evt.charCode);
   // respond to ctrl + b
   if('2'==evt.charCode) { 
     lastText = changeText(form.value);
     form.value = lastText;
   } 
}

function changeText(text) {
  var changeText = '';
  for(var i=0 ; i < text.length ; i++) {
    ch = text.charAt(i).toLowerCase();
    if (text.charCodeAt(i) < 1000) {
      var he_ch = window.en_maps[ch];
      if (!he_ch)
        he_ch = ch;
      changeText += he_ch; 
    }
    else {
      var en_ch = window.he_maps[ch];
      if (!en_ch)
        en_ch = ch;
      changeText += en_ch;
    }
  }
  return changeText;
}

var en_maps = new Object();
var he_maps = new Object();

en_maps["a"] = "ש";
en_maps["b"] = "נ";
en_maps["c"] = "ב";
en_maps["d"] = "ג";
en_maps["e"] = "ק";
en_maps["f"] = "כ";
en_maps["g"] = "ע";
en_maps["h"] = "י";
en_maps["i"] = "ן";
en_maps["j"] = "ח";
en_maps["k"] = "ל";
en_maps["l"] = "ך";
en_maps["m"] = "צ";
en_maps["n"] = "מ";
en_maps["o"] = "ם";
en_maps["p"] = "פ";
en_maps["q"] = "/";
en_maps["r"] = "ר";
en_maps["s"] = "ד";
en_maps["t"] = "א";
en_maps["u"] = "ו";
en_maps["v"] = "ה";
en_maps["w"] = "'";
en_maps["x"] = "ס";
en_maps["y"] = "ט";
en_maps["z"] = "ז";
en_maps[";"] = "ף";
en_maps["'"] = ",";
en_maps[","] = "ת";
en_maps["."] = "ץ";
en_maps["/"] = ".";
en_maps[" "] = " ";
en_maps["-"] = "-";
en_maps["+"] = "+";

he_maps["ש"] = "a";
he_maps["נ"] = "b";
he_maps["ב"] = "c";
he_maps["ג"] = "d";
he_maps["ק"] = "e";
he_maps["כ"] = "f";
he_maps["ע"] = "g";
he_maps["י"] = "h";
he_maps["ן"] = "i";
he_maps["ח"] = "j";
he_maps["ל"] = "k";
he_maps["ך"] = "l";
he_maps["צ"] = "m";
he_maps["מ"] = "n";
he_maps["ם"] = "o";
he_maps["פ"] = "p";
he_maps["/"] = "q";
he_maps["ר"] = "r";
he_maps["ד"] = "s";
he_maps["א"] = "t";
he_maps["ו"] = "u";
he_maps["ה"] = "v";
he_maps["'"] = "w";
he_maps["ס"] = "x";
he_maps["ט"] = "y";
he_maps["ז"] = "z";
he_maps["ף"] = ";";
he_maps[","] = "'";
he_maps["ת"] = ",";
he_maps["ץ"] = ".";
he_maps["."] = "/";
he_maps[" "] = " ";
he_maps["-"] = "-";
he_maps["+"] = "+";

