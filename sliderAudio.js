import * as variables from './variables.js'
export function print_slider() {
    if (variables.audioElement.buffered.length) {

        let element = Object.assign(variables.slider, {
            min: variables.audioElement.buffered.start(0),
            max: variables.audioElement.buffered.end(0),
            value: variables.audioElement.currentTime
        })
    }
}