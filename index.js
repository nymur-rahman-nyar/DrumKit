// 

const all_buttons = document.querySelectorAll(".drum");
var total_button_count = all_buttons.length;


for (var i = 0; i < total_button_count; i ++ ){
    // applies to all the button 
    all_buttons[i].addEventListener("click", whenClicked);
}


// functions
function whenClicked(){
   
    var button_name = this.innerHTML;
    mapTheDrums(button_name)
}


document.addEventListener("keydown", function (event) {
    mapTheDrums(event.key)

})



function mapTheDrums(input){
    switch (input) {
        case button_name = 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case button_name = 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case button_name = 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case button_name = 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case button_name = 'j':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case button_name = 'k':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case button_name = 'l':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default: console.log(button_name);
    }
}