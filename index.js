
for(var i = 0; i < document.querySelectorAll(".note").length; i++ ){
    document.querySelectorAll(".note")[i].addEventListener("click", function(){
        
        var clickedButton = this.id;

        playSound(clickedButton);
        visuallyPressButton(clickedButton)

    })
}

document.addEventListener("keydown",function(event){

    playSound(event.key);
    visuallyPressButton(event.key);
})


function playSound(note){
    switch (note) {
        case "s":
            var Bbnote = new Audio("sound/Bflat.mp3");
            Bbnote.play();
            break;
        case "d":
            var Cnote = new Audio("sound/Piano_C.mp3");
            Cnote.play();
            break;
        case "f":
            var Dnote = new Audio("sound/Piano_D.mp3");
            Dnote.play();
            break;
        case "g":
            var Ebnote = new Audio("sound/Eflat.mp3");
            Ebnote.play();
            break;
        case "h":
            var Fnote = new Audio("sound/Piano_F.mp3");
            Fnote.play();
            break;                
        case "j":
            var Gnote = new Audio("sound/Piano_G.mp3");
            Gnote.play();
            break;
        case "k":
            var Anote = new Audio("sound/Piano_A.mp3");
            Anote.play();
            break;
        default:
            break;
    }
}

function visuallyPressButton(button){

    var activeButton = document.querySelector("#" + button);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
}