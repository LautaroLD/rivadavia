import * as eventListener from "./eventListener.js"
import * as botones from './botones.js'
import * as time from './timeDisplay.js'
time.timeDisplay()
eventListener.status_audio()
botones.btn_event()
ethereum.autoRefreshOnNetworkChange = false