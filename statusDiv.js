import * as variables from './variables.js'
export function status_error_enable() {
    variables.error_text.className = 'status-error'
    variables.correct_text.className = 'status-container-disable'
    variables.alert_text.className = 'status-container-disable'

}
export function status_alert_enable() {
    variables.alert_text.className = 'status-alert'
    variables.correct_text.className = 'status-container-disable'
    variables.error_text.className = 'status-container-disable'


}
export function status_correct_enable() {
    variables.correct_text.className = 'status-correct'
    variables.error_text.className = 'status-container-disable'
    variables.alert_text.className = 'status-container-disable'


}
