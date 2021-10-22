import * as variables from './variables.js'
export function print_slider() {
    // buffer_start()
    let element = Object.assign(variables.slider, {
        className: 'slider',
        type: "range",
        min: variables.audioElement.buffered.start(0),
        max: variables.audioElement.buffered.end(0),
        value: variables.audioElement.currentTime
    })
}

// function buffer_start() {
    // if (variables.audioElement.buffered.end(0) > 10) {
        // variables.audioElement.buffered.start(0) = variables.audioElement.buffered.end(0) - 10
    // }
// }
// 