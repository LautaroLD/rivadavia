import * as variables from './variables.js'
import { print_slider } from './sliderAudio.js'
import * as codeStatus from './statusDiv.js'
// NAVEGADOR
export function navigator_onload() {
    window.addEventListener("load", () => {
        get_Status()
        console.log("onload")
    })
}

// 

// ESTADO DE CONEXION
const get_Status = () => {
    let stateOk;
    fetch(variables.audioElement.src)
        .then((Response) => {
            // console.log(Response)
            stateOk = Response.ok
        })
        .then(() => {
            // console.log(stateOk);
            if (stateOk) {
                codeStatus.status_correct_enable()
            }
            else {
                codeStatus.status_alert_enable()
                location.reload()
            }
        })
        .catch(() => {
            setTimeout(() => {
                location.reload()
            }, 2000);
            codeStatus.status_error_enable()
        });

}
// 

export function status_audio() {
    variables.audioElement.addEventListener('timeupdate', () => {
        print_slider();
    })
    variables.audioElement.addEventListener('loadstart', () => {
        variables.reconect.className = 'reconect-container'
    })
    variables.audioElement.addEventListener('pause', () => {
        variables.btn_play_pause.className = 'bx bx-play'
        console.log("pause")
    })
    variables.audioElement.addEventListener('stalled', () => {
        variables.audioElement.pause()
        variables.reconect.lastElementChild.innerText = 'Reconectando...'
        variables.reconect.className = 'reconect-container'
        codeStatus.status_error_enable()
        variables.audioElement.load()
    })
    variables.audioElement.addEventListener('playing', () => {
        variables.btn_play_pause.className = 'bx bx-pause'
        variables.reconect.className = 'reconect-container-disable'

    })
    variables.audioElement.addEventListener('canplay', () => {
        console.log("canplay")
        variables.reconect.className = 'reconect-container-disable'
        variables.audioElement.play()
    })

}

//  BOTONES

variables.btn_play_pause.addEventListener('click', () => {
    if (variables.btn_play_pause.className === 'bx bx-play') {
        variables.audioElement.play()
        variables.btn_play_pause.className = 'bx bx-pause'
    } else {
        variables.audioElement.pause()
        variables.btn_play_pause.className = 'bx bx-play'
    }
})
variables.btn_mute.addEventListener('click', () => {
    if (variables.audioElement.muted) {
        variables.audioElement.muted = false
        variables.btn_mute.className = 'bx bx-volume-full'
    } else {
        variables.audioElement.muted = true
        variables.btn_mute.className = 'bx bx-volume-mute'
    }
})
variables.btn_reset.addEventListener('click', () => {
    variables.reconect.lastElementChild.innerText = 'Reconectando...'
    variables.audioElement.load()
    variables.btn_play_pause.className = 'bx bx-play'
})

// 

export const timeDisplay = () => {
    variables.audioElement.addEventListener('timeupdate', () => {
        variables.time.innerText = formatSecondsAsTime(variables.audioElement.currentTime)
    })
}
function formatSecondsAsTime(secs) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    return min + ':' + sec;
}