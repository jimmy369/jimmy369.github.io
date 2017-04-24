// JavaScript Document

//Load nav information into the array
function load_nav() {
   page_tray[0] = new Array(2);
   page_tray[0]['name'] = "PLACE  TO  SEE";
   page_tray[0]['file'] = "visit.html";
   page_tray[1] = new Array(2);
   page_tray[1]['name'] = "PLACE  TO  EAT";
   page_tray[1]['file'] = "eat.html";
   page_tray[2] = new Array(2);
   page_tray[2]['name'] = "PLACE  TO  STAY";
   page_tray[2]['file'] = "backpacker.html";
   page_tray[3] = new Array(2);
   page_tray[3]['name'] = "GALLERY";
   page_tray[3]['file'] = "gallery.html";
   page_tray[4] = new Array(2);
   page_tray[4]['name'] = "SIGN  UP";
   page_tray[4]['file'] = "newsletter.html";
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




//For index.html  insert Youtube film.

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('muteYouTubeVideoPlayer', {
    videoId: 'bFCoMqDGo_w', // YouTube video ID
    width: 1024,               // width (px)
    height: 576,              // height (px)
    playerVars: {
      autoplay: 1,        // auto play
      controls: 0,        // hide options
      showinfo: 0,        // hide video name
      modestbranding: 1,  // hide YouTube Logo
	  playlist: 'bFCoMqDGo_w',  //load play lists（for loop to use）
      loop: 1,            // loop play the video
      fs: 0,              // hide chang full screen
	  rel:0,              // hide to choose relative video when the end of play
      cc_load_policty: 0, // hide cc
      iv_load_policy: 3,  // hide comment
      autohide: 0         // hide control pannel when video playing
    },
    events: {
      onReady: function(e) {
        e.target.mute();    // mute 
      }
    }
  });
 }
 
 
 
//For gallery.html  interaction photo.
 
 function preloader() {
var i = 0;
imageObj = new Image();
images = new Array();     
images[0]="gallery/photo1.jpg"     
images[1]="gallery/photo2.jpg"     
images[2]="gallery/photo3.jpg"     
images[3]="gallery/photo4.jpg"
images[4]="gallery/photo5.jpg"
images[5]="gallery/photo6.jpg"
images[6]="gallery/photo7.jpg"
images[7]="gallery/photo8.jpg"
images[8]="gallery/photo9.jpg"
images[9]="gallery/photo10.jpg"
for(i=0; i<=9; i++)      {          
imageObj.src=images[i];     
}
}

function view(t) {
switch(t){
case 1:
	document.getElementById("img").innerHTML = '<img src="gallery/photo1.jpg" width="1024" height="576" border="0">'; //call and insert big photo
break;
case 2:
	document.getElementById("img").innerHTML = '<img src="gallery/photo2.jpg" width="1024" height="576" border="0">';
break;
case 3:
	document.getElementById("img").innerHTML = '<img src="gallery/photo3.jpg" width="1024" height="576" border="0">';  
break;
case 4:
	document.getElementById("img").innerHTML = '<img src="gallery/photo4.jpg" width="1024" height="576" border="0">';  
break;
case 5:
	document.getElementById("img").innerHTML = '<img src="gallery/photo5.jpg" width="1024" height="576" border="0">';  
break;

case 6:
	document.getElementById("img").innerHTML = '<img src="gallery/photo6.jpg" width="1024" height="576" border="0">'; 
break;

case 7:
	document.getElementById("img").innerHTML = '<img src="gallery/photo7.jpg" width="1024" height="576" border="0">';
break;

case 8:
	document.getElementById("img").innerHTML = '<img src="gallery/photo8.jpg" width="1024" height="576" border="0">';  
break;

case 9:
	document.getElementById("img").innerHTML = '<img src="gallery/photo9.jpg" width="1024" height="576" border="0">';  
break;

case 10:
	document.getElementById("img").innerHTML = '<img src="gallery/photo10.jpg" width="1024" height="576" border="0">';  
break;
}
}
 
 
//For newsletter.html  the validation form. 

function validateForm() {
    var name = document.forms["vform"]["fname"].value;
    var surname = document.forms["vform"]["lname"].value;
	var letters = new RegExp("^[a-zA-Z]+$");
	var email = document.forms["vform"]["email"].value;
    var patt = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
	var checkbox = document.getElementById('checkbox'); 
    var result = true;
	

    if (name == null || name == "" || name.length < 3 || letters.test(name) != true ) {
        alert("Name must have alphanumeric characters only and contains at least 3 letters!!");
       result = false;
    }
   
	
	

    if (surname == null || surname == "" || surname.length < 5 || letters.test(surname) != true ) {
        alert("Surname must have alphanumeric characters only and contains at least 5 letters!!");
         result = false;
    }
    
	
	

    if (email == null || email == "") {
        alert("Email address must be filled out!!");
         result = false;
    }
    else if (patt.test(email) != true ) {
        alert("You have entered a wrong email format!!");
       result = false;
    }
	
	if (checkbox.checked !=true){
        
		alert("Please confirm you would like to receive our newsletters!")
			
			result = false;
	}
	
    
	return result;
	
}
		
		

		
//Accommodation 



var length = 3;                //the total number of web pages

var page_tray = new Array();  //an array to hold the page name and the file name

//Load page information into the array
function load_page() {
   page_tray[0] = new Array(2);
   page_tray[0]['name'] = "Backpacker";
   page_tray[0]['file'] = "backpacker.html";
   page_tray[1] = new Array(2);
   page_tray[1]['name'] = "Bed & Breakfast";
   page_tray[1]['file'] = "b&b.html";
   page_tray[2] = new Array(2);
   page_tray[2]['name'] = "Cottage";
   page_tray[2]['file'] = "cottage.html";
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

	
   

    
