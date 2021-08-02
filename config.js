const audioElement = document.getElementById("audioId")

audioElement.addEventListener('canplay', (ev) => {
    console.log(ev)
    audioElement.play()
})
audioElement.addEventListener('error', (ev) => {
    audioElement.load()
})
const controles = (btn) => {
    let btn_play_pause = document.getElementById("bx-btn-play-pause")
    let btn_mute = document.getElementById("bx-btn-muteOnOff")
    switch (btn) {
        case 'play':
            if (btn_play_pause.className === "bx bx-play") {
                audioElement.play()
                btn_play_pause.className = "bx bx-pause"
            } else {
                audioElement.pause()
                btn_play_pause.className = "bx bx-play"
            }
            break;
        case 'mute':
            if (audioElement.muted) {
                audioElement.muted = false
                btn_mute.className = "bx bx-volume-full"
            } else {
                audioElement.muted = true
                btn_mute.className = "bx bx-volume-mute"
            }
            break;
        case 'refresh':
            audioElement.load()
            break;
    }
}