
var skip = prompt("do you want to skip welcoming measege ?");
skip1=skip.toUpperCase;
if(skip1=="No"){

var userName = prompt("What's your name ?");
alert("welcom" + userName);
var gender = prompt("what is your gender");
var converted = gender.toLowerCase();
if ("converted"=="female"||"converted"=="male"||"converted"=="f"||"converted"=="m"){ 

}
  else {
    alert( "enter correct your gender" );
 }
 var age = prompt("what is your age");
 if(age<=0){
    alert( "not allowd" );
 }
 else{
     alert("welcom in this website");
 }
 if("converted"=="m"||"converted"=="male")
 alert("welcom  " +userName+ "Mr");
 else
 {
     alert("welcom  " +userName+ "Ms");
 }
} 

  else{
      alert("welcom");
  }
  alert("I would like to answer more questions YES or NO");
  var one =0;
  var tow=0;
  var three=0;
  while(one==0&&tow==0&&three==0){
  var one =prompt("are you marred");
  var tow =prompt("are you happy");
  var three =prompt("do you have a driving licence");
}
var arry =[one,tow,three];
console.log(arry);
    
  