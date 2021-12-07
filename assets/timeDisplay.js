import * as variables from './variables.js'
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