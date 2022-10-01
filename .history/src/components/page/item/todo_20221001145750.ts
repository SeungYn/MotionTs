import { BaseComponent } from '../../component.js';
export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`
		<section class="todo">
			<h2 class="todo__title">1</h2>
			<input type="checkbox" class="todo-checkbox" />
		</section>`);
    console.log(title, todo);
    const titleElement = this.element.querySelector(
      '.todo__title'
    )! as HTMLHeadElement;
    console.log(title);
    titleElement.textContent = title;

    const todoElement = this.element.querySelector(
      '.todo-checkbox'
    )! as HTMLInputElement;
    todoElement.insertAdjacentText('afterend', todo);
  }
}
