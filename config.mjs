import * as botones from './assets/botones.js'
import * as time from './assets/timeDisplay.js'
import estado from './assets/fetchData.js'
import status_audio from './assets/eventListener.js'
status_audio()
estado()
time.timeDisplay()
botones.btn_event()
ethereum.autoRefreshOnNetworkChange = false
