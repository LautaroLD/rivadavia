const audioElement = document.getElementById("audioId")
const reconect = () => {
        setTimeout(() => {
            let errorCode = audioElement.error.code
            console.log(errorCode)
            if (errorCode) {
                document.location.reload();    
            }
        }, 1000 * 3);
}
const vuelta = () => {
    let est = document.getElementById("audioId").contentWindow
    est.location.reload()
}
const recargar = () => {
    console.log()
    document.location.reload(audioElement);
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

