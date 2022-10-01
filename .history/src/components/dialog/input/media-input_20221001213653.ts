import { BaseComponent } from '../../component.js';

export class MediaSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div>
		<div class="form__container">
			<label for="title">Title</label>
			<input type="text" class="title" />
		</div>
		<div class="form__container">
			<label for="url">URL</label>
			<input type="text" class="title" id="url" />
		</div>
	</div>`);
  }
}
