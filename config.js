const audioElement = document.getElementById("audioId")
const reconect = document.getElementById("reconect-container")
// if (audioElement.readyState == 0) {
//     console.log("0")
// }
// if (audioElement.readyState == 1) {
//     console.log("1")
// }
// if (audioElement.readyState == 2) {
//     console.log("2")
// }
// if (audioElement.readyState == 3) {
//     console.log("3")
// }
// if (audioElement.readyState == 4) {
//     console.log("4")
// }
audioElement.addEventListener('loadstart', (ev) => {
    reconect.className = "reconect-container"
})

audioElement.addEventListener('stalled', (ev) => {
    reconect.className = "reconect-container"
        audioElement.load()
})
audioElement.addEventListener('canplay', (ev) => {
    reconect.className = "reconect-container-disable"
    audioElement.play()
})

// audioElement.addEventListener('error', (ev) => {
//     audioElement.load()
// })
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