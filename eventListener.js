import * as variables from './variables.js'
import { print_slider } from './sliderAudio.js'
import * as codeStatus from './statusDiv.js'


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
        variables.audioElement.load()
        variables.reconect.lastElementChild.innerText = 'Reconectando...'
        variables.reconect.className = 'reconect-container'
        codeStatus.status_alert_enable('Perdida de conexion')
        console.log("stalled")

    })
    variables.audioElement.addEventListener('playing', () => {
        variables.btn_play_pause.className = 'bx bx-pause'
        variables.reconect.className = 'reconect-container-disable'
        // codeStatus.status_correct_enable()
    })
    variables.audioElement.addEventListener('canplay', () => {
        console.log("canplay")
        variables.reconect.className = 'reconect-container-disable'
        variables.audioElement.play()
    })
    // variables.audioElement.addEventListener('error', () => {
    //     console.log("error")
    //     // codeStatus.status_error_enable("Volver a intentar")
    //     variables.reconect.lastElementChild.innerText = 'Reconectando...'
    //     variables.reconect.className = 'reconect-container'
    //     setTimeout(() =>
    //         location.reload(), 2000);
    // })

}