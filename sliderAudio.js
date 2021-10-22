import * as variables from './variables.js'
export function print_slider() {
    let element = Object.assign(variables.slider, {
        className: 'slider',
        type: "range",
        min: variables.audioElement.buffered.start(0),
        max: variables.audioElement.buffered.end(0),
        value: variables.audioElement.currentTime
    })
}
