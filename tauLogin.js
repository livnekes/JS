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
  var i=document.querySelector('iframe');
  if (i!=null&&i.contentDocument!=null)
  {
    var t=i.contentDocument.querySelector('iframe');
    if (t!=null)
      e=t.contentDocument.querySelector("form");
    if(e!=null){
      var n=t.contentDocument;
      n.getElementsByName("Ecom_User_ID")[0].value=username;
      n.getElementsByName("Ecom_Password")[0].value=password;
      n.getElementsByName("Ecom_User_Pid")[0].value=id;
      n.getElementsByTagName("a")[0].click();
      return;
    }
  }
  console.log("The site is not supported!");
  window.location='https://idp.tau.ac.il/nidp/saml2/sso';
})();
