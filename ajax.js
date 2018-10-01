function remove(e){
    alert("remove"+e)
}
function setGreen(){
    alert(document.cookie);
}
function sendItem(){
  function getXmlHttp(){
    var xmlhttp
    try{xmlhttp= new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e){
      try{xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");} catch (e){xmlhttp = false}
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') xmlhttp = new XMLHttpRequest()
    return xmlhttp
  }
  var xhr = getXmlHttp()
  var quantity= document.getElementById("quantity").value
  var pathname = window.location.pathname
  var id = pathname.replace("/id/","")
  var request = "/addToBasket?id="+pathname.replace("/id/","")+"&q="+quantity
  xhr.open("GET", request, true)
  xhr.onreadystatechange=function(){
    if (xhr.readyState != 4) return clearTimeout(xhrTimeout)
  //  if (xhr.status == 200)  alert("response"+xhr.responseText)
  }
  xhr.send("a=5&b=4")
  var xhrTimeout = setTimeout( function(){ xhr.abort(); handleError("Timeout") }, 10000);
  document.getElementById("bask").style.background = "red";
  function handleError(message) {
              alert("Ошибка: "+message)
  }
}

function message(){
function getXmlHttp(){
    var xmlhttp
    try{xmlhttp= new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e){
      try{xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");} catch (e){xmlhttp = false}
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') xmlhttp = new XMLHttpRequest()
    return xmlhttp
  }
    var email = document.getElementById("inputemail").value
    var msg=   document.getElementById("exampleFormControlTextarea1").value ;
    var name=   document.getElementById("inputname").value ;
    if (name.length<2) {alert('Укажите имя!'); return 1};
    if ((email.length<5) || (email.indexOf("@")<1)) {alert('Укажите email!'); return 2};
    if (msg.length<15)  {alert('Сообщение не может быть пустымl!'); return 4};
    var request="/message?msg="+msg+"&email="+email+"&name="+name
    var xhr = getXmlHttp()
    xhr.open("GET", request, true)
    xhr.onreadystatechange=function(){
    if (xhr.readyState != 4) return clearTimeout(xhrTimeout)
        //  if (xhr.status == 200)  alert("response"+xhr.responseText)
    }
    xhr.send("a=5&b=4")
    var xhrTimeout = setTimeout( function(){ xhr.abort(); handleError("Timeout") }, 10000);
    function handleError(message) {
              alert("Ошибка: "+message)
     }
     alert("спасибо!")
}



