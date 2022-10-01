import { BaseComponent } from '../../component.js';
export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
		<h2 class="todo__title"></h2>
		<input type="text" class="todo-checkbox">
	</section>`);

    const titleElement = this.element.querySelector(
      '.todo__title'
    )! as HTMLHRElement;
    titleElement.textContent = 'a';

    const todoElement = this.element.querySelector(
      '.todo__checkbox'
    )! as HTMLInputElement;
    todoElement.textContent = todo;
  }
}
