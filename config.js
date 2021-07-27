const audioElement = document.getElementById("audioId")

const recargar = () => {
    console.log()
    document.location.reload();
}
const empezarParar = () => {
    let btn = document.getElementById("bx-btn-play-pause")
    if (btn.className == "bx bx-play") {
        audioElement.play()
        btn.className = "bx bx-pause"
    } else {
        audioElement.pause()
        btn.className = "bx bx-play"
    }
}
const mutear = () => {
    let btn = document.getElementById("bx-btn-muteOnOff")
    if (btn.className == "bx bx-volume-mute") {
        audioElement.muted = false
        btn.className = "bx bx-volume-full"
    } else {
        audioElement.muted = true 
        btn.className = "bx bx-volume-mute"
    }
}
// const conectado = (e) => { console.log(e) }

