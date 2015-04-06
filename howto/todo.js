
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




//xhr.open('GET', 'http://restcountries.eu/rest/v1/all', true);
//xhr.send();

function getCountries(url)
{
  var url = 'http://restcountries.eu/rest/v1/name';
  var country = document.getElementById('countryform').value;

  var finalurl = url + '/' + country;

  var request = new XMLHttpRequest();

  request.open('GET', finalurl);
  request.send();

  request.onreadystatechange= function(){
    var list = JSON.parse(this.responseText);
    var countrylist = list[0]['capital'];

    document.getElementById('newcountry').innerHTML = countrylist;
  }
}



xhr.onload = function countrydrop()
{
  var select = document.createElement('select');
/*
  var request = new XMLHttpRequest();

  request.open('GET', 'http://restcountries.eu/rest/v1/all');
  request.send();
*/
  var responseObject = JSON.parse(xhr.responseText);
  var random = Math.floor(Math.random()*responseObject.length);

  //var countrylist = list[0]['capital'];

  document.getElementById('myList').appendChild(select);
  for(var i=0; i<responseObject.length; i++){
    var option =document.createElement('option');
    option.text = responseObject[i]['name'];
    option.value = responseObject[i]['name'];
    select.appendChild(option);
  }

  country_brdr=responseObject[random]['borders'];
  document.getElementById('myList1').innerHTML = country_brdr;
}

//function countryguess(){
  //if(document.getElementById('myList').innerHTML = document.getElementById('myList1').innerHTML)
//      document.getElementById('myList2').innerHTML = "You guessed right!"
//}
/*
   document.getElementById('myList').appendChild(select);

  var option =document.createElement('option');
  option.text = 'india';
  option.value = 'india';
    select.appendChild(option);

  var option =document.createElement('option');
  option.text = 'pak';
  option.value = 'pak';


    select.appendChild(option);


}
*/
xhr.open('GET', 'http://restcountries.eu/rest/v1/all', true);
xhr.send();





