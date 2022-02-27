import * as variables from './variables.js'
export function status_error_enable(error_inner) {
    variables.error_text.className = 'status-error'
    variables.correct_text.className = 'status-container-disable'
    variables.alert_text.className = 'status-container-disable'
    variables.msj_print__error.innerText = error_inner || 'Error de conexion'
}
export function status_alert_enable(alert_inner) {
    variables.alert_text.className = 'status-alert'
    variables.correct_text.className = 'status-container-disable'
    variables.error_text.className = 'status-container-disable'
    variables.msj_print__alert.innerText = alert_inner || 'Servidor en mantenimiento'
    
    
}
export function status_correct_enable() {
    variables.correct_text.className = 'status-correct'
    variables.error_text.className = 'status-container-disable'
    variables.alert_text.className = 'status-container-disable'


}
