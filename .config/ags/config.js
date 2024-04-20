import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import {batteryBar} from "./modules/batterybar.js"
import { status } from './modules/status.js';
// import { statusBar } from "./modules/statusBar.js"


const applyScss = () => {
	// Compile scss
	Utils.exec(`sassc ${App.configDir}/scss/main.scss ${App.configDir}/style.css`);
	console.log("Scss compiled");
  
	// Apply compiled css
	App.resetCss();
	App.applyCss(`${App.configDir}/style.css`);
	console.log("Compiled css applied");
  };
  
  Utils.monitorFile(`${App.configDir}/scss`, (_, eventType) => {
	if (eventType === Gio.FileMonitorEvent.CHANGES_DONE_HINT) {
	  applyScss();
	}
  });

applyScss()

App.config({
	windows: [
		batteryBar(),
		status()
		// bar()
		// statusBar()
	]
})
