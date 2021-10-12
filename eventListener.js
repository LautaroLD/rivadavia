import * as variables from './variables.js'
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
    variables.audioElement.load()
    variables.btn_play_pause.className = 'bx bx-play'
})

const audio_stalled = () => {
    variables.audioElement.addEventListener('stalled', () => {
        variables.reconect.lastElementChild.innerText = 'Reconectando...'
        variables.reconect.className = 'reconect-container'
        variables.parrafo_event.innerText = 'stalled'
        variables.audioElement.load()
    })
}
export const audio_playing = () => {
    variables.audioElement.addEventListener('playing', () => {
        variables.btn_play_pause.className = 'bx bx-pause'
        variables.reconect.className = 'reconect-container-disable'
        variables.parrafo_event.innerText = 'playing'
        audio_stalled()
    })
}
export const audio_paused = () => {
    variables.audioElement.addEventListener('pause', () => {
        variables.btn_play_pause.className = 'bx bx-play'
        variables.parrafo_event.innerText = 'pause'
    })
}
export const audio_canplay = () => {
    variables.audioElement.addEventListener('canplay', () => {
        variables.parrafo_event.innerText ='canplay'
        variables.reconect.className = 'reconect-container-disable'
        variables.audioElement.play()
    })
}
export const audio_loadstart = () => {
    variables.audioElement.addEventListener('loadstart', () => {
        variables.parrafo_event.innerText ='loadstart'
        variables.reconect.className = 'reconect-container'
    })
}
export const navigator_offline = () => {
    if (!navigator.onLine) {
        setTimeout(() => {
            location.reload()
        }, 2000);
    }
}
export const navigator_change = () => {
    navigator.connection.addEventListener('change', () => {
        variables.parrafo_event.innerText ='change'
        location.reload()
    })
}
export const document_domain_none = () => {
    if (document.domain.length < 1) {
        location.reload()
    }
}