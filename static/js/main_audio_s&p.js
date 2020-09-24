function playPause() {
    var music = document.getElementById('playPause');
    var music_btn = document.getElementById('playPause-btn');
    if (music.paused) {
        music.play();
        music_btn.src = "media/images/func_icons/pause.png";
    } else {
        music.pause();
        music_btn.src = 'media/images/func_icons/play.png';
    }
}