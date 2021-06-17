var buttonElement = document.getElementById('buttonone')
var Audio = document.getElementById('baseballaudio')

buttonElement.addEventListener('click', ()=>{
    Audio.play();
})

var buttonElement = document.getElementById('buttontwo')
var Audiotwo = document.getElementById('bloopaudio')
buttonElement.addEventListener('click', ()=>{
    Audiotwo.play();
})


var buttonElement = document.getElementById('buttonthree')
var Audiothree = document.getElementById('caraudio')
buttonElement.addEventListener('mouseenter', ()=>{
    Audiothree.play();
})