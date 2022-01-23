import { emitter } from "../eventEmitter";
import { HTML } from 'lib/HTML';
import { Component } from 'client/component';

class AppInterface {
	init() {
		emitter.emit('[AppInterface]init.before');
		console.log('appInterface');
		this.render();
		emitter.emit('[AppInterface]init.after');
	}
}