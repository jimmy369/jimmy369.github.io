// JavaScript Document

//Load nav information into the array
var length = 4;                //the total number of web pages

function load_nav() {
   page_tray[0] = new Array(2);
   page_tray[0]['name'] = "PRODUCT";
   page_tray[0]['file'] = "product.html";
   
   page_tray[1] = new Array(2);
   page_tray[1]['name'] = "CART";
   page_tray[1]['file'] = "cart.html";
  
   page_tray[2] = new Array(2);
   page_tray[2]['name'] = "ABOUT US";
   page_tray[2]['file'] = "aboutus.html";
   
   page_tray[3] = new Array(2);
   page_tray[3]['name'] = "SIGN  UP";
   page_tray[3]['file'] = "signup.html";
   
   page_tray[4] = new Array(2);
   page_tray[4]['name'] = "";
   page_tray[4]['file'] = "";
   }

//Write the HTML nav code 
function display_nav()
{
 //Load the nav pages information
 load_nav();
 
 //Construct list
 var strList=""; 
 strList += "<ul class=\"nav\">";
 
  //The loop is executed to display nav items
  for (i=0; i < 5;  i++)
  {
strList += "<li><a href=\"" + page_tray[i]['file'] + "\">" + page_tray[i]['name'] + "</a></li>";
  }
 
strList += "</ul>";
document.write(strList);
}





 
 
 

 
//For signup.html  the validation form. 

function validateForm() {
    var name = document.forms["vform"]["fname"].value;
    var surname = document.forms["vform"]["lname"].value;
	var letters = new RegExp("^[a-zA-Z]+$");
	var email = document.forms["vform"]["email"].value;
    var patt = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
	var dob = document.getElementById("dateofbirth").value;
	var today =new Date();
	var gender1 = document.getElementById("gender1"); 
	var gender2 = document.getElementById("gender2"); 
    var checkbox = document.getElementById("checkbox"); 
	var inputDate = new Date(document.getElementById("dateofbirth").value);

	
    var result = true;
	

    if (name == null || name == "") {
		
        alert("The Name(s) field is required.");
       
	    result = false;
    }
	
	else if (letters.test(name) != true && name.length < 5){
   
	    alert("Name must have alphabetic characters only and contain at least 5 letters !!");
		
		result = false;
		
	}
	
	else if (letters.test(name) == true && name.length < 5){
   
	    alert("Name must contain at least 5 letters !!");
		
		result = false;
		
	}
	
	

	else if ( letters.test(name) != true && name.length >= 5 ){
   
	    alert("Name must have alphabetic characters only !!");
		
		result = false;
		
	}
	
	
	
	if (surname == null || surname == "") {
		
        alert("The Surname(s) field is required.");
       
	    result = false;
    }
	
	else if (letters.test(surname) != true && surname.length < 8){
   
	    alert("Surname must have alphabetic characters only and contain at least 8 letters !!");
		
		result = false;
		
	}
	
	else if (letters.test(surname) == true && surname.length < 8){
   
	    alert("Surname must contain at least 8 letters !!");
		
		result = false;
		
	}
	
	

	else if ( letters.test(surname) != true && surname.length >= 8 ){
   
	    alert("Surname must have alphabetic characters only !!");
		
		result = false;
		
	}
	

    if (email == null || email == "") {
        alert("The Email field is required.");
         result = false;
    }
    else if (patt.test(email) != true ) {
        alert("Please enter a valid email address.");
       result = false;
    }
	
	if (dob == null || dob == ""){
            alert("The Date of birth field is required.");
            result = false;
        }
		
	else if(inputDate > today) {
		
		alert("Please enter a valid date of birth.");
          result = false;
  }
  
    else if(today.getFullYear()- inputDate.getFullYear()<18){
    alert("You must be at least 18 years old to be a Wall Street member !");
	result = false;
    }
	
	
	if ( (gender1.checked != true  ) && ( gender2.checked != true ) ){
 
       alert ("The Gender field is required."); 
 
             result = false;
			 
	}

 

	
	if (checkbox.checked !=true){
        
		alert("Please confirm you would like to receive our newsletters !")
			
			result = false;
	}
	
    
	return result;
	
	
}
		

		



var length = 4;                //the total number of web pages

var page_tray = new Array();  //an array to hold the page name and the file name

