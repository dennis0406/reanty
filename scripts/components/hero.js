window.addEventListener("load", function () {
    let playBtn = document.getElementById('play-video');
    let video = document.getElementById('video');
    let actionIcon = document.getElementById('action-icon');

    playBtn.onclick = function () {
        if (video.paused) {
            video.play();
            actionIcon.src='../../assets/icons/pause.svg';
        } else {
            video.pause();
            actionIcon.src='../../assets/icons/play.svg';
        }
    };
})