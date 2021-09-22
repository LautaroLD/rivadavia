let audioElement = document.getElementById("audioId")
const reconect = document.getElementById("reconect-container")
let btn_play_pause = document.getElementById("bx-btn-play-pause")
let btn_mute = document.getElementById("bx-btn-muteOnOff")

audioElement = new Audio("https://playerservices.streamtheworld.com/api/livestream-redirect/RIVADAVIAAAC.aac")

audioElement.addEventListener("playing", () => {
    btn_play_pause.className = "bx bx-pause"
    console.log("123")

})
// window.addEventListener("offline", ()=> {alert("dasdsaddd"),location.reload()})
navigator.connection.addEventListener('change',()=> {
    location.reload()
    
    // alert("cambio de red")
})

// if (navigator.onLine == false) {
//     alert("error de red")
//     location.reload()
// }
audioElement.addEventListener("paused", () => {
    btn_play_pause.className = "bx bx-play"
})

audioElement.addEventListener("canplay", () => {
    console.log("canplay")
    reconect.className = "reconect-container-disable"
    audioElement.play()
})
audioElement.addEventListener("loadstart", () => {
    console.log("loadstart")
    reconect.className = "reconect-container"
})

audioElement.addEventListener("stalled", () => {
    console.log("error")
    reconect.lastElementChild.innerText = "Reconectando..."
    reconect.className = "reconect-container"
    audioElement.load()
})


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