let controlIcon = document.getElementById('controlIcon');
let audio = document.getElementById('audio');
let progress = document.getElementById('progress');

audio.onloadeddata = () => { 
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}

function playPause() { 
    if (controlIcon.classList.contains('fa-play')) {
        audio.play();
        controlIcon.classList.remove('fa-play');
        controlIcon.classList.add('fa-pause');
        
    }
    else { 
        audio.pause();
        controlIcon.classList.remove('fa-pause');
        controlIcon.classList.add('fa-play');
        
    }
}

if (audio.play()) { 
    controlIcon.classList.remove('fa-play');
    controlIcon.classList.add('fa-pause');
    setInterval(() => {
        progress.value = audio.currentTime;
    }, 1000);
}

progress.onchange = function() { 
    audio.play();
    audio.currentTime = progress.value;
    controlIcon.classList.remove('fa-play');
    controlIcon.classList.add('fa-pause');
}
