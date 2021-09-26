import * as variables from "./variables.js"
variables.btn_play_pause.addEventListener("click", () => {
    if (variables.btn_play_pause.className === "bx bx-play") {
        variables.audioElement.play()
        variables.btn_play_pause.className = "bx bx-pause"
    } else {
        variables.audioElement.pause()
        variables.btn_play_pause.className = "bx bx-play"
    }
})
variables.btn_mute.addEventListener("click", () => {
    if (variables.audioElement.muted) {
        variables.audioElement.muted = false
        variables.btn_mute.className = "bx bx-volume-full"
    } else {
        variables.audioElement.muted = true
        variables.btn_mute.className = "bx bx-volume-mute"
    }
})
variables.btn_reset.addEventListener("click", () => {
    variables.audioElement.load()
    variables.btn_play_pause.className = "bx bx-play"
})

export const audio_playing = () => {
    variables.audioElement.addEventListener("playing", () => {
        variables.btn_play_pause.className = "bx bx-pause"
    })
}
export const navigator_change = () => {
    navigator.connection.addEventListener('change', () => {
        console.log("change")
        location.reload()
    })
}
export const audio_paused = () => {
    variables.audioElement.addEventListener("pause", () => {
        variables.btn_play_pause.className = "bx bx-play"
    })
}
export const audio_loadeddata = () => {
    variables.audioElement.addEventListener("canplay", () => {
        variables.reconect.className = "reconect-container-disable"
        variables.audioElement.play()
    })
}
export const audio_loadstart = () => {
    variables.audioElement.addEventListener("loadstart", () => {
        variables.reconect.className = "reconect-container"
    })
}
export const audio_stalled = () => {
    variables.audioElement.addEventListener("error", () => {
        variables.reconect.lastElementChild.innerText = "Reconectando..."
        variables.reconect.className = "reconect-container"
        console.log("error")
        variables.audioElement.load()
    })
}