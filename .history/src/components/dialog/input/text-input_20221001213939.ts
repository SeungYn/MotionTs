import { BaseComponent } from '../../component.js';

export class TextSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div>
		<div class="form__container">
			<label for="title">Title</label>
			<input type="text" class="title" />
		</div>
		<div class="form__container">
			<label for="body">Body</label>
			<textarea type="text" row = "3" id ="body"></textarea>
		</div>
	</div>`);
  }

  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }
  get url(): string {
    const element = this.element.querySelector('#url')! as HTMLInputElement;
    return element.value;
  }
}