//Load page information into the array
function load_page() {
   page_tray[0] = new Array(2);
   page_tray[0]['name'] = "All Products";
   page_tray[0]['file'] = "product.html";
   page_tray[1] = new Array(2);
   page_tray[1]['name'] = "France";
   page_tray[1]['file'] = "france.html";
   page_tray[2] = new Array(2);
   page_tray[2]['name'] = "Germany";
   page_tray[2]['file'] = "germany.html";
   page_tray[3] = new Array(2);
   page_tray[3]['name'] = "Austria";
   page_tray[3]['file'] = "austria.html";
   
   }

//Write the HTML sub menu code 
function display_menu()
{
 //Load the pages information
 load_page();
 
 //Construct list
 var strList=""; 
 strList += "<ul class=\"menu\">";
 
  //This loop is executed to diplay sub menu items
  for (i=0; i<length;  i++)
  {
strList += "<li><a href=\"" + page_tray[i]['file'] + "\">" + page_tray[i]['name'] + "</a></li>";
  }
 
strList += "</ul>";
document.write(strList);
}

	
//-----------JSON   

var jcontent = {
  
  "wine":[
{
	"id":"WS01",
	"title":"ALFA",
	"category":"France",
	"description":"Cabernet Sauvignon",
	"popularity":"Normal",
	"onsale":"Yes",
	"price":14
},
{
	"id":"WS02",
	"title":"BRAVO",
	"category":"France",
	"description":"Cabernet Sauvignon",
	"popularity":"Normal",
	"onsale":"Yes",
	"price":20
},
{    
    "id":"WS03",
	"title":"CHARLIE",
	"category":"France",
	"description":"Merlot",
	"popularity":"Normal",
	"onsale":"Yes",
	"price":35
},

{
	"id":"WS04",
	"title":"DELTA",
	"category":"France",
	"description":"Merlot",
	"popularity":"Normal",
	"onsale":"Yes",
	"price":17
},

{
	"id":"WS05",
	"title":"ECHO",
	"category":"France",
	"description":"Pinot noir",
	"popularity":"Normal",
	"onsale":"Yes",
	"price":25
},
{
	"id":"WS06",
	"title":"FOXTROT",
	"category":"France",
	"description":"Pinot noir",
	"popularity":"High",
	"onsale":"Yes",
	"price":30
},

{
	"id":"WS07",
	"title":"GOLF",
	"category":"France",
	"description":"Shiraz",
	"popularity":"High",
	"onsale":"No",
	"price":28
},

{
	"id":"WS08",
	"title":"HOTEL",
	"category":"France",
	"description":"Chardonnay",
	"popularity":"High",
	"onsale":"No",
	"price":18
},

{
	"id":"WS09",
	"title":"INDIA",
	"category":"Germany",
	"description":"Chardonnay",
	"popularity":"High",
	"onsale":"Yes",
	"price":35
},

{
	"id":"WS10",
	"title":"JULIETT",
	"category":"Germany",
	"description":"Sauvignon Blanc",
	"popularity":"High",
	"onsale":"No",
	"price":40
},

{
	"id":"WS11",
	"title":"KILO",
	"category":"Germany",
	"description":"Cabernet Sauvignon",
	"popularity":"Normal",
	"onsale":"Yes",
	"price":14
},
{
	"id":"WS12",
	"title":"LIMA",
	"category":"Germany",
	"description":"Cabernet Sauvignon",
	"popularity":"Normal",
	"onsale":"Yes",
	"price":20
},
{    
    "id":"WS13",
	"title":"MIKE",
	"category":"Germany",
	"description":"Merlot",
	"popularity":"Normal",
	"onsale":"Yes",
	"price":35
},

{
	"id":"WS14",
	"title":"NOVEMBER",
	"category":"Germany",
	"description":"Merlot",
	"popularity":"Normal",
	"onsale":"Yes",
	"price":17
},

{
	"id":"WS15",
	"title":"OSCAR",
	"category":"Austria",
	"description":"Pinot noir",
	"popularity":"Normal",
	"onsale":"Yes",
	"price":25
},
{
	"id":"WS16",
	"title":"PAPA",
	"category":"Austria",
	"description":"Pinot noir",
	"popularity":"High",
	"onsale":"Yes",
	"price":30
},

{
	"id":"WS17",
	"title":"QUEBEC",
	"category":"Austria",
	"description":"Shiraz",
	"popularity":"High",
	"onsale":"No",
	"price":28
},

{
	"id":"WS18",
	"title":"ROMEO",
	"category":"Austria",
	"description":"Chardonnay",
	"popularity":"High",
	"onsale":"No",
	"price":18
},

{
	"id":"WS19",
	"title":"SIERRA",
	"category":"Austria",
	"description":"Chardonnay",
	"popularity":"High",
	"onsale":"Yes",
	"price":35
},

{
	"id":"WS20",
	"title":"TANGO",
	"category":"Austria",
	"description":"Sauvignon Blanc",
	"popularity":"High",
	"onsale":"No",
	"price":40
}
]
}

