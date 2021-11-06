import * as variables from './variables.js'
//  BOTONES
export function btn_event() {

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
}

// 