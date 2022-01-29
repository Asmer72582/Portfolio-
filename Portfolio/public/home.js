let time = 5;
let score = 0;
let isplaying;

const wordinput = document.querySelector('#word-input');
const currentword = document.querySelector('#currentword');
const scoredisplay = document.querySelector('#scoredisplay');
const timedisplay = document.querySelector('#timedisplay');
// const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const error = document.querySelector('#messageblue');

words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'statutory',
    'company',
    'director',
    'board',
    'shares',
    'market',
    'scam',
    'office',
    'partly',
    'income',
    'power',
      ];
function startgames(params) {

  showword(words);
  
  console.log('start');

  wordinput.addEventListener('input', Startmatch);

  setInterval(countdown, 1000);

  setInterval(gamestatus, 50);

   

}
function Startmatch() {

  if (matchwords()) {
    isplaying = true;
    time = 6;
    showword(words);
    wordinput.value = '';
    score++;
  }
  if (score === -1) {
    scoredisplay.innerHTML = 0;   
  }
  scoredisplay.innerHTML = score;


}
function reset(argument) {
  document.getElementById("form").reset();
}
function matchwords() {
    if (wordinput.value === currentword.innerHTML) {
        message.innerHTML = "Correct!!";
        return true;
    }
  else if (wordinput.value == "LaunchGame") {
    window.location = 'jsgame.html';
  
}
    else{
        error.innerHTML = "";
        return false; 
    }
    
}


function showword(words) {
  
  const random = Math.floor(Math.random() * words.length);

  currentword.innerHTML = words[random];
}
function countdown(params) {
  if (time >0) {
    time--;

  }else if (time === 0){
    isplaying = false;
  }
  timedisplay.innerHTML = time;
}

function gamestatus() {
  if (!isplaying && time === 0) {
    error.innerHTML = 'Game over!!';
    
    score = -1;
    return false;
  }
  
}


  
 
$(document).ready(function() {
	   
  // JQUERY NAV TOGGLE
  $('#menu').bind('click',function(event){
      $('#mainnav ul').slideToggle();
  });

  $(window).resize(function(){  
      var w = $(window).width();  
      if(w > 768) {  
          $('#mainnav ul').removeAttr('style');  
      }  
  });
    
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.classList.toggle('navspan', window.scrollY > 0);
});

const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
// toggler icon click event
navToggler.addEventListener('click', togglerClick);
// nav links click event
navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
navToggler.classList.toggle('toggler-open');
navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
if(navMenu.classList.contains('open')) {
navToggler.click();
}
}

  
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "i am computer student", "i love to code.", "i am a full-stack developer."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h4").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 200);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

$(window).on("load", function(argument) {
  $(".loader-wapper").fadeOut("slow");
});


function myFunction() {
  var x = document.getElementById("themebtn");

  const pressthemebtn = document.querySelector('#myBtn1');
  const themebtn = document.querySelector('#themebtn');

  pressthemebtn.addEventListener('click', () =>{
    themebtn.classList.remove('hide');

    pressthemebtn.addEventListener('click', () => {
        themebtn.classList.add('hide');
    });

});
 
}
const pressthemebtn = document.querySelector('#myBtn1');
const header = document.querySelector('#header');
pressthemebtn.addEventListener('click' , () =>{
    header.classList.toggle('hide');
    // alert('asmer');
});



// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   const togglebtn = document.querySelector('#myBtn1');
// }
var d = new Date();
var n = d.getFullYear();
document.getElementById('year').innerHTML = n;
// changing theme of the  website and makeing a good website user friendly