import * as status from './statusDiv.js';
import * as variables from './variables.js'
async function estado() {
    let cancel = new AbortController
    await fetch('https://24873.live.streamtheworld.com/RIVADAVIAAAC.aac', { signal: cancel.signal })
        .then(Response => {
            Response.json();
            if (Response.status == 200) {
                console.log(Response.status);
                status.status_correct_enable()
            }
            if (Response.status == 503) {
                console.log(Response.status);
                status.status_alert_enable('Servidor en mantenimiento')
            }
            cancel.abort()
        })
        .catch((error) => {
            status.status_error_enable()
            // variables.reconect.lastElementChild.innerText = 'Reconectando...'
            variables.reconect.classList.replace('reconect-container', 'reconect-container-disable')
            new Error(error)
            setTimeout(() =>
            location.reload(), 2000);
        })
}
export default estado
