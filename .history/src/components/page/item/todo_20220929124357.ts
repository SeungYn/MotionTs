import { BaseComponent } from '../../component.js';
export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="todo">
		<h2 class="todo__title"></h2>
		<input type="text" class="todo-checkbox">
	</section>`);

    const titleElement = this.element.querySelector(
      '.todo__title'
    )! as HTMLHRElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(
      '.todo__body'
    )! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
