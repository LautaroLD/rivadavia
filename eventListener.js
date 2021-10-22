import * as variables from './variables.js'
import { print_slider } from './sliderAudio.js'

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
const reset_audio = () => {
    variables.audioElement.load()
    variables.btn_play_pause.className = 'bx bx-play'
}
variables.btn_reset.addEventListener('click', reset_audio())


export const get_Status = () => {
    let status;
    fetch(variables.audioElement.src)
        .then((res) => {
            status = res.status;
            console.log(status);
            switch (status) {
                case 503:
                    variables.reconect.lastElementChild.innerText = 'Servidor en mantenimiento'
                    reset_audio()
                    break;
                case 200:
                    variables.audioElement.load()
                    break;
            }
        })
        .catch((err) => {
            // handle error
            variables.reconect.lastElementChild.innerText = 'Error de conexion'
            console.error(err);
            navigator_offline()
        });
}

const audio_stalled = () => {
    variables.audioElement.addEventListener('stalled', () => {
        variables.reconect.lastElementChild.innerText = 'Reconectando...'
        variables.reconect.className = 'reconect-container'
        variables.parrafo_event.innerText = 'stalled'
        variables.audioElement.load()
    })
}
const navigator_offline = () => {
    setTimeout(() => {
        location.reload()
    }, 2000);
}
export const audio_playing = () => {
    variables.audioElement.addEventListener('playing', () => {
        variables.btn_play_pause.className = 'bx bx-pause'
        variables.reconect.className = 'reconect-container-disable'
        variables.parrafo_event.innerText = 'playing'
        setInterval(() => { print_slider() }, 300);
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
        variables.parrafo_event.innerText = 'canplay'
        variables.reconect.className = 'reconect-container-disable'
        variables.audioElement.play()
        // print_slider()
    })
}
export const audio_loadstart = () => {
    variables.audioElement.addEventListener('loadstart', () => {
        variables.parrafo_event.innerText = 'loadstart'
        variables.reconect.className = 'reconect-container'
        variables.reconect.lastElementChild.innerText = 'Conectando...'
    })
}
export const navigator_change = () => {
    if (navigator.connection.onchange) {
        variables.parrafo_event.innerText = 'change'
        navigator_offline()
    }
}