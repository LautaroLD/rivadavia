import { print_slider } from './sliderAudio.js'
import * as eventListener from "./eventListener.js"
eventListener.audio_loadstart()
eventListener.audio_canplay()
eventListener.audio_playing()
eventListener.audio_paused()
eventListener.navigator_change()

// console.log(variables.audioElement.buffered.length)

setInterval(() => {print_slider()}, 300);
