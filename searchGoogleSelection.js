javascript: function getSelectionText() {
    var e = "";
    if (window.getSelection) {
        e = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        e = document.selection.createRange().text;
    }
    return e
}
var element1 = document.createElement("script");
element1.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js";
element1.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(element1);
$(document).ready(function() {
    $("div,pre").mouseup(function(e) {
        window.location.href = "https://www.google.co.il/?#q=" + getSelectionText();
    })
})
