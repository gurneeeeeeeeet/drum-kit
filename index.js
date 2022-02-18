var len = document.querySelectorAll(".drum").length;

var sounds = [new Audio("sounds/crash.mp3"), new Audio("sounds/kick-bass.mp3"), new Audio("sounds/snare.mp3"), new Audio("sounds/tom-1.mp3"), new Audio("sounds/tom-2.mp3"), new Audio('sounds/tom-3.mp3'), new Audio('sounds/tom-4.mp3')];

var keys = ["w", "a", "s", "d", "j", "k", "l"];

for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    soundCheck(this.textContent);
  });
}



document.addEventListener("keydown", function(event) {
  console.log(event.key);
    soundCheck(event.key);
});

function soundCheck (key) {
  for(var i=0; i<sounds.length; i++) {
    if (key === keys[i]) {
      buttonAnimation(key);
      sounds[i].play();
    }
  }
}

function buttonAnimation(key) {
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);

}
