let reconect = document.getElementById("reconect-container")
let audioElement = document.getElementById("audioId")
let btn_play_pause = document.getElementById("bx-btn-play-pause")
let btn_mute = document.getElementById("bx-btn-muteOnOff")
let btn_reset = document.getElementById("bx-btn-reset")

btn_play_pause.addEventListener("click", () => {
    if (btn_play_pause.className === "bx bx-play") {
        audioElement.play()
        btn_play_pause.className = "bx bx-pause"
    } else {
        audioElement.pause()
        btn_play_pause.className = "bx bx-play"
    }
})
btn_mute.addEventListener("click", () => {
    if (audioElement.muted) {
        audioElement.muted = false
        btn_mute.className = "bx bx-volume-full"
    } else {
        audioElement.muted = true
        btn_mute.className = "bx bx-volume-mute"
    }
})
btn_reset.addEventListener("click", () => {
    audioElement.load()
    btn_play_pause.className = "bx bx-play"
})
audioElement = new Audio("https://playerservices.streamtheworld.com/api/livestream-redirect/RIVADAVIAAAC.aac")

export const audio_playing = () => {
    audioElement.addEventListener("playing", () => {
        btn_play_pause.className = "bx bx-pause"
    })
}
export const navigator_change = () => {
    navigator.connection.addEventListener('change', () => {
        location.reload()
    })
}
export const audio_paused = () => {
    audioElement.addEventListener("pause", () => {
        btn_play_pause.className = "bx bx-play"
    })
}
export const audio_loadeddata = () => {
    audioElement.addEventListener("loadeddata", () => {
        reconect.className = "reconect-container-disable"
        audioElement.play()
    })
}
export const audio_loadstart = () => {
    audioElement.addEventListener("loadstart", () => {
        reconect.className = "reconect-container"
    })
}
export const audio_stalled = () => {
    audioElement.addEventListener("stalled", () => {
        reconect.lastElementChild.innerText = "Reconectando..."
        reconect.className = "reconect-container"
        audioElement.load()
    })
}