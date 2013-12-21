function SaveToDisk(e,t){
	if(!window.ActiveXObject){
		var n=document.createElement("a");
		n.href=e;
		n.target="_blank";
		n.download=t||e;
		var r=document.createEvent("MouseEvents");
		r.initMouseEvent("click",true,true,window,1,0,0,0,0,false,false,false,false,0,null);
		n.dispatchEvent(r);
		(window.URL||window.webkitURL).revokeObjectURL(n.href);
	}
	else if(!!window.ActiveXObject&&document.execCommand){
		var i=window.open(e,"_blank");
		i.document.close();
		i.document.execCommand("SaveAs",true,t||e);
		i.close();
	}
};

$.each($('a[href$=".mp3"]'),function(i,a) { 
		console.log(a.href);
		SaveToDisk(a.href,"file"+i+".mp3");
});
