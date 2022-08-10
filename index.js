// button press...
const a = document.querySelectorAll("button");
for(let i = 0; i < a.length; i++){
    a[i].addEventListener("click", function(){
        let temp = this.innerHTML;
        makeSound(temp);
    });
}

// keyBoard press...
document.addEventListener("keydown", function(event){
    makeSound(event.key);
});

// Sound function...
function makeSound(temp){
    switch (temp) {
        case "w":
            let a1 = new Audio("crash.mp3");
            a1.play();
            break;
        case "a":
            let a2 = new Audio("kick-bass.mp3");
            a2.play();
            break;
        case "s":
            let a3 = new Audio("snare.mp3");
            a3.play();
            break;
        case "d":
            let a4 = new Audio("tom-1.mp3");
            a4.play();
            break;
        case "j":
            let a5 = new Audio("tom-2.mp3");
            a5.play();
            break;
        case "k":
            let a6 = new Audio("tom-3.mp3");
            a6.play();
            break;
        case "l":
            let a7 = new Audio("tom-4.mp3");
            a7.play();
            break;
        default:
            console.log(temp);
            break;
    }
}