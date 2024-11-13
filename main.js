// getting the slider and button elements
var slider = document.getElementById('myRange');
var button = document.getElementById('mybutton');
var selectValue = document.getElementById('selectValue'); 
var currentMood = 0; // starts as 0

// when the slider value changes
slider.oninput = function() {
  currentMood = slider.value;
  updateMood(currentMood); // update the mood text
}

// function to update the mood text
function updateMood(x) {
  if (x >= 1 && x <= 10) {
    selectValue.textContent = "super sad"; 
  } else if (x > 10 && x <= 20) {
    selectValue.textContent = "kinda sad"; 
  } else if (x > 20 && x <= 30) {
    selectValue.textContent = "just okay"; 
  } else if (x > 30 && x <= 40) {
    selectValue.textContent = "vibing"; 
  } else if (x > 40 && x <= 50) {
    selectValue.textContent = "kinda happy"; 
  } else if (x > 50 && x <= 60) {
    selectValue.textContent = "happy";
  } else if (x > 60 && x <= 70) {
    selectValue.textContent = "very happy"; 
  } else if (x > 70 && x <= 80) {
    selectValue.textContent = "sugar rush"; 
  } else if (x > 80 && x <= 90) {
    selectValue.textContent = "life is so good"; 
  } else if (x > 90 && x <= 100) {
    selectValue.textContent = "party"; 
  }
}

// when the button is clicked pick a song
button.onclick = function() {
  songPicker(currentMood); 
}

// pick a song based on mood 
function songPicker(x) {
  if (x >= 1 && x <= 10) {
    openNewTab("https://www.youtube.com/watch?v=RgKAFK5djSk"); // see you again
  } else if (x > 10 && x <= 20) {
    openNewTab("https://www.youtube.com/watch?v=xXEx0DyIMks"); // imagination
  } else if (x > 20 && x <= 30) {
    openNewTab("https://www.youtube.com/watch?v=pXRviuL6vMY"); // stressed out
  } else if (x > 30 && x <= 40) {
    openNewTab("https://www.youtube.com/watch?v=NywWB67Z7zQ"); // what do you mean
  } else if (x > 40 && x <= 50) {
    openNewTab("https://www.youtube.com/watch?v=a59gmGkq_pw"); // cold water
  } else if (x > 50 && x <= 60) {
    openNewTab("https://www.youtube.com/watch?v=PT2_F-1esPk"); // closer
  } else if (x > 60 && x <= 70) {
    openNewTab("https://www.youtube.com/watch?v=JGwWNGJdvx8"); // shape of you
  } else if (x > 70 && x <= 80) {
    openNewTab("https://www.youtube.com/watch?v=fRh_vgS2dFE"); // sorry
  } else if (x > 80 && x <= 90) {
    openNewTab("https://www.youtube.com/watch?v=09R8_2nJtjg"); // sugar
  } else if (x > 90 && x <= 100) {
    openNewTab("https://www.youtube.com/watch?v=6JCLY0Rlx6Q"); // shut up and dance
  }
}

function openNewTab(url) {
  window.open(url, '_blank').focus(); // open song in a new tab
}
