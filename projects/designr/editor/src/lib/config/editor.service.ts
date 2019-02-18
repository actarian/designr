
import { Inject, Injectable } from '@angular/core';
import { EditorConfig, EDITOR_CONFIG } from './editor.config';

@Injectable({
	providedIn: 'root'
})
export class EditorService {

	public options: EditorConfig;

	constructor(
		@Inject(EDITOR_CONFIG) options: EditorConfig
	) {
		// console.log('EditorService', options);
		options = options || {};
		this.options = new EditorConfig(options);
	}

}
