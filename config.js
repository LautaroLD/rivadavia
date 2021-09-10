const audioElement = document.getElementById("audioId")
const reconect = document.getElementById("reconect-container")

let btn_play_pause = document.getElementById("bx-btn-play-pause")
let btn_mute = document.getElementById("bx-btn-muteOnOff")

function loadstart_audio () {
        reconect.className = "reconect-container"
}
function stalled_audio () {
        reconect.className = "reconect-container"
        audioElement.load()
}
function canplay_audio () {
        reconect.className = "reconect-container-disable"
        audioElement.play()
        btn_play_pause.className = "bx bx-pause"
}

const controles = (btn) => {
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
            btn_play_pause.className = "bx bx-play"
            break;
    }
}