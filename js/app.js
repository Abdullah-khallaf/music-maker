window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const buttons = []

    // playing sounds.
    pads.forEach((pad , index) => {
        pad.addEventListener('click', () =>{
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
       
    });
});
window.addEventListener('keydown', (e)=> {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
});