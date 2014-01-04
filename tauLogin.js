javascript:(function(){
  username="";
  password="";
  id="";
  var e=document.getElementsByName("frmlogin");
  if(e!=null&&e.length==1){
    document.getElementsByName("txtUser")[0].value=username;
    document.getElementsByName("txtId")[0].value=id;
    document.getElementsByName("txtPass")[0].value=password;
    document.getElementsByName("btnishur")[0].click();
    return;
  }
  var t=document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName("iframe")[0];
  var e=t.contentDocument.getElementsByTagName("form");
  if(e!=null&&e.length==1){
    var n=t.contentDocument;
    n.getElementsByName("Ecom_User_ID")[0].value=username;
    n.getElementsByName("Ecom_Password")[0].value=password;
    n.getElementsByName("Ecom_User_Pid")[0].value=id;
    n.getElementsByTagName("a")[0].click();
    return;
  }
  else{
    window.location = "https://idp.tau.ac.il/nidp/saml2/sso";
    console.log("The site is not supported!");
  }
})();
