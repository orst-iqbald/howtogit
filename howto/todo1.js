
var xhr = new XMLHttpRequest();

  xhr.onload = function()
  {
    responseObject = JSON.parse(xhr.responseText);
   // document.getElementById('content').innerHTML = xhr.responseText.length;
    var newContent = '';
    var abbrev = new Array();
    for(var i=0; i<responseObject.length; i++){
      abbrev[i]= new Array(1);
      abbrev[i][0] = responseObject[i]['name'];
      abbrev[i][1] = responseObject[i]['alpha3Code'];
      if(responseObject[i]['borders'].length>0){
        newContent += '<div class="event">';
        newContent += '<p>' + abbrev[i][1] + ' : ' + responseObject[i]['borders'] + '<br>';
        newContent += '</div>';
      }
    }
  document.getElementById('content').innerHTML = newContent;

  }
xhr.open('GET', 'http://restcountries.eu/rest/v1/all', true);
xhr.send();