console.log(jcontent);

//.....get name 1-10.............................

var output = document.getElementById('output');

output.innerHTML = jcontent.wine[0].title;

var output1 = document.getElementById('output1');

output1.innerHTML = jcontent.wine[1].title;

var output2 = document.getElementById('output2');

output2.innerHTML = jcontent.wine[2].title;

var output3 = document.getElementById('output3');

output3.innerHTML = jcontent.wine[3].title;

var output4 = document.getElementById('output4');

output4.innerHTML = jcontent.wine[4].title;

var output5 = document.getElementById('output5');

output5.innerHTML = jcontent.wine[5].title;

var output6 = document.getElementById('output6');

output6.innerHTML = jcontent.wine[6].title;

var output7 = document.getElementById('output7');

output7.innerHTML = jcontent.wine[7].title;

var output8 = document.getElementById('output8');

output8.innerHTML = jcontent.wine[8].title;

var output9 = document.getElementById('output9');

output9.innerHTML = jcontent.wine[9].title;


//.....get name 11-20.............................

var output10 = document.getElementById('output10');

output10.innerHTML = jcontent.wine[10].title;

var output11 = document.getElementById('output11');

output11.innerHTML = jcontent.wine[11].title;

var output12 = document.getElementById('output12');

output12.innerHTML = jcontent.wine[12].title;

var output13 = document.getElementById('output13');

output13.innerHTML = jcontent.wine[13].title;

var output14 = document.getElementById('output14');

output14.innerHTML = jcontent.wine[14].title;

var output15 = document.getElementById('output15');

output15.innerHTML = jcontent.wine[15].title;

var output16 = document.getElementById('output16');

output16.innerHTML = jcontent.wine[16].title;

var output17 = document.getElementById('output17');

output17.innerHTML = jcontent.wine[17].title;

var output18 = document.getElementById('output18');

output18.innerHTML = jcontent.wine[18].title;

var output19 = document.getElementById('output19');

output19.innerHTML = jcontent.wine[19].title;


//.....get description  1-20 .......................

var outputD1 = document.getElementById('outputD1');

outputD1.innerHTML = jcontent.wine[0].description;


var outputD2 = document.getElementById('outputD2');

outputD2.innerHTML = jcontent.wine[1].description;


var outputD3 = document.getElementById('outputD3');

outputD3.innerHTML = jcontent.wine[2].description;


var outputD4 = document.getElementById('outputD4');

outputD4.innerHTML = jcontent.wine[3].description;



var outputD5 = document.getElementById('outputD5');

outputD5.innerHTML = jcontent.wine[4].description;



var outputD6 = document.getElementById('outputD6');

outputD6.innerHTML = jcontent.wine[5].description;


var outputD7 = document.getElementById('outputD7');

outputD7.innerHTML = jcontent.wine[6].description;



var outputD8 = document.getElementById('outputD8');

outputD8.innerHTML = jcontent.wine[7].description;



var outputD9 = document.getElementById('outputD9');

outputD9.innerHTML = jcontent.wine[8].description;



var outputD10 = document.getElementById('outputD10');

outputD10.innerHTML = jcontent.wine[9].description;



var outputD11 = document.getElementById('outputD11');

outputD11.innerHTML = jcontent.wine[10].description;





var outputD12 = document.getElementById('outputD12');

outputD12.innerHTML = jcontent.wine[11].description;


var outputD13 = document.getElementById('outputD13');

outputD13.innerHTML = jcontent.wine[12].description;



var outputD14 = document.getElementById('outputD14');

outputD14.innerHTML = jcontent.wine[13].description;



var outputD15 = document.getElementById('outputD15');

outputD15.innerHTML = jcontent.wine[14].description;



var outputD16 = document.getElementById('outputD16');

outputD16.innerHTML = jcontent.wine[15].description;



var outputD17 = document.getElementById('outputD17');

outputD17.innerHTML = jcontent.wine[16].description;



var outputD18 = document.getElementById('outputD18');

outputD18.innerHTML = jcontent.wine[17].description;



var outputD19 = document.getElementById('outputD19');

outputD19.innerHTML = jcontent.wine[18].description;



var outputD20 = document.getElementById('outputD20');

outputD20.innerHTML = jcontent.wine[19].description;


//.....get price  1-20 .......................


var outputP1 = document.getElementById('outputP1');

outputP1.innerHTML = jcontent.wine[0].price;











         